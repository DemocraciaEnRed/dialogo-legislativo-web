import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoBold from '../../elements/static-info-bold/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Acerca de</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es?
      </StaticInfoBold>
      <StaticInfoP>
        <strong>El Portal Diálogo Legislativo</strong> es una <strong>plataforma online de elaboración colaborativa de normas</strong> donde las y los diputados/as ponen a disposición de la ciudadanía las propuestas que están trabajando para incorporar nuevos puntos de vista. El objetivo de la plataforma es enriquecer las propuestas de ley y generar un nuevo espacio de comunicación con la ciudadanía, que permita enriquecer el debate parlamentario.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Por qué participar?
      </StaticInfoBold>
      <StaticInfoP>
      La Ciudad de Buenos Aires, conforme al principio federal establecido en la Constitución Nacional, organiza sus instituciones autónomas como democracia participativa y adopta para su gobierno la forma republicana y representativa (art. 1 de la Constitución de la Ciudad de Buenos Aires).  
      </StaticInfoP>
      <StaticInfoP>
      Esta herramienta nace del enfoque de legislatura abierta, acercando a los/as representantes y ciudadanos/as, y ubicando como protagonista principal al vecino/a de la Ciudad, para escuchar sus demandas, conocer sus necesidades y construir juntos mejores políticas públicas a partir de la incorporación de la ciudadanía en el proceso de creación de leyes. 
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es la cocreación de propuestas de ley?
      </StaticInfoBold>
      <StaticInfoP>
       
        <strong>La cocreación de proyectos de ley rompe con la forma tradicional de legislar</strong>, donde un equipo de políticos, profesionales y técnicos elaboran los proyectos de ley. Cocrear supone abrir ese proceso y crear un espacio en el que se encuentran las y los legisladores/as con la ciudadanía, la academia, organizaciones de la sociedad civil y personas especializadas en las temáticas que se están discutiendo.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
