<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Internet de las Cosas (#[i IoT]) y redes inalámbricas
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El #[i internet] de las cosas (#[i Internet of Things, IoT]) constituye un modelo tecnológico que permite la interconexión de objetos físicos mediante redes inalámbricas y sistemas digitales. Esta integración posibilita la recopilación, transmisión y análisis de datos en tiempo real, lo cual favorece la optimización de procesos, la automatización de operaciones y el fortalecimiento de la toma de decisiones en diferentes entornos organizacionales.
        .box___style_3.fit___box_3-2.mb-3(data-aos="zoom-in")
          p.mb-0 Los dispositivos #[i IoT] incluyen sensores, actuadores, equipos industriales y sistemas inteligentes capaces de comunicarse entre sí sin intervención humana directa. En este contexto, las redes inalámbricas representan el principal medio de comunicación debido a su flexibilidad, escalabilidad y facilidad de despliegue. La adecuada definición de parámetros de red resulta fundamental para garantizar conectividad estable, bajo consumo energético y seguridad en la transmisión de la información.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img254.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Conceptos fundamentales de #[i IoT]
    p.mb-5 El funcionamiento del #[i IoT] se sustenta en la integración de elementos que permiten transformar los datos capturados del entorno en información útil para la toma de decisiones. Esta articulación tecnológica facilita la automatización de procesos, el monitoreo remoto y la optimización de recursos en contextos industriales y empresariales. A continuación, se sintetizan los componentes esenciales del modelo.
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dispositivos físicos inteligentes
                p.mb-0 Capturan información del entorno mediante sensores o ejecutan acciones mediante actuadores.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img255.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conectividad inalámbrica
                p.mb-0 Permite la transmisión de datos entre dispositivos y plataformas digitales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img256.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Plataforma de procesamiento de datos
                p.mb-0 Analiza la información recopilada y genera resultados para control y automatización.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img257.png', alt='' style="max-width: 500px").m-auto
    .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 La interacción de estos componentes configura la estructura básica de cualquier sistema #[i IoT], generalmente compuesto por sensores que recolectan datos, una red inalámbrica que transporta la información y una plataforma digital encargada del procesamiento y análisis.  
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Ecosistema #[i IoT]
    .row.align-items-center.justify-content-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img254.png', alt='').m-auto
      .col-xl
        .box___style_3.fit___box_3.mb-3(data-aos="zoom-in")
          figure.mb-3
            img(src='@/assets/curso/temas/img330.svg', alt='' style="max-width: 90px")
          p.mb-0 El ecosistema #[i IoT] está integrado por diversos dispositivos interconectados que operan de manera coordinada para capturar información, procesarla y ejecutar acciones automáticas. Entre los componentes más relevantes se encuentran los sensores, los actuadores, los microcontroladores y los dispositivos gateway, cada uno con funciones específicas dentro del sistema tecnológico.
        p.mb-0 Los componentes del ecosistema #[i IoT] cumplen funciones específicas dentro del sistema tecnológico.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Sensores
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Los sensores son dispositivos que detectan variables físicas como temperatura, humedad, presión, movimiento o luminosidad. Transforman estas variables en señales eléctricas que pueden transmitirse a través de redes inalámbricas.
        .box___style_15.mb-3(data-aos="fade-right")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Agricultura inteligente]. Medición de humedad del suelo.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Monitoreo ambiental]. Control de calidad del aire.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Control industrial]. Supervisión de variables operativas.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Sistemas de seguridad]. Detección de movimiento.
        p.mb-0 Se establece que los sensores constituyen el punto de entrada de información en el sistema #[i IoT].
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img259.jpg', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Actuadores
    .color___box_3
      .px-5
        p.mb-5 Los actuadores son dispositivos que ejecutan acciones físicas en respuesta a una señal del sistema.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img260.png', alt="" ).m-auto
                h4.text-center Activación de equipos
                p.mb-0.text-center Encender o apagar motores.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img261.png', alt="" ).m-auto
                h4.text-center Automatización agrícola
                p.mb-0.text-center Activar sistemas de riego.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img262.png', alt="" ).m-auto
                h4.text-center Control de flujo
                p.mb-0.text-center Abrir o cerrar válvulas.
        .color___box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Se reconoce que los actuadores permiten completar el proceso de automatización.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Microcontroladores
    p.mb-5 Los microcontroladores son circuitos integrados programables que procesan la información capturada por los sensores y controlan los actuadores.
    .row.justify-content-center.mb-5
      .col-xl-4.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img263.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Unidad de procesamiento
              p.mb-0 Ejecuta instrucciones del sistema.
      .col-xl-4.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img264.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Memoria
              p.mb-0 Almacena datos y programas.
      .col-xl-4
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img265.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Interfaces de comunicación
              p.mb-0 Permiten conexión con dispositivos y redes.
    p.mb-5 Se establece que estos dispositivos coordinan el funcionamiento general del sistema #[i IoT].
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 #[i Gateway]
    .color___box_3
      .px-5
        p.mb-5 El #[i gateway IoT ]actúa como intermediario entre los dispositivos #[i IoT] y la red principal o la nube.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img266.png', alt="" ).m-auto
                h4.text-center Recopilación de datos
                p.mb-0.text-center Recibe información de múltiples sensores.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img267.png', alt="" ).m-auto
                h4.text-center Traducción de protocolos
                p.mb-0.text-center Permite interoperabilidad tecnológica.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img268.png', alt="" ).m-auto
                h4.text-center Envío de información
                p.mb-0.text-center Transmite datos a servidores o plataformas en la nube.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Se reconoce que puede operar mediante tecnologías como #[i WiFi], Ethernet o redes #[i Low Power Wide Area Network (LPWAN)], incluyendo protocolos como #[i LoRa].
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Medios de transmisión para #[i IoT]
    p.mb-5 Las tecnologías inalámbricas utilizadas en #[i IoT ]deben cumplir requisitos técnicos que permitan garantizar el funcionamiento eficiente de los dispositivos dentro de la red.
    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Bajo consumo energético")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Bajo consumo energético
            p.mb-0 Permite prolongar la vida útil de dispositivos alimentados por batería.
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/img269.svg", alt=""  style="max-width: 150px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cobertura adecuada")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Cobertura adecuada
            p.mb-0 Facilita la comunicación en entornos amplios o de difícil acceso.
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/img270.svg", alt=""  style="max-width: 150px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Escalabilidad")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Escalabilidad
            p.mb-0 Posibilita la conexión de gran cantidad de dispositivos.
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/img271.svg", alt=""  style="max-width: 150px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Seguridad integrada")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            h4 Seguridad integrada
            p.mb-0 Protege la transmisión de datos y la integridad del sistema.
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/img272.svg", alt=""  style="max-width: 150px").m-auto
    p.mb-5 Se reconoce que el cumplimiento de estos requisitos influye directamente en el desempeño de la red #[i IoT].
    .box___style_16.mb-5.mb-lg-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          h5 Cálculo de consumo energético en dispositivos #[i IoT]. 
          p En aplicaciones #[i IoT], muchos dispositivos funcionan mediante baterías, por lo que el consumo energético se convierte en un factor crítico en el diseño de la red. Las tecnologías utilizadas deben optimizar la transmisión de datos para prolongar la vida útil del dispositivo.  El tiempo de funcionamiento de un dispositivo alimentado por batería puede estimarse mediante la siguiente expresión:
          .row
            .col
              p.mb-0 Tiempo de operación =
            .col
              .box___style_18
                p.mb-0.line--bottom Capacidad de bateria
                p.mb-0 Consumo promedio
          p Donde:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Capacidad de batería = miliamperios-hora (mAh).
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Consumo promedio = miliamperios (mA).
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img273.png', alt='').m-auto
    .box___style_17.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img274.png', alt='').m-auto
        .col-xl
          h5 Ejemplo de cálculo
          p Supongamos un sensor IoT con las siguientes características:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Capacidad de batería = #[b 2000 mAh].
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Consumo promedio del dispositivo = #[b 20 mA].
          p Aplicando la ecuación:
          .row
            .col
              p.mb-0 Tiempo =
            .col
              .box___style_18.fit___box_18
                p.mb-0.line--bottom 2000
                p.mb-0 20
          p Tiempo = 100 horas.
          h5 Interpretación técnica
          p.mb-0 Esto significa que el dispositivo puede operar aproximadamente #[b 100 horas de manera continua] antes de requerir recarga o reemplazo de batería. En aplicaciones reales, tecnologías como #[b #[i LoRa, Zigbee o NB-IoT]] implementan mecanismos de ahorro energético que permiten reducir significativamente el consumo promedio, extendiendo la vida útil de los dispositivos a #[b meses o incluso años de funcionamiento].
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Integración con #[i Cloud Computing]
    .color___box_3
      .px-5
        p.mb-5 Los datos recopilados por dispositivos #[i IoT] suelen enviarse a plataformas en la nube (#[i Cloud Computing]), donde se almacenan y procesan para facilitar su gestión y aprovechamiento.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img275.png', alt="" ).m-auto
                h4.text-center Almacenamiento masivo
                p.mb-0.text-center Permite gestionar grandes volúmenes de datos.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img276.png', alt="" ).m-auto
                h4.text-center Acceso remoto
                p.mb-0.text-center Facilita la supervisión y control desde cualquier ubicación.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img277.png', alt="" ).m-auto
                h4.text-center Escalabilidad
                p.mb-0.text-center Posibilita aumentar recursos según la demanda.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img278.png', alt="" ).m-auto
                h4.text-center Integración empresarial
                p.mb-0.text-center Permite conexión con sistemas organizacionales.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Se establece que la comunicación entre dispositivos #[i IoT] y la nube debe implementarse mediante protocolos seguros que garanticen la protección de la información.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 #[i Big Data] e Inteligencia Artificial
    .color___box_3
      .px-5
        p.mb-5 El gran volumen de datos generado por dispositivos #[i IoT] requiere herramientas avanzadas de procesamiento y análisis. El #[i big data] permite gestionar grandes cantidades de información estructurada y no estructurada. A su vez, la Inteligencia Artificial (IA) utiliza estos datos para mejorar el desempeño de los sistemas tecnológicos.
        .row.justify-content-center.mb-0
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img279.png', alt="" ).m-auto
                h4.text-center Detección de patrones
                p.mb-0.text-center Identificación de comportamientos repetitivos.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img280.png', alt="" ).m-auto
                h4.text-center Generación de predicciones
                p.mb-0.text-center Anticipación de eventos o fallas.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img281.png', alt="" ).m-auto
                h4.text-center Optimización de procesos
                p.mb-0.text-center Mejora del uso de recursos.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img282.png', alt="" ).m-auto
                h4.text-center Automatización de decisiones
                p.mb-0.text-center Ejecución de acciones sin intervención humana.
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Transformación digital y automatización
    p.mb-3  La implementación de redes #[i IoT] forma parte de procesos de transformación digital en las organizaciones, ya que permite mejorar la eficiencia operativa y la gestión de recursos.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_15.fit___box_15-2.mb-3(data-aos="fade-right")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Optimización de recursos]. Uso eficiente de insumos y equipos.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Reducción de costos operativos]. Disminución de gastos de operación.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Mejora de eficiencia energética]. Control del consumo de energía.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Automatización productiva]. Incremento de productividad.
        p.mb-0 Se establece que, desde el punto de vista técnico, la evaluación de redes IoT requiere considerar aspectos clave.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img283.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img284.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Cobertura adecuada
              p.mb-0 Garantiza conectividad en toda el área de operación.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img285.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Seguridad robusta
              p.mb-0 Protege la integridad de los datos.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img286.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Escalabilidad futura
              p.mb-0 Permite crecimiento de la red.
      .col-xl-3
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img287.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Cumplimiento normativo
              p.mb-0 Asegura conformidad con regulaciones vigentes.
    p.mb-0 Se reconoce que una red #[i IoT] mal dimensionada puede generar pérdidas de información, fallas operativas y vulnerabilidades de seguridad.
    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_6_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.7 Arquitectura técnica #[i IoT] y protocolos
    .color___box_4
      .px-5
        .row.align-items-center.justify-content-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p.mb-3 Una arquitectura #[i IoT] se organiza en diferentes capas funcionales que permiten la captura, transmisión, procesamiento y uso de la información.
            .box___style_15.mb-3(data-aos="fade-right")
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Dispositivos]. Captura de datos mediante sensores y ejecución de acciones mediante actuadores.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Red]. Transmisión de información mediante tecnologías inalámbricas.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b #[i Gateway]]. Integración y envío de datos hacia la nube.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Plataforma en la nube	Almacenamiento y procesamiento de información.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Aplicación y análisis]. Interpretación de datos y toma de decisiones.
            p.mb-0 Se establece que la comunicación entre los elementos de la arquitectura se realiza mediante protocolos específicos:
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img288.png', alt='').m-auto
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img289.png', alt="" ).m-auto
                h4.text-center MQTT
                p.mb-0.text-center Protocolo ligero basado en modelo publicador-suscriptor.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img290.png', alt="" ).m-auto
                h4.text-center CoAP
                p.mb-0.text-center Diseñado para dispositivos con recursos limitados.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img291.png', alt="" ).m-auto
                h4.text-center HTTP
                p.mb-0.text-center  Utilizado cuando se requiere compatibilidad con servicios #[i web].  
    .fit___width_final
      .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
        .px-5
          .row.align-items-center.justify-content-center.p-3
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
            .col-xl
              p #[b Se reconoce que el flujo típico de operación puede estructurarse de la siguiente manera:]
              p Sensor → gateway → broker MQTT → plataforma en la nube → panel de control → acción automatizada.
              p.mb-0 Finalmente, la selección del protocolo depende de factores técnicos como consumo energético, latencia requerida, volumen de datos y nivel de seguridad necesario.
</template>

<script>
export default {
  name: 'Tema6',
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
