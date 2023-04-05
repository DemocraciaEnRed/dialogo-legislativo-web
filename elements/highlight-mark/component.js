import React from 'react'
import styled from 'styled-components'

const StyledHighlightMark = styled.span`
  background-color: var(--secondary-color);
`

const HighlightMark = (props) => (
  <StyledHighlightMark>
    {props.children}
  </StyledHighlightMark>
)

export default HighlightMark
