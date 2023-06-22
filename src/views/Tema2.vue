<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Instrumentos y equipos para el control de procesos de potabilización

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema2/img1.png', alt='alt')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p <b>Atendiendo lo que menciona el RAS (2000), en su título C</b>, la planta de tratamiento debe ser analizada como un proceso total para el diseño del sistema de instrumentación y control, el cual debe aplicar instrumentos para visualización, registro y control, que deben permitir lograr los siguientes objetivos: 

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Operación segura de la planta</span>

    .row.justify-content-center.align-items-center.mt-5
      figure
        img(src='@/assets/curso/temas/tema2/img2.svg', alt='alt')

    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='alt')
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Tasa de producción</span>

        figure.mt-3
          img(src='@/assets/curso/temas/tema2/img5.svg', alt='alt')

        .list.mb-3(data-aos="fade-down").mt-3
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Calidad del producto</span>

        .cajon.cajon-tema2.p-4.mt-3
          p Mantener la composición del efluente de la planta dentro de los estándares de calidad especificados. 

        .list.mb-3(data-aos="fade-down").mt-3
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Costos de operación de la planta</span>

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
       h2 2.1 Instrumentación primaria

    p Es la tecnología que permite medir magnitudes físicas y convertirlas en señales eléctricas, neumáticas o hidráulicas para transmitirla a elementos de control fina, entre estos dispositivos se encuentran:

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Analizadores</span>


      p Son dispositivos que permiten realizar la medición de variables físicas, algunas de estas variables son:

    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img8.png', alt='alt')

      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Cloro residual:")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')

            .col-md-6.mb-4.mb-md-0
              p.text-small Existen diferentes tipos de analizadores: el amperimétrico, el voltamétrico, el polarográfico, el potenciométrico y el colorimétrico, unos miden solo cloro total, otro cloro libre y/o combinado como el amperimétrico.


          .row(numero="2" titulo="PH:")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')

            .col-md-6.mb-4.mb-md-0
              p.text-small El medidor de pH incluye un electrodo de proceso y un electrodo combinado para referencia. Debe considerarse como el parámetro más importante para caracterizar y controlar los procesos de tratamiento, por lo cual debe disponerse de un sistema de medida del pH eficiente y que sea capaz de detectar pequeñas variaciones.

          .row(numero="3" titulo="Turbiedad:")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')

            .col-md-6.mb-4.mb-md-0
              p.text-small La medición continua de la turbiedad por la falta de transparencia del agua debido a la presencia de partículas extrañas debe realizarse por medio de analizadores amperimétricos de turbiedad tal como el equipo o Unidad Nefelométrica de Turbiedad (UNT); otros son los analizadores ópticos que deben usarse cuando se tienen concentraciones medias de sólidos. Debe tenerse en cuenta que la unidad de medición actual es la UNT. Cuando se trata de evaluar pequeños valores de turbiedad es preferible el uso de turbidímetros de diseminación.

          .row(numero="4" titulo="Cloro residual:")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen')

            .col-md-6.mb-4.mb-md-0
              p.text-small El aluminio residual es una variable importante que debe determinarse en las plantas de tratamiento por los presuntos efectos sobre la salud humana (enfermedades renales) que produce el mantener altos contenidos de aluminio en la red de distribución y los problemas de corrosión de las tuberías. 

          .row(numero="5" titulo="Monitor de corriente de reestabilización:")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen')

            .col-md-6.mb-4.mb-md-0
              p.text-small Pueden utilizarse Streaming Current Monitors (SCM) los cuales son monitores de corriente de reestabilización de los coloides presentes en el agua para evaluar en continuo el resultado de la adición de un coagulante sobre partículas coloidales durante el proceso de coagulación. Este resultado se caracteriza por la medición de una corriente electrocinética generada entre dos electrodos en una muestra de agua cruda a la cual se le añadió un coagulante. Esta corriente es generada por el reacomodamiento de los iones que se han extraído de las partículas adsorbidas sobre las paredes de una celda de medición.


    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Medidores de flujo</span>

    .row.justify-content-center.align-items-center
      .col-lg-7
        p Para la medición del caudal debe hacerse uso de medidores según sea el tipo de caudal volumétrico o másico deseado. Debe adquirirse el conocimiento básico de los tipos de fluxómetros volumétricos disponibles para realizar la mejor elección, entre los cuales se encuentran fluxómetros magnéticos, ultrasónicos, de turbina, medidores venturi y flujo de tubo, canaleta Parshall y vertederos, los cuales determinan el caudal directamente (desplazamiento) o indirectamente por deducción (presión diferencial, área variable, velocidad, fuerza, tensión inducida, torbellino). 

        .cajon.cajon-tema2.p-4.mt-3
          p Las mediciones de caudal másico deben efectuarse a partir de una medida volumétrica compensándola para las variaciones de densidad del fluido o determinando directamente la caudal masa aprovechando características medibles de la masa del fluido.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='alt')

    .row.justify-content-center.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img15.png', alt='alt')

      .col-lg-7
        p La medición del nivel debe ser muy cuidadosa para asegurar el funcionamiento correcto de cada proceso y obtener el balance adecuado de materias primas o del efluente de la planta.

        p Debe tenerse el respectivo conocimiento de los tipos de medidores de nivel, entre los cuales  se encuentran los que miden directamente la altura del líquido sobre una línea de referencia, medidores de presión hidrostática, dispositivos que miden el desplazamiento producido en un flotador por el propio líquido contenido en el tanque del proceso y los medidores que aprovechan las características eléctricas del líquido.

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-8

        .cajon.cajon-tema2.p-4.mt-3
          p En los niveles de complejidad del sistema bajo y medio es conveniente utilizar medidores como la sonda, cinta y plomada, nivel de cristal e instrumentos de flotador. En los niveles de complejidad del sistema medio alto y alto, es conveniente utilizar medidores manómetricos, de membrana, de presión diferencial de diafragma, de desplazamiento a barra de torsión, conductiva, capacitiva, ultrasónica y de radiación.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img16.svg', alt='alt')

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Medidores de presión</span>

    .row.justify-content-center.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='alt')

      .col-lg-6
        p Los instrumentos de presión deben estar sujetos a los siguientes grupos: 

        figure
          img(src='@/assets/curso/temas/tema2/img18.svg', alt='alt', style="width: 60%;")

        .cajon.cajon-tema2.p-4.mt-3
          p Deben aplicarse medidores de presión a líneas o procesos que se encuentren encerrados tales como sistemas de distribución de aire comprimido, líneas de descarga de bombas y tanques, para esta finalidad se encuentran manómetros, tubos manométricos Bourdon, elemento en espiral, helicoidal, fuelles, medidores de presión diferencial de diafragma, medidores capacitivos y ultrasónicos.

    .row.justify-content-center.mb-5.mt-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img19.png", alt="alt")
          .crd_hover_txt--body.bg-flip-1
            h4.mb-3.text-center.text-white Transmisores
            p.mb-0.text-center.text-white El sistema de transmisión de señales debe sujetarse a las características propias de la planta, el nivel de complejidad del sistema y el tipo de señal a transmitir. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img20.png", alt="alt")
          .crd_hover_txt--body.bg-flip-2
            h4.mb-3.text-center.text-white Controladores
            p.mb-0.text-center.text-white Estos dispositivos deben comparar la variable controlada con el valor deseado y ejercer una acción correctiva de acuerdo con la desviación. La variable controlada la pueden recibir directamente, como controladores locales o bien indirectamente en forma de señal neumática o electrónica procedente de un transmisor.

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Elementos de control final</span>

      p Después de los instrumentos de sensibilidad son necesarios los sistemas de control final, los cuales deben permitir manipular y cambiar las condiciones del proceso para mantenerlas dentro del campo de medida deseado, estos elementos reciben la señal del controlador y modifica el caudal del fluido o agente de control. Estos son:
    
    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img21.png', alt='alt')

      .col-lg-8
        TabsA.color-acento-botones.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Actuadores eléctricos")
            h4 Actuadores eléctricos
            p Deben usarse estos dispositivos para controlar la posición de válvulas y compuertas que ajustan el caudal dentro de un proceso de control continuo o discreto. 

          .tarjeta.clr-paleYellow.p-4(titulo="Actuadores hidráulicos y neumáticos")
            h4 Actuadores hidráulicos y neumáticos
            p Los usos que deben darse a estos actuadores son similares a los actuadores eléctricos con la diferencia de que estos operan en una forma diferente, lo cual se ve reflejado en los costos de operación. 

          .tarjeta.clr-paleYellow.p-4(titulo="Motores de velocidad variable")
            h4 Motores de velocidad variable
            p El tipo de motor debe escogerse de acuerdo con las condiciones de trabajo a las cuales se va a someter, la disponibilidad de espacio y la disponibilidad económica de la planta. La velocidad debe adecuarse para las condiciones del proceso particular. 

          .tarjeta.clr-paleYellow.p-4(titulo="Válvulas de control")
            h4 Válvulas de control
            p Deben tenerse válvulas como elementos de control final para regular o limitar la variable controlable. Para la selección de la válvula deben analizarse: los tipos para que sean compatibles, acoplarse a los requerimientos y caídas de presión, la rapidez y facilidad para ser operada, temperatura y finalmente compatibilidad con el fluido del proceso.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        p <b>Nota:</b> importante para tener en cuenta, dentro de las válvulas de control es necesario verificar el tipo de conexión realizada entre la válvula y la tubería del proceso. Entre los diferentes tipos de válvulas deben acondicionarse principalmente las siguientes: 

        figure
          img(src='@/assets/curso/temas/tema2/img23.svg', alt='alt', style="width: 55%;" )

      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img22.png', alt='alt')

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Sistemas de registro</span>

      p La información recogida por los instrumentos debe clasificarse dentro de una de las siguientes categorías: 

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img24.svg", alt="alt").img90.m-auto
            h4.text-center Datos de proceso
            p.text-center.mb-0 Debe mantenerse la operación de la planta dentro de los límites aceptables y alertar al personal de la planta cuando estos parámetros se encuentran fuera de las condiciones límite.

        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img25.svg", alt="alt").img90.m-auto
            h4.text-center Información técnica
            p.text-center.mb-0 Debe utilizarse para proveer mejoras, tratando de optimizar cada sistema de tratamiento para aumentar el nivel de eficiencia y disminuir costos.

        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img26.svg", alt="alt").img90.m-auto
            h4.text-center Datos históricos
            p.text-center.mb-0 Deben determinar inclinaciones de términos a largo plazo con énfasis en la calidad tanto de la planta como del efluente y optimización de la planta, lo cual incide en planeaciones futuras. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
       h2 2.2 Válvulas, motobombas y tableros eléctricos en el proceso de potabilización

    p <b>Atendiendo el RAS (2000), en su título B</b>, define que las válvulas deben cumplir con ciertas especificaciones entre los cuales se encuentran las que se describen a continuación.

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Materiales para válvulas</span>

    .row.justify-content-center.align-items-center
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img27.png', alt='alt')
      .col-lg-10
        p El diseño debe asegurar que los materiales con los cuales se construyen las válvulas, tanto en su cuerpo como en su mecanismo de cierre, cumplan con todas las especificaciones técnicas reconocidas tanto a nivel nacional como internacional, en función de las características del agua, tales como el grado de agresividad y otros, así como de las presiones de servicio más los factores de seguridad requeridos. 

        .cajon.cajon-tema2.p-4.mt-3
          p Estas especificaciones para los materiales deben seguir lo establecido en las Normas Técnicas Colombianas NTC, las normas ASTM, las normas ISO o las normas DIN correspondientes para cada tipo de válvula. Los revestimientos internos para las válvulas y sus mecanismos deben ajustarse a las Normas Técnicas Colombianas correspondientes o a la Norma AWWA C550. 

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Cajas para válvulas</span>

      p En todo proyecto de diseño de una conducción nueva o de la ampliación de una conducción existente que incluya válvulas, se debe especificar para cada válvula las dimensiones de las respectivas cajas u obras civiles, de tal manera que se permita el acceso para labores de operación y mantenimiento por parte del personal de la persona prestadora del servicio de acueducto.


    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Tipos de válvulas</span>

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img28.png', alt='alt')

      .col-lg-9
        p El el proceso de potabilización de agua, se requiere de válvulas resistentes y que su tiempo de duración sea largo, es por esta razón que se debe conocer los tipos de válvulas, su funcionalidad, material y protocolos de uso entre otras características. 

        p Entre las válvulas se encuentran, las que se describen a continuación: 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-9
        ol.lista-ol--cuadro.fa-ul2
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 <b>Válvulas de corte o cierre:</b> las válvulas de corte o cierre deben localizarse al comienzo de la línea de conducción y al final de ésta si la presión es mayor que 50 m.c.a. Para todos los niveles de complejidad del sistema, se debe hacer un estudio de los transientes hidráulicos ocasionados por la operación de las válvulas en el sistema y el diseño debe incluir recomendaciones sobre su operación.

        .cajon.cajon-tema2.p-4.mt-3
          p En aquellos casos en que la tubería presenta grandes desniveles debido a la topografía del terreno, se debe verificar la condición del cierre de una válvula de corte y sus características. 

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img29.png', alt='alt')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img30.png', alt='alt')

      .col-lg-9
        p Las válvulas de cierre o corte deben cumplir con las correspondientes normas técnicas colombianas y si estas no existen con las Normas Técnicas: American Water Works Association [AWWA], American Society for Testing and Materials [ASTM], Deutsches Institut für Normung [DIN], International Organization for Standardization [ISO], American Petroleum Institute [API] o cualquier otra norma de reconocimiento internacional equivalente, previa aprobación del Ministerio de Ambiente Vivienda y Desarrollo Territorial, para el caso de los niveles de complejidad del sistema bajo y medio o de la persona prestadora del servicio para los niveles de complejidad del sistema medio alto y alto. 

        p Adicionalmente, el diseño debe evaluar la necesidad de instalar válvulas de corte intermedias a lo largo de la línea de conducción en sistemas de gravedad. El diámetro de la válvula debe seleccionarse igual al diámetro de las tuberías de conducción y debe verificarse para evitar problemas de cavitación en el caso de que se tengan flujos con altas velocidades. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-9
        ol.lista-ol--cuadro.fa-ul2
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 <b>Válvulas de ventosa:</b> en los puntos altos de la línea de conducción deben colocarse ventosas con el fin de facilitar la salida del aire que eventualmente se acumula en la conducción durante su funcionamiento o cuando se procede a su llenado o vaciado. De igual forma, cuando la tubería tenga una pendiente constante se debe colocar una válvula ventosa cada 300 m. 

        .cajon.cajon-tema2.p-4.mt-3
          p Dichos dispositivos deben permitir también la entrada automática de aire durante las operaciones de descarga de la tubería o cuando el caudal de agua se disminuye por causa de una rotura, de maniobras o de paradas en el flujo de la tubería. El diseño debe tener en cuenta los siguientes aspectos:

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img31.png', alt='alt')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img32.png', alt='alt')
      .col-lg-8
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Podrá utilizarse una ventosa única para atender la entrada y la salida de aire, siempre y cuando dicho dispositivo sea capaz de atender ambas funciones. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Preferiblemente las válvulas de ventosa deben ser bridadas según las especificaciones de la norma AWWA y con cuerpo fundido en hierro dúctil. Para los niveles de complejidad del sistema bajo y medio se pueden utilizar válvulas de ventosa roscada; para los niveles de complejidad del sistema medio alto y alto, el uso de las válvulas de ventosa roscada deberá contar con la aprobación previa de la persona prestadora del servicio de acueducto. Tipo de válvula. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Cuando en la conducción se encuentre una válvula de línea, debe existir una ventosa aguas arriba o aguas abajo, dependiendo de la pendiente para la aireación durante el llenado y descarga de ésta. 


          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Las ventosas tendrán los siguientes diámetros mínimos: para tuberías con diámetro interno real menor o igual que 100 mm, el diámetro mínimo será de 50 mm. Para tuberías con diámetro interno real mayor que 100 mm, el diámetro mínimo de las ventosas será de 75 mm. En caso de que el diseño hidráulico incluya ventosas con diámetros inferiores a los antes establecidos, éste deberá ser aprobado por la persona prestadora del servicio. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | El diseño del diámetro y ubicación de las válvulas de ventosa debe realizarse de forma integrada con el de las válvulas de purga. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Toda válvula de ventosa debe poder aislarse de la tubería principal por medio de una válvula de corte. 
      


    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li
            i.fas.fa-check-circle.color-vineta1
            | Cada ventosa debe estar protegida por una cámara de inspección accesible, con su respectivo drenaje de aguas y los respiraderos necesarios para garantizar el flujo de aire y estar completamente asegurada. 

          li
            i.fas.fa-check-circle.color-vineta1
            | Los dispositivos de entrada de aire deben localizarse de tal modo que no se introduzca agua extraña al sistema. Los dispositivos previstos deben instalarse de tal manera que sus aperturas se sitúen por lo menos un metro (1.0 m) por encima del nivel máximo de agua que pudiera acumularse en el sitio de la ventosa. 

          li
            i.fas.fa-check-circle.color-vineta1
            |  Deben disponerse puntos intermedios para la entrada de aire en la tubería cuando la línea piezométrica correspondiente a la carga de un tramo del conducto durante operaciones de mantenimiento y/o reparación, se sitúe por debajo de éste, de forma tal que cause problemas de discontinuidad en la columna líquida o problemas de posible colapso de la tubería por aplastamiento. 

          li
            i.fas.fa-check-circle.color-vineta1
            | Como dispositivos automáticos para la entrada o salida de aire de las líneas de conducción pueden utilizarse los siguientes: ventosas de doble efecto para la descarga del aire acumulado durante el llenado y durante la operación normal de la conducción y para la entrada en las operaciones de descarga de agua. Tubos verticales o chimeneas cuando su extremidad superior pueda situarse por encima de la línea piezométrica máxima para la entrada de aire. 

          li
            i.fas.fa-check-circle.color-vineta1
            | En el caso que exista una válvula intermedia en la conducción, ésta debe estar dotada de un paso lateral (by pass) de tal manera que permita el flujo de aire hacia la ventosa. Este paso lateral debe estar dotado de su propia válvula de corte y se debe utilizar cuando:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img34.svg' alt='AvatarTop')
              .tarjeta.tarjeta--gris
                .p-2
                  p La válvula intermedia se localiza en tramos descendentes de la tubería y su apertura no puede realizarse sin causar perjuicios a la estructura.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img34.svg' alt='AvatarTop')
              .tarjeta.tarjeta--gris
                .p-2
                  p La válvula intermedia sea del tipo compuerta y la presión en el punto en que estuviese instalada cause un empuje superior a 20 KN. 


      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img33.png', alt='alt')
    



    



    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
