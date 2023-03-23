import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
import LinkBar from '../../components/link-bar/component'
import router from 'next/router'
import { hash } from 'react-icons-kit/feather'

// import NavbarLogo from '../../elements/navbar-logo/component'

const SecondaryBar = styled.div`
  height:6rem;
  display: flex;
  
  justify-content:right;
  padding: 2rem 5%;
  z-index:1060;
  transition: height 0.4s ease-out;
  @media(max-width:700px){
    transition: height 0.4s ease-out;
   }
  ${(props) => {
    if (props.position >= props.y) {
      return `top: 0!important;
              position: fixed!important;
              box-shadow: 0px 3px 4px 0px #9999996b;
              width: 100%;
              background: #fff;
              height:8rem;
              @media(max-width:700px){
                height:10rem;
               }
               > div {
                width: 32%;
                justify-content: space-around;
              }
              `
    }
  }
}
  a {
    &:last-child{
      padding-right:20px;
    }
    &:first-child{
      height:auto;
    }
  }

`
/* const SecondaryLogo = styled.div`
> * {
  >*{
    height: 30px;
    width:100px;
  }
}
` */

const links = [
  {
    name: 'Inicio',
    hash: '#__next',
    link: '/'
  },
  {
    name: 'Iniciativas',
    hash: '#projects',
    link: '/'
  },
  {
    name: 'Sobre PDL',
    hash: '#__next',
    link: '/info?section=acerca-de'
  }
]

const NavbarLink = ({ name, link, hash }) => {
  const move = async () => {
    await router.push(link)
    jump(hash)
  }

  return (
    <a onClick={() => move()}>
      { name }
    </a>
  )
}

NavbarLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  hash: PropTypes.string
}

const SecondaryNavbar = () => {
  const [scroll, setScroll] = useState(0)
  const handleScroll = (position) => setScroll(position)
  const [y, setY] = useState()

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e.target.documentElement.scrollTop))
    // window.addEventListener('resize', () => setY(document.getElementById('secondaryBar').offsetTop))
    setY(document.getElementById('secondaryBar').offsetTop)
  }, [])

  return (
    <SecondaryBar id='secondaryBar' y={y} position={scroll}>
      {/* <SecondaryLogo>
        <NavbarLogo />
      </SecondaryLogo> */}
      <LinkBar>
        {links.map((li, i) => {
          return <NavbarLink
            key={i}
            name={li.name}
            link={li.link}
            hash={li.hash} />
        })}
      </LinkBar>
    </SecondaryBar>
  )
}

export default SecondaryNavbar
