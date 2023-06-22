<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Operación de unidades de potabilización

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p.mb-0 Una vez el agua es captada se requiere, en función de sus características, someterla a una serie de operaciones y procesos unitarios que tienen como objetivo permitir que logre las condiciones necesarias para el uso que se tiene definido; particularmente en el caso de agua para consumo humano, se debe cumplir con las normas que reglamentan el suministro de agua para esta actividad. Así mismo, el proceso de potabilización debe ser complementado con todo un sistema diseñado para su conducción, almacenamiento y distribución, que a su vez debe ser monitoreado a lo largo de este para verificar sus condiciones.

        .cajon.color-gris.p-4
          .row.justify-content-center.align-items-center
            .col-4.col-lg-1
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='alt')

            .col-lg-11
              p.mb-0 La potabilización tiene en cuenta diferentes operaciones unitarias que permiten obtener agua potable a partir de la captación de agua cruda.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
       h2 1.1 Principales conceptos asociados al sistema de potabilización

    .row.justify-content-center.align-items-center.mb-5
      p El sistema de acueducto se encuentra conformado por diferentes etapas que buscan suministrar a la población de manera continua el agua requerida para su consumo y demás actividades que involucren el uso de este recurso. 


    .bg1-tema1

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/tema1/img3.svg', alt='alt')

        .col-lg-9
          p En términos generales, es posible definir el sistema de acueducto como el conjunto de estructuras que permiten la captación de agua, transporte y distribución a los usuarios, cumpliendo con unas características mínimas para su consumo.

          p El Reglamento técnico del sector de agua potable y saneamiento básico (RAS), en su Título B (2010), permite identificar los componentes que conforman el sistema de acueducto y la normatividad relacionada con el suministro de agua, estos son:

      .row.bg-titulo1.align-items-center.p-1.mb-4
        h3.texto-derecha.mb-4 Fuente de abastecimiento de agua

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          p Consisten en todas las aguas provenientes de cursos o cuerpos superficiales o subterráneos. También pueden considerarse como fuentes, en casos excepcionales, las aguas lluvias y el agua de mar. 

          .cajon.color-gris2.p-4.mb-3
            p.mb-0 La selección de la fuente debe realizarse basándose en la calidad del agua, la ocurrencia de eventos de sequía y escogiendo aquella que permita la construcción de una captación económica, segura, confiable y que tenga unas características de acceso, operación y mantenimiento fáciles. 

          p Además, deben efectuarse estudios con el fin de minimizar los impactos sobre el medio ambiente, el ecosistema y el hábitat natural de diferentes especies, que puedan producir las obras de la captación. 

          p En particular, se debe conocer el caudal ecológico en la fuente de agua definido por la autoridad ambiental competente para la estimación de la capacidad utilizable de la fuente.

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema1/img4.svg', alt='alt')        

      .row.bg-titulo1.align-items-center.p-1.mb-4
        h3.texto-derecha.mb-4 Captación

      .row.justify-content-center.align-items-center.mb-4
        p Consiste en estructuras y/o dispositivos que permiten derivar de la fuente el caudal necesario. Los principales sistemas de captación son de aguas superficiales y aguas subterráneas; sin embargo, en los casos en donde la disponibilidad de las fuentes superficiales o subterráneas es limitada, es posible emplear la captación de aguas lluvias, captación por evaporación natural de agua de mar o captación por desalinización de agua de mar.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img5.svg', alt='alt')

      .col-lg-5
        .tarjeta.tarjeta--gris.p-4
          p En la captación de aguas superficiales es posible encontrar diferentes tipos, como:

          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Toma lateral.
                
          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Toma sumergida.

          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Captación flotante con elevación mecánica.

          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Captación mixta.

          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Toma de rejilla.

          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Presa de derivación.

          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Cámara de toma directa.

          .list.mb-2(data-aos="fade-down")
            .list__item
              .list__item__icon1
                img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
            .list__txt
              p.mb-0.tv.margin-icon Muelle de toma.                

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.tarjeta--gris.p-3
          p En el caso de la captación de aguas subterráneas, el agua es bombeada de:

          .row.justify-content-center.align-items-center
            .col-lg-3
              .list.mb-2(data-aos="fade-down")
                .list__item
                  .list__item__icon1
                    img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
                .list__txt
                  p.mb-0.tv.margin-icon Pozos profundos.

            .col-lg-3
              .list.mb-2(data-aos="fade-down")
                .list__item
                  .list__item__icon1
                    img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
                .list__txt
                  p.mb-0.tv.margin-icon Pozos excavados.

            .col-lg-4
              .list.mb-2(data-aos="fade-down")
                .list__item
                  .list__item__icon1
                    img(src='@/assets/curso/temas/tema1/icono1.svg', alt='')
                .list__txt
                  p.mb-0.tv.margin-icon Captación de manantiales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-gris.p-4
          .row.justify-content-center.align-items-center
            .col-4.col-lg-1
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='alt')

            .col-lg-11
              p.mb-0 Adicional a los tipos de captación de agua se encuentras las llamadas líneas de aducción y líneas de conducción que las encuentra a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-2
              h4 Líneas de aducción
              p Son los conductos destinados a transportar por gravedad o por bombeo las aguas crudas desde los sitios de captación hasta las plantas de tratamiento, prestando excepcionalmente servicio de suministro de agua cruda a lo largo de su longitud.

        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris
            .p-2
              h4 Líneas de conducción
              p Son aquellas destinadas al transporte de agua tratada desde la planta de tratamiento hasta los tanques de almacenamiento o hasta la red de distribución, generalmente sin entrega de agua en ruta.

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='alt')      


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-azul.p-4
          p.mb-0 Adicionalmente, estas líneas constan de una serie de dispositivos entre los que se encuentran desarenadores, válvulas de alivio, válvulas reguladoras, codos, tes, reductores, entre otros.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            .row.bg-titulo2.align-items-center.p-1.mb-4
              h3.texto-derecha2.mb-4 Planta de potabilización
              br
              br
              p Son el conjunto de estructuras y/o dispositivos que permiten adecuar el agua a los valores establecidos para su uso.


    .row.bg-titulo1.align-items-center.p-1.mb-4
      h3.texto-derecha.mb-4 Tanques de almacenamiento y compensación

    .row.justify-content-center.align-items-center.mb-5
      .bg-fondo2.p-3
        .row.justify-content-center.align-items-center
          .col-lg-6
            p Son depósitos de agua que tienen la función de almacenar agua y compensar las variaciones que existen entre el caudal de entrada al tanque y el consumo normal de los suscriptores a lo largo del día. 

            .cajon.color-gris2.p-3.mb-3
              p.mb-0 El objetivo primordial de los tanques de compensación es cubrir las necesidades de la demanda de agua en los momentos pico, permitiendo una recuperación del volumen en las horas de bajo consumo para poder suministrar, sin problema, el agua demandada en las horas de máximo consumo.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', alt='alt')          


    .row.justify-content-center.mb-5
      .col-lg-6.mb-3
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt")
          .crd_hover_txt--body.texto-blanco
            h4.mb-3.mb-lg-5.text-center Redes de distribución
            p.my-0.my-lg-5.text-center.text-small Las líneas de aducción del acueducto son los conductos destinados a transportar por gravedad o por bombeo las aguas crudas desde los sitios de captación hasta las plantas de tratamiento, prestando excepcionalmente servicio de suministro de agua cruda a lo largo de su longitud. Las líneas de conducción son aquellas destinadas al transporte de agua tratada desde la planta de tratamiento hasta los tanques de almacenamiento o hasta la red de distribución, generalmente sin entrega de agua en ruta.

      .col-lg-6.mb-3
        .crd_hover_txt2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt")
          .crd_hover_txt--body.texto-blanco
            h4.mb-4.text-center Estación de bombeo
            p.my-5.text-center.text-small Es un conjunto de estructuras y equipos empleados cuando se requiera elevar el nivel de la línea piezométrica para vencer una diferencia de altura topográfica, las pérdidas por fricción y las pérdidas menores, siempre que las alternativas de ampliación de estaciones existentes y el aprovechamiento de la gravedad no resulten factibles.


    separador

    #t_1_2.titulo-segundo.color-acento-contenido
       h2 1.2 Tipos de agua

      
    .row.justify-content-center.align-items-center.mb-5
      p Existen diferentes tipos de agua según sus propiedades y su estado, esto es conocido como “Ciclo hidrológico o ciclo del agua”, los cuales según el RAS 2000 en su título B, define de la siguiente manera:

    .row.bg-titulo1.align-items-center.p-1.mb-3
      h3.texto-derecha.mb-4 Agua cruda  

    .row.justify-content-center.align-items-center.mb-3
      p es el agua natural que no ha sido sometida a proceso de tratamiento para su potabilización.

    .row.justify-content-center.mb-5
      p #[b El RAS 2000 en su título B], establece que durante la operación del pozo debe realizarse un muestreo de la calidad del agua cruda según las siguientes disposiciones:

      .col-lg-4.mb-3
        figure
          img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt")

      .col-lg-8
        TabsA.color-pestana-azul
          .tarjeta.tarjeta--gris.p-4(titulo="Nivel de complejidad bajo")
            h4 Nivel de complejidad bajo
            p Para el nivel de complejidad del sistema bajo debe realizarse un muestreo como mínimo cada mes, el cual debe incluir: coliformes totales y fecales y demanda bioquímica de oxígeno (DBO).

          .tarjeta.tarjeta--gris.p-4(titulo="Nivel de complejidad medio")
            h4 Nivel de complejidad medio
            p Para el nivel de complejidad del sistema medio debe realizarse un muestreo como mínimo cada semana, el cual debe incluir: coliformes totales y fecales, demanda bioquímica de oxígeno, sólidos suspendidos totales, pH, alcalinidad y dureza.

          .tarjeta.tarjeta--gris.p-4(titulo="Nivel de complejidad alto y medio alto")
            h4 Nivel de complejidad alto y medio alto
            p Para los niveles de complejidad del sistema alto y medio alto debe realizarse un muestreo diario, el cual debe incluir, además de lo exigido en los otros niveles, fluoruros, cloruros, hierro, alcalinidad total y dureza.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Los muestreos para determinar la calidad del agua deben ajustarse a #[b las Normas Técnicas NTC ISO 5667-3, NTC ISO 5667-11, GTC 30 y AWWA A-100, Sección 12.] Todos los registros de los resultados de las muestras deben guardarse y tenerse a disposición de la SSPD.

        p En caso de que la calidad del agua sea inferior a la mínima establecida en las normas ambientales correspondientes, la entidad encargada de la operación debe tomar las medidas de control de contaminación necesarias y adelantar un programa de recuperación del acuífero.

        .cajon.color-azul.p-4.mb-3
          p.mb-0 El RAS, también especifica que se debe tener seguridad en la calidad de las aguas crudas, para la elección de una fuente superficial, el consultor debe realizar el estudio de identificación de posibles fuentes de contaminación, valorar los riesgos y definir si la fuente es apta o no, por lo que se deben considerar las siguientes observaciones:

      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt")      


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--gris.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-3
              figure
                img(src="@/assets/curso/temas/tema1/img15.svg", alt="alt")

            .col-md-6.mb-4.mb-md-0
              p En las captaciones hechas en ríos, las aguas tienden a ser turbias, algunas veces coloreadas y en la gran mayoría de los casos reciben la descarga de aguas residuales, tanto domésticas como industriales que se han vertido aguas arriba. Las fuentes que toman aguas de lagos son más claras que las aguas de ríos, pero también están sujetas a la contaminación.

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              p Las fuentes que toman aguas de lagos son más claras que las aguas de ríos, pero también están sujetas a la contaminación.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img16.svg', alt='alt')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-3
              figure
                img(src="@/assets/curso/temas/tema1/img17.svg", alt="alt")

            .col-md-6.mb-4.mb-md-0
              p Las fuentes de agua localizadas en ríos pequeños y en quebradas de montaña son limpias y puras; en estado natural son apropiadas para el consumo humano. No obstante, estas aguas están expuestas a contaminación por acción eventual. 

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              p Por consiguiente, no pueden considerarse potables a menos que se tomen las medidas apropiadas para su protección: instalación de plantas de tratamiento, vigilancia de la cuenca, colocación de carteles o letreros y/o cercas para impedir la invasión de personas y/o animales.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img18.svg', alt='alt')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-3
              figure
                img(src="@/assets/curso/temas/tema1/img19.svg", alt="alt")

            .col-md-6.mb-4.mb-md-0
              p En todos aquellos casos en que se proyecten lagos artificiales mediante la construcción de embalses, deben tenerse en cuenta las condiciones futuras de la calidad del agua almacenada. 

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              p El consultor debe tener en cuenta el Decreto 1575 de 2007 en lo referente a las características físicas, químicas y microbiológicas del agua y el mapa de riesgo de calidad de agua en todos los casos.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img20.svg', alt='alt')


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img21.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.texto-blanco.mb-3 Reglamento técnico del sector de agua y saneamiento. Título B.
                  p.texto-blanco Para conocer e identificar todos los lineamientos sobre aguas crudas, lo invitamos a leer el documento Sistemas de acueducto el cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-primario(href="https://www.minvivienda.gov.co/sites/default/files/documentos/titulob-030714.pdf" target="_blank")
                    span.texto-negro Link
                    i.fas.fa-link.texto-negro

    .row.bg-titulo1.align-items-center.p-1.mb-5
      h3.texto-derecha.mb-4 Agua potable

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Es aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el decreto 1575 de 2007 y demás normas que la reglamenten, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal.

        .cajon.color-azul.p-4
          p.mb-0 La siguiente tabla presenta el valor máximo aceptable de las características físicas, químicas y microbiológicas del agua para consumo humano.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img22.svg', alt='alt')      


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9

        .titulo-sexto.color-adicional-1.mb-5
          h5 Tabla 1.
          br
          i.mb-0 Valores máximos aceptables dependiendo de la característica del recurso. 

        .tabla-a.color-adicional-1
          table
            caption Fuente: Aguas de occidente. (s.f). Preguntas frecuentes sobre la calidad del agua en los sistemas operados por aguas regionales EPM S.A. E.S.P [Tabla] (p.5). 
            thead
                <th colspan="2">Resolución 2115 de 2007</th>
            tbody
              tr
                th Características Físicas
                th Valor Máximo Aceptable
              tr(style='background-color: #F5FBFF')
                td Color aparente
                td.text-center 15
              tr
                td Olor y Sabor 
                td.text-center Aceptable 
              tr(style='background-color: #F5FBFF')
                td Turbiedad 
                td.text-center 2 
              tr(style='background-color: #00B7FC')
                th Características Químicas
                th Valor Máximo Aceptable
              tr
                td Color residual 
                td.text-center 0.3 a 2.0 
              tr(style='background-color: #F5FBFF')
                td PH
                td.text-center 6.5 a 9.0
              tr
                td Carbono Orgánico Total
                td.text-center 5.0
              tr(style='background-color: #F5FBFF')
                td Nitritos
                td.text-center 0.1
              tr
                td Nitratos
                td.text-center 10
              tr(style='background-color: #F5FBFF')
                td Alcalinidad Total
                td.text-center 200
              tr
                td Cloruros
                td.text-center 250
              tr(style='background-color: #F5FBFF')
                td Aluminio
                td.text-center 0.2
              tr
                td Dureza Total
                td.text-center 300

              tr(style='background-color: #F5FBFF')
                td Hierro Total
                td.text-center 0.3
              tr
                td Manganeso
                td.text-center 0.1
              tr(style='background-color: #F5FBFF')
                td Sulfatos
                td.text-center 250
              tr
                td Coliformes totales
                td.text-center 0 UFC/100 cm
              tr(style='background-color: #F5FBFF')
                td Coliformes fecales
                td.text-center 0 UFC/100 cm
              tr
                td Mercurio
                td.text-center 0,001
              tr(style='background-color: #F5FBFF')
                td Cianuro libre y disociable
                td.text-center 0,05
              tr(style='background-color: #00B7FC')
                th Características Microbiológicas
                th Valor Máximo Aceptable
              tr
                td Coliformes Totales
                td.text-center 0
              tr(style='background-color: #F5FBFF')
                td Escherichia coli
                td.text-center 0
              tr
                td Mesófilos
                td.text-center <100

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img23.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Para determinar si un agua se puede consumir, se utiliza el Índice de Riesgo de la Calidad del Agua para Consumo Humano (IRCA), que es el grado de riesgo de ocurrencia de enfermedades relacionadas con el no cumplimiento de las características físicas, químicas y microbiológicas del agua para consumo humano. El cálculo de dicho índice debe realizarse a cada una de las muestras de agua potable recolectadas en la red de distribución y posteriormente se determina un índice promedio mensual para el sistema de acueducto.

    .row.mb-5
      p La siguiente tabla nos presenta los niveles de riesgo de acuerdo con la clasificación IRCA y el significado de cada uno de esos niveles.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .titulo-sexto.color-adicional-1.mb-5
          h5 Tabla 2.
          br
          i.mb-0 Niveles de riesgo de acuerdo con clasificación IRCA.

        .tabla-a.color-adicional-1 
          table
            caption Fuente: Aguas de occidente (s.f). Preguntas frecuentes sobre la calidad del agua en los sistemas operados por aguas regionales EPM S.A. E.S.P [Tabla] (p.6).
            thead
              tr
                th Clasificación IRCA (%)
                th Nivel de Riesgo
                th(style='width:65%') IRCA mensual (Acciones)

            tbody
              tr
                td.text-center 80.1 - 100
                td.text-center INVIABLE SANITARIAMENTE
                td Calificación del Agua como <b>no apta para consumo humano</b>, por sobrepasar los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución y que causan un alto y permanente riesgo para la salud humana. Requiere gestión de la autoridad sanitaria, ambiental y de control.
              tr(style='background-color: #F5FBFF')
                td.text-center 35.1 - 80
                td.text-center ALTO
                td Calificación del Agua como <b>no apta para consumo humano</b>, por sobrepasar los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución y que causan un alto riesgo para la salud humana. requiere gestión directa de vigilancia máxima, especial y detallada por parte de la autoridad sanitaria, ambiental y de control.
              tr
                td.text-center 14.1 - 35
                td.text-center MEDIO
                td.text-center Agua <b>no apta para consumo humano</b>, por sobrepasar los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución y que causan un riesgo para la salud humana, el cual es susceptible de disminuir con una gestión directa de la persona presentadora del servicio público de acueducto. 
              tr(style='background-color: #F5FBFF')
                td.text-center 5.1 - 14
                td.text-center BAJO
                td El agua cumple con todos o casi todos los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución, <b>permitiendo que el Agua sea apta para consumo humano</b>, susceptible de mejoramiento.
              tr
                td.text-center 0 - 5
                td.text-center SIN RIESGO
                td Agua es apta para consumo humano, cumple con todos los valores máximos aceptables de las características físicas, químicas y microbiológicas relacionadas en la resolución, <b>permitiendo que el agua sea apta para el consumo humano.</b>



    separador

    #t_1_3.titulo-segundo.color-acento-contenido
       h2 1.3 Características físicas, químicas, organolépticas y microbiológicas del agua cruda y tratada

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Las características físicas, químicas, organolépticas y microbiológicas definen si el agua es potable o no, esto depende de los valores que se obtengan en la medición, para conocer estas características lo invitamos a ver el siguiente vídeo:

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.bg-titulo1.align-items-center.p-1.mb-5
      h3.texto-derecha.mb-4 Características microbiológicas

    .row.justify-content-center.align-items-center.mb-5
      p En el agua también encontramos diferentes características microbiológicas, las cuales se describen en el video que se expone a continuación:

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    separador

    #t_1_4.titulo-segundo.color-acento-contenido
       h2 1.4 Normatividad para agua potable: conceptos, aplicación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.svg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Durante los diferentes contenidos se ha recalcado la importancia de conocer, aplicar y cumplir el marco normativo de referencia para el desarrollo de las actividades inherentes a los sistemas de potabilización y saneamiento. A continuación se presenta una relación de las principales normas aplicables en el contexto de agua potable y algunos de sus artículos.


    .bg2-tema1
      .row.justify-content-center.align-items-center.mb-5
        .col-2.col-lg-1
          figure
            img(src='@/assets/curso/temas/tema1/img25.svg', alt='alt') 

        .col-10.col-lg-11
          p #[b El Decreto 1575 de 2007], establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano con los artículos que se exponen a continuación: 

      .row.justify-content-center.align-items-center.mb-5
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Artículo 1. Objeto y campo de aplicación")
            .row
              .col-md-6.mb-4.mb-md-0
                h3.mb-5 Artículo 1. Objeto y campo de aplicación

                p #[b Objeto.] Establecer el sistema para la protección y control de la calidad del agua, con el fin de monitorear, prevenir y controlar los riesgos para la salud humana causados por su consumo, exceptuando el agua envasada.

                p #[b Aplicación.] Todas las personas prestadoras que suministren o distribuyan agua para consumo humano, ya sea cruda o tratada, en todo el territorio nacional, independientemente del uso que de ella se haga para otras actividades económicas, a las direcciones territoriales de salud, autoridades ambientales y sanitarias y a los usuarios. 

            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img26.svg', alt='alt')

          .py-3.py-md-4(titulo="Artículo 4. Responsables.")
            .row
              .col-md-6
                h3.mb-5 Artículo 4. Responsables. 

                p La implementación y desarrollo de las actividades de control y calidad del agua para consumo humano, será responsabilidad de los Ministerios de la Protección Social y de Ambiente, Vivienda y Desarrollo Territorial, la Superintendencia de Servicios Públicos Domiciliarios, el Instituto Nacional de Salud, las Direcciones Departamentales Distritales y Municipales de Salud, las personas prestadoras que suministran o distribuyen agua para consumo humano y los usuarios, para lo cual cumplirán las funciones indicadas en los artículos siguientes.  

              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img27.svg', alt='alt')

          .py-3.py-md-4(titulo="Artículo 9. Responsabilidades")
            .row
              .col-md-6
                h3.mb-5 Artículo 9. Responsabilidades de las personas prestadoras.

                p Realizar el control de las características físicas, químicas y microbiológicas del agua para consumo humano, como también de las características adicionales definidas en el mapa de riesgo o lo exigido por la autoridad sanitaria de la jurisdicción. 

              .col-md-6.mb-4.mb-md-0
                figure.mb-3
                  img(src='@/assets/curso/temas/tema1/img28.svg', alt='alt')

              p Lavar y desinfectar antes de la puesta en funcionamiento y como mínimo dos (2) veces al año, los tanques de almacenamiento de aguas tratadas. 

              p Lavar y desinfectar, antes de ponerlos en operación y cada vez que se efectúen reparaciones en ellos, los pozos profundos y excavados a mano para captación de agua subterránea, las estructuras de potabilización y las tuberías de distribución de agua para consumo humano.

              p.mb-0 Drenar periódicamente en aquellos puntos de la red de distribución que presentan zonas muertas o de baja presión.

              p Cuando la persona prestadora que suministra o distribuye agua para consumo humano preste el servicio a través de medios alternos como son carrotanques, pilas públicas y otros, se debe realizar el control de las características físicas, químicas y microbiológicas del agua; como también de las características adicionales definidas en el mapa de riesgo o lo exigido por la autoridad sanitaria de la jurisdicción, según se establezca en la reglamentación del presente decreto. 


    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img25.svg', alt='alt') 

      .col-10.col-lg-11
        p #[b Resolución 2115 de 2007:] por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano, veamos a mayor detalle lo que indica esta resolución:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        .row.justify-content-center.align-items-center
          .col-lg-10.dotted-border.p-4
            .row.justify-content-center.align-items-center
              .col-lg-10.mb-3
                figure
                  img(src='@/assets/curso/temas/tema1/img33.svg', alt='alt')

              p.text-center Características físicas y químicas del agua para consumo humano (Valores máximos aceptables). 

      .col-lg-7.dotted-border.p-3.mb-3
        p Artículo 14.  Cálculo del IRCA.
        p Artículo 11.  Características microbiológicas (Valores máximos aceptables).
        p Artículo 15.  Clasificación de nivel de riesgo.
        p Artículo 21.  Frecuencias y número de muestras de control de la calidad física y química del agua para consumo humano que debe ejercer la persona prestadora.
        p.mb-0 Artículo 22.  Frecuencias y número de muestras de control de la calidad microbiológica del agua para consumo humano que debe ejercer la persona prestadora.





    .bg2-tema1
      .row.justify-content-center.align-items-center.mb-5
        .col-2.col-lg-1
          figure
            img(src='@/assets/curso/temas/tema1/img25.svg', alt='alt') 

        .col-10.col-lg-11
          p #[b Resolución 811 de 2008:] por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concertadamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución, Revisemos lo que describe esta resolución:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/img30.svg' alt='AvatarTop')
            .tarjeta.tarjeta-blanca
              .p-3
                h4 Artículo 2.
                p Criterios para puntos de recolección de muestras en red de distribución

        .col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/img31.svg' alt='AvatarTop')
            .tarjeta.tarjeta-blanca
              .p-3
                h4 Artículo 3.
                p Número mínimo de puntos de muestreo en la red de distribución.

        .col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/img32.svg' alt='AvatarTop')
            .tarjeta.tarjeta-blanca
              .p-3
                h4 Artículo 4.
                p Identificación del punto de muestreo.


    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido
       h2 1.5 Procesos y operaciones unitarias

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema1/img34.png', alt='alt')
      .col-lg-11
        .bg-fondo3.p-4
          p Los procesos y operaciones unitarias son etapas que incluyen cambios físicos o químicos para realizar el tratamiento del agua cruda, y los procesos que se seleccionan dependen del nivel de complejidad del sistema.


    .row.bg-titulo3.align-items-center.p-1.mb-4
      h3.text-white.my-3 Niveles de complejidad del sistema


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img35.svg', alt='alt')

      .col-lg-7
        .cajon.color-gris.p-4.mb-3
          p.mb-0 Para conocer los procesos y operaciones unitarias que se deben tener en cuenta para la potabilización de agua, el Ministerio de Vivienda en el RAS 2000, título A, define los niveles de complejidad de los sistemas de acuerdo con el número de habitantes en la zona urbana del municipio, su capacidad económica y el grado de exigencia técnica que se requiera para adelantar el proyecto.

        p Para todo el territorio nacional se establecen los siguientes niveles de complejidad:

        .row.justify-content-center.align-items-center
          .col-5.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img36.svg', alt='alt').img36-tm1

          .col-9.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img37.svg', alt='alt').img37-tm1  

          .col-9.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img38.svg', alt='alt').img38-tm1

          .col-9.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img39.svg', alt='alt').img39-tm1


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9

        .titulo-sexto.color-adicional-1.mb-5
          h5 Tabla 3.
          br
          i.mb-0 Asignación del nivel de complejidad.

        .tabla-a.color-adicional-1 
          table
            caption Fuente: Ministerio de Desarrollo Económico. (2010). Reglamento técnico del sector de Agua potable y Saneamiento básico [RAS]. título A [Tabla]. (p.9)
            thead
              tr
                th.text-center Nivel de complejidad
                th.text-center Población en la zona urbana<sup>(1)</sup> (habitantes)
                th.text-center Capacidad económica de los usuarios<sup>(2)</sup>
            tbody
              tr
                td.text-center Bajo
                td.text-center < 2500
                td.text-center Baja
              tr(style='background-color: #F5FBFF')
                td.text-center Medio
                td.text-center 2501 a 12500
                td.text-center Baja
              tr
                td.text-center Medio Alto
                td.text-center 12501 a 60000
                td.text-center Media
              tr(style='background-color: #F5FBFF')
                td.text-center Alto
                td.text-center > 60000
                td.text-center Alta


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img21.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.texto-blanco.mb-3 Reglamento técnico del sector de agua y saneamiento Titulo A.
                  p.texto-blanco Con el propósito de conocer e identificar los componentes los niveles de complejidad te invitamos a leer el documento  Aspectos generales de los sistemas de agua potable y saneamiento básico, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.justify-content-center.align-items-center.mb-5
      p #[b De acuerdo con el RAS 2000, título C], los procesos que conforman un sistema convencional de potabilización del agua son: captación del agua, remoción de material flotante y sólidos gruesos mediante rejillas, pretratamiento, coagulación, floculación, sedimentación, filtración, desinfección, estabilización y distribución del agua al sistema de redes de acueducto (p.75). 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8

        .titulo-sexto.color-adicional-1.mb-5
          h5 Figura 1.
          br
          i.mb-0 Sistema convencional de tratamiento de agua potable.

        figure
          img(src='@/assets/curso/temas/tema1/img40.svg', alt='alt')
          
          figcaption.mt-3 Fuente: Ministerio de Desarrollo Económico. (2010). Reglamento técnico del sector de Agua potable y Saneamiento básico [RAS]. título

    .row.bg-titulo4.align-items-center.p-1.mb-4
      h3.text-white.my-3 Rejillas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img41.svg', alt='alt')

      .col-lg-8
        p #[b De acuerdo con el RAS 2000], título B, la captación de aguas superficiales a través de rejillas se utiliza especialmente en los ríos de zonas montañosas, los cuales están sujetos a grandes variaciones de caudal entre los períodos de estiaje y los períodos de crecientes máximas. El elemento base del diseño es la rejilla de captación, la cual debe ser proyectada con barras transversales o paralelas a la dirección de la corriente. Los otros tipos de toma también deben tener rejillas, con el fin de limitar la entrada de material flotante hacia las estructuras de captación.

        .row.bg-titulo1.align-items-center.p-1.mb-3
          h3.texto-derecha.mb-4 Elementos de diseño de las rejillas

        p En todo diseño de rejillas deben contemplarse los siguientes elementos: el caudal correspondiente al nivel de aguas mínimas en el río, el caudal requerido por la población que se va a abastecer y el nivel máximo alcanzado por las aguas durante las crecientes, con un período de retorno mínimo de 20 años.  Le invitamos a que revise este tema con mayor profundidad a continuación:


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/img42.svg', alt='alt')
            
          h2.text-center.mt-5 Inclinación de las rejillas:
          p.text-center.mb-0 En el caso de rejillas utilizadas para la captación de aguas superficiales en cursos de agua de zonas montañosas, la rejilla debe estar inclinada entre 10% y 20% hacia la dirección aguas abajo. En el caso de otros tipos de estructuras de captación, las rejillas deben tener una inclinación de 70° a 80° con respecto a la horizontal.
        
        .col-md.tarjeta.color-primario.text-white.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/img43.svg', alt='alt')
            
          h2.text-center.mt-5 Separación entre barrotes
          p.text-center.mb-0 Separación entre barrotes: la separación entre barrotes, para el caso de estructuras de captación en ríos con gravas gruesas, debe ser entre 75 mm y 150 mm. Para ríos caracterizados por el transporte de gravas finas, la separación entre barrotes debe ser entre 20 mm y 40 mm.
        
        .col-md.tarjeta.color-secundario.text-white.p-4
          .row.justify-content-center.align-items-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema1/img44.svg', alt='alt')
            
          h2.text-center.mt-5 Ancho de la rejilla 
          p.text-center.mb-0 Ancho de la rejilla: el ancho de la rejilla debe depender del ancho total de la estructura de captación y el caudal mínimo de la fuente (p.71).


    .row.bg-titulo4.align-items-center.p-1.mb-4
      h3.text-white.my-3 Desarenador

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img45.svg', alt='alt')

      .col-lg-8
        p #[b De acuerdo con el RAS 2000, título B], es un componente destinado a la remoción de las arenas y sólidos que están en suspensión en el agua, mediante un proceso de sedimentación. Este debe instalarse en el primer tramo de la aducción, lo más cerca posible a la captación de agua, de acuerdo con las condiciones topográficas y geológicas de la zona.

      .cajon.color-gris.p-4
        p Preferiblemente, los desarenadores deben ser del tipo autolimpiante. Los desarenadores deben contener canales o pasos directos para su operación mientras se efectúa el mantenimiento. Los elementos que debe contener el diseño de un desarenador son los siguientes:

    
    .row.justify-content-center.align-items-center.mb-5
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img46.svg', alt='alt')

        .tarjeta.color-acento-contenido.p-3(x="3.9%" y="37%" numero="+")
          p Deben proyectarse los dispositivos de entrada y salida de modo que aseguren una buena distribución transversal del flujo y se reduzca a un mínimo la posibilidad de corto circuito dentro del desarenador. La velocidad de paso en los orificios de la pantalla de entrada será inferior a 0.10 m/s. 

        .tarjeta.color-acento-contenido.p-3(x="7.8%" y="100%" numero="+")
          p La tubería o canal de llegada debe colocarse en el eje longitudinal del desarenador. Igual sucede en el caso de un canal situado aguas arriba del desarenador.

        .tarjeta.color-acento-contenido.p-3(x="28%" y="27%" numero="+")
          p En la entrada debe instalarse un dispositivo para distribuir uniformemente el flujo a lo ancho de la sección transversal del desarenador. 

        .tarjeta.color-acento-contenido.p-3(x="44.6%" y="31%" numero="+")
          p El dispositivo de salida debe tener un canal recolector provisto de un vertedero que asegure una distribución uniforme del flujo en toda la sección transversal del desarenador. 

        .tarjeta.color-acento-contenido.p-3(x="35.8%" y="60%" numero="+")
          p El dispositivo de rebose debe tener un vertedero lateral ubicado cerca de la entrada del desarenador. 

        .tarjeta.color-acento-contenido.p-3(x="35.7%" y="86%" numero="+")
          p El dispositivo de limpieza debe ubicarse en el área de almacenamiento. 

        .tarjeta.color-acento-contenido.p-3(x="50%" y="74%" numero="+")
          p El desarenador siempre debe ser del tipo autolimpiante. Para esto, la estructura deberá tener tolvas en el fondo con pendiente superior a la inercia del material silíceo para permitir la evacuación hidráulica del material depositado en dichas estructuras

        .tarjeta.color-acento-contenido.p-3(x="62.5%" y="62%" numero="+")
          p Las tuberías o canales de rebose y/o limpieza se unirán a una tubería o canal de descarga, los cuales deben tener un diámetro o ancho no menor de 0.25 m y/o una pendiente no menor del 2 %. 

        .tarjeta.color-acento-contenido.p-3(x="77%" y="54%" numero="+")
          p Debe ubicarse una caja de inspección en la tubería de limpieza adyacente o lo más cerca posible de la descarga de arenas (p.86).

    .row.bg-titulo4.align-items-center.p-1.mb-4
      h3.text-white.my-3 Coagulación


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p #[b El RAS 2000, título C], establece que los procesos que se llevan a cabo en esta etapa del tratamiento del agua potable son la dosificación y la mezcla rápida. 

        .cajon.color-gris.p-4
          p.mb-0 Una vez adicionados los coagulantes y auxiliares de la coagulación deben dispersarse rápida y homogéneamente en el cuerpo de agua, para lo cual deben emplearse las unidades de mezcla rápida. Estos equipos pueden ser hidráulicos o mecánicos.

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img47.svg', alt='alt')        


    .row.justify-content-center.align-items-center.mb-5
      p Entre las unidades hidráulicas de mezcla rápida que pueden usarse se encuentran el resalto hidráulico, los vertederos, los mezcladores estáticos y los difusores; entre las unidades mecánicas de mezcla rápida que pueden emplearse se encuentran los mezcladores mecánicos. Para los niveles de complejidad de sistema bajo y medio, no se recomienda el empleo de mezcladores mecánicos sino hidráulicos.

      p Para garantizar que la coagulación - floculación esté realizándose correctamente, deben verificarse los siguientes parámetros:

      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img48.svg', alt='alt')

      .col-lg-9
        ul.lista-ul--color.lista-ul--separador.fa-ul2.mb-3
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La eficiencia de remoción de la turbiedad en el agua decantada o filtrada, si se trata de un tratamiento por filtración directa.
          li.l-p
            i.fas.fa-check-circle.color-vineta1
            | La eficiencia de remoción del color en el agua decantada o filtrada, o del carbono orgánico total (COT).
          li.l-p 
            i.fas.fa-check-circle.color-vineta1
            | La concentración residual de Al (+++) o Fe (+++) del agua filtrada o efluente de la planta, la cual debe cumplir con los valores máximos aceptables establecidos en Resolución 2115 de 2007, o la norma que la modifique o reemplace.

        .cajon.color-gris.p-4
          p.mb-0 De la eficiencia de este proceso dependen los rendimientos de todos los tratamientos posteriores al agua, como la sedimentación, la filtración y la desinfección.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img21.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.texto-blanco.mb-3 Reglamento técnico del sector de agua y saneamiento. Titulo C.
                  p.texto-blanco Para identificar todas las condiciones de operación de la coagulación, lo invitamos a leer el documento Potabilización de agua el cual se encuentra en el material complementario,  se sugiere su descarga.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.bg-titulo4.align-items-center.p-1.mb-4
      h3.text-white.my-3 Flocuación


    .row.justify-content-center.align-items-center.mb-5
      p #[b El RAS 2000, título C,] establece que en el proceso de floculación pueden emplearse los floculadores hidráulicos, mecánicos o hidromecánicos, veamos estos tipos de floculadores de manera detallada: 

    .row.justify-content-center.align-items-center.mb-5
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Floculadores hidráulicos")
          .row.justify-content-center.align-items-center
            .col-md-8.mb-4.mb-md-0
              h3.mb-5 Floculadores hidráulicos

              p Utilizan el cambio de dirección de flujo del agua, inducido por diferentes mecanismos, para producir la turbulencia necesaria y promover la formación del floc, además derivan su energía de la carga de velocidad que el líquido adquiere en su tránsito por un conducto. Entre los floculadores hidráulicos que pueden ser implementados, se encuentran: 

              .row
                .col-lg-6
                  ul.lista-ul--color.fa-ul2.mb-3
                    li
                      i.fas.fa-check-circle.color-vineta1
                      | Flujo horizontal. 
                    li
                      i.fas.fa-check-circle.color-vineta1
                      | Flujo vertical.
                    li
                      i.fas.fa-check-circle.color-vineta1
                      | El floculador Alabama. 
                
                .col-lg-6
                  ul.lista-ul--color.fa-ul2.mb-3
                    li
                      i.fas.fa-check-circle.color-vineta1
                      | Flujo helicoidal. 
                    li
                      i.fas.fa-check-circle.color-vineta1
                      | El floculador de lechos porosos. 

            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img49.svg', alt='alt')

        .py-3.py-md-4(titulo="Floculadores mecánicos")
          .row.justify-content-center.align-items-center
            .col-md-8
              h3.mb-5 Floculadores mecánicos 

              p Requieren de un equipo electromecánico para mover un agitador de paletas. En el nivel del sistema bajo, se deben evitar este tipo de floculadores.   

              ul.lista-ul--color.fa-ul2.mb-3
                li
                  i.fas.fa-check-circle.color-vineta1
                  p.mb-0 <b>Giratorios,</b> la agitación se produce por el giro de paletas alrededor de un eje horizontal o vertical. 
                li
                  i.fas.fa-check-circle.color-vineta1
                  p.mb-0 <b>De turbina,</b> la agitación se produce mediante grupos de turbinas dispuestos a lo largo de un eje horizontal que se instalan en tanques alargados.
                li
                  i.fas.fa-check-circle.color-vineta1
                  p <b>Reciprocantes,</b> la agitación se produce por desplazamiento vertical hacia arriba y abajo de unas parrillas dentro del agua. 

            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img50.svg', alt='alt')

        .py-3.py-md-4(titulo="Floculadores hidromecánicos")
          .row.justify-content-center.align-items-center
            .col-md-8
              h3.mb-5 Floculadores hidromecánicos

              p Utilizan la energía hidráulica a la entrada para mover una turbina de impulso, la cual gira con baja cabeza hidráulica. Esta transmite su movimiento a su eje, el cual va en posición horizontal a través de poleas y correas de poliuretano.

              p Es una solución intermedia entre floculadores mecánicos e hidráulicos, no consume energía eléctrica y se adapta a ciertas configuraciones de la planta de tratamiento, se aprovecha el agua para producir la cabeza hidráulica suficiente y mover la rueda Pelton.


            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img51.svg', alt='alt')

    .row.bg-titulo4.align-items-center.p-1.mb-5
      h3.text-white.my-3 Sedimentador

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img52.svg', alt='alt').img-52-tm1

      .col-lg-10
        .tarjeta-gris.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2
            .col-lg-10
              p.mb-0 El proceso de sedimentación debe realizarse siempre que se tiene que producir coagulación de barrido o por adsorción, para poder remover la turbiedad. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema1/img53.svg', alt='alt')      


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .cajon.color-gris.p-4.mb-4
          p.mb-0 Los sedimentadores, que pueden emplearse son el de flujo horizontal y flujo vertical. También puede realizarse la sedimentación en unidades con manto de lodos, los que a su vez se dividen en sedimentadores de manto de lodos de suspensión hidráulica y sedimentadores de manto de lodos de suspensión mecánica. Puede además emplearse los sedimentadores de alta tasa.

        p.mb-3 Para los niveles de complejidad de sistema bajo y medio se acepta el empleo del sedimentador de flujo horizontal o de alta tasa. En estos niveles no se aceptan en ningún caso los sedimentadores de manto de lodos, de suspensión mecánica o hidráulica. Para todos los niveles de complejidad del sistema, deben realizarse estudios de tratabilidad en el laboratorio y/o planta piloto para determinar los parámetros de diseño.

      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img54.svg', alt='alt')       

    .row.bg-titulo4.align-items-center.p-1.mb-5
      h3.text-white.my-3 Filtración

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img55.svg', alt='alt')

      .col-lg-8 
        p #[b El RAS (2000), en su Título C,] establece que en el proceso convencional la filtración puede ser rápida o lenta. La filtración rápida se divide en filtración ascendente o descendente y puede filtrarse por gravedad o por presión. El lavado del medio filtrante puede ser intermitente o continuo. También puede emplearse la filtración lenta sola o con diversas etapas de prefiltración.

        .cajon.color-gris.p-4.mb-4
          p.mb-0 El medio filtrante granular convencional puede estar constituido por arena, antracita, arena de alta densidad, granate, ilmenita o carbono activado granular, generalmente dispuesto sobre un lecho de grava.

        p A continuación, se establecen los principales métodos que pueden emplearse para controlar la tasa de filtración, esto es:


    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img56.svg' alt='AvatarTop')
          .tarjeta.tarjeta-gris2
            .p-3
              h3.text-center Filtración de tasa constante
              p Es el tipo de control tradicional de los filtros rápidos convencionales. Debe emplearse un controlador variable que mantenga una pérdida de carga total constante al abrirse gradualmente la válvula, a medida que el lecho se colmata. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img57.svg' alt='AvatarTop')
          .tarjeta.tarjeta-azul
            .p-3
              h3.text-center Filtración afluente y nivel variable 
              p.text-center El caudal debe distribuirse por igual mediante un vertedero de entrada sobre cada filtro, el vertedero de control debe quedar en un nivel superior al nivel máximo, la unidad debe ser profunda para permitir una variación del nivel, debe introducirse un sistema de disipación de energía.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img58.svg' alt='AvatarTop')
          .tarjeta.tarjeta-gris2
            .p-3
              h3.text-center Pérdida de carga variable
              p.text-center El afluente debe entrar al filtro por debajo del nivel de la canaleta de lavado. Debe contar con un vertedero de control, una válvula que evite el vaciado del filtro al comienzo de las carreras.

    .row.bg-titulo4.align-items-center.p-1.mb-5
      h3.text-white.my-3 Desinfección

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4
        p #[b El RAS (2000), en título C], establece que entre los procesos de desinfección que pueden realizarse está primordialmente la cloración, incluidos sus derivados, el dióxido de cloro, los hipocloritos y procedimientos como el de la cloraminación. Como desinfectantes complementarios se tienen el ozono y los rayos ultravioleta. 

        .cajon.color-gris.p-4
          p.mb-0 Para la desinfección por cloración, deben emplearse tanques de contacto en los niveles de complejidad de sistema medio alto y alto; en los otros niveles es opcional. El tanque debe proporcionar el tiempo necesario que garantice la desinfección del agua. No se recomienda el uso de cloro gaseoso en el nivel de complejidad del sistema bajo. Para este nivel se recomienda el empleo de compuestos en estado sólido o líquido, como: cal clorada, hipoclorito de calcio e hipoclorito de sodio. Todas las recomendaciones que aquí se dan son aplicables a los cuatro niveles de complejidad del sistema, a no ser que se especifique lo contrario.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img59.svg', alt='alt')      


    .row.bg-titulo3.align-items-center.p-1.mb-5
      h3.text-white.my-3 Estabilización y ablandamiento

    .row.justify-content-center.align-items-center.mb-5
      p.mb-4 #[b El RAS en su título C], también determina que el agua tratada a la salida de la planta no debe presentar propiedades corrosivas con respecto a las tuberías del sistema de distribución y del interior de las viviendas; el pH del agua debe ser próximo al de saturación. Si es necesario hacer uso de inhibidores que a la vez pueden ayudar a proteger la red de distribución de agua de la formación de biopelículas en su interior, éstos pueden utilizarse si son económicamente factibles.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img60.svg', alt='alt')

      .col-lg-8
        .cajon.color-gris.p-4.mb-3
          p.mb-0 Para proteger las tuberías de los agentes corrosivos presentes puede ajustarse la composición del agua, pH, concentración en iones de calcio y la alcalinidad al valor del equilibrio de saturación del carbonato de calcio para una temperatura del agua dada. El agua ideal debe tener una dureza total entre 40 mg/L y 60 mg/L de equivalente de carbonato de calcio (CaCO3), a un pH y alcalinidad que alcance las condiciones de saturación y una dureza de magnesio de no más que 36 mg/L para minimizar la formación de hidróxido de magnesio a temperaturas elevadas.
          
        p Los beneficios que deben obtenerse con el ablandamiento del agua son los siguientes: 

        .row.justify-content-center.align-items-center
          .col-lg-5
            ul.lista-ul--color.lista-ul--separador.fa-ul2.mb-3
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Control del crecimiento biológico.
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Un ligero grado de remoción de trazas orgánicas. 
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Economía de jabón y detergentes. 
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Mejor lavado de ropa y utensilios domésticos.
          .col-lg-1
          .col-lg-5
            ul.lista-ul--color.lista-ul--separador.fa-ul2.mb-3
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Disminución de incrustaciones en artefactos domésticos. 
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Mejor cocción y preparación de alimentos.
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Si se opera en forma correcta, puede prevenir la corrosión. 
              li.l-p
                i.fas.fa-check-circle.color-vineta2
                | Incremento en la eficacia de la filtración. 

    .row.justify-content-center.align-items-center.mb-5
      p Debe utilizarse el proceso de estabilización si es económicamente factible y si la calidad del agua lo permite, en caso contrario, debe emplearse otro método que esté comprobado eficientemente para controlar los problemas de corrosión en la red.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
