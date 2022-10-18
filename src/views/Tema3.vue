<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Herramientas de dibujo 2d y 3d en sistema CAD
    p.mb-5(data-aos='fade-right') Los programas #[b CAD (Diseño Asistido por computador)] son una herramienta indispensable para la realización de proyectos, además de presentarnos los planos, nos ayudan a hacer los cálculos previos a la creación o construcción de un objeto y facilitan su #[b concepción 2D] y modelado. 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in" style="background-color: #255065").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los programas #[b CAD] son soluciones informáticas pensadas principalmente para diseñadores, arquitectos e ingenieros de profesión o en formación. Estas aplicaciones facilitan el diseño de estructuras y construcciones.  
          br
          br
          |Sin embargo, los programas #[b CAD] van más allá del dibujo y el diseño, ya que toman en cuenta múltiples factores como:  
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/2.svg' alt='AvatarTop')
        p.text-center Integrar todos los componentes de un  diseño. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/3.svg' alt='AvatarTop')
        p.text-center Manipular objetos 3D. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/4.svg' alt='AvatarTop')
        p.text-center Realizar diseño mecánico y modelado paramétrico. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
        p.text-center Realizar simulaciones de elementos finitos. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
        p.text-center Obtener un resultado dimensional preciso (bidimensional y tridimensional). 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/7.svg' alt='AvatarTop')
        p.text-center Tener simulación de movimiento. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/8.svg' alt='AvatarTop')
        p.text-center Generar listas de materiales y recursos para la fabricación. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/9.svg' alt='AvatarTop')
        p.text-center Contar con una representación fotorrealista del proyecto. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/10.svg' alt='AvatarTop')
        p.text-center Obtener un prototipado rápido o un bosquejo arquitectónico en poco tiempo. 
      .tarjeta.p-4(style='background-color: #ffdcab').h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/11.svg' alt='AvatarTop')
        p.text-center Visualizar proyectos gracias a renderizaciones precisas. 
    p.mb-5(data-aos='fade-right') Todos los aparatos y dispositivos son diseñados en un #[em software] CAD del cual se obtienen las especificaciones para ser validados y producidos, esto permite reducir costos y ser eficientes en el proceso de fabricación. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4(style='background-color: #ffefd9')
          p  Uno de los #[em software] CAD más usados en la industria es #[b SolidWorks], un programa líder en diseño mecánico, sin embargo, existen otras opciones como #[b Inventor, Solid Edge, Catia, Onshape o PTC Creo]. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p El #[em software] SolidWorks es una herramienta paramétrica de diseño de modelado sólido basada en operaciones que aprovecha la facilidad de aprendizaje de la interfaz gráfica de usuario de Windows. Puede crear modelos sólidos en 3D totalmente asociativos con o sin restricciones mientras utiliza, al mismo tiempo, las relaciones automáticas o definidas por el usuario para capturar la intención del diseño.  
          br
          br
          |El #[em software] CAD SolidWorks® permite a los diseñadores croquizar ideas con rapidez, experimentar con operaciones y cotas, y producir modelos y dibujos detallados. 
      .col-lg-5.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/12.png' alt='AvatarTop')
    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.1 Aspectos generales 
    p.mb-5(data-aos='fade-right') El programa SolidWorks contiene funciones similares a las de los programas de Windows, sus ventanas de documentos tienen dos paneles: 
      br
      br
      | El panel izquierdo, o ‘panel de gestión’, contiene (SolidWorks, 2022):
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-acento-botones(text-small).px-3
            .row(titulo="Gestor de diseño del <em>Feature Manager</em>").justify-content-center
              .col-lg-8
                h4 Gestor de diseño del #[em Feature Manager]
                p Muestra una lista de la estructura de la pieza, ensamblaje o dibujo. Permite seleccionar un elemento en el gestor de diseño del #[em ‘Feature Manager’] para editar el croquis subyacente o la operación, cambiar el estado de supresión de la operación o del componente, etc.
              .col-md-4.mb-lg-0.mb-3 
                figure
                  img(src='@/assets/curso/temas/tema3/13.png', alt='Texto que describa la imagen')  
            .row(titulo="<em>Property Manager</em>").justify-content-center
              .col-lg-8
                h4 #[em Property Manager]   
                p Brinda configuraciones para funciones como croquis, operaciones de redondeo y relaciones de posición de ensamblaje. 
              .col-md-4.mb-lg-0.mb-3 
                figure
                  img(src='@/assets/curso/temas/tema3/14.png', alt='Texto que describa la imagen')  
            .row(titulo="<em>Configuration Manager</em>").justify-content-center
              .col-lg-8
                h4 #[em Configuration Manager] 
                p Permite crear, seleccionar y ver múltiples configuraciones de piezas y ensamblajes en un documento. Las configuraciones son variaciones de una pieza o ensamblaje dentro de un documento individual. Por ejemplo, puede usar configuraciones de un perno para especificar diferentes longitudes y diámetros.
              .col-md-4.mb-lg-0.mb-3 
                figure
                  img(src='@/assets/curso/temas/tema3/15.png', alt='Texto que describa la imagen')  
    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.2 Uso
    p.mb-5(data-aos='fade-right') El diseño asistido por computador es fundamental para distintas áreas, desde el diseño de objetos médicos, por ejemplo, hasta la concepción de grandes edificaciones. 
      br
      br
      | Respecto al diseño de productos podemos obtener los siguientes usos y beneficios. (SolidWorks, 2022)
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos='fade-right'): img(src='@/assets/curso/temas/tema3/16.png', alt='')
      .col-lg-7(data-aos="fade-left") 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Nuevo archivo").ps-5
            ul.lista-ul--color
              li
                i.fas.fa-square.cab
                | Ahorro de tiempo en diseño de productos.
              li
                i.fas.fa-square.cab
                | Posibilidad de seleccionar y modificar diferentes materiales según las exigencias del proyecto, así como el presupuesto y lista de materiales para la fabricación.
              li
                i.fas.fa-square.cab
                | Una amplia biblioteca con formas que ayudan al diseño y otras con miles de piezas mecánicas normalizadas con diferentes marcas.
          div(titulo="Precisión").ps-5
            ul.lista-ul--color
              li
                i.fas.fa-square.cab
                | Precisión en las dimensiones, puesto que estas se adaptan según las modificaciones de escala y el diseño paramétrico.
              li
                i.fas.fa-square.cab
                | Cálculos precisos y la posibilidad de estimar los costos de fabricación.
          div(titulo="Visualización").ps-5
            ul.lista-ul--color
              li
                i.fas.fa-square.cab
                | Diversas texturas con diferentes opciones de sombras, colores y luces.
              li
                i.fas.fa-square.cab
                | Visualización de objetos desde todos los ángulos posibles.
          div(titulo="Gestión y optimización").ps-5
            ul.lista-ul--color
              li
                i.fas.fa-square.cab
                | Gestión del ciclo de vida del producto.
              li
                i.fas.fa-square.cab
                | Optimización del flujo de trabajo.
              li
                i.fas.fa-square.cab
                | Gestión de montajes complejos con mayor facilidad que en la vida real.

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
