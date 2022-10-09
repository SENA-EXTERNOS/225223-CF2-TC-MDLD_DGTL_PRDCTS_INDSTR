<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Bienvenido a este componente formativo. El desarrollo del contenido se basará en el dibujo digital y, por medio de éste, se podrá ver cómo la tecnología ha aportado grandes avances al dibujo en general y se han desarrollado diferentes programas de computación que faciliten el proceso y la elaboración del dibujo técnico como tal permitiendo crear rápidamente y con mayor precisión, productos industriales. Observe el siguiente video sobre la evolución tecnológica para crear un boceto digital con #[em software] especializado y herramientas CAD.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
