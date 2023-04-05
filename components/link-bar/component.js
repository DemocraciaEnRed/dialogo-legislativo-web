import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  list-style:none;
  padding-left:0;
  > a {
    color: var(--black);
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.6rem;
    &:last-child{
      padding-right:0px;
    }
    @media (max-width:760px){
      :first-child{
        height:40px;
      }
    }
  }
`
const LinkBar = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)

LinkBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default LinkBar
