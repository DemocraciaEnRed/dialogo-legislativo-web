import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Contacto</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoP>
      Dirección General de Modernización, Fortalecimiento Institucional y Sustentabilidad.
      </StaticInfoP>
      <StaticInfoP>
        <a href='mailto:dg.modernización@legislatura.gob.ar'>dg.modernización@legislatura.gob.ar</a>.
      </StaticInfoP>
      <StaticInfoP>
        (+54 11) 4338-3000 Int. 1135
      </StaticInfoP>
    </StyledDiv>
  </section>
)
