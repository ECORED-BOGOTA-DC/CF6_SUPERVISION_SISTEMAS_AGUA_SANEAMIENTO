<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-intro
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/introduccion/img1.svg', alt='alt')
        
        .col-lg-8
          .bg-tarjeta.p-4
            .row
              .col-1
              .col-11
                p El agua es un recurso natural esencial para la vida, gracias a los sistemas de potabilización y distribución es posible contar con este recurso en todos los hogares y diferentes lugares en los que se desarrollen actividades que involucren su uso; sin embargo, aún existen lugares en los que el agua no es de fácil acceso o la disponible no cumple con las condiciones para el consumo humano o la utilización en la industria.

                p Por lo anterior en el presente componente llevará a cabo una revisión de los temas asociados a la operación de unidades de potabilización, manejo de insumos químicos y control de calidad, entre otros. #[b Bienvenido.]





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
