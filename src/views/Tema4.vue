<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Pantallas táctiles
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style="background-color: #255065").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las pantallas táctiles son un recurso tecnológico intuitivo y rápido para hacer bocetos de objetos industriales, debido a su versatilidad en técnicas y colores ofrecen un lienzo para trabajar en cualquier momento.  Los dispositivos tipo tablets ofrecen la descarga de aplicaciones para realizar dibujos y bocetos en diferente tamaños, técnicas y formatos.   
    Separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 4.1 Aspectos generales de las pantallas 
    p.mb-5(data-aos='fade-right') En el siguiente video encontrará información sobre algunas características de las pantallas táctiles. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 
    #t_4_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 4.2 Herramientas y uso 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos='fade-right'): img(src='@/assets/curso/temas/tema4/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Este tipo de pantallas cuenta con diferentes características y herramientas como lápices, pinceles o borradores de diferentes tamaños de acuerdo a la necesidad gráfica del  usuario, además, algunas incluyen un lápiz electrónico que simula el uso de uno real. Al momento de interactuar con estos dispositivos es necesario tener en cuenta la marca, el modelo y la aplicación o software instalado, pues de estas características dependerán las funcionalidades al desarrollar los trabajos( bocetos, dibujos) y su posterior impresión. 
    .titulo-dot.d-flex.mb-3
      i.fas.fa-circle.fa-xs(style='color:#ff9a0c').me-3
      h3 Pantallas táctiles
    p.mb-5(data-aos='fade-right') Conozca algunas características de las pantallas táctiles. 
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .infografia-editada
          ImagenInfograficaB.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema4/4.png', alt='Texto que describa la imagen')
            div(x="10%" y="50%" tooltip="" numero="1")
              ul.lista-ul--color
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Un lápiz de punta fina.

                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Un aerógrafo que añade color de la mejor forma. 
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Marcadores de colores con un acabado exacto a los físicos. 
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Para la caligrafía o lettering con una pluma de punta de cincel. 

                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  |  Un bolígrafo que tiene más fuerza y nitidez que el lápiz.
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Un pincel básico para añadir diferentes colores y luego mezclarlos.
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Un rotulador para una mina más fina.

                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Para dibujar y dejar trazos más fuertes una pluma con tinta.
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Para difuminar los trazos existe la opción ‘Borrón de transferencia’ y para más dureza el botón de desenfoque. 
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Un afilador para darle nitidez a lo que toque. 
                li.mb-4
                  i.fas.fa-square.fa-xs(style="color: #ff9500")
                  | Una goma de borrar dura y una suave para borrar con fuerza o en degrade.
            div(x="40%" y="10%" tooltip="" numero="2").d-flex.align-items-center
              p.m-auto La barra de herramientas se encuentra de manera horizontal en la parte superior, donde podrá tener un acceso directo a las opciones ‘Deshacer/Rehacer’, #[em ‘Zoom’], ‘Girar, ‘Seleccionar’, ‘Cortar’, ‘Transformación rápida’, ‘Terraplén de Inundación’, ‘Añadir capa de texto’, ‘Elipse’, ‘Regla curva y francesa’, ‘Guías de Perspectiva’, ‘Simetría’, ‘Movimiento constante’, ‘Movimiento predictivo’ y ‘Dibujar estilo’. 
            div(x="73%" y="70%" tooltip="" numero="3")
              p La anterior herramienta suele confundirse con la de ‘disco de color’, sin embargo, esta última ayuda a ahorrar espacio en la pantalla, similar al ‘Cepillo de disco’, que al seleccionarlo arroja una pequeña con una completa paleta de colores. 
                br
                br
                |Las imágenes utilizadas son de la aplicación Sketchbook que convierte cualquier dispositivo Android en una pantalla táctil de dibujo.
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #ffefd9')
          p.mb-0 No olvide entrar al menú principal y explorar los demás recursos disponibles en este componente formativo, también encontrará la actividad didáctica, que le ayudará a recordar algunos temas estudiados. 
              


</template>

<script>
export default {
  name: 'Tema4',
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
