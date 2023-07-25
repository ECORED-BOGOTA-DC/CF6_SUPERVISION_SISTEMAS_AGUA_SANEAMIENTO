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
        img(src='@/assets/curso/temas/tema2/img1.png', alt='Imágen decorativa')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p <b>Atendiendo lo que menciona el RAS (2000), en su título C</b>, la planta de tratamiento debe ser analizada como un proceso total para el diseño del sistema de instrumentación y control, el cual debe aplicar instrumentos para visualización, registro y control, que deben permitir lograr los siguientes objetivos: 

    .row
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Operación segura de la planta</span>

    .row.justify-content-center.align-items-center.mt-5
      figure
        img(src='@/assets/curso/temas/tema2/img2.png', alt='Muestra la operación segura de la planta que tiene varias características:<br>Mantener variables de proceso dentro de los límites de operación.')

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Imágen decorativa')

      .col-lg-7.mt-3
        .list.mb-5(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Tasa de producción</span>

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .bg2-fondo1.p-4
              .row.justify-content-center.align-items-center
                .col-2
                .col-10.mt-lg-3
                  b.text-right Manetener la disponibiblidad y confiabilidad del servicio

          .col-lg-6
            .bg2-fondo2.p-3
              .row.justify-content-center.align-items-center
                .col-9
                  b Controlar el volumen de producción de agua de acuerdo con la oferta y a la demanda
                .col-3


        .list.mb-5(data-aos="fade-down").mt-3
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Calidad del producto</span>

        .cajon.cajon-tema2.p-4.mt-3
          p.mb-0 Mantener la composición del efluente de la planta dentro de los estándares de calidad especificados. 

        .list.mb-3(data-aos="fade-down").mt-3
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Costos de operación de la planta</span>

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
       h2 2.1 Instrumentación primaria

    p Es la tecnología que permite medir magnitudes físicas y convertirlas en señales eléctricas, neumáticas o hidráulicas para transmitirla a elementos de control fina, entre estos dispositivos se encuentran:

    .row
      .col-lg-7
        .list.mb-4(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Analizadores</span>


      p Son dispositivos que permiten realizar la medición de variables físicas, algunas de estas variables son:

    .row.justify-content-center.align-items-center
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema2/img8.png', alt='Imágen decorativa')

      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Cloro residual")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img9.png', alt='Imágen decorativa')

            .col-md-6.mb-4.mb-md-0
              p.text-small Existen diferentes tipos de analizadores: el amperimétrico, el voltamétrico, el polarográfico, el potenciométrico y el colorimétrico, unos miden solo cloro total, otro cloro libre y/o combinado como el amperimétrico.


          .row(numero="2" titulo="pH")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Imágen decorativa')

            .col-md-6.mb-4.mb-md-0
              p.text-small El medidor de pH incluye un electrodo de proceso y un electrodo combinado para referencia. Debe considerarse como el parámetro más importante para caracterizar y controlar los procesos de tratamiento, por lo cual debe disponerse de un sistema de medida del pH eficiente y que sea capaz de detectar pequeñas variaciones.

          .row(numero="3" titulo="Turbiedad")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Imágen decorativa')

            .col-md-6.mb-4.mb-md-0
              p.text-small La medición continua de la turbiedad por la falta de transparencia del agua debido a la presencia de partículas extrañas debe realizarse por medio de analizadores amperimétricos de turbiedad tal como el equipo o Unidad Nefelométrica de Turbiedad (UNT); otros son los analizadores ópticos que deben usarse cuando se tienen concentraciones medias de sólidos. Debe tenerse en cuenta que la unidad de medición actual es la UNT. Cuando se trata de evaluar pequeños valores de turbiedad es preferible el uso de turbidímetros de diseminación.

          .row(numero="4" titulo="Aluminio residual")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Imágen decorativa')

            .col-md-6.mb-4.mb-md-0
              p.text-small El aluminio residual es una variable importante que debe determinarse en las plantas de tratamiento por los presuntos efectos sobre la salud humana (enfermedades renales) que produce el mantener altos contenidos de aluminio en la red de distribución y los problemas de corrosión de las tuberías. 

          .row(numero="5" titulo="Monitor de corriente de reestabilización:")
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imágen decorativa')

            .col-md-6.mb-4.mb-md-0
              p.text-small Pueden utilizarse <i>Streaming Current Monitors</i> (SCM) los cuales son monitores de corriente de reestabilización de los coloides presentes en el agua para evaluar en continuo el resultado de la adición de un coagulante sobre partículas coloidales durante el proceso de coagulación. Este resultado se caracteriza por la medición de una corriente electrocinética generada entre dos electrodos en una muestra de agua cruda a la cual se le añadió un coagulante. Esta corriente es generada por el reacomodamiento de los iones que se han extraído de las partículas adsorbidas sobre las paredes de una celda de medición.


    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Medidores de flujo</span>

    .row.justify-content-center.align-items-center
      .col-lg-7
        p Para la medición del caudal debe hacerse uso de medidores según sea el tipo de caudal volumétrico o másico deseado. Debe adquirirse el conocimiento básico de los tipos de fluxómetros volumétricos disponibles para realizar la mejor elección, entre los cuales se encuentran fluxómetros magnéticos, ultrasónicos, de turbina, medidores Venturi y flujo de tubo, canaleta Parshall y vertederos, los cuales determinan el caudal directamente (desplazamiento) o indirectamente por deducción (presión diferencial, área variable, velocidad, fuerza, tensión inducida, torbellino). 

        .cajon.cajon-tema2.p-4.mt-3
          p.mb-0 Las mediciones de caudal másico deben efectuarse a partir de una medida volumétrica, compensándola para las variaciones de densidad del fluido o determinando directamente la caudal masa aprovechando características medibles de la masa, del fluido.

      .col-lg-5.mt-3
        figure
          img(src='@/assets/curso/temas/tema2/img14.png', alt='Imágen decorativa')

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Medidores de nivel</span>

    .row.justify-content-center.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img15.png', alt='Imágen decorativa')

      .col-lg-7.mt-3
        p La medición del nivel debe ser muy cuidadosa para asegurar el funcionamiento correcto de cada proceso y obtener el balance adecuado de materias primas o del efluente de la planta.

        p Debe tenerse el respectivo conocimiento de los tipos de medidores de nivel, entre los cuales  se encuentran los que miden directamente la altura del líquido sobre una línea de referencia, medidores de presión hidrostática, dispositivos que miden el desplazamiento producido en un flotador por el propio líquido contenido en el tanque del proceso y los medidores que aprovechan las características eléctricas del líquido.

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-8

        .cajon.cajon-tema2.p-4.mt-3
          p.mb-0 En los niveles de complejidad del sistema bajo y medio es conveniente utilizar medidores como la sonda, cinta y plomada, nivel de cristal e instrumentos de flotador. En los niveles de complejidad del sistema medio alto y alto, es conveniente utilizar medidores manómetricos, de membrana, de presión diferencial de diafragma, de desplazamiento a barra de torsión, conductiva, capacitiva, ultrasónica y de radiación.

      .col-lg-4.mt-3
        figure
          img(src='@/assets/curso/temas/tema2/img16.svg', alt='Imágen decorativa')

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Medidores de presión</span>

    .row.justify-content-center.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='Imágen decorativa')

      .col-lg-6
        p.mt-3 Los instrumentos de presión deben estar sujetos a los siguientes grupos:

        .row 
          .col-lg-6
            ul.lista-ul--color.lista-ul--separador.fa-ul2.mb-3
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Mecánicos
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Neumáticos

          .col-lg-6
            ul.lista-ul--color.lista-ul--separador.fa-ul2.mb-3
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Electromecánicos
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Electrónicos


        .cajon.cajon-tema2.p-4.mt-3
          p.mb-0 Deben aplicarse medidores de presión a líneas o procesos que se encuentren encerrados tales como sistemas de distribución de aire comprimido, líneas de descarga de bombas y tanques, para esta finalidad se encuentran manómetros, tubos manométricos Bourdon, elemento en espiral, helicoidal, fuelles, medidores de presión diferencial de diafragma, medidores capacitivos y ultrasónicos.

    .row.justify-content-center.mb-5.mt-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img19.png", alt="Imágen decorativa")
          .crd_hover_txt--body.bg-flip-1
            h4.mb-3.text-center.text-white Transmisores
            p.mb-0.text-center.text-white El sistema de transmisión de señales debe sujetarse a las características propias de la planta, el nivel de complejidad del sistema y el tipo de señal a transmitir. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img20.png", alt="Imágen decorativa")
          .crd_hover_txt--body.bg-flip-2
            h4.mb-3.text-center.text-white Controladores
            p.mb-0.text-center.text-white Estos dispositivos deben comparar la variable controlada con el valor deseado y ejercer una acción correctiva de acuerdo con la desviación. La variable controlada la pueden recibir directamente, como controladores locales o bien indirectamente en forma de señal neumática o electrónica procedente de un transmisor.

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Elementos de control final</span>

      p Después de los instrumentos de sensibilidad son necesarios los sistemas de control final, los cuales deben permitir manipular y cambiar las condiciones del proceso para mantenerlas dentro del campo de medida deseado, estos elementos reciben la señal del controlador y modifica el caudal del fluido o agente de control. Estos son:
    
    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img21.png', alt='Imágen decorativa')

      .col-lg-8.mt-3
        TabsA.color-pestana-azul.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Actuadores eléctricos")
            p Deben usarse estos dispositivos para controlar la posición de válvulas y compuertas que ajustan el caudal dentro de un proceso de control continuo o discreto. 

          .tarjeta.clr-paleYellow.p-4(titulo="Actuadores hidráulicos y neumáticos")
            p Los usos que deben darse a estos actuadores son similares a los actuadores eléctricos, con la diferencia de que estos operan en una forma diferente, lo cual se ve reflejado en los costos de operación. 

          .tarjeta.clr-paleYellow.p-4(titulo="Motores de velocidad variable")
            p El tipo de motor debe escogerse de acuerdo con las condiciones de trabajo a las cuales se va a someter, la disponibilidad de espacio y la disponibilidad económica de la planta. La velocidad debe adecuarse para las condiciones del proceso particular. 

          .tarjeta.clr-paleYellow.p-4(titulo="Válvulas de control")
            p Deben tenerse válvulas como elementos de control final para regular o limitar la variable controlable. Para la selección de la válvula deben analizarse: los tipos para que sean compatibles, acoplarse a los requerimientos y caídas de presión, la rapidez y facilidad para ser operada, temperatura y finalmente compatibilidad con el fluido del proceso.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        .cajon.color-gris.p-4.mb-4
          p.mb-0 <b>Nota:</b> importante para tener en cuenta, dentro de las válvulas de control es necesario verificar el tipo de conexión realizada entre la válvula y la tubería del proceso. Entre los diferentes tipos de válvulas deben acondicionarse principalmente las siguientes: 

        .row
          .col-lg-8
            .row 
              .col-lg-6
                ul.lista-ul--color.lista-ul--separador.fa-ul2.mb-3
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Válvulas de globo.
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Válvulas de mariposa.
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Válvulas de bola.

              .col-lg-6
                ul.lista-ul--color.lista-ul--separador.fa-ul2.mb-3
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Válvulas de diafragma.
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Válvulas tapón.


      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img22.png', alt='Imágen decorativa')

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Sistemas de registro</span>

      p La información recogida por los instrumentos debe clasificarse dentro de una de las siguientes categorías: 

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img24.svg", alt="Imágen decorativa").img90.m-auto
            h4.text-center Datos de proceso
            p.text-center.mb-0 Debe mantenerse la operación de la planta dentro de los límites aceptables y alertar al personal de la planta cuando estos parámetros se encuentran fuera de las condiciones límite.

        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img25.svg", alt="Imágen decorativa").img90.m-auto
            h4.text-center Información técnica
            p.text-center.mb-0 Debe utilizarse para proveer mejoras, tratando de optimizar cada sistema de tratamiento para aumentar el nivel de eficiencia y disminuir costos.

        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema2/img26.svg", alt="Imágen decorativa").img90.m-auto
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
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Materiales para válvulas</span>

    .row.justify-content-center.align-items-center
      .col-8.col-lg-2.mt-3
        figure
          img(src='@/assets/curso/temas/tema2/img27.png', alt='Imágen decorativa')
      .col-lg-10.mt-3
        p El diseño debe asegurar que los materiales con los cuales se construyen las válvulas, tanto en su cuerpo como en su mecanismo de cierre, cumplan con todas las especificaciones técnicas reconocidas tanto a nivel nacional como internacional, en función de las características del agua, tales como el grado de agresividad y otros, así como de las presiones de servicio más los factores de seguridad requeridos. 

        .cajon.cajon-tema2.p-4.mt-3
          p.mb-0 Estas especificaciones para los materiales deben seguir lo establecido en las Normas Técnicas Colombianas NTC, las normas ASTM, las normas ISO o las normas DIN correspondientes para cada tipo de válvula. Los revestimientos internos para las válvulas y sus mecanismos deben ajustarse a las normas técnicas colombianas correspondientes o a la Norma AWWA C550. 

    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Cajas para válvulas</span>

      p En todo proyecto de diseño de una conducción nueva o de la ampliación de una conducción existente que incluya válvulas, se debe especificar para cada válvula las dimensiones de las respectivas cajas u obras civiles, de tal manera que se permita el acceso para labores de operación y mantenimiento por parte del personal de la persona prestadora del servicio de acueducto.


    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Tipos de válvulas</span>

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img28.png', alt='Imágen decorativa')

      .col-lg-8
        p.mt-3 El proceso de potabilización de agua, se requiere de válvulas resistentes y que su tiempo de duración sea largo, es por esta razón que se debe conocer los tipos de válvulas, su funcionalidad, material y protocolos de uso, entre otras características. 

        p Entre las válvulas se encuentran, las que se describen a continuación: 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        ol.lista-ol--cuadro.fa-ul2
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 <b>Válvulas de corte o cierre:</b> las válvulas de corte o cierre deben localizarse al comienzo de la línea de conducción y al final de esta si la presión es mayor que 50 m.c.a. Para todos los niveles de complejidad del sistema, se debe hacer un estudio de los transientes hidráulicos ocasionados por la operación de las válvulas en el sistema y el diseño debe incluir recomendaciones sobre su operación.

        .cajon.cajon-tema2.p-4.mt-3
          p.mb-0 En aquellos casos en que la tubería presenta grandes desniveles debido a la topografía del terreno, se debe verificar la condición del cierre de una válvula de corte y sus características. 

      .col-lg-4.mt-3
        figure
          img(src='@/assets/curso/temas/tema2/img29.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img30.png', alt='Imágen decorativa')

      .col-lg-8.mt-3
        p Las válvulas de cierre o corte deben cumplir con las correspondientes normas técnicas colombianas y si estas no existen con las Normas Técnicas: American Water Works Association [AWWA], American Society for Testing and Materials [ASTM], Deutsches Institut für Normung [DIN], International Organization for Standardization [ISO], American Petroleum Institute [API] o cualquier otra norma de reconocimiento internacional equivalente, previa aprobación del Ministerio de Ambiente Vivienda y Desarrollo Territorial, para el caso de los niveles de complejidad del sistema bajo y medio o de la persona prestadora del servicio para los niveles de complejidad del sistema medio alto y alto. 

        p Adicionalmente, el diseño debe evaluar la necesidad de instalar válvulas de corte intermedias a lo largo de la línea de conducción en sistemas de gravedad. El diámetro de la válvula debe seleccionarse igual al diámetro de las tuberías de conducción y debe verificarse para evitar problemas de cavitación en el caso de que se tengan flujos con altas velocidades. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        ol.lista-ol--cuadro.fa-ul2
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 <b>Válvulas de ventosa:</b> en los puntos altos de la línea de conducción deben colocarse ventosas con el fin de facilitar la salida del aire que eventualmente se acumula en la conducción durante su funcionamiento o cuando se procede a su llenado o vaciado. De igual forma, cuando la tubería tenga una pendiente constante se debe colocar una válvula ventosa cada 300 m. 

        .cajon.cajon-tema2.p-4.mt-3
          p.mb-0 Dichos dispositivos deben permitir también la entrada automática de aire durante las operaciones de descarga de la tubería o cuando el caudal de agua se disminuye por causa de una rotura, de maniobras o de paradas en el flujo de la tubería. El diseño debe tener en cuenta los siguientes aspectos:

      .col-lg-4.mt-3
        figure
          img(src='@/assets/curso/temas/tema2/img31.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mt-5
      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img32.png', alt='Imágen decorativa')
      .col-lg-8.mt-3
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Podrá utilizarse una ventosa única para atender la entrada y la salida de aire, siempre y cuando dicho dispositivo sea capaz de atender ambas funciones. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Preferiblemente las válvulas de ventosa deben ser bridadas según las especificaciones de la norma AWWA y con cuerpo fundido en hierro dúctil. Para los niveles de complejidad del sistema bajo y medio se pueden utilizar válvulas de ventosa roscada; para los niveles de complejidad del sistema medio alto y alto, el uso de las válvulas de ventosa roscada deberá contar con la aprobación previa de la persona prestadora del servicio de acueducto. Tipo de válvula. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Cuando en la conducción se encuentre una válvula de línea, debe existir una ventosa aguas arriba o aguas abajo, dependiendo de la pendiente para la aireación durante el llenado y descarga de esta. 


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
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Cada ventosa debe estar protegida por una cámara de inspección accesible, con su respectivo drenaje de aguas y los respiraderos necesarios para garantizar el flujo de aire y estar completamente asegurada. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Los dispositivos de entrada de aire deben localizarse de tal modo que no se introduzca agua extraña al sistema. Los dispositivos previstos deben instalarse de tal manera que sus aperturas se sitúen por lo menos un metro (1.0 m) por encima del nivel máximo de agua que pudiera acumularse en el sitio de la ventosa. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            |  Deben disponerse puntos intermedios para la entrada de aire en la tubería cuando la línea piezométrica correspondiente a la carga de un tramo del conducto durante operaciones de mantenimiento y/o reparación, se sitúe por debajo de éste, de forma tal que cause problemas de discontinuidad en la columna líquida o problemas de posible colapso de la tubería por aplastamiento. 

          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Como dispositivos automáticos para la entrada o salida de aire de las líneas de conducción pueden utilizarse los siguientes: ventosas de doble efecto para la descarga del aire acumulado durante el llenado y durante la operación normal de la conducción y para la entrada en las operaciones de descarga de agua. Tubos verticales o chimeneas cuando su extremidad superior pueda situarse por encima de la línea piezométrica máxima para la entrada de aire. 

          li
            i.fas.fa-check-circle.color-vineta1
            p.mb-0 En el caso de que exista una válvula intermedia en la conducción, esta debe estar dotada de un paso lateral (<em>by pass</em>) de tal manera que permita el flujo de aire hacia la ventosa. Este paso lateral debe estar dotado de su propia válvula de corte y se debe utilizar cuando:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img34.svg' alt='Imágen decorativa')
              .tarjeta.tarjeta--gris
                .p-2
                  p La válvula intermedia se localiza en tramos descendentes de la tubería y su apertura no puede realizarse sin causar perjuicios a la estructura.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img34.svg' alt='Imágen decorativa')
              .tarjeta.tarjeta--gris
                .p-2
                  p La válvula intermedia sea del tipo compuerta y la presión en el punto en que estuviese instalada cause un empuje superior a 20 KN. 


      .col-8.col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img33.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      ul.lista-ul--color.lista-ul--separador.fa-ul2
        li.l-p
          i.fas.fa-check-circle.color-vineta1
          | Las válvulas de ventosa deben cumplir con normas técnicas nacionales e internacionales, tales como la Norma Técnica Colombiana correspondiente, la Norma AWWA C512, fabricadas bajo normas internacionales, de reconocimiento internacional, que le aplique y se demuestra mediante certificado de producto. 
        li
          i.fas.fa-check-circle.color-vineta1
          |  La localización de las válvulas de ventosa a lo largo de la conducción y su dimensionamiento debe considerar los requerimientos de evacuación de aire presentados durante las operaciones de llenado de las tuberías que conformen la conducción o la red de conducciones, analizando la posibilidad de bloqueo del flujo. 

    .row.justify-content-center.align-items-center.my-5
      ol.lista-ol--cuadro.fa-ul2
        li 
          .lista-ol--cuadro__vineta
            span 3
          p.mb-0 <b>Válvulas de purga o desagüe:</b> en los puntos bajos de la tubería de conducción o cada 350 m, deben colocarse válvulas de desagüe o de limpieza. En estos casos deben tenerse en cuenta los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img35.png', alt='Imágen decorativa')

      .col-lg-8   
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La descarga debe permitir la eliminación total del agua contenida en la tubería de conducción. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Se recomienda que el diámetro de la tubería de desagüe esté entre 1/3 y 1/4 del diámetro de la tubería principal, con un mínimo de 100 mm para tuberías mayores que 100 mm. Para diámetros menores debe adoptarse el mismo diámetro de la tubería principal. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | El diseño de las válvulas de purga debe realizarse de forma integrada con el de las válvulas de ventosa. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Cada válvula debe estar protegida con una cámara de inspección accesible con su respectivo drenaje.
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Si la velocidad de salida de la válvula de purga es mayor que 3 m/s, debe colocarse una estructura de disipación de energía. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Si la velocidad de salida de la válvula de purga es mayor que 3 m/s, debe hacerse un estudio de cavitación. 
          li
            i.fas.fa-check-circle.color-vineta1
            | El dimensionamiento de la descarga debe realizarse teniendo en cuenta los siguientes puntos: 

        ol.lista-ol--cuadro.fa-ul2
          li 
            .lista-ol--cuadro__vineta
              span a
            | La obtención de una velocidad mínima que sea compatible con la remoción del material sedimentado y las biopelículas en el interior de la tubería, durante por lo menos el primer minuto de descarga. 
          li 
            .lista-ol--cuadro__vineta
              span b
            | Que el tiempo máximo para descarga sea impuesto por las condiciones de operación. 
          li 
            .lista-ol--cuadro__vineta
              span c
            | El caudal máximo permitido por el sistema de recepción del agua descargada.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.mb-3
        ol.lista-ol--cuadro.fa-ul2.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 <b>Válvulas de cheque:</b> en el caso que la línea de aducción o de conducción corresponda a la línea de impulsión de un bombeo, el diseño debe contemplar el uso de válvulas de cheque o retención con el fin de evitar el retroceso del agua, con el consiguiente vaciado del conducto y sus posibles daños en las bombas o aplastamiento de la tubería. Las válvulas de cheque sencillas o de doble acción deben cumplir con lo establecido en las normas técnicas colombianas correspondientes o en su defecto con las Normas AWWA, C508, AWWA C515, o cualquier otra norma de reconocimiento internacional equivalente.

        .cajon.color-gris.p-4
          p.mb-0 El uso de las válvulas de cheque en el diseño deberá contar con la aprobación previa de la persona prestadora del servicio. En el caso de que las válvulas de cheque estén fabricadas utilizando aleaciones de cobre, estas deben cumplir con la Norma Técnica Colombiana NTC 1762.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img36.png', alt='Imágen decorativa')      

    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img37.png', alt='Imágen decorativa')     

      .col-lg-8  
        ol.lista-ol--cuadro.fa-ul2.mb-3
          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 <b>Válvulas de protección contra golpe de ariete:</b> este tipo de válvulas deben instalarse en tuberías de aducción por bombeo, sometidas a riesgos de sobrepresiones por golpe de ariete, sobre la línea de impulsión, con el fin de proteger las bombas y las tuberías correspondientes. Podrán utilizarse válvulas de alivio de presión, caso en el cual, éstas deben estar especificadas según normas técnicas nacionales o internacionales, de reconocimiento internacional, tales como la NTC correspondiente, la Norma AWWA C506, o normas ISO y EN.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.mb-4
        ol.lista-ol--cuadro.fa-ul2.mb-3
          li 
            .lista-ol--cuadro__vineta
              span 6
            p.mb-0 <b>Válvulas de flujo o paso anular:</b> se utilizan para la regulación de caudales y pueden tener o no regulación de presión. Las válvulas con regulación de presión cuentan con dispositivos para reducir la presión a la entrada de los tanques de almacenamiento y/o compensación.

        .cajon.color-gris.p-4.mb-3
          p.mb-0 Las válvulas sin regulación de presión no tienen ese tipo de dispositivos y son utilizadas en puntos intermedios de las conducciones o en entradas a tanques con presiones bajas, siempre y cuando el flujo #[b sea unidireccional.] Estas válvulas deben tener un obturador interior en forma de émbolo que se mueva axial y perpendicularmente al asiento, para dejar un paso anular al agua en cualquier posición.

        p El diseño del sistema obturador debe ser tal que pueda desplazarse el émbolo sin problemas ante una posible incrustación de sólidos en el órgano disipador.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img38.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img39.png', alt='Imágen decorativa')
      
      .col-lg-8.mb-4
        ol.lista-ol--cuadro.fa-ul2.mb-3
          li 
            .lista-ol--cuadro__vineta
              span 7
            p.mb-0 <b>Válvulas de cono o chorro hueco:</b> para el caso de las estructuras de descarga de las líneas de conducción, con el objeto de vaciar la tubería o producir las velocidades necesarias para el desprendimiento de biopelículas o de depósitos inorgánicos al interior de la tubería en operaciones de lavado, el diseño debe contemplar la instalación de válvulas de cono o chorro hueco acompañadas de sus correspondientes estructuras de disipación de energía y canales de descarga a los cuerpos receptores.

        .cajon.color-gris.p-4
          p.mb-0 Este tipo de válvulas son generalmente usadas para descargar el agua de forma superficial a los canales y/o cuerpos receptores. Sin embargo, pueden ser instaladas bajo tierra cuando el nivel de agua, en la zona aguas abajo, se encuentre por encima del nivel de instalación de la válvula.

    .row.justify-content-center.align-items-center.mb-5
      p En este caso se debe tener una estructura de disipación para airear el flujo y evitar inestabilidades hidráulicas. Para determinar el tamaño de las válvulas se deben tener en cuenta dos factores: el caudal máximo de descarga y la mínima altura disponible en la entrada de la válvula. En caso de que las válvulas de cono o chorro hueco tengan la posibilidad de descargar en forma sumergida, bajo cualquier condición de operación, el diseño debe tener en cuenta la posibilidad de ocurrencia de cavitación y, por consiguiente, debe plantear las medidas de protección necesarias.


    separador

    #t_2_3.titulo-segundo.color-acento-contenido
       h2 2.3 Bombas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4
        p.mb-4 Son dispositivos que permiten bombear o impulsar el agua de un lugar a otro, usualmente su movimiento es ascendente; existen diferentes tipos de bombas, pero todas constan de un orificio de entrada o también denominado de aspiración, y otro de salida o de impulsión. El número de bombas en la estación de bombeo debe definirse desde la etapa de diseño de acuerdo con la capacidad requerida, las etapas de desarrollo y la energía disponible, al igual que estar sujeto a una evaluación económica. De todas formas, el número mínimo de bombas es dos, cada una con una capacidad igual al caudal de diseño de la estación de bombeo.

        .cajon.color-gris.p-4
          p.mb-0 Cuando el número de bombas sea mayor que dos, la capacidad debe distribuirse equitativamente entre ellas. Además, deben preverse unidades de reserva del mismo tipo; cuando se requieran tres o más bombas, debe colocarse una unidad adicional como reserva por cada tres bombas empleadas.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img40.png', alt='Imágen decorativa')      


    .row.mt-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Tipos de bombas</span>

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img41.png', alt='Imágen decorativa')

      .col-lg-8
        p Desde la etapa de diseño, las bombas deben seleccionarse de forma tal que se obtenga la capacidad y la altura dinámica requeridas, establecidas por el punto de operación el cual debe determinarse de acuerdo con las curvas características del sistema de bombeo y del sistema de tuberías de impulsión. 

        p El dimensionamiento y la selección del tipo de bombas debe realizarse en conjunto con la tubería de impulsión y con el tanque de almacenamiento de aguas abajo, buscando siempre la condición de costo mínimo, incluyendo los costos iniciales, los costos de construcción, de operación, de expansión y de mantenimiento. 

        .cajon.color-gris.p-4
          p.mb-0 Adicionalmente deben tenerse en cuenta #[b la Norma Técnica NTC 1775 y las normas AWWA E101.]
          p.mb-0 El diseño debe tener en cuenta los siguientes criterios para la selección del tipo de bombas, veamos: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | El espacio requerido para la instalación de las bombas dentro de la estación de bombeo. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La forma de operación prevista de las bombas, en serie o en paralelo. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La variación en los niveles máximo y mínimo en el pozo de succión y en la descarga. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La variación de los caudales bajo las diferentes condiciones de operación hidráulica de la estación de bombeo. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | El tiempo de operación de las bombas.
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La compatibilidad con otros equipos de bombeo existentes en el municipio.
          li
            i.fas.fa-check-circle.color-vineta1
            | El nivel del ruido generado por la operación de las bombas.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img42.svg', alt='Imágen decorativa')

    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Materiales de las bombas</span>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img43.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los materiales de las bombas incluyendo los impulsores, las carcasas y otros componentes, deben ser seleccionados de acuerdo con las características del agua que va a bombearse y teniendo en cuenta la temperatura, la conductividad, la capacidad de corrosión y los sólidos en suspensión.

    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-gris.p-4
        p.mb-0 El material de las bombas y de los diferentes componentes debe resistir los efectos de corrosión que el agua pueda causar en ellos. Se pueden utilizar materiales como: hierro fundido, acero inoxidable, acero al carbón, acero fundido y hierro dúctil. Para los accesorios de la bomba se puede usar latón y bronce. Todos los materiales utilizados deben estar certificados por normas técnicas nacionales o internacionales.


    separador

    #t_2_4.titulo-segundo.color-acento-contenido
       h2 2.4 Sustancias químicas para el tratamiento de agua


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img44.png', alt='Imágen decorativa')

      .col-lg-7
        p #[b De acuerdo con el RAS 2000, título C], las sustancias químicas para el tratamiento de aguas más utilizadas son los coagulantes y de estos, los que pueden emplearse son:

        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Coagulantes metálicos.
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Coagulantes polímeros orgánicos e inorgánicos.


    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Coagulantes metálicos</span>

    .row.justify-content-center.align-items-center.mb-5
      p Para la dosificación en la coagulación por adsorción-neutralización debe tenerse en cuenta la relación estequiométrica entre la dosis del coagulante y la concentración de los coloides, ya que una sobredosis conduce a una reestabilización de las partículas. Para aguas con bajo nivel de alcalinidad, se recomienda aumentar el pH añadiendo hidróxido de calcio (Ca(OH)<sub>2</sub>).

      p.mb-5 Estos coagulantes metálicos son de dos tipos: 

      .row 
        .col-lg-6
          .bg2-fondo3.p-4
            .row 
              .col-3
              .col-9.col-lg-8
                h4 Sales de aluminio
                p Los coagulantes con sales de aluminio son:

                ul.lista-ul--color.lista-ul--separador.fa-ul2
                  li.l-p
                    i.fas.fa-check-circle.color-vineta1
                    | Sulfato de aluminio
                  li.l-p
                    i.fas.fa-check-circle.color-vineta1
                    | Sulfato de aluminio amoniacal.
                  li.l-p
                    i.fas.fa-check-circle.color-vineta1
                    | Aluminato de sodio.
                  li.l-p
                    i.fas.fa-check-circle.color-vineta1
                    | Policloruro de aluminio.

        .col-lg-6
          .bg2-fondo4.p-4
            .row 
              .col-9.col-lg-8
                h4 Sales de hierro
                p Los coagulantes con sales de hierro son:

                ul.lista-ul--color.lista-ul--separador.fa-ul2
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Cloruro férrico.
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Sulfato férrico.
                  li.l-p
                    i.fas.fa-check-circle.color-vineta2
                    | Sulfato ferroso.

              .col-lg-3


    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Coagulantes polímeros</span>


    .row.justify-content-center.align-items-center.mb-3
      .col-10.col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img45.png', alt='Imágen decorativa')

      .col-lg-8.mb-3
        p.mb-4  Se pueden emplear los polímeros de hierro (III) y aluminio (III) como coagulantes. Entre los polímeros orgánicos o polielectrolitos que se pueden emplear están los polímeros naturales y los sintéticos. Entre los primeros están los derivados del almidón, la celulosa y los materiales proteicos. Para la aplicación de los coagulantes sintéticos debe solicitarse la aprobación del Ministerio de Salud y Protección Social o verificar que haya sido aprobado su uso en el tratamiento del agua potable por la Comunidad Europea, por Estados Unidos o por Canadá. 

        .cajon.color-gris.p-4
          p.mb-0 En la operación, la velocidad de agitación debe ser menor, ya que altas velocidades pueden llegar a romper las largas cadenas poliméricas; por tanto, debe mantenerse una mezcla uniforme y se debe evitar la ruptura de los puentes formados entre polímeros y coloides. Para su empleo se recomienda la realización de ensayos de jarras en rangos amplios de dosificaciones y de bajas velocidades para determinar la dosificación óptima.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p En caso de emplearse los polielectrolitos debe tenerse en cuenta los siguientes aspectos: 

        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Es necesario conocer las características físicas y químicas del polímero: si es catiónico, aniónico o no iónico. Los polielectrolitos catiónicos coagulan rápidamente las algas. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Los polielectrolitos no son igualmente efectivos con todas las aguas. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La sobredosis de polielectrolitos produce reestabilización. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Algunos deben añadirse en solución diluida para asegurar una completa mezcla. Otros por su naturaleza no pueden manejarse diluidos.
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Debe conocerse la máxima concentración en que se puede aplicar, lo mismo que los volúmenes que se pueden manejar y las condiciones óptimas de preparación de las soluciones diluidas. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Debe conocerse el tipo de equipo recomendado para su dosificación. 
          li
            i.fas.fa-check-circle.color-vineta1
            | Se recomienda evaluar la naturaleza y propiedades del producto a utilizar en lo que tiene que ver con la corrosión, abrasión y en algunos casos los requerimientos de equipo por parte del fabricante.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img46.svg', alt='Imágen decorativa')

    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Productos auxiliares</span>


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img47.svg', alt='Imágen decorativa')

      .col-lg-7
        .cajon.color-gris.p-4
          p.mb-0 Pueden adicionarse como auxiliares de la coagulación, de la floculación y de la filtración, si en los ensayos de laboratorio se ha determinado que es conveniente. En su selección, deben escogerse productos auxiliares que no vayan a tener efectos adversos sobre la calidad del agua tratada. Pueden emplearse sustancias auxiliares de la coagulación para lograr el pH óptimo de coagulación. Un caso de éxito es el almidón.


    separador

    #t_2_5.titulo-segundo.color-acento-contenido
       h2 2.5 Equipos para dosificación de insumos en la potabilización


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img48.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos equipos permiten la obtención de medidas exactas que deben verterse de los compuestos químicos, acorde a la necesidad detectada en el proceso de potabilización, al igual que su sistema de dosificación debe ser controlada, bien sea de manera continua o periódica.


    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Unidades de dosificación</span>


    .row.justify-content-center.align-items-center.mb-3
      p.mb-4 Según establece el RAS, de acuerdo con las características de los productos químicos disponibles en el mercado, pueden emplearse dosificadores en seco o en solución. 

      ol.lista-ol--cuadro.fa-ul2.mb-3
        li 
          .lista-ol--cuadro__vineta
            span 1
          p.mb-0 <b>Dosificadores en seco:</b> deben emplearse para la aplicación de sustancias químicas en polvo o en forma granular. Los dosificadores pueden ser volumétricos o gravimétricos, esto es:


    .row.justify-content-center.align-items-center.mb-5
      TabsC.color-primario.mb-5
        .py-3.py-md-4(titulo="Volumétricos")
          .row
            .col-md-8.mb-4.mb-md-0
              p En este tipo de dosificadores la dosis requerida debe determinarse midiendo el volumen de material que libera una superficie que se desplaza a velocidad constante. Los dosificadores más utilizados son la válvula alveolar, el disco giratorio, el cilindro giratorio, el plato oscilante y de tornillo. El disco giratorio se recomienda para dosificar sulfato de aluminio, cal, carbonato de sodio o de calcio. Debe proveerse de agua de buena calidad para la preparación de la solución, lo mismo que una adecuada mezcla. 
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img49.png', alt='Imágen decorativa')

        .py-3.py-md-4(titulo="Gravimétricos")
          .row
            .col-md-8.mb-4.mb-md-0
              p La cantidad de producto químico dosificado debe medirse pesando el material que descarga en una determinada unidad de tiempo, o con base en una pérdida de peso constante del material depositado en la tolva. Los dosificadores más empleados son la de correa transportadora y la de pérdida de peso. Para el empleo de dosificadores en seco deben tenerse en cuenta los siguientes aspectos:

              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li.l-p
                  i.fas.fa-check-circle.color-vineta1
                  | Los productos químicos dosificados en seco deben ser disueltos en agua antes de su aplicación. 
                li
                  i.fas.fa-check-circle.color-vineta1
                  | Deben preverse tolvas de acumulación con dosificadores cuya capacidad sea de 8 a 12 horas de aplicación continua del producto químico a su máxima capacidad de descarga.

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img50.svg', alt='Imágen decorativa')


    .row.justify-content-center.align-items-center.mb-3
      ol.lista-ol--cuadro.fa-ul2.mb-3
        li 
          .lista-ol--cuadro__vineta
            span 2
          p.mb-0 <b>Dosificadores en solución:</b> deben usarse para dosificar por vía húmeda o para dosificar líquidos. Pueden ser de dos tipos: por bombeo y por gravedad, veamos esto a mayor detalle:


    .row.justify-content-center.align-items-center.mb-5
      TabsC.color-primario.mb-5
        .py-3.py-md-4(titulo="Sistemas por bombeo")
          .row
            .col-md-8.mb-4.mb-md-0
              p Se pueden emplear las bombas de pistón y de diafragma. La bomba dosificadora de pistón es muy precisa, pero debe emplearse con precaución en el caso de productos abrasivos o muy corrosivos.

              p La bomba dosificadora de diafragma es accionada hidráulicamente, debe utilizarse para líquidos corrosivos, tóxicos, abrasivos, viscosos; puede estar provista de membrana simple o doble. Constan de los siguientes componentes: 

              .row 
                .col-lg-4
                  ul.lista-ul--color.lista-ul--separador.fa-ul2
                    li.l-p
                      i.fas.fa-check-circle.color-vineta1
                      | Tanques de solución.
                
                .col-lg-4
                  ul.lista-ul--color.lista-ul--separador.fa-ul2
                    li.l-p
                      i.fas.fa-check-circle.color-vineta1
                      | Tanque de almacenamiento.
                
                .col-lg-4
                  ul.lista-ul--color.lista-ul--separador.fa-ul2
                    li.l-p
                      i.fas.fa-check-circle.color-vineta1
                      | Bombas dosificadoras. 

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img51.svg', alt='Imágen decorativa')

        .py-3.py-md-4(titulo="Sistemas por gravedad")
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              p Pueden emplearse los de carga constante y los de carga regulable. En los de carga constante debe mantenerse una carga constante de agua sobre un orificio para obtener un caudal de dosificación constante. El caudal debe calibrarse a la salida mediante una válvula. Este sistema debe constar de:

              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li.l-p
                  i.fas.fa-check-circle.color-vineta1
                  | Un tanque de solución.
                li.l-p
                  i.fas.fa-check-circle.color-vineta1
                  | Un tanque dosificador que puede ser de orificio regulable o fijo.
                li
                  i.fas.fa-check-circle.color-vineta1
                  | Un dispositivo de medida.

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img52.svg', alt='Imágen decorativa')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ol.lista-ol--cuadro.fa-ul2.mb-3
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 <b>Aplicadores de Cal:</b> la Cal puede aplicarse ya sea en solución concentrada teniendo en cuenta la temperatura de apagado de la cal viva, o en suspensión como cal apagada. Los saturadores de cal pueden emplearse para producir una solución saturada de hidróxido de calcio, Ca (OH)<sub>2</sub>. Este equipo consta de un tanque donde se deposita la cal que debe ser disuelta. El agua debe introducirse en la cal por el fondo del tanque, y la solución saturada debe colectarse en la superficie libre mediante canaletas, o en la proximidad a la superficie.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img53.png', alt='Imágen decorativa')      

    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Selección del dosificador</span>

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img54.svg', alt='Imágen decorativa')

      .col-lg-9
        p En el proceso de tratamiento de agua se utilizan diferentes productos químicos que garantizan la efectividad de este proceso; sin embargo, se debe tener mucha claridad frente a la cantidad a dosificar y esto depende también de diversas variables como la calidad de agua, su caudal y el objetivo que se espera con el producto a dosificar. La mayoría de estos productos son líquidos y se deben suministrar a través de bombas dosificadoras, por lo que es necesario conocer el tipo de dosificador a utilizar.

        p En la selección del tipo de dosificador se deben tener en cuenta los siguientes aspectos:

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La precisión requerida, la confiabilidad para aplicar siempre la dosis predeterminada, el tipo de producto por dosificar y el rango de caudal de trabajo máximo y mínimo. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Factores técnicos y económicos. 
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Los dosificadores deben tener una capacidad para dosificar por lo menos, la dosis que cubra las condiciones más desfavorables del agua por tratar.
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | Deben conseguirse en el mercado las piezas de repuestos para el tipo de dosificador seleccionado.
          li
            i.fas.fa-check-circle.color-vineta1
            | Para los niveles de complejidad de sistema bajo y medio deben preferirse los dosificadores con control manual; para los niveles de complejidad de sistema medio alto y alto el control puede ser automático, pero debe estar diseñado para permitir su manejo manual en caso de daño o emergencia y tener por lo menos dos unidades de dosificación.



      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img55.svg', alt='Imágen decorativa')


    .row.mb-5
      .col-lg-7
        .list.mb-3(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/tema2/icon1.svg', alt='Imágen decorativa')
          .list__txt
            h4.mb-0.tv.margin-icon <span style='border-bottom: 1px dotted #3076B6'>Ensayos de tratabilidad: concepto, métodos</span>

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img56.png', alt='Imágen decorativa')

      .col-lg-8
        p De igual manera el RAS en su título C, define los estudios de tratabilidad como una serie de ensayos de laboratorio o en planta piloto, realizados por lo menos a dos tipos de aguas crudas, uno representativo de aguas en condiciones de verano y otro de condiciones de invierno, bien sea en laboratorio, usando equipos para prueba de jarras con modificaciones para asegurar la calidad de los datos a obtener, o bien sea realizados en planta piloto. 

        .cajon.color-gris.p-4
          p.mb-0 Con los estudios o ensayos de tratabilidad se obtienen los parámetros reales con los cuales se debe diseñar, optimizar, evaluar y operar una planta de tratamiento. Diferentes ensayos de tratabilidad de las aguas para su potabilización, entre otros está:


    .row.mb-5
      .col-6.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema2/img57.svg', alt='Imágen decorativa').img57-tm2

      .col-lg-11
        .tarjeta.bgtarjeta2.p-4
          .row.justify-content-center.align-items-center
            .col-1
            .col-11
              p.mb-0 La caracterización del agua cruda a tratar debe realizarse sobre muestras representativas de por lo menos un ciclo hidrológico anual, con el fin de analizar todas las posibles calidades de agua cruda que se puedan presentar históricamente durante ese periodo; es decir, cambios en la turbiedad, color, características microbiológicas, demanda de cloro, temperatura, pH, alcalinidad, contenido de algas, hierro y manganeso, cambios en el sabor y olor, entre otros. De no ser esto posible, acudir a registros históricos de calidades de agua existentes en corporaciones regionales, secretarías de salud y sistemas que se abastezcan de las mismas fuentes.

    .row.mb-5
      p Uno de los ensayos más comunes es el ensayo de jarras, que permite determinar variables dentro de los procesos de coagulación y floculación, el RAS 2000, título C, establece los ensayos que se pueden determinar de acuerdo con el proceso de tratamiento de agua son:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img58.svg', alt='Imágen decorativa')

      .col-lg-7
        SlyderF(columnas="col-12")
          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img59.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para la caracterización de las aguas crudas a tratar:
            .row
              .col-lg-6
                ul.lista-ul--color.fa-ul2
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Turbiedad.          
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Color.
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | pH.
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Alcalinidad. 
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Temperatura.
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Conductividad.

              .col-lg-6
                ul.lista-ul--color.fa-ul2         
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Hierro.
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Cloruros. 
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Sulfatos.
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Nitratos. 
                  li
                    i.fas.fa-check-circle.color-vineta1
                    | Dureza.

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img60.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para coagulación y mezcla rápida:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Dosis óptima de coagulante.
              li
                i.fas.fa-check-circle.color-vineta1
                | Necesidad y dosis de alcalinizante o cal primaria.
              li
                i.fas.fa-check-circle.color-vineta1
                | Secuencia de aplicación de coagulante y alcalinizante.
              li
                i.fas.fa-check-circle.color-vineta1
                | Necesidad y dosis de ayudantes de coagulación o uso de polímeros.
              li
                i.fas.fa-check-circle.color-vineta1
                | Gradiente hidráulico y tiempo de mezcla.
              li
                i.fas.fa-check-circle.color-vineta1
                | El pH óptimo de coagulación. 
              li
                i.fas.fa-check-circle.color-vineta1
                | Concentración óptima del coagulante a utilizar.

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img61.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para floculación:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Gradientes y tiempos óptimos. 
              li
                i.fas.fa-check-circle.color-vineta1
                | Tiempo total de floculación.
              li
                i.fas.fa-check-circle.color-vineta1
                | Secuencia decreciente del gradiente y tiempos de aplicación. 

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img62.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para decantación:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Velocidades de sedimentación de partículas floculadas. 
              li
                i.fas.fa-check-circle.color-vineta1
                | Cargas superficiales por aplicar y turbiedad. Remanente con cada una de ellas. 

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img63.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para filtración:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Índice de filtrabilidad. 
              li
                i.fas.fa-check-circle.color-vineta1
                | Remoción esperada.
              li
                i.fas.fa-check-circle.color-vineta1
                | Carrera de filtración.

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img64.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para desinfección:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Demanda de cloro. 
              li
                i.fas.fa-check-circle.color-vineta1
                | Dosis de cloro a aplicar al agua filtrada.
              li
                i.fas.fa-check-circle.color-vineta1
                | Tiempo de retención. 

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img65.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para estabilización:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Índice de agresividad del agua.
              li
                i.fas.fa-check-circle.color-vineta1
                | Saturación.
              li
                i.fas.fa-check-circle.color-vineta1
                | Dosis de alcalinizante o de cal secundaria para ajuste del pH.

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img66.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para ablandamiento:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Dosis de cal soda.
              li
                i.fas.fa-check-circle.color-vineta1
                | Efectividad de zeolitas.

          .tarjeta.tarjeta--gris.p-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.mb-4
                img(src='@/assets/curso/temas/tema2/img67.svg' alt='Imágen decorativa')
            h4.text-center.mb-5 Para filtración directa:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle.color-vineta1
                | Dosis de coagulantes o ayudantes. 
              li
                i.fas.fa-check-circle.color-vineta1
                | Remoción en filtración.



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
