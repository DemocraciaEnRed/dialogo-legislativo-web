import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import getConfig from 'next/config'
import FundationCommentCard from '../fundation-comment-card/component'
import FundationCommentForm from '../fundation-comment-form/component'
import FundationAlertLogin from '../fundation-alert-login/component'
import WithUserContext from '../with-user-context/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledProjectComments = styled.div`
  width: 90%;
  padding: 0% 20% 5% 3.5%;
  margin-left:auto;
  margin-right:auto;
  :before{
    display: inline-block;
    margin: 0 20px 8px 0;
    height: 1px;
    content: " ";
    text-shadow: none;
    background-color: #dae1e7;
    width: 100%;
  }
  `
const StyledTitle = styled.div`
  width: 136px;
  height: 1.6rem;
  font-size: 1.4rem;
  font-family:var(--bold);
  color: #2c4c61;
  margin:2.1rem 0;
  `
const StyledSubtitle = styled.div`
  height: 1.6rem;
  font-size: 1.4rem;
  color: #9b9b9b;
  margin:2rem 0;
`
class ProjectComments extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
    authContext: PropTypes.object.isRequired
  }

  state = {
    comments: null,
    error: null
  }

  async componentDidMount() {
    try {
      const results = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments?field=fundation`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        }
      })).json()
      this.setState({
        comments: results
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleSubmit = async (comment) => {
    try {
      const newComment = await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments`, {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        },
        'body': JSON.stringify({
          'field': 'fundation',
          'content': comment
        })
      })
      if (!newComment.ok) {
        this.setSuccessFalse()
      } else {
        this.fetchComments()
      }
    } catch (err) {
      console.error(err)
      this.setSuccessFalse()
    }
  }

  fetchComments = async () => {
    try {
      const results = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments?field=fundation`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        }
      })).json()
      this.setState({
        comments: results
      }, this.turnOffStatus())
    } catch (err) {
      console.error(err)
    }
  }

  setSuccessFalse = () => {
    this.setState({
      error: true
    }, this.turnOffStatus())
  }

  turnOffStatus = () => {
    setTimeout(() => {
      this.setState({
        error: null
      })
    }, 3000)
  }

  setErrorFalse = () => {
    this.setState({
      error: null
    })
  }

  canDelete = (comment) => {
    const { authContext, project } = this.props
    if (project.author._id === (authContext.user && authContext.user._id)) {
      // Is the author of the project?
      return true
    } else if (comment.user._id === (authContext.user && authContext.user._id)) {
      // Is the author of the comment?
      return true
    }
    return false
  }

  canReply = () => {
    const { authContext, project } = this.props
    if (project.author._id === (authContext.user && authContext.user._id)) {
      // Is the author of the project?
      return true
    }
    return false
  }

  attachReply = async (commentId, reply) => {
    let updatedComments = this.state.comments.map((comment) => {
      if (comment._id === commentId) {
        comment.reply = reply
        return comment
      }
      return comment
    })
    this.setState({
      comments: updatedComments
    })
  }

  render() {
    const { authContext, project } = this.props
    const { comments } = this.state
    return (
      <StyledProjectComments>
        <StyledTitle>Comentarios</StyledTitle>
        <StyledSubtitle>{project.acceptComments ? 'Espacio abierto para comentarios generales.' : 'Esta iniciativa no admite comentarios'}</StyledSubtitle>
        {comments && comments.map((comment) => (
          <FundationCommentCard
            canDelete={this.canDelete(comment)}
            canReply={this.canReply()}
            comment={comment}
            key={comment._id}
            project={project}
            attachReply={this.attachReply} />
        ))}
        {!project.closed && project.acceptComments &&
          <FundationCommentForm
            authenticated={authContext.authenticated}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
            closeMessage={this.setErrorFalse} />
        }
      </StyledProjectComments>
    )
  }
}

export default WithUserContext(ProjectComments)
