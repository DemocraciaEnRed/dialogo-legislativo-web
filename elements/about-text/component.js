import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledText = styled.div`
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 6.8rem;
  padding-bottom: 8%;
  width: 80%;
  background-color: #FAFAFA;
  @media (max-width: 700px) {
    width:100%;
  }
  height: 350px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-sizing:border-box;
  a {
    text-decoration:none;
    font-size:1.6rem;
    color:#fff;
  }
`

const AboutText = ({ children }) => (
  <StyledText>
    {children}
  </StyledText>
)

AboutText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default AboutText
