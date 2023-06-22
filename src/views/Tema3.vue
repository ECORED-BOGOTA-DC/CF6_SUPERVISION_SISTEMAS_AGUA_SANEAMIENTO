<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tratamiento de lodos y olores ofensivos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los residuos en las corrientes de agua, generan turbiedad en esta, trayendo consigo múltiples problemas, entre los que se encuentran los olores desagradables, riesgo a la salud humana, vegetal, animal  y finalmente contaminando el medio ambiente. Es importante conocer el tipo de lodos, con el fin de eliminar los contaminantes que poseen acorde a su tipo y poder iniciar el tratamiento adecuado y que pueda ser aplicado nuevamente una vez se haya logrado su estabilización. 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
       h2 3.1 Tratamiento de lodos

    .row.justify-content-center.align-items-center
      p <b>De acuerdo con el RAS 2000, título A</b>, los requisitos mínimos para el tratamiento y manejo de los lodos producidos en los procesos de sedimentación, y filtración producto de la operación de las plantas de tratamiento, son aplicables a los cuatro niveles de complejidad del sistema. 

      p La descarga de los lodos debe sujetarse a las siguientes especificaciones: 

    .row.justify-content-center.align-items-center.mt-5.bg-1-tema-3
      .col-lg-4.col-xs-12
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='alt')


      .col-lg-5
        .tarjeta.tarjeta--morada.p-4
          SlyderA(tipo="a")
            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-8.col-lg-2.mb-5
                figure
                  <center>
                    img(src='@/assets/curso/temas/tema3/img4.svg', alt='Texto que describa la imagen').width-img
                  </center>
                  

                p.text-center.mt-3 Para devolverlos directamente a la corriente de agua o descargarlos en alcantarillados, previo tratamiento, debe adquirirse un permiso de las autoridades competentes y deben realizarse estudios de impacto ambiental en el que se demuestre que no contravienen los artículos 72 y 73 del Decreto 1594 del 26 de junio de 1984 expedido por el Ministerio de Salud. 

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-8.col-lg-2.mb-5
                figure
                  <center>
                    img(src='@/assets/curso/temas/tema3/img5.svg', alt='Texto que describa la imagen').width-img
                  </center>
                  

                p.text-center.mt-3 Si no es posible lo anterior, se deben llevar a lagunas de almacenamiento en donde se decantan y por extrafiltración y evaporación se elimine el agua de arrastre hasta dejar el lodo semi solidificado. De allí debe extraerse por sistema mecánico y transportarlo al punto de disposición final. 

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-8.col-lg-2.mb-5
                figure
                  <center>
                    img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen').width-img
                  </center>
                  

                p.text-center.mt-3 Concentrar el lodo en concentradores, extraer dicho lodo y llevarlo a lagunas de secado en donde debe ser solidificado para luego transportarlo y depositarlo en el sitio que se acuerde.

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-8.col-lg-2.mb-5
                figure
                  <center>
                    img(src='@/assets/curso/temas/tema3/img7.svg', alt='Texto que describa la imagen').width-img
                  </center>
                  

                p.text-center.mt-3 Secar el lodo por sistemas mecánicos: filtros prensa, centrifugado, filtros al vacío, o camas de secado, extraer la pasta desecada que se produce en ellos y transportarla hasta el lugar de almacenamiento. 

            .row.justify-content-center.align-items-center.my-lg-4
              .col-lg-8.col-lg-2.mb-5
                figure
                  <center>
                    img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen').width-img
                  </center>
                  

                p.text-center.mt-3 La descarga final del agua lixiviada, si se hace a un cuerpo de agua, debe cumplir con las normas de vertimiento que trata el artículo 72 del Decreto 1594 del 26 de junio de 1984 del Ministerio de Salud.            
              

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
       h2 3.2 Olores ofensivos
    
    .row.justify-content-center.align-items-center.mt-5
      p <b>El RAS 2000, título A, en su artículo 171</b> establece que toda planta de tratamiento anaerobio debe contar con un sistema que permita el manejo y disposición final del biogás que no genere impactos negativos en la comunidad residente en los alrededores de la planta de tratamiento, bien sea por explosiones o malos olores. 

      p Para ello debe cumplirse con lo siguiente: 

  
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='alt')
    


    




</template>

<script>
export default {
  name: 'Tema3',
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
