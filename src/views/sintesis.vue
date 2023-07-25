<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La operación de unidades de potabilización de agua, requieren de un conocimiento amplio sobre el uso de unidades, aplicación de químicos, tratamiento de elementos indeseables en el agua y todo lo que implica el mejoramiento de la calidad del agua que se consume o utiliza en actividades que se requiera, es por ello que a través del esquema que se expone a continuación se reflejan los temas necesarios para manipular correctamente los sistemas de potabilización.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra la síntesis del componente formativo: Manipular sistemas de potabilización, la operación de unidades de potabilización, instrumentos y equipos para el control de procesos de potabilización y tratamiento de lodos y olores ofensivos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
