import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WithUserContext from '../../components/with-user-context/component'

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


const Span = styled.span`
  color: var(--white);
`
const Contributions = styled.span`
  color: var(--white);
  margin: 0 8px
`
const Support = styled(Contributions)``

const Social = ({ commentaries, apoyosCount, userIsApoyado, closed }) => (
  <Wrapper>
    <CommentaryItems >
      <SocialDiv>
          <CommentaryIcon icon={userIsApoyado ? 'check-in-a-circle-.svg': 'hand-holding-heart-solid.svg' } />
          <Support>{userIsApoyado ? 'apoyando' : (apoyosCount === 1 ? ' Apoyo' : ' Apoyos' )  }</Support>
          <Span> {apoyosCount}</Span> <span>
        </span>
      </SocialDiv>
      <SocialDiv closed={closed}>
        <CommentaryIcon icon='comment-icon.svg' />
        <Contributions>{commentaries === 1 ? 'Comentario' : ' Comentarios'}</Contributions>
        <Span> {commentaries}</Span> 
      </SocialDiv>
    </CommentaryItems>
  </Wrapper>
)

Social.propTypes = {
  commentaries: PropTypes.number,
  apoyosCount: PropTypes.number,
  userIsApoyado: PropTypes.bool,
  closed: PropTypes.bool
}

export default Social
