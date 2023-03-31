import React, { Component } from 'react'
import styled from 'styled-components'
// import ApoyarFormulario from '../../components/apoyar-formulario/component'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledButton = styled.button`
  border: none;
  padding: 8px 20px 7px 20px;
  position: relative;
  font-size: 1.4rem;
  color: ${(props) => props.active ? '#fff' : '#fff'};
  background-color: ${(props) => props.active ? 'var(--primary-color)' : 'var(--primary-color)'};
  font-family: ${(props) => props.active ? 'var(--bold)' : 'var(--regular)'};
  cursor: ${(props) => props.project && !props.project.closed ? 'pointer' : 'auto'};
  font-weight: bold;
  :hover{
    background-color:var(--primary-color);
  }
  @media(max-width:700px){
    padding: 10px 9px;
  }

  // img {
  //   position: absolute;
  //   top: 8px;
  //   @media(max-width:700px){
  //     display: none
  //   }
  // }
`

const ReactionsDiv = styled.div`
  position: absolute;
  top: -75px;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #FAFAFA;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  color: #000;
  z-index: 100;
  // @media(max-width:700px){
  //   display: none
  // }
`

const ButtonReaction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  padding: 5px 10px;
  cursor: pointer;
  :not(:last-child){
    border-right: 1px solid #E0E0E0;
  }
  :hover{
    background-color: #F0F0F0;
    color: var(--primary-color);
  }
`

const ButtonReactionText = styled.span` 
  font-size: 1.1rem;
  color: ${(props) => props.active ? 'var(--primary-color)' : '#000'};
`
const ButtonReactionIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
`

const DivFlexMiddle = styled.div`
  display: flex;
  align-items: center;
`

const CaretIcon = styled.img`
  position: relative;
  width: 10px;
  height: 10px;
  margin-left: 8px;
  // margin-bottom: 2px;
`

const Text = styled.span`
  
`

const ReactIcon = styled.img`
  position: relative;
  width: 15px;
  height: 15px;
  margin-right: 8px;
  margin-bottom: 2px;
  @media(max-width:760px){
    display: none
  }
`
const TextCount = styled.span`
  @media(max-width:700px){
    display: none
  }
`
const SuccessBox = styled.div`
  position: absolute;
  top: -35px;
  right: 10px;
  display: flex;
  width: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #6EAD4A;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  color: #FFF;
  z-index: 100;
  padding: 5px 10px;
  font-size: 1.1rem;
  font-family: var(--bold);
`
const AlertBox = styled.div`
  position: absolute;
  top: -35px;
  right: 10px;
  display: flex;
  width: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #AD4A61;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  color: #FFF;
  z-index: 100;
  padding: 5px 10px;
  font-size: 1.1rem;
  font-family: var(--bold);
