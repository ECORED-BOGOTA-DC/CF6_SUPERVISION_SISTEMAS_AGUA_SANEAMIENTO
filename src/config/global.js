export default {
  global: {
    componenteFormativo: 'Manipular sistemas de potabilización',
    descripcionCurso:
      'El proceso de potabilización de agua involucra el uso de unidades que mediante la aplicación de principios físicos y químicos permite remover del agua aquellos elementos indeseables, que pueden generar a simple vista un rechazo por parte de los usuarios o incluso representar algunos tipos de riesgo para la salud de estos. Es así como en el presente componente se llevará a cabo una revisión de los temas asociados con la operación de unidades de potabilización, manejo de insumos químicos y control de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Operación de unidades de potabilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Principales conceptos asociados al sistema de potabilización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de agua',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Características físicas, químicas, organolépticas y microbiológicas del agua cruda y tratada',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normatividad para agua potable: conceptos, aplicación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Procesos y operaciones unitarias',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Instrumentos y equipos para el control de procesos de potabilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Instrumentación primaria',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Válvulas, motobombas y tableros eléctricos en el proceso de potabilización',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Bombas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sustancias químicas para el tratamiento de agua',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Equipos para la dosificación de insumos en la potabilización',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tratamiento de lodos y olores ofensivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tratamiento de lodos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Olores ofensivos',
            hash: 't_3_2',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/921200_CF06_DU.pdf',
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
      tema: '1.2 Tipos de agua.',
      referencia:
        'Canal CNC Valledupar. (2019). Manaure y González con la peor agua potable en el Cesar. [Archivo de video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=e3Rlv1hW9yc',
    },
    {
      tema: '1.4 Normatividad para agua potable: conceptos, aplicación.',
      referencia:
        'Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Título A. Aspectos generales de los sistemas de agua potable y saneamiento básico.',
      tipo: 'Libro',
      link:
        'https://minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_a_.pdf',
    },
    {
      tema: '1.4 Normatividad para agua potable: conceptos, aplicación.',
      referencia:
        'Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Título B. Sistemas de acueducto.',
      tipo: 'Libro',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/titulob-030714.pdf',
    },
    {
      tema: '1.4 Normatividad para agua potable: conceptos, aplicación.',
      referencia:
        'Ministerio de Vivienda. 2010. Reglamento técnico del sector de agua y saneamiento. Título C. Potabilización de agua.',
      tipo: 'Libro',
      link: 'https://www.catorce6.com/images/legal/Titulo_C_Potabilizacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ablandamiento',
      significado:
        'remoción de la dureza (calcio y/o magnesio) del agua (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Agua cruda',
      significado:
        'es el agua natural que no ha sido sometida a proceso de tratamiento para su potabilización. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Agua potable',
      significado:
        'aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el Decreto 1575 de 2007 del Ministerio de la Protección Social y demás normas que lo reglamentan, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Cloración',
      significado:
        'aplicación de cloro al agua, generalmente para desinfectar o para oxidar compuestos indeseables. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Desarenador',
      significado:
        'componente destinado a la remoción de las arenas y sólidos que están en suspensión en el agua, mediante un proceso de sedimentación. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Filtración',
      significado:
        'proceso mediante el cual se remueven las partículas suspendidas y coloidales del agua al hacerlas pasar a través de un medio poroso. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Pérdida de carga',
      significado:
        'disminución de la energía de un fluido debido a la resistencia que encuentra a su paso o pérdida de nivel. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'pH óptimo',
      significado:
        'valor de pH que produce la máxima eficiencia de remoción en un proceso determinado (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Planta de tratamiento o de potabilización',
      significado:
        'conjunto de obras, equipos, materiales y personal necesarios para efectuar los procesos que permitan cumplir con las normas de calidad del agua potable. (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.)',
    },
    {
      termino: 'Turbiedad',
      significado:
        'propiedad óptica del agua basada en la medida de luz reflejada dispersada por las partículas en suspensión (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico: TÍTULO C. Sistemas de Potabilización / Vargas Liévano, Armando (Ed.). Bogotá, D.C. Colombia, Ministerio de Ambiente, Vivienda y Desarrollo Territorial. 2010.). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguas de occidente (s.f.). Preguntas frecuentes sobre la calidad del agua en los sistemas operados por aguas regionales EPM S.A. E.S.P ',
      link: '',
    },
    {
      referencia:
        'Canal CNC Valledupar. (2019). Manaure y González con la peor agua potable en el Cesar. [Archivo de video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=e3Rlv1hW9yc',
    },
    {
      referencia:
        'Marín G., Rafael. (s.f.) Características físicas, químicas y biológicas de las aguas. Córdoba.',
      link: '',
    },
    {
      referencia:
        'Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. Título A. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. Título B',
      link: '',
    },
    {
      referencia:
        'Ministerio de desarrollo económico. (2010). Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico [RAS]. Título C.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérres',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor Ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor Ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisión Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital.',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción Distrito Capital.',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador Fullstack - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validadora de recursos educativos',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
