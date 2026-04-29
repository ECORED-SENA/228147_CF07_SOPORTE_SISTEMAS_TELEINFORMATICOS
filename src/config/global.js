export default {
  global: {
    Name: 'Fundamentos de redes inalámbricas',
    Description:
      'Este componente aborda los fundamentos técnicos de las redes inalámbricas, incluyendo espectro electromagnético, tecnologías actuales, infraestructura, estándares, seguridad e integración con <i>IoT</i>. Permite definir parámetros y recursos de red conforme a procedimientos de telecomunicaciones y normativa técnica, fortaleciendo la capacidad de evaluación en entornos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Fundamentos de las redes inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Profundización técnica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto de redes inalámbricas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de redes inalámbricas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Ondas electromagnéticas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Espectro electromagnético',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Propagación de ondas de radio',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tecnologías inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y evolución de tecnologías inalámbricas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tecnologías de corto alcance',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tecnologías de red local y metropolitana',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tecnologías móviles',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Tecnología para <i>IoT</i>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Infraestructura y equipos de conectividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes de infraestructura inalámbrica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Equipos de conectividad ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Antenas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Topologías inalámbricas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estándares y protocolos de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de estándar en telecomunicaciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Organismos reguladores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estándares IEEE 802.11',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Canales, ancho de banda y modulación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Planificación avanzada de canales y capacidad',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad en redes inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de seguridad inalámbrica',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Servicios de seguridad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Mecanismos de cifrado',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Protocolos de autenticación',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Políticas de seguridad centralizadas',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Relación con la evaluación técnica de red',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Amenazas y mitigación en redes inalámbricas',
            hash: 't_5_7',
          },
          {
            numero: '5.8',
            titulo:
              'Seguridad física y monitoreo de la infraestructura inalámbrica',
            hash: 't_5_8',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Internet de las Cosas (<i>IoT</i>) y redes inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Conceptos fundamentales de <i>IoT</i>',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Ecosistema <i>IoT</i>',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Medios de transmisión para <i>IoT</i>',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Integración con <i>Cloud Computing</i>',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: '<i>Big Data</i> e Inteligencia Artificial',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Transformación digital y automatización',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Arquitectura técnica IoT y protocolos',
            hash: 't_6_7',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Implementación y evaluación técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Proceso de implementación de redes inalámbricas',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Interpretación técnica, inspección y evaluación del sitio',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Elaboración de diagramas técnicos',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Mantenimiento y soporte de soluciones inalámbricas',
            hash: 't_7_4',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228147_CF07_DU.zip',
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
  glosario: [
    {
      termino: '802.1X',
      significado:
        'es una norma que comprueba los distintos usuarios en una red LAN o WLAN y a continuación les concede o deniega el acceso.',
    },
    {
      termino: 'Access Point (AP)',
      significado:
        'son dispositivos que establecen una conexión inalámbrica entre equipos y pueden formar una red inalámbrica externa (local o <em>internet</em>) para interconectar dispositivos móviles o tarjetas de red inalámbricas. Esta red inalámbrica se llama <em>WLAN</em> (<em>Wireless Local Area Network</em>) y se usa para reducir las conexiones cableadas.',
    },
    {
      termino: 'Ancho de banda',
      significado:
        'es la cantidad máxima de datos que se puede transferir a través de una conexión a <em>internet</em> en un período de tiempo específico. En pocas palabras, es como el ancho de una tubería de agua: cuanto más ancha sea la tubería, más datos pueden fluir por ella simultáneamente.',
    },
    {
      termino: 'Dbm',
      significado:
        'el decibelio-milivatio (dBm) es una unidad de medida fundamental en telecomunicaciones que se utiliza para cuantificar los niveles de potencia en las señales de radiofrecuencia.',
    },
    {
      termino: 'IEEE 802.11',
      significado:
        'establece las normas <em>WLAN</em> y define el acceso al medio y la capa física de una red inalámbrica local.',
    },
    {
      termino: '<em>IoT</em> (<em>Internet</em> de las Cosas)',
      significado:
        'es un sistema de soluciones tecnológicas que permite que los objetos se conecten a <em>internet</em> y entre sí. Consiste en sistemas ciberfísicos y computación integrada que utilizan la infraestructura de <em>internet</em>, junto con las aplicaciones y servicios que la emplean.',
    },
  ],
  referencias: [
    {
      referencia:
        'AREATECNOLOGICA. (2019, septiembre 19). Redes inalámbricas: partes y funcionamiento [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=XK5W1nq3WnY',
    },
    {
      referencia: 'Burrell, S. (2025). dBm. Wray Castle. ',
      link:
        'https://wraycastle.com/es/blogs/glossary/dbm?srsltid=AfmBOooFXwKjJe52vwI3QYk3EE9bn2hZUZcnReDz6DxT-EnrbFbQVoMD',
    },
    {
      referencia:
        'Carlemany, U. (2025). Internet de las cosas: definición y ejemplos. Universitat Carlemany. ',
      link:
        'https://www.universitatcarlemany.com/actualidad/blog/internet-de-las-cosas-definicion-y-ejemplos',
    },
    {
      referencia:
        'IONOS. (2023). ¿Qué es la autenticación de red IEEE 802.1X? IONOS Digital Guide. ',
      link:
        'https://www.ionos.com/es-us/digitalguide/servidores/know-how/ieee-8021x/',
    },
    {
      referencia:
        'IONOS. (2023). ¿Cuáles son las distintas normas WLAN 802.11? IONOS Digital Guide. ',
      link:
        'https://www.ionos.com/es-us/digitalguide/servidores/know-how/ieee-80211/',
    },
    {
      referencia:
        'Joaquín, L. (2025). What Is a Network Bandwidth And How Is It Measured?. TP-Link. ',
      link:
        'https://www.tp-link.com/ph/blog/1985/what-is-a-network-bandwidth-and-how-is-it-measured-/',
    },
    {
      referencia:
        'Pachón, C. (2026). AP (Access Point): ¿Qué son y para qué se utilizan? NSIT Information Technology. ',
      link:
        'https://www.nsit.com.co/ap-access-point-que-son-y-para-que-se-utilizan/',
    },
    {
      referencia:
        'SENA, Escuela Nacional de Instructores. (202). ¿Cómo funcionan las redes inalámbricas? [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=hyIpJZBLYg0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
