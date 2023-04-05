import React from 'react'
import styled from 'styled-components'

const StyledAddComment = styled.button`
  position: absolute;
  width: 208px;
  background-color: var(--black);
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  color: #FFF;
  z-index: 100;
  cursor: pointer;
  border: none;
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-top: 5px solid;
    border-top-color: var(--black);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -5px;
  }
`

const AddComment = (props) => (
  <StyledAddComment
    onClick={props.onClick}
    {...props}
    style={{
      top: props.top,
      left: props.left
    }}>
    Agregar comentario
  </StyledAddComment>
)

export default AddComment
