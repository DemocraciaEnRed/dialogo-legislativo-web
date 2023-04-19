import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Sobre el sitio</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoP>
      El Portal Diálogo Legislativo es un desarrollo que se encuentra basado en la tecnología provista por DemocracyOS y que fue adaptado a la Legislatura de la Ciudad de Buenos Aires. 
      </StaticInfoP>
      <StaticInfoP>
      Al tratarse de una versión “Beta”, pueden presentarse errores. Los mismos pueden ser reportados a la Dirección General de Modernización, Fortalecimiento Institucional y Sustentabilidad a través del correo electrónico: <a href='mailto:dg.modernización@legislatura.gob.ar'>dg.modernización@legislatura.gob.ar</a>.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
