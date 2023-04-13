export default {
  global: {
    componenteFormativo:
      'Fundamentos para la realización del boceto digital de un producto',
    descripcionCurso:
      'El uso de herramientas digitales para la elaboración de planos y bocetos ha contribuido en la disminución de tiempos en el diseño y la fabricación de productos industriales y prototipos.  Existen <em>software</em> CAD especializados para el diseño mecánico y arquitectónico, que además permiten hacer renderizados, análisis de elemento finitos, documentación técnica y materiales, entre muchas más.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Software</em> Corel Draw',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Aspectos generales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas y uso',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Software</em> Photoshop',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aspectos generales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas y uso',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de dibujo 2d y 3d en sistema CAD',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Aspectos generale2',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Uso',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pantallas táctiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Aspectos generales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Herramientas y uso',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Página web',
      referencia:
        'Espinoza, A. (05 de diciembre de 2020). Informe final de trabajo de investigación para obtener el grado académico de bachiller en educación. Universidad nacional de Cajamarca.',
      tipo: 'Página web',
      link:
        'https://repositorio.unc.edu.pe/bitstream/handle/20.500.14074/4019/T016_%2046695057_B.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Pantallas táctiles',
      referencia:
        'Espeso, P. (12 de agosto de 2022). Los 6 mejores lápices digitales para dibujar en tabletas. Educación tres punto cero. https://www.educaciontrespuntocero.com/noticias/6-lapices-dibujar-tabletas/',
      tipo: 'Página web',
      descarga: 'downloads/T016_46695057_B.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Caja de herramientas',
      significado:
        'conjunto de herramientas que ofrecen los programas informáticos para realizar diferentes tareas.',
    },
    {
      termino: 'Corel Draw',
      significado:
        'programa informático de dibujo que facilita la creación de diseños profesionales desde simples logos de empresas hasta grandes y sorprendentes ilustraciones a nivel técnico.      ',
    },
    {
      termino: 'Digital',
      significado:
        'dispositivo o sistema que crea, presenta, transporta o almacena información mediante la combinación de bits.',
    },
    {
      termino: 'Diseño',
      significado:
        'actividad y proceso mediante el cual se crean ideas, proyectos y objetos con características de utilidad y estética.      ',
    },
    {
      termino: 'Formato',
      significado:
        'el formato y la extensión de un archivo significan el tipo de archivo en el que se almacena y encripta la información.',
    },
    {
      termino: 'Menú',
      significado:
        'Conjunto de opciones y funciones de un programa que se muestran en pantalla.',
    },
    {
      termino: 'Pantallas táctiles',
      significado:
        'Recurso tecnológico intuitivo y rápido para hacer bocetos de objetos industriales debido a su versatilidad en técnicas y colores. ',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'programas informáticos que ejecutan determinadas tareas en un computador.',
    },
    {
      termino: 'Táctil',
      significado: 'que se puede percibir por medio del tacto.',
    },
    {
      termino: 'Vectorial',
      significado:
        'imagen digital formada por objetos geométricos dependientes, con características de forma y posición.      ',
    },
  ],
  referencias: [
    {
      referencia:
        'Adobe. (2022) Explora las funciones. Recuperado el 2 de septiembre 2022. ',
      link:
        'https://www.adobe.com/la/products/photoshop-elements/features.html',
    },
    {
      referencia: 'Adobe Photoshop Classroom in a Book (2022). Adobe.      ',
      link: '',
    },
    {
      referencia:
        'Adobe. Ayuda de Adobe Illustrator ® CC. Recuperado el 31 de agosto de 2022. ',
      link:
        'https://www.onlinecomputer.com.co/articulos/activos/archivos/Adobe_Illustrator_-_Manual_del_Usuario.pdf',
    },
    {
      referencia:
        'Almattar, T. (2022). Learn SOLIDWORKS: Get up to speed with key concepts and tools to become an accomplished SOLIDWORKS Associate and Professional, 2nd Edition. Packt Publishing.      ',
      link: '',
    },
    {
      referencia:
        'Área de formación en línea y competencia digital educativa del INTEF. (2022). Diseño 2D y 3D.',
      link: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es_ES',
    },
    {
      referencia: 'Aula clic (2022).  CorelDraw X7 (s.f.) ',
      link: 'https://www.aulaclic.es/coreldraw-x7/',
    },
    {
      referencia: 'Aula clic (2022).  Photoshop CC (s.f.) ',
      link: 'https://www.aulaclic.es/photoshop-cs6/',
    },
    {
      referencia:
        'Diseñando en 3D con SolidWorks . Blogspot.com. Recuperado el 1 de septiembre de 2022. ',
      link: 'https://disenandoen3d.blogspot.com/2012/01/que-es-solidworks.html',
    },
    {
      referencia: 'S. (2022,). Qué es SolidWorks? Disenandoen3d. ',
      link: 'https://disenandoen3d.blogspot.com/2012/01/que-es-solidworks.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
