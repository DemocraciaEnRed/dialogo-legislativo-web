import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { download } from 'react-icons-kit/feather/download'
import StaticInfoTitle from '../../elements/static-info-title/component'
import ComoParticiparWrapper from '../../elements/como-participar-wrapper/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoBold from '../../elements/static-info-bold/component'
import StaticInfoOl from '../../elements/static-info-ol/component'

const ManualLink = styled.span`
  text-decoration: underline
  color: var(--primary-color);
  &:hover{
    cursor: pointer;
  }
`

export default () => (
  <section>
    <StaticInfoTitle>Cómo participar</StaticInfoTitle>
    <ComoParticiparWrapper>
      <StaticInfoBold>
        ¿Cómo funciona?
      </StaticInfoBold>
      <StaticInfoP>
      Las y los diputados/as suben <strong>proyectos de ley </strong>a la plataforma para que puedan ser enriquecidos con opiniones y comentarios. El/la autor/a de la iniciativa  analizará los aportes realizados por la ciudadanía y a partir de esto realizarán los cambios que consideren necesarios para la versión final del texto.
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué es una <em>iniciativa</em>?
      </StaticInfoBold>
      <StaticInfoP>
        Llamamos iniciativa al <strong>estado anterior al proyecto de ley</strong>, es decir, antes de iniciado el trámite parlamentario.
      </StaticInfoP>
      <StaticInfoBold>
        ¿Qué entendemos por aporte?
      </StaticInfoBold>
      <StaticInfoP>
      A través de esta plataforma, la ciudadanía puede realizar 3 acciones: 
      </StaticInfoP>
      <StaticInfoOl>
        <li>Opinar sobre la iniciativa haciendo uso de las reacciones disponibles</li>
        <li>Hacer comentarios generales para realizar sugerencias sobre la iniciativa.</li>
        <li>Realizar aportes específicos seleccionando una parte específica del texto y haciendo un aporte particular.</li>
      </StaticInfoOl>
      <StaticInfoP>
      En el caso de los comentarios generales y específicos, solo podrán hacerse en aquellas iniciativas donde dicha función se encuentre habilitada por el/la diputado/a. Las y los diputados/as analizarán los aportes. En la medida en se realicen cambios a la iniciativa original se generarán nuevas versiones de la iniciativa. Así, las y los usuarios cuyos aportes fueran incorporados, serán colaboradores en la redacción de la iniciativa final. Para más detalles sobre las funcionalidades básicas de esta plataforma consulte el Manual de usuario.
      </StaticInfoP>

    </ComoParticiparWrapper>
  </section>
)
