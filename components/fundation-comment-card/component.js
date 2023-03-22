import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { thumbsUp, trash2, cornerRightDown } from 'react-icons-kit/feather'
import { checkCircle } from 'react-icons-kit/fa/checkCircle'
import { times } from 'react-icons-kit/fa/times'
import { check } from 'react-icons-kit/fa/check'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'
import ReplyFundationComment from './replyFundationComment'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledCommentItem = styled.div`
  min-height:15rem;
  border: solid 1px #dae1e7;
  padding:1.6rem;
  display:flex;
  margin-bottom:2rem;
  `
const Comment = styled.div`
  font-size: 1.4rem;
  line-height: 1.57;
  color: #181818;
`

const Date = styled.p`
  font-size: 1.1em;
  color: #9b9b9b;
  padding-top:5px;
  // margin-top:auto;
  // margin-bottom:1.5rem;

`
const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius:50%;
  background-image: url('${(props) => props.id ? `${API_URL}/api/v1/users/${props.id}/avatar?` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
  `

const Username = styled.div`
  color: var(--primary-color);
  font-size: 1.4rem;
  font-family:var(--bold);
  padding-bottom:0.5rem;`

const Charge = styled.div`
  font-size:1.2rem;
  color:  var(--primary-color);
  text-transform:uppercase;
`

const TextWrapper = styled.div`
  margin-left:2rem;
  width:90%;
`

const StyledLikeWrapper = styled.span`
  padding-top: 15px;
  color: ${({ liked }) => liked ? '#1fcc1b' : 'var(--primary-color)'};
  &:hover{
    color: #ef885d;
    cursor: pointer;
  }
  font-size: 14px;
  display: inline-block;
  align-items: center;
`

const StyledDeleteWrapper = styled.span`
  padding-top: 15px;
  margin-left: 10px;
  color: var(--primary-color);
  &:hover{
    color: #ef885d;
    cursor: pointer;
  }
  font-size: 14px;
  display: inline-block;
  align-items: center;
`
const StyledReplyWrapper = styled.span`
  padding-top: 15px;
  margin-left: 10px;
  color: var(--primary-color);
  &:hover{
    color: blue;
    cursor: pointer;
  }
  font-size: 14px;
  display: inline-block;
  align-items: center;
`
const StyledErrorWrapper = styled.span`
  padding-top: 15px;
  margin-left: 10px;
  color: #bf3019;
  font-size: 14px;
  display: inline-block;
  align-items: center;
`

const ChargeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`

const IconWrapper = styled.div`
  padding-right:.5rem;
  color: var(--primary-color);
`

const DeletedNotice = styled.div`
  background-color: hsl(124.6, 47.4%, 48.4%);
  padding: 15px 20px;
  color: #FFF;
  font-size: 14px;
  margin-bottom:2rem;
`

class FundationCommentCard extends Component {
  state = {
    liked: false,
    likes: null,
    deleted: false,
    errorDelete: false,
    showReply: false,
    showOptions: true
  }

  componentDidMount() {
    this.setState({
      liked: this.props.comment.isLiked,
      likes: this.props.comment.likes
    })
  }

  handleLike = () => {
    if (!this.props.authContext.authenticated) {
      window.location = this.props.authContext.keycloak.createRegisterUrl()
    }
    fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments/${this.props.comment._id}/like`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((res) => {
        this.setState((prevState) => {
          return {
            liked: !prevState.liked,
            likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1
          }
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleDelete = (commentId) => () => {
    fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          this.setState((prevState) => {
            return {
              deleted: true
            }
          })
        } else {
          this.setState((prevState) => {
            return {
              errorDelete: true
            }
          })
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleReply = () => {
    this.setState((prevState) => {
      return {
        showOptions: false,
        showReply: true
      }
    })
  }
  
  replySent = () => {
    this.setState((prevState) => {
      return {
        showOptions: true,
        showReply: false
      }
    })
  }

  render() {
    const { comment, canDelete, canReply, project } = this.props
    const { deleted, errorDelete, showOptions, showReply } = this.state
    const isAuthor = comment.user.roles.includes('accountable')
    return (
      <div>
        {!deleted
          ? <StyledCommentItem>
            <UserAvatar id={comment.user._id} />
            <TextWrapper>
              <Username>{comment.user.fullname}</Username>
              <ChargeWrapper>
                {isAuthor &&
                  <IconWrapper>
                    <Icon icon={checkCircle} />
                  </IconWrapper>
                }
                <Charge>{(comment.user.fields && comment.user.fields.occupation) ? comment.user.fields.occupation : ''}</Charge>
              </ChargeWrapper>
              <Comment>{comment.content}</Comment>
              <Date>{`Hace ${comment.when}`}</Date>
              { showOptions && <div>
                <StyledLikeWrapper liked={this.state.liked} onClick={this.handleLike}>
                  <Icon icon={thumbsUp} style={{ marginRight: '5px' }} />{this.state.likes}
                </StyledLikeWrapper>
                {canReply &&
                  <StyledReplyWrapper onClick={this.handleReply}>
                    <Icon icon={cornerRightDown} style={{ marginRight: '5px' }} />Responder
                  </StyledReplyWrapper>
                }
                {canDelete && !errorDelete &&
                  <StyledDeleteWrapper onClick={this.handleDelete(comment._id)}>
                    <Icon icon={trash2} style={{ marginRight: '5px' }} />Eliminar
                  </StyledDeleteWrapper>
                }
                {canDelete && errorDelete &&
                  <StyledErrorWrapper>
                    <Icon icon={times} style={{ marginRight: '5px' }} />Error al eliminar comentario
                  </StyledErrorWrapper>
                }
              </div>}
              <ReplyFundationComment isAuthor={canReply} showInputForm={showReply} reply={this.props.comment.reply} comment={this.props.comment._id} token={this.props.authContext.keycloak.token} project={project} attachReply={this.props.attachReply} replySent={this.replySent} />
            </TextWrapper>
          </StyledCommentItem>
          : <DeletedNotice>
            <Icon icon={check} style={{ marginRight: '5px' }} /> <Icon icon={trash2} style={{ marginRight: '5px' }} />El comentario ha sido borrado correctamente
          </DeletedNotice>
        }
      </div>
    )
  }
}

FundationCommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  authContext: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  canDelete: PropTypes.bool.isRequired,
  canReply: PropTypes.bool.isRequired,
  attachReply: PropTypes.func.isRequired
}

export default WithUserContext(FundationCommentCard)
