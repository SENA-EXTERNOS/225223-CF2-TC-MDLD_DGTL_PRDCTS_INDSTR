<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-sexto.color-acento-botones(data-aos='fade-right')
      h5 Modelado digital de productos industriales
      br 
      span Sintesis: Fundamentos para la realización del boceto digital de un producto. 
    .row.justify-content-center.mb-4
      .col-lg-10
        p ¿Se imagina cómo sería el desarrollo industrial si no existieran herramientas digitales de diseño y fabricación? ¿Cuánto tiempo llevaría la ejecución de grandes obras de infraestructura sin la ayuda de softwares que realicen cálculos de forma rápida y precisa? Las herramientas CAD han apalancado el desarrollo de diferentes industrias, por esto, mientras más evolucionen, más rápido crecerán las industrias.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
