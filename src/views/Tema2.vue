<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 #[em Software] Photoshop
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style="background-color: #255065")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Photoshop es un #[em software] de creación de imágenes, diseño gráfico y edición de fotografías desarrollado por la empresa Adobe que proporciona múltiples funciones de edición de imágenes basadas en píxeles y gráficos vectoriales. 
          br
          br
          |Adobe Photoshop se lanzó a finales de los 80. Es el programa más usado en la edición de fotos e imágenes para impresión.
    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.1. Aspectos generales del #[em software] 
    p.mb-5(data-aos='fade-right') Algunas de las herramientas más usadas de Photoshop permiten eliminar los defectos de las fotografías, ya sean grandes cambios o ajustes finos y minuciosos.
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos='fade-right'): img(src='@/assets/curso/temas/tema2/2.png', alt='')
      .col-lg-7(data-aos="fade-left") 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Fotos transformadas a un clic ").ps-5
            p Transforma fotos con un solo clic mediante efectos inspirados en obras de arte famosas o estilos artísticos populares. Aplica un efecto a una parte o la totalidad de su  foto.  (Adobe, 2022)  
          div(titulo="Crear fotos no tan estáticas ").ps-5
            p Agrega superposiciones móviles como copos de nieve y destellos, y crea marcos animados. Acto seguido las almacena como MP4 para compartirlas en redes sociales y mucho más. (Adobe, 2022) 
          div(titulo="Deformar fotos para adaptarlas a cualquier forma ").ps-5
            p Coloca una foto dentro de otra envolviéndola alrededor de un objeto como, por ejemplo, una taza de café, encajándola dentro de formas como los lentes de sol de un sujeto. (Adobe, 2022) 
          div(titulo="Agregar movimiento a las fotos ").ps-5
            p Transforma con un solo clic sus instantáneas favoritas en fotos en movimiento: MP4 y GIF animados con movimiento de cámara en 2D y 3D. Es sencillo y perfecto para compartirlas en las redes sociales. (Adobe, 2022) 
          div(titulo="Ajustar la inclinación de la cara ").ps-5
            p Hace que todas las personas de una foto miren en la dirección correcta ajustando de forma automática la posición de sus caras. (Adobe, 2022) 
          div(titulo="Ajuste de características faciales ").ps-5
            p Consigue siempre la fotografía perfecta abriendo de forma automática los ojos cerrados, eliminando cualquier gesto serio y mucho más. (Adobe, 2022) 
          div(titulo="Suavizar la piel automáticamente").ps-5
            p Suaviza fácilmente la textura de la piel sin que parezca irreal. (Adobe, 2022) 
          div(titulo="Colorea fotos automáticamente").ps-5
            p Da vida a sus fotos en blanco y negro o cambia sus colores con la coloración automática. (Adobe, 2022) 
          div(titulo="Selección de personas con un solo clic ").ps-5
            p De forma automática, selecciona la persona de su foto con un solo clic. Luego, permite realizar ediciones aisladas sobre la persona o el fondo (Adobe, 2022) 
          div(titulo="Efectos y filtros ").ps-5
            p Permite elegir entre cinco aspectos inteligentes que se aplican automáticamente a fotos en función del tema, el color y la iluminación. (Adobe, 2022) 
          div(titulo="Estabilización del movimiento de la cámara").ps-5
            p Corrige el desenfoque de forma rápida, fácil y automática. (Adobe, 2022)  
    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.2. Herramientas y uso 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos='fade-right'): img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Al iniciar Photoshop, aparece la pantalla de inicio, que incluye: (Adobe, 2022) 
        h3 Información acerca de las nuevas funciones.
        ul.lista-ul--color
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | Tutoriales para aprender y entender conceptos, flujos de trabajo, sugerencias y trucos con rapidez. 

          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | Visualización y acceso a sus documentos recientes en la nube y a los que hayan compartido con usted recientemente. Además, puede filtrar documentos en la nube con una palabra clave aun cuando esté sin conexión; los que estén disponibles solo en línea aparecerán atenuados. 
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | Personalice el número de archivos recientes que se muestra. Seleccione Preferencias > Administración de archivos y especifique el valor deseado entre 0 y 100. 
          li
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | El contenido de la pantalla de inicio se adapta en función de sus conocimientos sobre Photoshop y de su plan de abono a Creative Cloud. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-dot.d-flex.mb-3
          i.fas.fa-circle.fa-xs(style='color:#ff9a0c').me-3
          h3 Pantalla de inicio  
        p.mb-5(data-aos='fade-right') Para acceder a la pantalla de inicio en cualquier momento mientras trabaja en un documento de Photoshop, haga clic en el icono de inicio en la barra de opciones. Para salir de la pantalla de inicio, pulse la tecla Esc.
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/4.png', alt='')
    p.mb-5(data-aos='fade-right') A la izquierda de la pantalla de inicio de PhotoShop se muestran las siguientes pestañas y botones: 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos='fade-right'): img(src='@/assets/curso/temas/tema2/5.png', alt='')
      .col-lg-7(data-aos="fade-left") 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Nuevo Archivo").ps-5
            p Haga clic en este botón para crear un nuevo documento. Podrá crear un documento si selecciona una de las numerosas plantillas y ajustes preestablecidos disponibles. 
          div(titulo="Abrir").ps-5
            p Haga clic en este botón para abrir un documento existente. 
          div(titulo="Inicio").ps-5
            p Haga clic en esta ficha para abrir la pantalla de inicio. 
          div(titulo="Formación").ps-5
            p Haga clic en esta pestaña para abrir una lista de tutoriales básicos y avanzados de Photoshop que le ayudarán a usar el programa. 
          div(titulo="Archivos").ps-5
            p Esta sección muestra todos sus archivos. 
          div(titulo="Lightroom Photos ").ps-5
            p Haga clic en esta pestaña para acceder a sus fotografías sincronizadas de Lightroom e importarlas a un documento de Photoshop. 
          div(titulo="Tus archivos").ps-5
            p Vea una lista de todos los documentos en la nube guardados en Photoshop, sin importar si fueron creados en el computador de escritorio, en el iPad o en la web. Puede alternar fácilmente entre la vista de mosaico y la de lista. 
          div(titulo="Compartido con usted ").ps-5
            p Vea la lista de los documentos en la nube que se han compartido con usted en Photoshop. 
          div(titulo="Obtener más").ps-5
            p Para obtener más información sobre los documentos en la nube, consulte: Documentos en la nube de Photoshop | Preguntas frecuentes. 
          div(titulo="Eliminado").ps-5
            p Encuentre una lista de los documentos en la nube que ha eliminado. Puede restaurar los documentos o eliminarlos de forma permanente. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-dot.d-flex.mb-3
          i.fas.fa-circle.fa-xs(style='color:#ff9a0c').me-3
          h3 Selección y visualización de herramientas  
        ul.lista-ul--color
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | La barra de aplicaciones de la parte superior contiene un espacio de trabajo, menús (solo en Windows) y otros controles de la aplicación. En ciertos productos para Mac, puede mostrarla u ocultarla con el menú ‘Ventana’. 
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | El panel ‘Herramientas’ incluye utilidades agrupadas para crear y editar imágenes, ilustraciones, elementos de página, etc. 
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | El panel ‘Control’ muestra opciones específicas de la herramienta seleccionada en el momento.
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | La ventana ‘Documento’ muestra el archivo en el que se trabaja. Estas ventanas se pueden organizar como fichas, agrupar y acoplar. 
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | Los paneles ayudan a controlar y modificar el trabajo, además se pueden agrupar, apilar o acoplar. 
          li.mb-4
            i.fas.fa-square.fa-xs(style="color: #ff9500")
            | Con el tiempo esta barra ha crecido dando más herramientas para la edición y el post-procesamiento de imágenes. 
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/6.png', alt='')

    p.mb-5(data-aos='fade-right') Si desea ampliar su conocimiento sobre el #[em software] Photoshop, explore el video recomendado del material complementario: 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4nH4L0G0ncA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
