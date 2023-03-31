import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const Wrapper = styled.div`
font-size:1.4rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
color: var(--white);
box-sizing:border-box;
background-color: var(--primary-color);

`
const CommentaryItems = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
border-radius: 10px;
`

const CommentaryIcon = styled.div`
  width: 18px;
  height: 17px;
  background-image: url(${(props) => `/static/assets/${props.icon}`});
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  top: 2px;
  filter: brightness(10);
`

const LimitDate = styled.div`
  font-size: 11px;
  color: white;
  background-color: #ef885d;
  padding: 4px 15px;
  text-transform: uppercase;
  font-family: var(--medium);
  border-radius: 2px;
  margin: 0 auto;
`
const SocialDiv = styled.div`
  position: relative;
  padding:10px;
  width: 50%;
  text-align: center;
  &:first-of-type {
    border-right: 1px solid var(--white);
  }
> * {
  ${(props) => props.closed && `
  
  filter: brightness(2.5);
  `}
  

}
`

const AnIcon = styled.img`
  width: 16px;
  height: 16px;
`
const ACaret = styled.img`
  width: 9px;
  height: 9px;
`

const Span = styled.span`
  color: var(--white);
`
const Contributions = styled.span`
  color: var(--white);
  margin: 0 8px
`

const ReactionsDiv = styled.div`
  position: absolute;
  top: -75px;
  left: 10px;
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

const SuccessBox = styled.div`
  position: absolute;
  top: -50px;
  left: 10px;
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
  padding: 8px 15px;
  font-size: 1.1rem;
  font-family: var(--bold);
`
const AlertBox = styled.div`
  position: absolute;
  top: -50px;
  left: 10px;
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
  padding: 8px 15px;
  font-size: 1.1rem;
  font-family: var(--bold);
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

const Support = styled(Contributions)``

const Social = ({ commentaries, apoyosCount, reaction, handleReaction, handleEmoteCount, projectId, userIsApoyado, closed, authContext }) => {
  const [theReaction, setTheReaction] = useState(reaction)
  const [showForm, setShowForm] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (!authContext.authenticated) {
      window.location = authContext.keycloak.createLoginUrl()
      return
    }
    setShowForm(!showForm)
  }

  const react = (reaction) => {
    if (!authContext.authenticated) {
      window.location = authContext.keycloak.createLoginUrl()
      return
    }
    const url = `${API_URL}/api/v1/documents/${projectId}/react/${reaction}`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authContext.keycloak.token
      }
    }

    fetch(url, options).then((res) => {
      if (res.ok) {
        if (reaction === theReaction) {
          setShowForm(false)
          setTheReaction(null)
        } else {
          setShowForm(false)
          setShowSuccess(true)
          setTheReaction(reaction)
          setTimeout(() => {
            setShowSuccess(false)
          }, 3000)
        }
        return res.json()
      }
    }).then((data) => {
      console.log(data)
      console.log(reaction)
      if (reaction === theReaction) {
        handleReaction(null, data.emoteCount)
      } else {
        handleReaction(reaction, data.emoteCount)
      }
    }).catch((err) => {
      console.error(err)
      setShowForm(false)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      })
    })
  }

  return (
    <Wrapper>
      <CommentaryItems >
        {
          !closed && (
            <SocialDiv style={{ cursor: 'pointer' }} onClick={handleClick}>
              {
                showSuccess && (
                  <SuccessBox>
                    <ReactIcon src='/static/assets/check-white.svg' />
                    <p>Gracias por tu reacción</p>
                  </SuccessBox>
                )
              }
              {
                showAlert && (
                  <AlertBox>
                    <ReactIcon src='/static/assets/times-white.svg' />
                    <p>Ocurrió un error</p>
                  </AlertBox>
                )
              }
              { showForm && (
                <ReactionsDiv>
                  <ButtonReaction onClick={() => react('like')}>
                    <ButtonReactionIcon src='/static/assets/thumb-up.svg' />
                    <ButtonReactionText active={theReaction === 'like'}>Me<br />gusta</ButtonReactionText>
                  </ButtonReaction>
                  <ButtonReaction onClick={() => react('love')}>
                    <ButtonReactionIcon src='/static/assets/heart.svg' />
                    <ButtonReactionText active={theReaction === 'love'}>Me<br />encanta</ButtonReactionText>
                  </ButtonReaction>
                  <ButtonReaction onClick={() => react('improve')}>
                    <ButtonReactionIcon src='/static/assets/lightbulb.svg' />
                    <ButtonReactionText active={theReaction === 'improve'}>Lo<br />mejoraria</ButtonReactionText>
                  </ButtonReaction>
                  <ButtonReaction onClick={() => react('dislike')}>
                    <ButtonReactionIcon src='/static/assets/thumb-down.svg' />
                    <ButtonReactionText active={theReaction === 'dislike'}>Me<br />disgusta</ButtonReactionText>
                  </ButtonReaction>
                </ReactionsDiv>
              )
              }
              {theReaction === 'like' && <AnIcon src='/static/assets/thumb-up-white.svg' />}
              {theReaction === 'love' && <AnIcon src='/static/assets/heart-white.svg' />}
              {theReaction === 'improve' && <AnIcon src='/static/assets/lightbulb-white.svg' />}
              {theReaction === 'dislike' && <AnIcon src='/static/assets/thumb-down-white.svg' />}
              {theReaction === null && <AnIcon src='/static/assets/hand-holding-heart-solid-white.svg' />}
              {theReaction === 'like' && <Support>Me gusta</Support>}
              {theReaction === 'love' && <Support>Me encanta</Support>}
              {theReaction === 'improve' && <Support>Lo mejoraría</Support>}
              {theReaction === 'dislike' && <Support>Me disgusta</Support>}
              {theReaction === null && <Support>Reaccioná</Support>}
              <ACaret src='/static/assets/caret-up.svg' />
            </SocialDiv>
          )
        }
        {
          closed && (
            <Link href={{ pathname: '/propuesta', query: { id: projectId } }}>
              <SocialDiv style={{ cursor: 'pointer' }}>
                <Support>Ver proyecto</Support>
                <AnIcon src='/static/assets/arrow-right.svg' />
              </SocialDiv>
            </Link>
          )
        }
        <Link href={{ pathname: '/propuesta', query: { id: projectId } }}>
          <SocialDiv closed={closed} style={{ cursor: 'pointer' }}>
            <AnIcon src='/static/assets/comment-icon.svg' />
            <Contributions>{commentaries === 1 ? 'Comentario' : ' Comentarios'}</Contributions>
            <Span> {commentaries}</Span>
          </SocialDiv>
        </Link>
      </CommentaryItems>
    </Wrapper>
  )
}

Social.propTypes = {
  commentaries: PropTypes.number,
  apoyosCount: PropTypes.number,
  userIsApoyado: PropTypes.bool,
  closed: PropTypes.bool
}

export default WithUserContext(Social)
