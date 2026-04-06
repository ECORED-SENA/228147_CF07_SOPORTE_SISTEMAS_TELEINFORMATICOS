<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Implementación y evaluación técnica
    .row.align-items-center.justify-content-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img292.png', alt='').m-auto
      .col-xl
        p La implementación y evaluación técnica de una red inalámbrica constituye el proceso mediante el cual se definen, verifican y ajustan los parámetros operativos conforme a estándares técnicos y normativa vigente. Este proceso garantiza que la red cumpla con los requerimientos de cobertura, capacidad, seguridad y estabilidad establecidos durante la fase de planificación.
        .box___style_3.fit___box_3-2.mb-3(data-aos="zoom-in")
          p.mb-0 La evaluación no se limita a la instalación de equipos. También incluye el análisis del entorno físico, la verificación de cumplimiento normativo, la medición del desempeño y la documentación técnica de la infraestructura.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Proceso de implementación de redes inalámbricas
    p.mb-5 La implementación de una red inalámbrica se desarrolla mediante un proceso estructurado que permite garantizar que la infraestructura cumpla con los requerimientos técnicos definidos durante la planificación.
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análisis de requerimientos
                p.mb-0 Se identifican las necesidades de conectividad de la organización, incluyendo número de usuarios, tipo de aplicaciones utilizadas, áreas de cobertura requeridas y niveles de seguridad necesarios. Este análisis permite definir los recursos tecnológicos que serán necesarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img293.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño de la arquitectura de red
                p.mb-0 Se establecen los parámetros técnicos de la infraestructura, como el tipo de tecnología inalámbrica, la ubicación de los puntos de acceso, la topología de red, la planificación de canales y la segmentación de red. El diseño debe considerar tanto cobertura como capacidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img294.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Site survey]y evaluación del entorno
                p.mb-0 Se realiza un estudio técnico del entorno físico para identificar obstáculos estructurales, interferencias existentes, densidad de dispositivos y distribución espacial de usuarios. El resultado permite ajustar el diseño inicial.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img295.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Instalación de infraestructura
                p.mb-0 Se instalan los equipos definidos en el diseño, como puntos de acceso, antenas, controladores inalámbricos y cableado estructurado. La instalación debe seguir las recomendaciones del fabricante y los estándares de telecomunicaciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img296.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Configuración de red
                p.mb-0 Se configuran los parámetros operativos de los dispositivos, incluyendo SSID, mecanismos de autenticación y cifrado, canales y potencia de transmisión, VLAN y direccionamiento IP. Una configuración adecuada garantiza seguridad y eficiencia en la operación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img297.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Validación y pruebas de funcionamiento
                p.mb-0 Se realizan pruebas para verificar que la red cumple con los parámetros definidos de cobertura, capacidad, estabilidad y seguridad. Las mediciones permiten identificar ajustes necesarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img298.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Documentación técnica
                p.mb-0 Se registra la infraestructura implementada mediante diagramas físicos y lógicos, registros de configuración e informes de evaluación. Esta documentación es fundamental para el mantenimiento y la expansión futura de la red.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img299.png', alt='' style="max-width: 500px").m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Interpretación técnica, inspección y evaluación del sitio
    p.mb-3 La correcta implementación de equipos inalámbricos requiere la interpretación adecuada de los manuales técnicos proporcionados por los fabricantes. Estos documentos contienen especificaciones relacionadas con parámetros operativos y condiciones de funcionamiento.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img300.png', alt='').m-auto
      .col-xl
        .box___style_15.fit___box_15-3(data-aos="fade-left")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | 
              p.mb-0 #[b Frecuencias de operación]
              p.mb-0 Bandas de funcionamiento permitidas.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | 
              p.mb-0 #[b Potencia máxima permitida]
              p.mb-0 Nivel máximo de transmisión autorizado.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | 
              p.mb-0 #[b Tipo de antenas compatibles]
              p.mb-0 Características técnicas admitidas.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | 
              p.mb-0 #[b Protocolos soportados]
              p.mb-0 Estándares de comunicación disponibles.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | 
              p.mb-0 #[b Requerimientos de instalación]
              p.mb-0 Condiciones técnicas para montaje.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | 
              p.mb-0 #[b Condiciones ambientales]
              p.mb-0 Rangos seguros de funcionamiento.
    p.mb-5 La interpretación técnica permite configurar correctamente los dispositivos, evitar sobrepasar límites regulatorios, garantizar compatibilidad entre equipos y reducir fallos de implementación. Un error común consiste en ignorar las recomendaciones del fabricante relacionadas con ubicación, ventilación o distancia mínima entre dispositivos. Los manuales técnicos incluyen parámetros que deben analizarse cuidadosamente durante la implementación.
    .row.justify-content-center.mb-5
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img301.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Potencia máxima
              p.mb-0 Límite de transmisión permitido.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img302.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Ganancia de antena
              p.mb-0 Impacto en el alcance de cobertura.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img303.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Sensibilidad del receptor
              p.mb-0 Capacidad de recibir señales débiles.
      .col-xl-3
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img304.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Temperatura operativa
              p.mb-0 Rango seguro de funcionamiento.
    p.mb-5 Ignorar estos parámetros puede provocar degradación del rendimiento o incumplimiento normativo.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Inspección y evaluación del sitio
    p.mb-5 La inspección del sitio constituye una fase previa a la implementación que permite analizar el entorno físico donde operará la red, con el fin de identificar obstáculos, fuentes de interferencia y condiciones estructurales.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 #[i Site survey]
    .color___box_3
      .px-5
        p.mb-5 El #[i Site survey] es el estudio técnico que permite determinar la mejor ubicación de puntos de acceso y antenas.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img305.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Medición de intensidad de señal (RSSI)
                p.mb-0.text-center Determinar niveles de cobertura.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img306.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Identificación de interferencias
                p.mb-0.text-center Detectar fuentes de perturbación.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img307.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Evaluación de cobertura
                p.mb-0.text-center Verificar alcance de señal.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img308.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Análisis de canales ocupados
                p.mb-0.text-center Optimizar planificación de frecuencias.
        .row.align-items-center.justify-content-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_15.fit___box_15-4(data-aos="fade-right")
              p Existen dos tipos principales de #[i site survey]: 
              ul.fa-ul.estilo___ul.mb-3
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Predictivo]. Basado en planos y simulaciones.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Activo]. Basado en mediciones reales en campo.
              p.mb-0 Este proceso permite optimizar la ubicación de dispositivos y minimizar zonas sin cobertura.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img309.png', alt='').m-auto
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Herramientas utilizadas en #[i site survey]
    .color___box_3
      .px-5
        p.mb-5 El análisis del entorno inalámbrico se realiza mediante herramientas especializadas que permiten medir el comportamiento del espectro radioeléctrico.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img310.png', alt="" ).m-auto
                h4.text-center #[i Ekahau site survey]
                p.mb-0.text-center Análisis profesional de cobertura.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img311.png', alt="" ).m-auto
                h4.text-center #[i NetSpot]
                p.mb-0.text-center Evaluación de redes #[i WiFi].
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img312.png', alt="" ).m-auto
                h4.text-center #[i AirMagnet]
                p.mb-0.text-center Diagnóstico avanzado de desempeño.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img313.png', alt="" ).m-auto
                h4.text-center #[i Acrylic WiFi]
                p.mb-0.text-center Medición de señal e interferencias.
        .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Estas herramientas permiten generar mapas de calor (heatmaps) que representan la intensidad de señal y la distribución de cobertura.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Ejemplo práctico de #[i site survey]
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_19
          p Se considera la implementación de una red inalámbrica en un edificio de oficinas con una superficie aproximada de 900 m². Durante el estudio de sitio se realizan mediciones obteniendo los siguientes resultados.
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Zona A]. -55 dBm
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Zona B]. -62 dBm
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Zona C]. -70 dBm
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img314.jpg', alt='').m-auto
      .col-xl(data-aos="fade-left")
        .box___style_20
          figure.mb-3(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img315.svg', alt='' style="max-width: 90px")
          p.mb-0 Las zonas A y B presentan niveles adecuados para aplicaciones empresariales, mientras la zona C presenta un nivel inferior al recomendado, lo que puede provocar reducción de velocidad y pérdida de paquetes. En este caso se recomienda instalar un punto de acceso adicional o ajustar la ubicación de los dispositivos.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Medición de cobertura
    p.mb-5 La medición de cobertura permite verificar que la señal alcance las áreas previstas con niveles adecuados de intensidad.
    .row.justify-content-center.mb-5
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img316.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Nivel de señal (dBm)
              p.mb-0 Intensidad de señal recibida.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img316.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Relación señal-ruido (SNR)
              p.mb-0 Diferencia entre señal y ruido.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img316.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Tasa de transferencia real
              p.mb-0 Velocidad efectiva de comunicación.
      .col-xl-3
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img316.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Latencia
              p.mb-0 Tiempo de respuesta de la red.
    p.mb-5.text-center Una cobertura adecuada debe garantizar estabilidad incluso en momentos de alta demanda.
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Parámetros técnicos recomendados en evaluación WLAN
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Parámetro
                    th.texto-left Valor recomendado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left RSSI
                    td.texto-left ≥ −65 dBm
                  tr
                    td.ajuste-border-tabla.texto-left SNR
                    td.texto-left ≥ 25 dB
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Latencia
                    td.texto-left < 10 ms
                  tr
                    td.ajuste-border-tabla.texto-left Pérdida de paquetes
                    td.texto-left < 1 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Solapamiento de canales
                    td.texto-left Controlado
            p.mb-0 La cobertura se relaciona con la existencia de señal, mientras la capacidad se refiere a la cantidad de usuarios que la red puede soportar sin degradación del rendimiento.
        .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
          h4.mb-0 Dimensionamiento de puntos de acceso
    p.mb-5 El dimensionamiento de puntos de acceso permite estimar la infraestructura necesaria para soportar usuarios simultáneos.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img317.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Número de AP] = Usuarios totales / Capacidad promedio por AP. 
        br
        p.mb-0 #[b Ejemplo]: usuarios simultáneos estimados 200, capacidad promedio por punto de acceso 35 usuarios. Se requieren mínimo 6 puntos de acceso para garantizar cobertura y capacidad adecuada. Este cálculo permite evitar saturación de la red y garantizar el acceso estable a los servicios.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Elaboración de diagramas técnicos
    p.mb-5 La documentación técnica constituye una parte esencial del proceso de implementación, ya que los diagramas permiten representar la estructura de la red de manera clara y organizada.
    .row.justify-content-center.mb-0
      .col-xl-10  
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Diagramas físicos").ajuste-cajaAcordion
            p.mb-3 Permiten ubicar los dispositivos dentro del espacio real de instalación. Incluyen la representación de puntos de acceso, antenas, rutas de cableado y ubicación de racks. Estos diagramas apoyan actividades de mantenimiento y procesos de ampliación de la infraestructura.
            .ajuste___limite-acordion
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 6.
                span Diagramas físicos
              figure.mb-3
                img(src='@/assets/curso/temas/img318.jpg', alt='').m-auto
          .row(titulo="Diagramas lógicos").ajuste-cajaAcordion
            p.mb-3 Representan la organización funcional de la red. Integran aspectos como la segmentación por VLAN, el direccionamiento IP, las rutas de comunicación y las políticas de acceso. Facilitan la comprensión del flujo de información dentro de la infraestructura tecnológica.
            .ajuste___limite-acordion
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 7.
                span Diagramas lógicos
              figure.mb-3
                img(src='@/assets/curso/temas/img319.jpg', alt='').m-auto
          .row(titulo="Planos y escalas").ajuste-cajaAcordion
            p.mb-3 Permiten elaborar representaciones técnicas respetando proporciones que facilitan la ubicación precisa de los dispositivos y la estimación de cobertura. Favorecen la integración de mapas de calor (#[i heatmaps]) sobre planos arquitectónicos.
            .ajuste___limite-acordion
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 8.
                span Planos y escalas
              figure.mb-3
                img(src='@/assets/curso/temas/img320.jpg', alt='').m-auto
          .row(titulo="Herramientas para diseño de diagramas de red").ajuste-cajaAcordion
            p.mb-3 Facilitan la elaboración profesional de diagramas técnicos mediante aplicaciones especializadas como #[i Microsoft Visio, Lucidchart, Draw.io y AutoCAD], las cuales contribuyen a representar la arquitectura física y lógica de la red de forma organizada.
            .ajuste___limite-acordion
              figure.mb-3
                img(src='@/assets/curso/temas/img321.jpg', alt='').m-auto
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Mantenimiento y soporte de soluciones inalámbricas
    p.mb-5 El mantenimiento garantiza la continuidad operativa de la red inalámbrica. Incluye actividades orientadas a preservar el desempeño y la seguridad de la infraestructura.
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img322.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img323.png').m-auto
            h4.mb-3.estilo-text Actualización de #[i firmware]
            p.mb-0.text-center Mantener el funcionamiento y la seguridad.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img324.png').m-auto
            h4.mb-3.estilo-text Revisión periódica de configuración
            p.mb-0.text-center Verificar parámetros operativos.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img327.png').m-auto
            h4.mb-3.estilo-text Monitoreo de tráfico
            p.mb-0.text-center Analizar comportamiento de la red.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img326.png').m-auto
            h4.mb-3.estilo-text Reemplazo de equipos defectuosos
            p.mb-0.text-center Restablecer el servicio.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img325.png').m-auto
            h4.mb-3.estilo-text Verificación de seguridad
            p.mb-0.text-center Detectar vulnerabilidades.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img328.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El soporte técnico debe desarrollarse de forma preventiva y correctiva, con el fin de asegurar que la red mantenga los niveles de desempeño establecidos durante la planificación.
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Preventivo]. Revisión periódica para evitar fallos.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Correctivo]. Reparación de fallos detectados.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Predictivo]. Análisis del rendimiento para anticipar problemas.
    p.mb-5 El mantenimiento preventivo reduce significativamente el riesgo de interrupciones en el servicio.
    .box___style_21.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/img329.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicios aplicados sobre redes inalámbricas
          p.mb-0 Se invita a revisar el documento de ejercicios prácticos sobre redes inalámbricas, con el fin de fortalecer la comprensión y aplicación de los conceptos técnicos desarrollados.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejercicios_aplicados_sobre_redes_inalambricas.docx')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema7',
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
