import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParticipateTextbox = styled.div`
  width: 270px;
  min-height: 100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  box-sizing: border-box;
`
const Span = styled.span`
  color:var(--primary-color);
  font-family:var(--bold);
  font-size:3rem;
  padding-right:1rem;
`

const H3 = styled.div`
  font-size:3rem;
  color:#454246;
  font-family:var(--regular);
`
const ActionWrapper = styled.div`
  display:flex;

`

const participateTextbox = ({ number, action }) => (
  <ParticipateTextbox>
    <ActionWrapper>
      <Span>{number}</Span>
      <H3>{action}</H3>
    </ActionWrapper>
  </ParticipateTextbox>
)

participateTextbox.propTypes = {
  number: PropTypes.string,
  action: PropTypes.string
}

export default participateTextbox