`

// This component, when clicked, it should open a popup with 4 buttons: Like, Love, Improve and Dislike
// When clicked on one of the buttons, it should send a request to the API to save the user's reaction
// the URL is /api/v1/projects/:id/react/:reaction
// where :id is the project id and :reaction is the reaction (like, love, improve or dislike)

class ModeBarReactButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      project: props.project,
      count: 0,
      userReacted: props.userReaction,
      showSuccess: false,
      showAlert: false
    }
  }

  componentDidMount () {
    this.setState({ active: this.props.active })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.active !== this.props.active) {
      this.setState({ active: this.props.active })
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    if (!this.props.authContext.authenticated) {
      window.location = this.props.authContext.keycloak.createLoginUrl()
      return
    }
    this.setState({ active: !this.state.active })
  }

  react (reaction) {
    if (!this.props.authContext.authenticated) {
      window.location = this.props.authContext.keycloak.createLoginUrl()
      return
    }
    const { project } = this.state
    const { id } = project
    const url = `${API_URL}/api/v1/documents/${id}/react/${reaction}`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
      }
    }

    fetch(url, options).then((res) => {
      if (res.ok) {
        if (reaction === this.state.userReacted) {
          this.setState({
            active: false,
            userReacted: reaction === this.state.userReacted ? null : reaction
          })
        } else {
          this.setState({
            active: false,
            showSuccess: true,
            userReacted: reaction === this.state.userReacted ? null : reaction
          })
          setTimeout(() => {
            this.setState({ showSuccess: false })
          }, 3000)
        }
        return res.json()
      }
    }).then((data) => {
      console.log(data)
      this.props.updateEmoteCount(data.emoteCount)
    }).catch((err) => {
      console.error(err)
      this.setState({
        showAlert: true,
        active: false
      })
      setTimeout(() => {
        this.setState({ showAlert: false })
      }, 3000)
    })
  }

  render () {
    return (
      <StyledButton
        project={this.state.project}>
        {
          this.state.showSuccess && (
            <SuccessBox>
              <ReactIcon src='/static/assets/check-white.svg' />
              <p>Gracias por tu reaccion</p>
            </SuccessBox>
          )
        }
        {
          this.state.showAlert && (
            <AlertBox>
              <ReactIcon src='/static/assets/times-white.svg' />
              <p>Ocurrió un error</p>
            </AlertBox>
          )
        }
        { this.state.active && (
          <ReactionsDiv>
            <ButtonReaction onClick={() => this.react('like')}>
              <ButtonReactionIcon src='/static/assets/thumb-up.svg' />
              <ButtonReactionText active={this.state.userReacted === 'like'}>Me<br />gusta</ButtonReactionText>
            </ButtonReaction>
            <ButtonReaction onClick={() => this.react('love')}>
              <ButtonReactionIcon src='/static/assets/heart.svg' />
              <ButtonReactionText active={this.state.userReacted === 'love'}>Me<br />encanta</ButtonReactionText>
            </ButtonReaction>
            <ButtonReaction onClick={() => this.react('improve')}>
              <ButtonReactionIcon src='/static/assets/lightbulb.svg' />
              <ButtonReactionText active={this.state.userReacted === 'improve'}>Lo<br />mejoraria</ButtonReactionText>
            </ButtonReaction>
            <ButtonReaction onClick={() => this.react('dislike')}>
              <ButtonReactionIcon src='/static/assets/thumb-down.svg' />
              <ButtonReactionText active={this.state.userReacted === 'dislike'}>Me<br />disgusta</ButtonReactionText>
            </ButtonReaction>
          </ReactionsDiv>
        )
        }
        {
          this.state.userReacted && (
            <DivFlexMiddle onClick={this.handleClick}>
              { this.state.userReacted === 'like' && <ReactIcon src='/static/assets/thumb-up-white.svg' /> }
              { this.state.userReacted === 'like' && <Text>Me gusta</Text> }
              { this.state.userReacted === 'love' && <ReactIcon src='/static/assets/heart-white.svg' />}
              { this.state.userReacted === 'love' && <Text>Me encanta</Text> }
              { this.state.userReacted === 'improve' && <ReactIcon src='/static/assets/lightbulb-white.svg' />}
              { this.state.userReacted === 'improve' && <Text>Lo Mejoraria</Text> }
              { this.state.userReacted === 'dislike' && <ReactIcon src='/static/assets/thumb-down-white.svg' />}
              { this.state.userReacted === 'dislike' && <Text>Me disgusta</Text> }
              <CaretIcon src='/static/assets/caret-up.svg' />
            </DivFlexMiddle>
          )
        }
        {
          !this.state.userReacted && (
            <DivFlexMiddle onClick={this.handleClick}>
              <ReactIcon src='/static/assets/thumb-up-white.svg' />
              <Text>Reaccioná</Text>
              <CaretIcon src='/static/assets/caret-up.svg' />
            </DivFlexMiddle>
          )
        }
      </StyledButton>
    )
  }
}

export default WithUserContext(ModeBarReactButton)
