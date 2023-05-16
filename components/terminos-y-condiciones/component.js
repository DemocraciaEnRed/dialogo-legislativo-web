import React from 'react'
import styled from 'styled-components'
import jump from 'jump.js'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoBold from '../../elements/static-info-bold/component'
import StaticInfoP from '../../elements/static-info-p/component'
import StaticInfoList from '../../elements/static-info-list/component'
import StaticInfoWrapper from '../../elements/static-info-wrapper/component'
import StaticInfoNav from '../../elements/static-info-nav/component'
import StaticInfoButton from '../../elements/static-info-button/component'

const StyledStaticInfo = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('/static/assets/images/fondo-tyc.jpg');
  background-repeat: no-repeat;
`
const buttons = [
  {
    name: '1. Descripción',
    value: 'descripcion',
  },
  {
    name: '2. Acerca de este sitio',
    value: 'acerca-de',
  },
  {
    name: '3. Registro',
    value: 'registro',
  },
  {
    name: '4. Usuarios',
    value: 'usuarios',
  },
  {
    name: '5. Obligaciones y condiciones de uso',
    value: 'obligaciones',
  },
  {
    name: '6. Derechos del usuario',
    value: 'derechos',
  },
  {
    name: '7. Actividades prohibidas',
    value: 'prohibido',
  },
  {
    name: '8. Uso de la plataforma y moderación de las propuestas',
    value: 'moderacion',
  },
  {
    name: '9. Limitación de la responsabilidad',
    value: 'limitacion',
  },
  {
    name: '10. Política de privacidad',
    value: 'politica',
  },
  {
    name: '10.1. Información aportada por el usuario',
    value: 'informacion-aportada',
  },
  {
    name: '10.2. Información obtenida a partir del uso de la plataforma',
    value: 'informacion-obtenida',
  }
  
]



const scroll = (target) => (e) => {
  jump(target)
}

export default () => (
  <StyledStaticInfo>
    <StaticInfoWrapper>
      <section>
        <StaticInfoTitle>
      Términos y condiciones
        </StaticInfoTitle>
        <div id="descripcion">

          <StaticInfoBold>1. Descripción</StaticInfoBold>
          <StaticInfoP>El presente documento describe los Términos y Condiciones aplicables al uso y la Política de Privacidad del “Portal Diálogo Legislativo”. El Portal Diálogo Legislativo es la plataforma de elaboración colaborativa de propuestas de ley de Diputados/as de la Ciudad Autónoma de Buenos Aires (en adelante, la “plataforma”) de la Legislatura de la Ciudad Autónoma de Buenos Aires (en adelante, la “LCABA”.</StaticInfoP>
          <StaticInfoP>Cualquier persona (en adelante el “usuario”) que desee usar la plataforma, deberá leer, entender y aceptar todas las condiciones generales establecidas por los Términos y Condiciones y la Política de Privacidad y deberá abstenerse de realizar las actividades prohibidas aquí detalladas y cualesquiera otras que excedan el normal uso de la plataforma. </StaticInfoP>
       
        </div>
        <div id='acerca-de'>

          <StaticInfoBold>2. Acerca de este sitio</StaticInfoBold>
          <StaticInfoP>La plataforma no es un mecanismo de participación ciudadana directa conforme la Constitución de la Ciudad Autónoma de Buenos Aires, ni genera previsiones por fuera del Reglamento de la LCABA. Se trata únicamente de una herramienta de comunicación, promovida por la LCABA a fin de generar espacios de colaboración entre el Estado, la sociedad civil, el sector privado, la academia y la ciudadanía en general,a fin de conocer opiniones respecto de temas que resultan de interés general.</StaticInfoP>
          <StaticInfoP>Se podrá acceder a la plataforma desde el sitio web oficial de la LCABA.</StaticInfoP>
          <StaticInfoP>A los fines de utilización de la plataforma, una propuesta de ley consiste en un documento que se encuentra en un estado anterior al “proyecto de ley”. Una propuesta de ley toma forma de proyecto de ley cuando se inicia el trámite parlamentario.</StaticInfoP>
          <StaticInfoP>Los/as Diputados/as de la Ciudad Autónoma de Buenos Aires pueden publicar en la plataforma propuestas de ley para que sean consideradas por la ciudadanía.  El hecho de que los/as Diputados/as suban propuestas de ley y reciban aportes o comentarios no los obliga a tomarlos en cuenta ni tampoco a presentar esas propuestas como proyectos de ley.</StaticInfoP>
          <StaticInfoP>Los/as Diputados/as tienen la posibilidad de actualizar las versiones de las propuestas de ley y de editarlas. Cada versión que se publique deberá estar identificada por autor y contener fecha y hora de publicación. Los/as Diputados/as de la Ciudad Autónoma de Buenos Aires podrán notificar a los usuarios de la plataforma a través de los  correos electrónicos proporcionados, cuando una propuesta se haya transformado en un proyecto de ley. </StaticInfoP>
          <StaticInfoP>Los/as Diputados/as podrán eliminar comentarios que no cumplan con los Términos y Condiciones y la Política de Privacidad pero no podrán editarlos.</StaticInfoP>
          <StaticInfoP>Durante el período en que una propuesta se encuentre abierta a comentarios y/o reacciones, el usuario de la plataforma podrá participar, sea reaccionando a la propuesta y/o realizando comentarios generales y/o por articulado a la propuesta,si el o la diputado/a habilitó la función para recibir aportes. </StaticInfoP>
          <StaticInfoP>Podrá, además, apoyar los comentarios realizados por otros usuarios. </StaticInfoP>
          <StaticInfoP>Los usuarios son exclusivamente responsables por las reacciones y/o comentarios generales y/o por articulado que realicen a las propuestas de ley, dejándose constancia de que la LCABA no efectúa una verificación del contenido de los comentarios previo a su publicación. </StaticInfoP>
          <StaticInfoP>Los/as Diputados/as de la Ciudad Autónoma de Buenos Aires, el moderador de la plataforma y/u otra autoridad de la LCABA podrán eliminar comentarios cuando excedan el buen uso de la plataforma y/o califiquen dentro de las actividades prohibidas de acuerdo con los presentes Términos y Condiciones.</StaticInfoP>
          <StaticInfoP>La plataforma es un desarrollo basado en <a href='http://democracyos.org/' target='_blank'>DemocracyOS</a>, una plataforma online de código abierto, diseñada para informar, debatir y recibir opiniones acerca de las propuestas públicas hacia la construcción de una democracia adaptada al siglo XXI. </StaticInfoP>
        
        </div>
        <div id='registro'>

          <StaticInfoBold>3. Registro</StaticInfoBold>
          <StaticInfoP>El ingreso a la plataforma para su visualización no requiere registro online previo, el mismo será requerido si el usuario desea publicar comentarios o reaccionar a una propuesta o artículo específico de una propuesta y/o realizar dichas acciones en comentarios o sugerencias de otros usuarios. A fines del registro, el usuario deberá completar un formulario con sus datos personales (nombre y apellido) y brindar un correo electrónico. El acceso al perfil del usuario es protegido con una clave de acceso personal e intransferible que sólo el usuario podrá generar y modificar</StaticInfoP>
          <StaticInfoP>La LCABA se reserva el derecho de realizar validaciones en relación a la información brindada por el usuario al momento de la registración. En caso de que la información brindada no pueda validarse, la LCABA se reserva el derecho de no dar de alta a ese usuario.</StaticInfoP>
        </div>
        <div id='usuarios'>

          <StaticInfoBold>4. Usuarios</StaticInfoBold>
          <StaticInfoP>La plataforma está destinada a personas mayores de 16 años, no quedando autorizado el registro y uso por parte de personas menores de dicha edad. Cuando un usuario se registra, declara y garantiza ser mayor de 16 años.</StaticInfoP>
          <StaticInfoP>A fin de validar la información sobre la persona del usuario, la LCABA podrá solicitar toda la documentación que estime corresponder.</StaticInfoP>
          <StaticInfoP>El usuario debe registrarse usando su nombre. Las cuentas de “bots” u otros registros automáticos no están permitidas. La privacidad de la contraseña de la cuenta del usuario es de su exclusiva responsabilidad. </StaticInfoP>
          <StaticInfoP>El usuario será responsable por cualquier incumplimiento en el que incurra respecto de los presentes Términos y Condiciones, pudiendo la LCABA disponer las medidas que estimare convenientes a fin de hacer cesar tal situación.</StaticInfoP>
        
        </div>
        <div id='obligaciones'>

          <StaticInfoBold>5. Obligaciones y condiciones de uso</StaticInfoBold>
          <StaticInfoP>El usuario es responsable del contenido que suba, publique o muestre en la plataforma, garantizando que el mismo no infringe estos Términos y Condiciones, ni los derechos de terceros, ni viola ninguna ley, reglamento u otra normativa de la Ciudad Autónoma de Buenos Aires, nacional o internacional vigente en la República Argentina. El usuario de la plataforma acepta que el material y/o contenido que suban y/o publiquen podría ser utilizado por otros usuarios de la plataforma y/o por terceras personas ajenas, y que la LCABA no será responsable en ningún caso por tales utilizaciones. El usuario debe usar la plataforma en forma correcta y lícita. </StaticInfoP>
          <StaticInfoP>Los aportes, colaboraciones y comentarios que los usuarios realicen en las propuestas para de ley, las mismas no son de carácter vinculante, obligatorio y/o impositivo sobre las acciones de la LCABA y/o de los/as Diputados/as. </StaticInfoP>
        
        </div>
        <div id='derechos'>

          <StaticInfoBold>6. Derechos del usuario</StaticInfoBold>
          <StaticInfoP>En virtud del artículo 4 de la ley Nº 1845, se informa en los presentes Términos y Condiciones que el usuario goza de todos los derechos reconocidos por la ley con respecto al registro y utilización de sus datos personales.</StaticInfoP>          
          <StaticInfoP>Entre los derechos mencionados, se encuentran los derechos de acceso, rectificación y actualización, en los términos de los artículos 14 y 16 de la Ley Nacional de Protección de Datos, y el artículo 13 de la ley Nº 1845 y sus normas modificatorias y complementarias, contemplando las excepciones del artículo 15 de la mencionada ley.</StaticInfoP>          
          <StaticInfoP>Asimismo, el usuario tiene la posibilidad de solicitar a la Defensoría del Pueblo de la Ciudad de Buenos Aires, como organismo de control información relativa a la existencia de archivos, registros, bases o bancos y su finalidad.</StaticInfoP>  
        
        </div>
        <div id='prohibido'> 

          <StaticInfoBold>7. Actividades prohibidas</StaticInfoBold>
          <StaticInfoP>Las siguientes actividades se encuentran expresamente prohibidas:</StaticInfoP>
          <StaticInfoList>
            <li>Efectuar publicaciones  que atenten contra la moral y las buenas costumbres o afecten derechos de terceros.</li>
            <li>Efectuar publicaciones que impliquen actuar de mala fe. </li>
            <li>Efectuar publicaciones que violen de cualquier modo leyes, reglamentos y/o cualquier otra normativa o los presentes Términos y Condiciones y Política de Privacidad. </li>
            <li>Hostigar, acosar, amenazar, acechar, afectar el derecho a la intimidad o molestar de cualquier otro modo a otros usuarios.</li>
            <li>Solicitar información personal identificable de otros usuarios.</li>
            <li>Publicar  injurias o calumnias.</li>
            <li>Usurpar o intentar usurpar la identidad de otro Usuario con cualquier finalidad.</li>
            <li>Promover, defender o mostrar pornografía, obscenidad, vulgaridad, discriminación, odio, fanatismo, racismo y/o violencia.</li>
            <li>Vulnerar los derechos establecidos en la Ley nacional de Protección de Datos Personales N° 25.326, así como en la Ley de Protección de Datos Personales de la Ciudad Autónoma de Buenos Aires N° 1845, o en sus normas reglamentarias y complementarias.</li>
            <li>El usuario no solicitará el acceso a la plataforma con fines contrarios a los establecidos en los presentes Términos y Condiciones de uso, a la buena fe y al orden público, o lesivos a los derechos e intereses de terceros.</li>
          </StaticInfoList>
       
        </div>
        <div id='moderacion'>

          <StaticInfoBold>8. Uso de la plataforma y moderación de las propuestas</StaticInfoBold>
          <StaticInfoP>Cada Diputado/a de la Ciudad podrá:</StaticInfoP>
          <StaticInfoP>Aún así, la moderación se reserva el derecho de:</StaticInfoP>
          <StaticInfoList>
            <li>Publicar propuestas (texto original y video o resumen explicativo de la propuesta). </li>
            <li>Responder comentarios.</li>
            <li>Eliminar comentarios que considere contrarios a las actividades prohibidas conforme los presentes Términos y Condiciones. </li>
            <li>Seleccionar el período en el que la propuesta estará abierta a comentarios y/o reacciones de la ciudadanía. </li>
            <li>Habilitar la función de realizar comentarios generales o por articulado de la ciudadanía.</li>
          </StaticInfoList>
          <StaticInfoP>La utilización de la plataforma busca fomentar un diálogo franco y abierto, pero manteniendo el nivel de la discusión, evitando afrentas a personas o instituciones, cualquier tipo de material comercial no relacionado (SPAM) o cualquier otro tipo de actividad que contraríe los fines y objetivos que motivaron su creación.</StaticInfoP>
          <StaticInfoP>La Dirección General de Modernización y Sustentabilidad de la LCABA es la autoridad de aplicación de la plataforma y actuará como administradora de la plataforma. Podrá asistir a los/las Diputados/as en las siguientes acciones: </StaticInfoP>
          <StaticInfoList>
            <li>Crear propuestas dentro del perfil de los/las Diputados/as.</li>
            <li>Editar propuestas existentes publicadas por los/las Diputados/as.</li>
            <li>Editar información de los/las Diputados/as (género, foto y bloque al que pertenecen).</li>
            <li>Crear y eliminar etiquetas/categorías.</li>
          </StaticInfoList>
          <StaticInfoP>Asimismo, la autoridad de aplicación podrá eliminar comentarios que califiquen como actividades prohibidas conforme los presentes Términos y Condiciones y la Política de Privacidad y, en su caso, suspender el uso de la plataforma por parte del usuario infractor.</StaticInfoP>

        </div>
        <div id='limitacion'>

          <StaticInfoBold>9. Limitación de la responsabilidad</StaticInfoBold>
          <StaticInfoP>La LCABA no garantiza que el contenido incluido en la plataforma sea exacto, completo, actual o libre de errores técnicos o tipográficos.</StaticInfoP>
          <StaticInfoP>La LCABA no se responsabiliza por cualquier daño que resultara por el uso o la inhabilidad en el uso de la plataforma o cualquiera de los sitios enlazados, o descarga de cualquier información, dato, texto, imagen, video, audio, software u otros materiales accesibles a través del mismo.</StaticInfoP>
          <StaticInfoP>La LCABA se reserva el derecho de realizar cambios y/o actualizaciones de cualquier información contenida en la plataforma sin previo aviso.</StaticInfoP>
          <StaticInfoP>La LCABA no garantiza que las funciones contenidas en la plataforma estarán libres de interrupciones en el servicio o libres de error, tampoco garantiza inmediatez en la corrección de los defectos.</StaticInfoP>
          <StaticInfoP>La LCABA se reserva el derecho, a su propia discreción y sin ninguna obligación, de realizar mejoras o corregir cualquier error u omisión en cualquiera de las propuestas de ley publicadas.</StaticInfoP>
          <StaticInfoP>La LCABA no asumirá bajo ninguna circunstancia la responsabilidad de cualquier reclamación, daño, pérdida o demanda de ningún tipo con respecto al contenido de la Plataforma, incluyendo, a modo enunciativo, pérdidas directas, indirectas o accidentales (ya sean pérdidas económicas, de datos, o de utilización de los servicios), con independencia de que hayan sido notificadas o no.</StaticInfoP>    
          <StaticInfoP>En el caso de que enlaces de terceras partes direccionen al usuario a otros sitios web, la LCABA no se hace responsable del contenido o exactitud de la información que se encuentre en dicho sitio, ni de cualquier daño o perjuicio relacionado con el direccionamiento.  </StaticInfoP>
          <StaticInfoP>La LCABA no tendrá responsabilidad en la adquisición o utilización de bienes, servicios, recursos, contenidos o cualquier otra transacción realizada en conexión con sitios web de terceros.</StaticInfoP>
          <StaticInfoP>Las quejas, reclamos, inquietudes o preguntas con respecto a productos de terceros deben ser dirigidas ante quien corresponda.</StaticInfoP>
          <StaticInfoP>La LCABA no se hace responsable ni garantizará el cumplimiento de las obligaciones que hubiese asumido el usuario en las aplicaciones que no sean parte de la plataforma.</StaticInfoP>
          <StaticInfoP>La LCABA no se responsabiliza por el uso indebido que haga el usuario de los contenidos de la plataforma; entendiéndose por contenidos toda información, dato, texto, imagen, video, audio, software u otros materiales multimedia accesibles a través de ella.</StaticInfoP>

        </div>
        <div id='politica'>

          <StaticInfoBold>10. Política de privacidad</StaticInfoBold>
          <StaticInfoP>El usuario presta conformidad para creación de una base de datos personales. La recolección y tratamiento de los datos personales tiene fines identificatorios.</StaticInfoP>
          <StaticInfoP>La LCABA no venderá, cederá y/o transferirá a ninguna otra persona ni organismo los datos personales de los usuarios que se registren. El deber de secreto podrá ser relevado por resolución judicial cuando medien razones fundadas relativas a la seguridad pública, la defensa nacional o salud pública, conforme al artículo 16 de la ley Nº 1845 y sus normas modificatorias y complementarias.</StaticInfoP>
          <StaticInfoP>La información brindada por el usuario se almacenará en el servidor interno de la Legislatura de la Ciudad Autónoma de Buenos Aires, bajo la modalidad on Premise, permitiendo al usuario el acceso en los términos del artículo 6 de la ley N° 1845.</StaticInfoP>

        </div>
        <div id='informacion-aportada'>

          <StaticInfoBold>10.1. Información aportada por el usuario</StaticInfoBold>
          <StaticInfoP>La participación en la plataforma requiere que el usuario se registre. A tal efecto, se les solicitará información personal directa, como nombre y apellido, documento, dirección de correo electrónico y la que nos proporcione indirectamente, tal como cookies (información sobre preferencias del usuario cuando visita una página web), tipo de navegador, página de referencia, avance a través del sitio, dominio ISP, conexiones y sistemas de información. Toda la información de cookies será almacenada en formatos que no permitan identificar a su titular.</StaticInfoP>
          <StaticInfoP>El perfil del usuario visible públicamente puede incluir el nombre y la foto seleccionada. </StaticInfoP>
          <StaticInfoP>La LCABA puede compartir sus datos personales con terceros, tales como proveedores de servicios de programación, administradores de páginas web y ejecutores de proyectos, como parte del desarrollo del proyecto, respetando las condiciones de esta política de privacidad.</StaticInfoP>
          <StaticInfoP>Los datos suministrados por el usuario deben ser exactos y actuales en los términos del artículo 6 de la ley N° 1845. Los datos total o parcialmente inexactos, o que sean incompletos, deben ser suprimidos y sustituidos, o en su caso completados, por el usuario o la Legislatura, cuando tenga conocimiento de la inexactitud o carácter incompleto de la información de que se trate, sin perjuicio de los derechos del usuario establecidos en el artículo 13 de la ley N° 1845.</StaticInfoP>          
          <StaticInfoP>Asimismo, si un usuario se pone en contacto con la administración de la plataforma, es posible que la comunicación quede registrada para poder resolver más fácilmente cualquier incidencia que se pueda haber producido.</StaticInfoP>
          <StaticInfoP>Las direcciones de correo electrónico sólo se utilizarán para enviar notificaciones sobre el uso de la plataforma, avisos sobre futuras publicaciones y otra información relevante sobre la LCABA. No obstante, cada usuario podrá eliminar su suscripción en cualquier momento si así lo desea. </StaticInfoP>    

        </div>
        <div id='informacion-obtenida'>

          <StaticInfoBold>10.2. Información obtenida a partir del uso de la plataforma</StaticInfoBold>
          <StaticInfoP>La plataforma puede recopilar información sobre la forma en que el usuario navega la plataforma. Entre la información obtenida de esta forma, se incluye el tipo de navegador utilizado, las preferencias de lenguaje y los comentarios que ha realizado.</StaticInfoP>
          <StaticInfoP>La LCABA podrá compartir información de manera agregada, y en carácter no personal, con el público en general (por ejemplo, mostrar tendencias sobre el uso del sitio).</StaticInfoP>
          <StaticInfoBold>Modificaciones de los Términos y Condiciones y Política de privacidad</StaticInfoBold>          
          <StaticInfoP>La LCABA podrá modificar, en todo o en parte, en cualquier momento los presentes Términos y Condiciones. En ese caso, de acuerdo a lo establecido en el artículo 4, inciso 3, de la ley Nº 1845 y sus normas complementarias y modificatorias, se le notificará al usuario. </StaticInfoP>
          <StaticInfoBold>Ley aplicable y jurisdicción del sitio web</StaticInfoBold>          
          <StaticInfoP>Los Términos y Condiciones aquí presentados rigen en todos y cada uno de sus extremos por las leyes de la República Argentina y por las leyes vigentes en la materia en el ámbito de la Ciudad Autónoma de Buenos Aires.</StaticInfoP>          
          <StaticInfoP>Para mayor información podrá remitirse al sitio web de la Defensoría del Pueblo de la Ciudad Autónoma de Buenos Aires: <a href="mailto:https://cpdp.defensoria.org.ar/">https://cpdp.defensoria.org.ar/</a>, en el cual encontrará toda la normativa aplicable.</StaticInfoP>                    
          <StaticInfoP>En caso de surgir cualquier diferencia, desacuerdo, controversia o conflicto respecto de la interpretación o cumplimiento de estos Términos y Condiciones de uso y la Política de privacidad, el conflicto será dirimido por los Tribunales Contencioso Administrativo y Tributario de la Ciudad Autónoma de Buenos Aires.</StaticInfoP>   

        </div>


      </section>
      <StaticInfoNav>
        {buttons.map((button, i) => (
          <StaticInfoButton
            onClick={scroll(button.value)}
            key={i}>
            {button.name}
          </StaticInfoButton>
        ))}
      </StaticInfoNav>
    </StaticInfoWrapper>
  </StyledStaticInfo>
)
