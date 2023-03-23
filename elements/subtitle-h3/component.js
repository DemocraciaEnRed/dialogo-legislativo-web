import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.p`
  font-size: 1.4rem;
  color: var(--gray);
  padding:0 10 10 0;
  line-height: 3.5;
`

const SubtitleH3 = (props) => (
  <Title>{ props.children }</Title>
)

SubtitleH3.propTypes = {
  children: PropTypes.string.isRequired
}

export default SubtitleH3
