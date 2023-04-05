import React from 'react'
import styled from 'styled-components'

const StyledTitleMark = styled.h2`
  font-size: 2rem;
  font-family: var(--bold);
  line-height: 1.89;
  color: var(--black);
  margin-top: 30px;
  margin-bottom: 30px;
`

const TitleMark = (props) => (
  <StyledTitleMark>
    {props.children}
  </StyledTitleMark>
)

export default TitleMark
