import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../../components/with-user-context/component'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const Container = styled.form`
  z-index: 2
  position: absolute
  width: 330px
  right: 0
  background-color: white
  padding: 1.2em
  box-shadow: 0px 2px 4px #cac7c7
  color: black
  text-align: left
  text-transform: none
  cursor: auto;
  margin-top: 7px;
  font-size:1.7rem

  @media(max-width:700px){
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  input {
    padding: 5px;
  }
`

const Label = styled.label`
  display: block
  span {
    display: block
    font-weight: bold
    padding: 14px 0px 7px
  }
  input {
    width: 100%
  }
`

const ApoyosSpan = styled.span`
  color: #6f78e6
  font-weight: bold
`

const ApoyarButton = styled.button`
  width: 100%
  padding: 13px 0;
  background-color: #6f78e6
  color: white
  font-weight: bold
  border: none
  :focus {outline:0;}
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img{
    position: relative;
    top: 1px;
    margin-right: 5px;
  }
`
const CloseButton = styled.div`
  width: 65px;
  margin-left: auto;
  margin-bottom: 7px;
  background-color: transparent;
  border: none;
  color: #960c0c;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;
  @media(max-width:700px){
    font-size: 1.7rem;
  }
`

const CaptchaGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  img {
    padding-bottom: 5px;
  }
  input {
    width: 70px;
    text-align: center;
    /*text-transform: uppercase;*/
  }
`

const CaptchaTitle = styled.span`
  font-weight: bold;
`

const ErrorSpan = styled.span`
  display: block;
  color:red
  padding-bottom: 5px;
  margin-top: 20px;
`

const ApoyandoGroup = styled.div`
  text-align: center
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: 18px;
    height: 40px;
  }
`

const ApoyandoSpan = styled.span`
  font-weight: bold;
  margin-bottom: 8px;
`

const ApoyandoPersonasSpan = styled.span`
  color: #6f78e6
  font-weight: bold;
`

class ApoyarFormulario extends Component {
  state = {
    formError: null,
    svg: null,
    token: null,
    nombre_apellido: '',
    email: '',
    captcha: '',
  }

  constructor (props) {
    super(props)

    this.nombreApellidoInput = this.nombreApellidoInput.bind(this)
    this.emailInput = this.emailInput.bind(this)
    this.captchaInput = this.captchaInput.bind(this)
    this.closeClick = this.closeClick.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  nombreApellidoInput(e) { this.setState({ nombre_apellido: e.target.value }) }
  emailInput(e) { this.setState({ email: e.target.value }) }
  captchaInput(e) { this.setState({ captcha: e.target.value }) }

  handleSubmit(e){
    e.preventDefault()

    const { authenticated } = this.props.authContext

    this.props.apoyarProyecto(!authenticated && {
      token: this.state.token,
      nombre_apellido: this.state.nombre_apellido,
      email: this.state.email,
      captcha: this.state.captcha,
    }).then(async (res) => {
      if (res.status == 200){
        this.setState({formError: null})
        if (!authenticated)
          this.props.apoyoAnonExitoso()
      }else{
        let err
        try {
          err = (await res.json()).error
        } catch(_) {
          err = "Ha ocurrido un error"
        }
        this.setState({formError: err})
      }
    })
  }

  closeClick(){
    const hideApoyarForm = localStorage.getItem('hide-apoyar-form') || false
    if (!hideApoyarForm)
      localStorage.setItem('hide-apoyar-form', true)
    this.props.toggleFormulario()
  }

  componentWillMount() {
    if (!this.props.authContext.authenticated && !this.state.svg) {
      fetch(`${API_URL}/api/v1/documents/captcha-data`)
        .then(r => r.json())
        .then(j => this.setState({svg: j.img, token: j.token}))
    }
  }

  render () {
    const { authenticated, user } = this.props.authContext
    const { project, hasAnonApoyado } = this.props
    const { svg } = this.state

    if (!project) return null

    const apoyosMinusOne = project.apoyosCount-1

    return (
      <Container onSubmit={this.handleSubmit}>
        <CloseButton onClick={this.closeClick}>CERRAR ✖</CloseButton>
        { project.userIsApoyado &&
          <ApoyandoGroup>
            <img src={`${'/static/assets/corazon.svg'}`} />
            <ApoyandoSpan>¡Ya estás apoyando esta propuesta!</ApoyandoSpan>
            {project.apoyosCount > 1 &&
              <Fragment>
                <ApoyandoPersonasSpan>{ apoyosMinusOne } {apoyosMinusOne == 1 ? 'persona' : 'personas'} y vos</ApoyandoPersonasSpan>
                <span>Están apoyando la propuesta</span>
              </Fragment>
            }
          </ApoyandoGroup>
        }
        { hasAnonApoyado &&
          <ApoyandoGroup>
            <img src={`${'/static/assets/new-email.svg'}`} />
            <ApoyandoSpan>Revisa tu casilla de correo para validar tu apoyo</ApoyandoSpan>
          </ApoyandoGroup>
        }
        { !hasAnonApoyado && !project.userIsApoyado &&
          <Fragment>
            <ApoyosSpan>{ project.apoyosCount || 0 } personas</ApoyosSpan> están apoyando la propuesta<br />
            ¿Querés apoyarla también?
            { !authenticated &&
              <Fragment>
                <Label>
                  <span>Nombre y Apellido</span>
                  <input name="nombre_apellido" required value={this.state.nombre_apellido} onChange={this.nombreApellidoInput} />
                </Label>
                <Label>
                  <span>Email</span>
                  <input name="email" type="email" required value={this.state.email} onChange={this.emailInput} />
                </Label>
                <CaptchaGroup>
                  <CaptchaTitle>Validá que no sos un robot:</CaptchaTitle>
                  {svg ?
                    <div dangerouslySetInnerHTML={{ __html: svg}} />
                    :
                    <span>Cargando imagen...</span>
                  }
                  <input type='text' maxlength='4' name="captcha" required value={this.state.captcha} onChange={this.captchaInput} />
                </CaptchaGroup>
              </Fragment>
            }
            <ErrorSpan>{this.state.formError}</ErrorSpan>
            <ApoyarButton><img src={`${'/static/assets/apoyar-icon.svg'}`} />Quiero apoyar la propuesta</ApoyarButton>
          </Fragment>
        }
      </Container>
    )
  }
}

export default WithUserContext(ApoyarFormulario)
