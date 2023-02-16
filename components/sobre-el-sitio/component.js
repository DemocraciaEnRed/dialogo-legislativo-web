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
<<<<<<< HEAD
        El Portal de <strong>Leyes Abiertas</strong> está desarrollado por Democracia en Red y coordinado por la Dirección General de Innovación, Planificación y Nuevas Tecnologías de la Cámara de Diputados de La Nación.
=======
      El Portal de Diálogo Legislativo es un desarrollo basado en la tecnología provista por Democracia en Red, coordinado por el Programa de Modernización parlamentaria de la Cámara de Diputados de La Nación.
      </StaticInfoP>
      <StaticInfoP>
      Esta es una versión “Beta”, aún en evaluación y desarrollo. Como tal, puede tener errores que pueden ser reportados a <a href='mailto:leyesabiertas@hcdn.gob.ar'>leyesabiertas@hcdn.gob.ar</a>.
>>>>>>> master
      </StaticInfoP>
    </StyledDiv>
  </section>
)
