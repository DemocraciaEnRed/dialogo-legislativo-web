import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { thumbsUp, trash2 } from 'react-icons-kit/feather'
import { checkCircle } from 'react-icons-kit/fa/checkCircle'
import { times } from 'react-icons-kit/fa/times'
import { check } from 'react-icons-kit/fa/check'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'

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

const ChargeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`

const IconWrapper = styled.div`
  padding-right:.5rem;
  color: var(--primary-color);
`
class ContributionCard extends Component {
  state = {
    liked: false,
    likes: null,
    deleted: false,
    errorDelete: false
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
      return
    }
    fetch(`${API_URL}/api/v1/documents/${this.props.project}/comments/${this.props.comment._id}/like`, {
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

  // handleDelete = (commentId) => () => {
  //   fetch(`${API_URL}/api/v1/documents/${this.props.project}/comments/${commentId}`, {
  //     headers: {
  //       Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'DELETE'
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         this.setState((prevState) => {
  //           return {
  //             deleted: true
  //           }
  //         })
  //       } else {
  //         this.setState((prevState) => {
  //           return {
  //             errorDelete: true
  //           }
  //         })
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // }

  render() {
    const { comment } = this.props
    // const { deleted, errorDelete } = this.state
    const isAuthor = comment.user.roles.includes('accountable')
    return (
      <div>
        <StyledCommentItem>
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
            <div>
              <StyledLikeWrapper liked={this.state.liked} onClick={this.handleLike}>
                <Icon icon={thumbsUp} style={{ marginRight: '5px' }} />{this.state.likes}
              </StyledLikeWrapper>
            </div>
          </TextWrapper>
        </StyledCommentItem>
      </div>
    )
  }
}

ContributionCard.propTypes = {
  comment: PropTypes.object.isRequired,
  authContext: PropTypes.object.isRequired,
  project: PropTypes.string.isRequired,
}

export default WithUserContext(ContributionCard)
