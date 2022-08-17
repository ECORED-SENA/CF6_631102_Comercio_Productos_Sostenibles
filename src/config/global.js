export default {
  global: {
    componenteFormativo: 'Plan de comunicación de producto sostenible',
    descripcionCurso:
      'El sector productivo tiene la necesidad de capacitar a los colaboradores responsables de la gestión de comunicación para que contribuyan a transmitir la información y el plan de comunicación de productos sostenibles, esto con el ánimo de que se elaboren campañas ambientales, teniendo en cuenta que la dinámica comercial debe ir orientada a la protección del medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        titulo: '<i>Ecomarketing</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Brief</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de <i>brief</i> y sus elementos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis e interpretación de la información',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diseño, creatividad e innovación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elementos y estructura del mensaje',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normativa de comunicación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Plan de comunicación integral',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<i>Insight</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos y estructura',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<i>Storytelling</i>',
        desarrolloContenidos: true,
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
      tema: '2. <i>Brief</i>',
      referencia:
        'Méndez, J. (2016). <i>Brief o Briefing - Qué es y cómo hacer uno</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/6vlN4DZVQGc',
    },
    {
      tema: '3. Comunicación',
      referencia:
        'Gutiérrez, M., F. (2016). <i>Técnicas de comunicación</i>. Editorial Secade.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/79262',
    },
    {
      tema: '3.3 Estructura comunicación integral',
      referencia:
        'Asociación Empresarial para el Desarrollo. (2017). <i>Comunicación estratégica de la sostenibilidad</i>. Aedcr.',
      tipo: 'Documento PDF',
      link:
        'https://www.aedcr.com/sites/default/files/docs/manual_comunicacion_sostenibilidad.pdf',
    },
    {
      tema: '4. <i>Insight</i>',
      referencia: 'Mohou San Miguel. (2019). <i>La 0,0 de los cerveceros</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/KuXClfXX8nE',
    },
    {
      tema: '4. <i>Insight</i>',
      referencia:
        'Futbolistas amateurs. (2011). <i>Futbolistas que trabajan de otra cosa - Psicólogo - Gatorade</i>.',
      tipo: 'Video',
      link: 'https://youtu.be/BwnM1nnZpJA',
    },
    {
      tema: '5. <i>Storytelling</i>',
      referencia:
        'Freire, S., A. (2017). <i>¿Cómo crear un storytelling de marca?: de la teoría a la práctica profesional</i>.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/116296',
    },
  ],
  glosario: [
    {
      termino: 'Ambiental',
      significado: 'perteneciente o relativo al ambiente.',
    },
    {
      termino: '<em>Brief</em>',
      significado:
        'sección informativa, informaciones o informe, hace referencia a un documento.',
    },
    {
      termino: '<em>Briefing</em>',
      significado:
        'acción de crear el <i>brief</i> desde cualquier o en cualquier etapa.',
    },
    {
      termino: 'Campaña',
      significado:
        'proyecto que se hace para alcanzar un determinado objetivo.',
    },
    {
      termino: 'Comunicación',
      significado:
        'acción consciente de intercambiar información entre dos o más participantes.',
    },
    {
      termino: '<em>Ecomarketing</em>',
      significado:
        'desarrollo de productos destinados a minimizar los efectos negativos en el medio ambiente.',
    },
    {
      termino: 'Estructura',
      significado:
        'disposición y orden de las partes dentro de un todo, sistema de conceptos coherentes enlazados.',
    },
    {
      termino: '<i>Insight</i>',
      significado:
        'término usado en <i>marketing</i>, comunicación, publicidad, es la visión para detectar necesidades del usuario.',
    },
    {
      termino: 'Marca',
      significado:
        'identificación comercial, conformada por atributos y valores que la hacen única.',
    },
    {
      termino: '<i>Marketing</i>',
      significado:
        'sistema de investigar un mercado, ofrecer valor y satisfacer al cliente.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'noción que se emplea en el ámbito del <i>marketing</i> y la publicidad. El concepto hace referencia a un consumidor representativo e ideal, al cual se dirige una campaña, o al comprador al que se aspira seducir con un producto o un servicio.',
    },
    {
      termino: 'Producto',
      significado:
        'resultado de una serie de procedimientos para armar, construir, fabricar y elaborar algún objeto con una función útil',
    },
    {
      termino: 'Protocolo',
      significado:
        'conjunto de reglas o normas, se establece para actos oficiales o empresariales.',
    },
    {
      termino: 'Segmentar',
      significado:
        'en redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo.',
    },
    {
      termino: 'Sostenible',
      significado:
        'algo que está en condiciones de conservarse o reproducirse por sus propias características.',
    },
    {
      termino: '<i>Storytelling</i>',
      significado:
        'técnica de <i>marketing</i> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alter Partner. (2016). <i>Cómo hacer un plan de comunicación integral. Alter Partner</i>. ',
      link:
        'http://alterpartner.com/como-hacer-un-plan-de-comunicacion-integral-en-10-pasos/',
    },
    {
      referencia:
        'Antevenio. (2017). <i>Qué es el insight, definiciones de marketing</i>. Antevenio. ',
      link:
        'https://www.antevenio.com/blog/2017/02/que-es-un-insight-definiciones-de-marketing/',
    },
    {
      referencia:
        'Asociación Empresarial para el Desarrollo. (2017). <i>Comunicación estratégica de la sostenibilidad</i>. Aedcr. ',
      link:
        'https://www.aedcr.com/sites/default/files/docs/manual_comunicacion_sostenibilidad.pdf',
    },
    {
      referencia:
        'Master Base. (2013). <i>Estructura de un mensaje</i>. [Blog]. ',
      link:
        'https://cdn2.hubspot.net/hub/37780/file-13965982-pdf/docs/estructura_de_un_mensaje.pdf',
    },
    {
      referencia:
        'Nueva ISO 14001:2015. (2015). <i>ISO 14001: comunicación ambiental</i>. [Blog]. ',
      link:
        'https://www.nueva-iso-14001.com/2015/06/iso-14001-comunicacion-ambiental/#:~:text=La%20norma%20ISO%2014001%20establece,Ambiental%20de%20una%20forma%20funcional',
    },
    {
      referencia:
        'Peralta, E. (2018). <i>Guía práctica para hacer un buen briefing</i>. Genwords. ',
      link: 'https://www.genwords.com/blog/briefing',
    },
    {
      referencia:
        'Pérez, G. (2017). <i>¿Qué es un brief y cómo hacer uno?</i> Esmartia. ',
      link:
        'https://resources.esmartia.com/blog/que-es-un-brief-y-como-hacer-uno',
    },
    {
      referencia:
        'Question Pro. (s. f.). <i>Qué es un insight: Todo lo que debe saber</i>. Question Pro. ',
      link: 'https://www.questionpro.com/blog/es/que-es-un-insight/',
    },
    {
      referencia:
        'Unipymes. (2014). <i>Política Nacional de Producción y Consumo Sostenible</i>. Unipymes. ',
      link:
        'https://www.unipymes.com/politica-nacional-de-produccion-y-consumo-sostenible/',
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
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Experto Temático',
        centro: 'Centro de Comercio y Servicios - Regional Cauca',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios (CIES) - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Carlos Ramirez',
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
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
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
