import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AboutImg from '../../elements/about-img/component'
import AboutText from '../../elements/about-text/component'
import AboutH2 from '../../elements/about-h2/component'
import AboutP from '../../elements/about-p/component'
import ArrowRightLink from '../../elements/arrow-right-link/component'

const StyledAbout = styled.div`
  height:350px;
  width:90%;
  @media(max-width:700px){
    flex-direction: column;
  }
  margin-left:auto;
  margin-right:auto;
  display:flex;
  background-color: var(--primary-color);
  box-sizing: border-box;
  }
`

const About = () => (
  <StyledAbout id='about'>
    <AboutImg img={'/static/assets/images/foto_acercade.jpg'} imgMobile='/static/assets/images/foto_acercade.jpg' />
    <AboutText>
      <AboutH2>Acerca de</AboutH2>
      <br />
      <AboutP>¿Qué es? El <strong>Portal Diálogo Legislativo</strong> es una plataforma de elaboración colaborativa de normas, donde las y los diputados abren a debate sus propuestas para incorporar puntos de vista ciudadanos.</AboutP>
      <ArrowRightLink />
    </AboutText>
  </StyledAbout>
)

export default About
