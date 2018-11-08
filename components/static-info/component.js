import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StaticInfoWrapper from '../../elements/static-info-wrapper/component'
import StaticInfoNav from '../../elements/static-info-nav/component'
import StaticInfoButton from '../../elements/static-info-button/component'
import ComoParticipar from '../como-participar/component'
import FAQ from '../faq/component'
import SobreLaPlataforma from '../sobre-la-plataforma/component'
import SobreElSitio from '../sobre-el-sitio/component'
import Contacto from '../contacto/component'

const buttons = [
  {
    'name': 'Acerca de',
    'value': 'acerca-de'
  },
  {
    'name': 'Cómo participar',
    'value': 'como-participar'
  },
  {
    'name': 'Preguntas frecuentes',
    'value': 'faq'
  },
  {
    'name': 'Sobre el sitio',
    'value': 'sobre-el-sitio'
  },
  {
    'name': 'Contacto',
    'value': 'contacto'
  }
]

const content = {
  'como-participar': <ComoParticipar />,
  'acerca-de': <SobreLaPlataforma />,
  'faq': <FAQ />,
  'sobre-el-sitio': <SobreElSitio />,
  'contacto': <Contacto />
}

const StyledStaticInfo = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('/static/assets/header-background.jpg');
  background-repeat: no-repeat;
`

const StaticInfo = (props) => (
  <StyledStaticInfo>
    <StaticInfoWrapper>
      {content[props.section]}
      <StaticInfoNav>
        {buttons.map((button, i) => (
          <StaticInfoButton
            className={props.section === button.value ? 'active' : ''}
            onClick={() => props.changeSection(button.value)}
            key={i}>
            {button.name}
          </StaticInfoButton>
        ))}
      </StaticInfoNav>
    </StaticInfoWrapper>
  </StyledStaticInfo>
)

StaticInfo.propTypes = {
  section: PropTypes.string,
  changeSection: PropTypes.func.isRequired
}

export default StaticInfo
