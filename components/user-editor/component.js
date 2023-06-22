import React, { Component } from 'react'
import styled from 'styled-components'
import { Editor, findDOMRange } from 'slate-react'
import { Value, KeyUtils, Range, Change, Mark } from 'slate'
import { getVisibleSelectionRect } from 'get-selection-range'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import WithUserContext from '../with-user-context/component'
import CommentsGrid from '../comments-grid/component'
import EditorTitle from '../../elements/editor-title/component'
import TitleMark from '../../elements/title-mark/component'
import ProjectTextEdit from '../../components/project-text-edit'
import ProjectTextComment from '../../components/project-text-comment'
import ProjectTextCreateComment from '../../components/project-text-create-comment'
import ArticlesSubtitle from '../articles-subtitle/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledEditorWrapper = styled.div`
  width: 90%;
  padding: 0 8%;
  margin-top: 48px;
  margin-bottom: 180px;
  position: relative;
  .editor {
    margin-top:4rem;
    max-width: 74%;
    @media (max-width: 1024px) {
      max-width:60%;
    }
    @media (max-width: 700px) {
      max-width:100%;
    }
    span {
      font-size: 1.8rem;
      line-height: 1.89;
      @media (max-width: 700px) {
      // line-height: 1.89;
      }
      color: var(--black);
      // padding: 6.5px 0px;
      padding: 4.5px 0px;
    }
  }
`

class UserEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null,
      selection: null,
      commentsIds: [],
      comments: []
    }
    this.editor = null
  }

  schema = {
    marks: {
      comment: {
        isAtomic: true
      }
    }
  }

  componentDidMount () {
    if (this.props.value) {
      this.setState({
        value: Value.fromJSON(this.props.value)
      })
    }
    this.fetchComments()
  }

  onChange = async (change) => {
    if (this.props.isAuthor && this.props.editMode) {
      return this.setState({
        value: change.value
      })
    }

    const changesTypes = change.operations
      // .map(o => {
      //   console.log(o.type)
      //   return o
      // })
      .map((o) => o.type)
      .filter((o) => o !== 'set_value')
      .filter((o) => o !== 'set_selection')
      .count()

    this.setState({
      value: changesTypes === 0 ? change.value : this.state.value
    })
  }

  showComments = async (ids, top) => {
    this.setState({
      activeComments: ids,
      top
    })
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

  fetchComments = async () => {
    try {
      const comments = await fetch(`${API_URL}/api/v1/documents/${this.props.id}/comments?field=articles`, {
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`
        }
      })
        .then((docs) => docs.json())

      const decorations = comments.map((c) => {
        c.decoration.focus.offset += 1
        return c.decoration
      })
      this.editor.setDecorations(decorations)
      this.setState({ comments })
    } catch (err) {
      console.error(err)
    }
  }

  pushComment = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  removeComment = (id) => {
    const decorations = this.editor.value.decorations.toJSON().filter((d) => d.mark.data.id !== id)
    this.editor.setDecorations(decorations)

    this.setState((prevState) => {
      const ids = prevState.activeComments.filter((_id) => _id !== id)
      return { activeComments: ids }
    })
  }
  closeCommentsGrid = () => {
    this.setState({
      // activeComments: null,
      top: null
    })
  }

  editorLoad = (editor) => { this.editor = editor }

  onSelect = (e) => {
    console.log("AQUIIIIIIIIIII")
    const selection = this.state.value.selection.toJSON()
    if (selection.isFocused && (selection.anchor.offset !== selection.focus.offset) && !this.state.showAddComment) {
      const s = findDOMRange(this.state.value.selection).getBoundingClientRect()
      this.setState({
        showAddComment: true,
        commentsIds: [],
        left: s.left,
        top: s.top
      })
    }
  }
  
  onCommentHoverIn = (id) => (e) => {
    const top = e.clientY - 125
    const left = e.clientX - 100
    this.setState((prevState) => {
      return {
        showAddComment: false,
        commentsIds: prevState.commentsIds.concat(id),
        top: top,
        left: left
      }
    })
  }

  onCommentHoverOut = () => (e) => {
    this.setState({
      commentsIds: []
    })
  }

  render () {
    if (!this.state.value) return null
    let plugins = []
    if (this.props.withComments) plugins.push(ProjectTextComment({ onClick: this.showComments, isClosed: this.props.isClosed }))
    plugins.push(ProjectTextEdit({ id: this.props.id, field: 'articles', isAuthor: this.props.isAuthor }))
    if (this.props.authContext.authenticated && !this.props.editMode && !this.props.isClosed && this.props.canAcceptComments) {
      plugins.push(ProjectTextCreateComment({ id: this.props.id, pushComment: this.pushComment }))
    }
    return (
      <StyledEditorWrapper>
        {this.props.withComments &&
          <CommentsGrid
            id={this.props.id}
            activeComments={this.state.activeComments}
            comments={this.state.comments}
            removeComment={this.removeComment}
            top={this.state.top}
            attachReply={this.attachReply}
            updateComments={this.fetchComments}
            closeCommentsGrid={this.closeCommentsGrid} />
        }
        { !this.props.isClosed && this.props.canAcceptComments &&
          <ArticlesSubtitle authenticated={this.props.authContext.authenticated} editMode={this.props.editMode} />
        }
        <EditorTitle>Artículos de la propuesta</EditorTitle>
        <div ref={this.myEditor}>
          <Editor
            plugins={plugins}
            // readOnly={!this.props.isAuthor}
            // onSelect={this.onSelect}
            ref={this.editorLoad}
            className='editor'
            schema={this.schema}
            value={this.state.value}
            onChange={this.onChange}
            spellCheck={false} />
        </div>
      </StyledEditorWrapper>
    )
  }
}

export default WithUserContext(UserEditor)
