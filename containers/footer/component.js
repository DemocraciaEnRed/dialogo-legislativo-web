import React from 'react'
import styled from 'styled-components'
import FooterTextWrapper from '../../elements/footer-text-wrapper/component'
import P from '../../elements/footer-text/component'
import Icon from 'react-icons-kit'
import { facebook, twitter, instagram, youtube } from 'react-icons-kit/fa'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #1A1A1A;
  display:flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  justify-content:center;
  align-items: center;
  height: 260px;
  text-align: center;
  color: var(--white)
`

const Info = styled.div`
  width: 50%;
  text-align: left;
  padding-left: 10%
`


const Logo = styled.div`
  width: 200px;
  height: 65px;
  background-image:url(${'/static/assets/logo_fondo_negro.png'});
  background-size: cover;a
  @media (max-width: 760px) {
    width: 67px;
    height: 51px;
    margin-top:auto;
  }
`


const H2 = styled.h2`
  margin: 2rem;
`

const Li = styled.li`
  font-size: 1.6em;
  line-height: 2em
`


const Links = styled.div`
  text-align: right;
  width: 50%;
  padding-right: 10%
  justify-content:flex-end;
`

const Sections = styled.div`
  width: 100%;
  margin-top: 2rem
`

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

const socials = [
  {
    icon: <Icon icon={facebook} />,
    link: 'https://www.facebook.com/LegisCABA'
  },
  {
    icon: <Icon icon={twitter} />,
    link: 'https://twitter.com/LegisCABA'
  },
  {
    icon: <Icon icon={youtube} />,
    link: 'https://www.youtube.com/LegisCABA2'
  },
  {
    icon: <Icon icon={instagram} />,
    link: 'https://instagram.com/LegisCABA'
  },
  {
    icon: '@LegisCABA',
    link: 'https://instagram.com/LegisCABA'
  },
]

const FooterLink = ({ name, link }) => {


  return (
    <a href={link} target="_blank" style={{'padding': '10px', 'color': 'var(--white)', 'font-size': '1.5rem'}}>
      { name }
    </a>
  )
}


const Footer = () => (
  <FooterWrapper>
      <Info>
        <Logo />  
        <H2>Contacto:</H2>
        <ul>
          <Li>Dirección General de Modernización, Fortalecimiento Institucional y Sustentabilidad</Li>
          <Li>dg.modernizacion@legislatura.gob.ar</Li>
          <Li>(011) 4338-3000 Int. 1135</Li>
        </ul>
      </Info>
      <Links>
        <Sections>
          {links.map((li, i) => {
            return <FooterLink
              key={i}
              name={li.name}
              link={li.link}
              hash={li.hash} />
          })}
        </Sections>
        <Sections>
          {socials.map((li, i) => {
            return <FooterLink
              key={i}
              name={li.icon}
              link={li.link} />
          })}
        </Sections>        
      </Links>
      © 2023 LEGISLATURA CIUDAD AUTONOMA DE BUENOS AIRES, DIRECCION: PERU 160, C1067AAD (CABA) / TEL: (011) 4338-3000
  </FooterWrapper>
)

export default Footer
