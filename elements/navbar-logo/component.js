import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLogo = styled.div`
width:33%;
display:flex;
justify-content:center;
@media (max-width: 760px) {
  width:50%;
}
`

const Logo = styled.div`
  width: 300px;
  height: 98px;
  background-image:url(${'/static/assets/logo.png'});
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
  cursor:pointer;
  @media (max-width: 760px) {
    height: 51px;
    margin-top:auto;
  }
`

const NavbarLogo = () => (

  <StyledLogo>
    <Link href='/'>
      <Logo />
    </Link>
  </StyledLogo>

)

export default NavbarLogo
