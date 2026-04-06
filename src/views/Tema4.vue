<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estándares y protocolos de comunicación
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3.fit___box_3-2.mb-3(data-aos="zoom-in")
          p.mb-0 Los estándares y protocolos de comunicación establecen las reglas técnicas que permiten la interoperabilidad entre dispositivos inalámbricos. Sin la existencia de estándares definidos, cada fabricante desarrollaría sistemas incompatibles, lo que impediría la comunicación entre equipos de diferentes marcas.
        p.mb-0 En redes inalámbricas, los estándares determinan parámetros como frecuencia, ancho de banda, tipo de modulación, potencia de transmisión y mecanismos de autenticación. Su correcta aplicación garantiza funcionamiento eficiente, seguridad y cumplimiento normativo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img158.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Concepto de estándar en telecomunicaciones
    p.mb-5 Un estándar en telecomunicaciones es un conjunto de especificaciones técnicas que definen cómo deben diseñarse, implementarse y operar los sistemas de comunicación. A continuación se presentan los principales beneficios de la implementación de estándares en redes inalámbricas.
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img159.png', alt="" ).m-auto
                h4.text-center Interoperabilidad
                p.mb-0.text-center Permite que dispositivos de diferentes fabricantes puedan comunicarse entre sí.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img160.png', alt="" ).m-auto
                h4.text-center Compatibilidad global
                p.mb-0.text-center Facilita el funcionamiento de equipos en distintos países y redes.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img161.png', alt="" ).m-auto
                h4.text-center Seguridad en transmisión
                p.mb-0.text-center Establece mecanismos de autenticación y protección de datos.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img162.png', alt="" ).m-auto
                h4.text-center Optimización del espectro
                p.mb-0.text-center Define parámetros técnicos que permiten un uso eficiente del espectro radioeléctrico.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 En redes inalámbricas, los estándares más relevantes pertenecen a la familia #[b IEEE 802].
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Organismos reguladores
    p.mb-5 Los organismos reguladores desarrollan lineamientos técnicos y normativos que rigen el funcionamiento de las telecomunicaciones a nivel nacional e internacional. A continuación se presentan los principales organismos relacionados con la regulación y estandarización de redes inalámbricas.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="<em>Institute of Electrical and Electronics Engineers (IEEE)</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img163.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i Institute of Electrical and Electronics Engineers (IEEE)]
            p.mb-0 Organismo responsable del desarrollo de estándares técnicos para redes de comunicación. Dentro de la familia 802, el estándar 802.11 define las especificaciones para redes inalámbricas WLAN. El IEEE establece métodos de acceso al medio, técnicas de modulación, velocidades máximas y compatibilidad entre dispositivos.
      .py-3.py-md-4(titulo="<em>International Telecommunication Union (ITU)</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img164.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i International Telecommunication Union (ITU)]
            p.mb-0 Organismo internacional encargado de coordinar el uso global del espectro radioeléctrico y establecer lineamientos para telecomunicaciones. Sus funciones incluyen la asignación internacional de frecuencias, la regulación de satélites y la coordinación entre países para evitar interferencias.
      .py-3.py-md-4(titulo="Comisión de Regulación de Comunicaciones (CRC)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img165.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Comisión de Regulación de Comunicaciones (CRC)
            p.mb-0 Entidad encargada de regular el uso del espectro radioeléctrico en Colombia. Establece límites de potencia, bandas autorizadas, condiciones técnicas de operación y requisitos legales para la instalación de sistemas de telecomunicaciones. El cumplimiento de la normativa de la CRC es obligatorio para cualquier implementación de red inalámbrica en el territorio nacional.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Estándares IEEE 802.11
    p.mb-5 El estándar #[b IEEE 802.11] define las especificaciones técnicas para redes #[b WLAN]. Este conjunto de estándares ha evolucionado a lo largo del tiempo con el objetivo de incrementar la velocidad de transmisión, mejorar la eficiencia espectral y fortalecer los mecanismos de seguridad. A continuación se presentan las principales versiones del estándar IEEE 802.11 utilizadas en redes inalámbricas.
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/temas/img166.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="802.11a / 802.11b / 802.11g").ajuste-cajaAcordion
            p.mb-3 Corresponden a las primeras generaciones de redes #[i WiFi] que permitieron la expansión de la conectividad inalámbrica. 802.11b opera en la banda de 2.4 GHz con velocidades de hasta 11 Mbps, ofreciendo mayor alcance pero mayor susceptibilidad a interferencias. 802.11a funciona en 5 GHz con velocidades de hasta 54 Mbps, presentando menor interferencia pero menor cobertura. 802.11g combina características de ambos estándares al operar en 2.4 GHz con velocidades de hasta 54 Mbps, mejorando el rendimiento sin perder compatibilidad con dispositivos anteriores.
          .row(titulo="802.11n").ajuste-cajaAcordion
            p.mb-3 Introdujo la tecnología MIMO (#[i Multiple Input Multiple Output]), que permite utilizar múltiples antenas para transmitir y recibir datos simultáneamente. Opera en las bandas de 2.4 GHz y 5 GHz y puede alcanzar velocidades teóricas superiores a 600 Mbps. Además incorporó canales de 40 MHz, aumentando el ancho de banda disponible y mejorando la cobertura y estabilidad de la red.
          .row(titulo="802.11ac (<em>WiFi</em> 5)").ajuste-cajaAcordion
            p.mb-3 Diseñado para soportar mayores velocidades de transmisión en la banda de 5 GHz, superando 1 Gbps en configuraciones avanzadas. Incorpora mejoras como canales de 80 MHz y 160 MHz, modulación 256-QAM y la técnica de beamforming, que dirige la señal hacia dispositivos específicos para optimizar el rendimiento.
          .row(titulo="802.11ax (<em>WiFi</em>  6)").ajuste-cajaAcordion
            p.mb-3 Optimiza el rendimiento en entornos con alta densidad de dispositivos conectados. Opera en 2.4 GHz y 5 GHz, y en 6 GHz en su extensión #[i WiFi] 6E. Introduce tecnologías como OFDMA (#[i Orthogonal Frequency Division Multiple Access]), que divide el canal en subcanales para atender múltiples dispositivos simultáneamente, reduciendo latencia y mejorando la eficiencia del espectro.
    .color___box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Estos estándares constituyen la base tecnológica de las redes inalámbricas modernas y permiten adaptar la infraestructura a diferentes escenarios de conectividad.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Comparación de estándares #[i WiFi]
    .color___box_3
      .px-5
        p.mb-5 Para facilitar la evaluación técnica de las tecnologías más utilizadas actualmente, se presenta una comparación de algunos estándares relevantes de la familia IEEE 802.11.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 7.
              span Comparación de estándares #[i Wi-Fi]
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Estándar
                    th.ajuste-border-tabla.texto-left Banda
                    th.ajuste-border-tabla.texto-left Velocidad máxima
                    th.ajuste-border-tabla.texto-left Tecnología clave
                    th.texto-left Uso recomendado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b 802.11n]
                    td.ajuste-border-tabla.texto-left 2.4 / 5 GHz
                    td.ajuste-border-tabla.texto-left 600 Mbps
                    td.ajuste-border-tabla.texto-left MIMO
                    td.texto-left Oficinas pequeñas
                  tr
                    td.ajuste-border-tabla.texto-left #[b 802.11ac]
                    td.ajuste-border-tabla.texto-left 5 GHz
                    td.ajuste-border-tabla.texto-left 1.3 Gbps
                    td.ajuste-border-tabla.texto-left #[i Beamforming]
                    td.texto-left Redes empresariales
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b 802.11ax]
                    td.ajuste-border-tabla.texto-left 2.4 / 5 / 6 GHz
                    td.ajuste-border-tabla.texto-left > 9 Gbps
                    td.ajuste-border-tabla.texto-left OFDMA
                    td.texto-left Entornos de alta densidad
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Esta comparación permite identificar las diferencias principales entre los estándares más utilizados y facilita la selección de la tecnología adecuada según las necesidades de la red.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Canales, ancho de banda y modulación
    p.mb-5 Los canales representan subdivisiones dentro de una banda de frecuencia utilizadas para la transmisión de señales inalámbricas. La correcta selección de los canales permite evitar interferencias entre dispositivos y mejorar el desempeño de la red. El ancho de banda determina la cantidad de datos que pueden transmitirse simultáneamente dentro de un canal. En redes inalámbricas modernas, el uso adecuado del ancho de canal es un factor determinante para el rendimiento del sistema. A continuación se presentan los principales conceptos asociados a canales, ancho de banda y modulación.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Canales de frecuencia")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img167.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Canales de frecuencia
            p.mb-0 Son subdivisiones dentro de una banda de frecuencia utilizadas para transmitir señales inalámbricas. La correcta selección de canal reduce interferencias entre dispositivos cercanos.
      .py-3.py-md-4(titulo="Ancho de banda")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img168.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ancho de banda
            p.mb-0 Determina la cantidad de datos que pueden transmitirse simultáneamente dentro de un canal. Un mayor ancho de banda permite mayor velocidad de transmisión.
      .py-3.py-md-4(titulo="<em>OFDM (Orthogonal Frequency Division Multiplexing)</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img169.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i OFDM (Orthogonal Frequency Division Multiplexing)]
            p.mb-0 Técnica de modulación que divide el canal en múltiples subportadoras para mejorar eficiencia y reducir interferencias.
      .py-3.py-md-4(titulo="<em>QAM (Quadrature Amplitude Modulation)</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img170.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i QAM (Quadrature Amplitude Modulation)]
            p.mb-0 Técnica de modulación que combina amplitud y fase de la señal para transmitir mayor cantidad de información por símbolo.
    .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Una mayor complejidad en la modulación permite alcanzar velocidades más altas, aunque requiere una señal de mayor calidad para funcionar correctamente.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación entre modulación y calidad de señal
    .box___style_8.fit___box_8.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-2.fit___p_box Las técnicas de modulación determinan cuántos bits pueden transmitirse por símbolo de señal. La relación se expresa mediante la ecuación:
          p.mb-2.box___style_9.fit___p_box.fit___box_9 R = Blog<span class="fit__text-small">2</span> (M)
          p.mb-2.fit___p_box Donde:
          ul.fa-ul.estilo___ul.mb-2
            li.mb-1.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | R = tasa de transmisión (bits/s).
            li.mb-1.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | B = ancho de banda del canal.
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | M = número de niveles de modulación.
          p.mb-2.fit___p_box Ejemplo:
          p.mb-2.fit___p_box Para una modulación 64-QAM:
          p.mb-2.box___style_9.fit___p_box.fit___box_9 log<span class="fit__text-small">2</span> (64)=6
          p.mb-0.fit___p_box Esto significa que cada símbolo transmite #[b 6 bits de información.]
          p.mb-0.fit___p_box Las modulaciones más avanzadas permiten mayores velocidades, pero requieren mayor calidad de señal.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img171.png', alt='').m-auto
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 8.
              span Modulación digital: bits transmitidos por símbolo y requisito de SNR
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Modulación
                    th.ajuste-border-tabla.texto-left Bits por símbolo
                    th.texto-left Requisito de SNR
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left QPSK
                    td.ajuste-border-tabla.texto-left 2
                    td.texto-left Bajo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 16-QAM
                    td.ajuste-border-tabla.texto-left 4
                    td.texto-left Medio
                  tr
                    td.ajuste-border-tabla.texto-left 64-QAM
                    td.ajuste-border-tabla.texto-left 6
                    td.texto-left Alto
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 256-QAM
                    td.ajuste-border-tabla.texto-left 8
                    td.texto-left Muy alto
        .color___box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p Cuando la calidad de señal disminuye, los dispositivos reducen automáticamente el esquema de modulación para mantener la estabilidad de la comunicación.
                p.mb-0 Este proceso se conoce como #[b adaptación dinámica de modulación].
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Planificación avanzada de canales y capacidad
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3.fit___box_3-3.mb-3(data-aos="zoom-in")
          p.mb-0 La planificación de canales consiste en distribuir adecuadamente las frecuencias disponibles dentro de una red inalámbrica con el objetivo de minimizar interferencias y maximizar la eficiencia espectral.
        p.mb-0 En la banda de #[b 2.4 GHz] solo existen #[b tres canales no superpuestos: 1, 6 y 11]. En las bandas de #[b 5 GHz y 6 GHz] existe una mayor cantidad de canales disponibles, lo que permite reducir la congestión y mejorar el rendimiento de la red. A continuación se presentan los principales conceptos asociados a la planificación de canales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img172.png', alt='').m-auto
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img139.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Interferencia co-canal
                p.mb-0 Ocurre cuando dos #[i Access Point] utilizan el mismo canal dentro de áreas de cobertura que se superponen.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img140.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Interferencia de canal adyacente
                p.mb-0 Se presenta cuando dispositivos operan en canales contiguos, generando solapamiento de señal.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img141.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Reutilización de canal
                p.mb-0 Técnica que permite utilizar nuevamente el mismo canal en zonas suficientemente separadas para evitar interferencias.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img142.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Capacidad por #[i Access Point]
                p.mb-0 Depende del estándar utilizado (802.11n, 802.11ac o 802.11ax), del ancho de banda configurado y de la cantidad de usuarios conectados.
        .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Una planificación adecuada de canales mejora significativamente el desempeño general de la red inalámbrica.
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-9
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Buenas prácticas en redes inalámbricas
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Buenas prácticas
                    th.texto-left Beneficio
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Evitar anchos de canal de 80 MHz en entornos de alta densidad.
                    td.texto-left Reduce interferencias y mejora estabilidad.
                  tr
                    td.ajuste-border-tabla.texto-left Ajustar la potencia de transmisión de los dispositivos.
                    td.texto-left Disminuye el solapamiento de cobertura entre puntos de acceso.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Distribuir usuarios mediante balanceo de carga.
                    td.texto-left Optimiza el uso de los recursos disponibles en la red.
        .color___box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 La correcta planificación de canales contribuye a mejorar el #[b rendimiento, la estabilidad y la experiencia del usuario] en redes inalámbricas.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Caso de análisis técnico de red
    p.mb-5 La implementación de una red inalámbrica en un auditorio con capacidad para 200 usuarios conectados simultáneamente exige una planificación técnica orientada a garantizar cobertura, capacidad y estabilidad del servicio. En este tipo de escenarios de alta densidad, la selección del estándar inalámbrico, la distribución de los puntos de acceso y la administración del espectro resultan determinantes para evitar degradación del rendimiento. A continuación, se sintetizan los factores técnicos más relevantes del escenario planteado.
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso del estándar #[i WiFi] 6 (802.11ax)
                p.mb-0 Permite gestionar mayor cantidad de usuarios simultáneos y optimiza la eficiencia espectral mediante tecnologías como OFDMA y MU-MIMO.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img173.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Distribución de múltiples #[i Access Point]
                p.mb-0 Facilita una cobertura uniforme y reduce la concentración excesiva de usuarios sobre un solo dispositivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img174.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Utilización de canales no superpuestos
                p.mb-0 Disminuye interferencias entre celdas inalámbricas cercanas y mejora la estabilidad de la comunicación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img175.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Balanceo de carga entre puntos de acceso
                p.mb-0 Distribuye de manera más eficiente los usuarios conectados, evitando saturación en determinados equipos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img176.png', alt='' style="max-width: 500px").m-auto
    .fit___width_final
      .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
        .px-5
          .row.align-items-center.justify-content-center.p-3
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
            .col-xl
              p.mb-0 Una planificación inadecuada de canales o la utilización de estándares inalámbricos obsoletos puede generar congestión, incremento de interferencias y reducción significativa en el rendimiento de la red. Por esta razón, en escenarios de alta concurrencia, la capacidad de la infraestructura debe evaluarse con el mismo nivel de importancia que la cobertura.
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
