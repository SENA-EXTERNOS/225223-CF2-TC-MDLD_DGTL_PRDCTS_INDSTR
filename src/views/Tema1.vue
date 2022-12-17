<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 #[em Software] Corel Draw
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Corel Draw] es un programa informático de dibujo que facilita la creación de diseños profesionales, desde simples logos de empresa hasta grandes y sorprendentes ilustraciones a nivel técnico. Tiene diferentes herramientas que permiten trabajar de manera óptima en la producción de gráficos de alta calidad en diseño.
    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1 Aspectos generales del #[em software]
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/2.svg' alt='AvatarTop')
          .tarjeta(style='background-color: #e8e8e8')
            .p-4.mt-3.text-center
              p Este programa permite crear dibujos a base de vectores con diferentes formas como rectas o curvas, simples o complejas, abiertas o cerradas, todas ellas formando un objeto al que igualmente se le pueden dar cualidades en su contorno o relleno, entre las más utilizadas.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/3.svg' alt='AvatarTop')
          .tarjeta(style='background-color: #e8e8e8')
            .p-4.mt-3.text-center
              p Usando Corel Draw es posible crear dibujos y diseños variados desde lo sencillo hasta lo complejo, además de ello, al ampliarlos, el tamaño no se deforma ni se pierde calidad en la imagen. 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
          .tarjeta(style='background-color: #e8e8e8')
            .p-4.mt-3.text-center
              p Este #[em software] es muy versátil, es usado normalmente para el diseño de logos, diagramaciones de revistas, volantes, folletos, tarjetas, etc. 
    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.2 Herramientas y uso 
    p.mb-5(data-aos='fade-right') Los menús laterales que están dentro de las herramientas de este programa, se abren para mostrar un conjunto de posibilidades de edición que contiene CorelDRAW. 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/5.png' alt='AvatarTop')
      .col-lg-7(data-aos="fade-left")
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #ffefd9')
          p.mb-0 Se ubica una pequeña flecha, que se encuentra en la esquina derecha (inferior) de un botón de la caja de herramientas, donde   indica que se trata de un menú lateral: para dar un ejemplo, el menú de las herramientas de #[b Forma.]
        p.mb-5(data-aos='fade-right') Al dar clic en la flecha de un menú lateral, se abren variadas herramientas. Para expandir este menú, haga clic en los íconos o flechas pequeñas ubicadas en el extremo del menú. 
    .titulo-dot.d-flex.mb-5
      i.fas.fa-circle.fa-xs(style='color:#ff9a0c').me-3
      h3 Herramientas principales de Corel Draw
    .row.justify-content-center.mb-5
      .col-lg-8
        .infografia-editada
          ImagenInfograficaB.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')
            div(x="5.5%" y="-6%" tooltip="tooltip de max 35 caracteres" numero="1")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/7.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n1.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta puntero:] permite seleccionar un objeto situado en el área de trabajo para ser modificado o para aplicar otra herramienta o acción. Una vez seleccionado el objeto, aparecerá rodeado de ocho cuadros negros o tiradores que permitirán modificar sus dimensiones picando y arrastrando de ellos.
            div(x="19.5%" y="-6%" tooltip="tooltip de max 35 caracteres" numero="2")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/8.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n2.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta forma:] permite modificar los nodos de un objeto, se comporta diferente en formas regulares (rectángulo, elipse o polígonos), mientras que en formas irregulares despliega una serie de posibilidades de modificación de un punto a través de su barra de propiedades. Es muy útil cuando estamos vectorizando.
            div(x="34.5%" y="-6%" tooltip="tooltip de max 35 caracteres" numero="3")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/9.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n3.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta zoom:] permite reducir o ampliar la vista de un dibujo. Desde la barra de propiedades podemos seleccionar distintos porcentajes de visualización y presentación de la página de trabajo.
            div(x="49%" y="-6%" tooltip="tooltip de max 35 caracteres" numero="4")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/10.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n4.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta mano alzada:] permite dibujar segmentos creados a través de nodos consecutivos para componer el contorno de una figura o forma irregular. Agrupa el menú lateral ‘CURVAS’. 
            div(x="63%" y="-6%" tooltip="tooltip de max 35 caracteres" numero="5")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/11.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n5.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta dibujo inteligente:] convierte los trazos a mano alzada en formas básicas y curvas suavizadas.
            div(x="78%" y="-6%" tooltip="tooltip de max 35 caracteres" numero="6")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/12.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n6.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta rectángulo:] permite dibujar rectángulos y cuadrados. La herramienta rectángulo de 3 puntos ayuda a dibujar un rectángulo arrastrando el cursor para trazar la línea base y haciendo clic para definir la altura.
            div(x="92%" y="-6%" tooltip="tooltip de max 35 caracteres" numero="7")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/13.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n7.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta elipse:] permite dibujar elipses o círculos manteniendo pulsada la tecla CTRL. La herramienta elipse de 3 puntos permite dibujar una elipse arrastrando el cursor para trazar el eje y haciendo clic para definir la altura.
            div(x="5.5%" y="100%" tooltip="tooltip de max 35 caracteres" numero="8")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/14.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n8.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta papel gráfico:] permite dibujar una cuadrícula de líneas similar a la del papel gráfico o milimetrado. Haciendo doble clic sobre la herramienta se despliega una ventana de opciones, en la cual definiremos el número de celdas horizontales y verticales de la figura.
            div(x="19.5%" y="100%" tooltip="tooltip de max 35 caracteres" numero="9")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/15.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n9.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta formas básicas:] permite elegir entre una serie de formas preestablecidas en una galería para crear objetos como estrellas, corazones, cruces, etc. Se crean a partir de un punto, no están formadas por segmentos ni nodos, pero podemos modificarlas usando la opción de convertir a curva desde el menú 'organizar’.
            div(x="34.5%" y="100%" tooltip="tooltip de max 35 caracteres" numero="10")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/16.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n10.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta texto:] permite insertar texto en dos opciones: artísticos modelables, con el conjunto de herramientas de relleno y contorno; y textos en forma de párrafo para efectuar diagramaciones. Al activar la herramienta a través de un clic, el texto se transcribe como artístico, definiendo los tiradores para personalizarlo, mientras que si creamos un marco o ventana este se define en modo párrafo.
            div(x="49%" y="100%" tooltip="tooltip de max 35 caracteres" numero="11")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/17.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n11.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta mezcla interactiva:] permite mezclar dos objetos. Para aplicarla debemos seleccionar los dos objetos a mezclar, luego activar la herramienta y desplazar el primer objeto sobre el segundo. Pueden modificarse determinados atributos de la mezcla desde la barra 'propiedades’.
            div(x="63%" y="100%" tooltip="tooltip de max 35 caracteres" numero="12")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/18.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n12.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta pluma:] permite dibujar curvas segmento a segmento y definir el tamaño y forma del trazo a través de las opciones de contorno desplegadas en la barra de propiedades.
            div(x="78%" y="100%" tooltip="tooltip de max 35 caracteres" numero="13")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/19.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n13.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta relleno:] permite aplicar un color a un objeto utilizando modelos y paletas de color. También cuenta con la opción degradado que es una progresión suave de dos o más colores que añade profundidad a un objeto. Existen cuatro tipos de relleno: lineal, radial, cónico y cuadrado; el patrón de dos colores es un gráfico vectorial que puede estar compuesto por líneas, rellenos o textura y que puede usarse para dar un aspecto natural a los objetos postscript. Dado que algunas texturas son muy complejas, los objetos de gran tamaño que contienen este tipo de relleno pueden tardar en imprimirse o actualizarse en la pantalla.
            div(x="92%" y="100%" tooltip="tooltip de max 35 caracteres" numero="14")
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-4: img(src='@/assets/curso/temas/tema1/20.svg', alt='')
                .col-lg-5
                  img(src='@/assets/curso/temas/tema1/n14.svg', alt='' style='width: 50px').mb-2
                  p.mb-0 #[b Herramienta interactiva de relleno:] permite aplicar a un objeto varias opciones de relleno combinadas entre sí. Cuando un objeto se rellena con una malla pueden crearse efectos únicos. Por ejemplo, se pueden elaborar transiciones suaves de colores en cualquier dirección sin tener que crear mezclas o siluetas. Los rellenos de malla solo se pueden aplicar a objetos cerrados o a un solo trayecto.
    p.mb-5(data-aos='fade-right') Si desea ampliar su conocimiento sobre el #[em software] Corel Draw, explore este video  recomendado del material complementario.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ofl3e1KPCNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
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
