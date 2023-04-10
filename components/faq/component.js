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
    <StaticInfoTitle>Preguntas Frecuentes</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Cuál es la diferencia entre proyecto de ley y una iniciativa?
      </StaticInfoBold>
      <StaticInfoP>
        Un proyecto de ley es un texto presentado en la mesa de entradas de la Legislatura de la Ciudad de Buenos Aires. Cuenta con un número de expediente y giro a las Comisiones apropiadas.
      </StaticInfoP>
      <StaticInfoP>
        Una iniciativa es un texto que aún no se presentó formalmente en el recinto, sino que está en un estado de investigación previa, es un “anteproyecto de ley”.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Los diputados y diputadas leen los comentarios? 
      </StaticInfoBold>
      <StaticInfoP>
        Si, los diputados y las diputadas administran las iniciativas publicadas en el Portal. Luego de recibir la notificación de un aporte realizado, leen y analizan los comentarios para realizar cambios que consideran necesarios para mejorar la propuesta de ley.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Cuál es el plazo para realizar comentarios?
      </StaticInfoBold>
      <StaticInfoP>
        El plazo para realizar comentarios es diferente en cada iniciativa y estará indicada al inicio de la iniciativa. Cada diputado/a decide cuándo la iniciativa es puesta a disposición para recibir comentarios, y define el plazo de cierre.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Cómo puedo saber qué pasó con la iniciativa, una vez finalizado el plazo para hacer aportes?
      </StaticInfoBold>
      <StaticInfoP>
        Una vez finalizado el plazo, recibirás una notificación con la versión final de la iniciativa. Podrás ingresar al sitio para ver los resultados, con la cantidad de aportes tenidos en consideración y la cantidad de comentarios realizados.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué sucede con los aportes?
      </StaticInfoBold>
      <StaticInfoP>
        Los diputados y las diputadas leerán los comentarios y sugerencias. A medida que la iniciativa avanza seleccionarán como aportes los comentarios tenidos en cuenta a la hora de efectuar modificaciones para una nueva versión del futuro proyecto.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Me puedo contactar con el diputado? ¿Cómo?
      </StaticInfoBold>
      <StaticInfoP>
      A través de los medios publicados por el sitio web oficial de la Legislatura de la Ciudad de Buenos Aires: <u><a rel='noopener noreferrer' target='_blank' href='https://www.legislatura.gob.ar/'>https://www.legislatura.gob.ar/</a></u>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Puedo presentar una propuesta?
      </StaticInfoBold>
      <StaticInfoP>
        El Portal de Diálogo Legislativo está dirigido exclusivamente a poner en disposición de la ciudadanía un canal para que puedan hacer aportes a las iniciativas de los/as diputados y, así, fomentar la cocreación de leyes.
      </StaticInfoP>
      <StaticInfoP>
        La facultad de presentar proyectos de ley, la “iniciativa legislativa”, corresponde a diputados/as, el Jefe/a o Vicejefe/a de Gobierno, el Defensor o la Defensora del Pueblo, las Comunas, el Consejo de Planeamiento Estratégico y el Consejo Económico y Social. Las propuestas presentadas en el Portal son de exclusiva autoría de los diputados y las diputadas de la Legislatura, que luego podrán presentarlas como proyectos de ley en la Mesa de Entradas. No obstante, la ciudadanía tiene posibilidad de presentar proyectos de ley por “iniciativa popular” conforme a lo establecido en la Ley N° 40. 
      </StaticInfoP>
    </StyledDiv>
  </section>
)
