import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroTitle from '../../elements/hero-title/component'
import HeroSubtitle from '../../elements/hero-subtitle/component'
import HeroVideo from '../../elements/hero-video/component'
import {useMediaQuery} from '@react-hook/media-query'
import jump from 'jump.js'

// const StyledHero = styled.div`
//   min-height: 350px;
//   background-image: url('/static/assets/background-hero.jpg');
//   background-repeat: no-repeat;
//     background-position: right 0px bottom 42%;
//   background-size: 120%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 0 7rem;
//   @media (max-width: 1060px) {
//     background-position: 46% center;
//     background-size: cover;
//   }
//   @media (max-width:700px){
//       padding: 0 20px;
//     }
// 
const StyledHero = styled.div`
position: relative;
overflow:hidden;

  // min-height: 350px;
`


const BannerImg = styled.div`
background-image: url(${props => props.srcImg});
background-position: 0; 
background-repeat: no-repeat;
background-size: cover;
min-height: 420px;
@media (max-width:700px){
  background-position: center; 
  
  }
`

const ContentBackground = styled.div`
position:absolute;
left:-111px;
top:0;
width:74%;
height:102%;
backdrop-filter: blur(5px);
background:#ffffffbf;
transform: skewX(-29deg);
@media (max-width:700px){
left:0;
width:100%;
transform: skewX(0deg);
  
}
`

const BannerContent = styled.div`
width:65%;
padding:50px;  
z-index:10;
position:relative;
@media (max-width:700px){
  width:100%;
  color:#4C4C4E;
  padding:27px
}
}
`

const BannerTitle = styled.div`
font-family: var(--bold);
font-size:4.3em;
text-transform: uppercase;
letter-spacing: 0.5px;
@media (max-width:700px){
  text-align:center;
}
`
const Hr = styled.div`
width:15%;
border-bottom: 3px solid #000;
@media (max-width:700px){
  display:none;
}
`

const BannerSubtitles = styled.ul`
margin-top:35px;;
margin-left:20px
`

const Subtitle = styled.li`
font-family: var(--bold);
font-size:1.4em;
margin:15px 0
text-transform: uppercase;
letter-spacing: 0.5px;
@media (max-width:700px){
  color:#4C4C4E;
  font-size:1.5em;
}
`
const HeroButtons = styled.div`
width:25%
height:40px
top:45%;
right:8%;
background:#686868;
position: absolute
border-radius: 50px;
display:flex;
align-items:center;
justify-content: space-evenly;
z-index:1
@media ( max-width:768px){
  width:50%
  height:35px
  right:25%;
  top:auto
  bottom:5%
  margin:auto
}

`

const ButtonRounded = styled.button`
height:80%;
background:${(props) => props.active ? '#8665E0':'transparent'};
color:white;
border:none;
width:48%;
border-radius: 50px;
font-family var(--bold);
cursor: pointer;
font-size:1.4rem;

`

const Hero = () => {
  const [isMobile, updateSize] = useState(false);
  
  useEffect(() => {
    updateSize(window.innerWidth <= 768);
    window.addEventListener("resize", () => updateSize(window.innerWidth <= 768));
  }, []);

  const handleActiveButton = (hash)=>{
    jump('#'+hash)
  }

 return( <StyledHero>
    {/* <HeroTitle>Plataforma de Participación Ciudadana en Propuestas de Ley</HeroTitle>
    <HeroSubtitle>¡Participe haciendo aportes para co-crear mejores leyes!</HeroSubtitle>
    <HeroVideo video='argos.hcdn.gob.ar/DMPARL/tutorial.mp4' /> */}
    {/* <BannerImg srcImg="/static/assets/images/banner_legi.jpg" /> */}
    <HeroButtons>
      <ButtonRounded onClick={()=>handleActiveButton('about')} active>Sobre PDL</ButtonRounded>
      <ButtonRounded onClick={()=>handleActiveButton('participate')}>Como Participar</ButtonRounded>
    </HeroButtons>
    <video key={isMobile} style={{}} id="videobcg" className="fill" width="100%" height="100%" preload="auto" autoPlay={true} loop={true} muted={true} volume="0" poster="/static/assets/images/thumbnail-banner-01.png" >
        {isMobile && <source src="/static/assets/images/banner-mobile.mp4"  type="video/mp4"/> }
        {!isMobile && <><source src="/static/assets/images/banner-01.mp4"  type="video/mp4" /> </> }
      Sorry, your browser does not support HTML5 video.
    </video>
  
  </StyledHero>)
}

export default Hero
