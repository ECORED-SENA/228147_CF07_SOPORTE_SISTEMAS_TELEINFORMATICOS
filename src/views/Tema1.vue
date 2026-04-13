<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de las redes inalámbricas
    .row.align-items-center.justify-content-center
      .col-xl
        p La comunicación inalámbrica no surge con el Wi-Fi moderno. Sus bases se encuentran en los experimentos de transmisión electromagnética desarrollados a finales del siglo XIX. El desarrollo de la radiofrecuencia permitió transmitir señales sin utilizar medios físicos, lo que posteriormente dio origen a sistemas de radiocomunicación, telefonía móvil y redes de datos inalámbricas.
        .box___style_2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img1.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Con el avance de la informática y el aumento de la necesidad de movilidad, surgieron los primeros estándares #[b IEEE 802.11] en 1997. Desde entonces, la evolución tecnológica ha incrementado las velocidades de transmisión, ha mejorado la eficiencia espectral y ha fortalecido los mecanismos de seguridad.
        p.mb-4.mb-lg-0 Actualmente, las redes inalámbricas no solo transportan datos. También soportan servicios críticos como la videoconferencia, la automatización industrial, la telemedicina y el #[b Internet de las Cosas (#[i Internet of Things - IoT])], lo que demuestra su papel central en las infraestructuras tecnológicas contemporáneas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img2.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Profundización técnica
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Las redes inalámbricas permiten la transmisión de información sin medios físicos guiados; sin embargo, su funcionamiento está condicionado por múltiples variables técnicas que influyen de manera directa en el rendimiento, la estabilidad y la seguridad de la comunicación. Entre los factores más relevantes se encuentran la frecuencia de operación, la potencia de transmisión, el tipo de antena, las interferencias del entorno, la densidad de usuarios y la capacidad del estándar utilizado.
        .box___style_3(data-aos="zoom-in")
          p.mb-0 A diferencia de las redes cableadas, estas redes comparten el medio de transmisión con otros dispositivos que operan en el mismo espectro, lo que introduce retos relacionados con la gestión de interferencias, el control de acceso al medio y la eficiencia espectral. En consecuencia, el diseño y la evaluación de redes inalámbricas requieren el análisis de tres variables fundamentales: cobertura, capacidad y calidad de señal.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img3.png', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Cobertura
    p.mb-5 La cobertura corresponde al área geográfica en la cual la señal inalámbrica puede ser recibida con un nivel de potencia suficiente para establecer comunicación estable entre dispositivos. Este parámetro depende de la potencia de transmisión del equipo, la ganancia de la antena, la frecuencia empleada, los obstáculos físicos y las interferencias externas.
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Potencia de transmisión
                p.mb-0.text-center Determina el alcance de la señal.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ganancia de antena
                p.mb-0.text-center Mejora la dirección y concentración de la energía radiada.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Frecuencia utilizada
                p.mb-0.text-center Frecuencias altas reducen alcance, pero aumentan capacidad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Obstáculos físicos
                p.mb-0.text-center Atenúan o bloquean la propagación de la señal.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Interferencias externas
                p.mb-0.text-center Generan degradación del enlace inalámbrico.
        .color___box_2(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.mb-5.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 En entornos interiores, materiales como concreto armado, estructuras metálicas y vidrios tratados reducen significativamente la intensidad de la señal.  
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Capacidad
    p.mb-5 La capacidad de una red inalámbrica corresponde al número máximo de dispositivos que pueden conectarse simultáneamente sin degradación significativa del rendimiento. Este parámetro depende del estándar inalámbrico, el ancho de canal, la densidad de usuarios, el uso de tecnologías avanzadas y la disponibilidad de espectro. 
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img14.png').m-auto
                h4.mb-3.estilo-text Estándar inalámbrico
                p.mb-0.text-center Define eficiencia espectral y velocidad máxima.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img15.png').m-auto
                h4.mb-3.estilo-text Ancho de canal
                p.mb-0.text-center Permite una mayor tasa de transmisión.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img16.png').m-auto
                h4.mb-3.estilo-text Densidad de usuarios
                p.mb-0.text-center Incrementos elevados reducen desempeño.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img17.png').m-auto
                h4.mb-3.estilo-text Tecnologías como MU-MIMO y OFDMA
                p.mb-0.text-center Facilitan transmisión simultánea eficiente.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img18.png').m-auto
                h4.mb-3.estilo-text Disponibilidad de espectro
                p.mb-0.text-center Amplía posibilidades de asignación de canales.
        .color___box_2(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.mb-5.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Un #[i Access Point] basado en el estándar #[b 802.11ax] puede gestionar mayor cantidad de dispositivos mediante la división eficiente del canal con #[i OFDMA]. En entornos de alta densidad, la planificación de capacidad resulta tan relevante como la cobertura.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Calidad de señal
    .color___box_3
      .px-5
        p.mb-5 La calidad de la señal inalámbrica se evalúa mediante indicadores como #[b RSSI] (#[i Received Signal Strength Indicator]) y #[b SNR] (#[i Signal-to-Noise Ratio]).
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Niveles de referencia del indicador RSSI
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left RSSI
                    th.texto-left Interpretación técnica
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left -50 dBm
                    td.texto-left Señal excelente
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left -65 dBm
                    td.texto-left Señal buena
                  tr
                    td.ajuste-border-tabla.texto-left -75 dBm
                    td.texto-left Señal aceptable
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left -85 dBm
                    td.texto-left Señal deficiente
            p.mb-5 Valores de #[b SNR] inferiores a 20 dB pueden provocar pérdida de paquetes y reducción de velocidad.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Parámetros técnicos de evaluación de señal
    .color___box_3
      .px-5
        p.mb-5 Durante los procesos de diagnóstico se emplean indicadores que permiten determinar el estado operativo de la red.
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Parámetros técnicos recomendados para la evaluación de redes inalámbricas
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Parámetro
                    th.texto-left Valor recomendado e interpretación
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left RSSI
                    td.texto-left ≥ -65 dBm. Nivel adecuado de señal
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left SNR
                    td.texto-left ≥ 25 dB. Relación señal-ruido favorable
                  tr
                    td.ajuste-border-tabla.texto-left Latencia
                    td.texto-left < 10 ms. Comportamiento estable
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Pérdida de paquetes
                    td.texto-left < 1 %. Transmisión confiable
            p.mb-5 Estos valores son analizados mediante herramientas como #[i Wi-Fi Analyzer, Ekahau] y #[i NetSpot].
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Interpretación técnica según tipo de aplicación
    .color___box_3
      .px-5
        p.mb-5 La potencia de señal debe interpretarse de acuerdo con las exigencias de cada aplicación.
        .row.justify-content-center.mb-0
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Niveles recomendados de señal según tipo de aplicación
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Aplicación
                    th.texto-left RSSI y SNR recomendados
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Navegación #[i web]
                    td.texto-left ≥ -75 dBm y ≥ 20 dB
                  tr
                    td.ajuste-border-tabla.texto-left Video en #[i streaming]
                    td.texto-left ≥ -67 dBm y ≥ 25 dB
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left VoIP
                    td.texto-left ≥ -65 dBm y ≥ 30 dB
            p.mb-0 Si los valores se encuentran por debajo de estos rangos, pueden presentarse retransmisiones, pérdida de paquetes y disminución de la velocidad de transmisión, lo que orienta decisiones como instalar nuevos puntos de acceso o ajustar la potencia.
        <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
        Separador
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Concepto de redes inalámbricas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .box___style_1.mb-3(data-aos="fade-right")
          p.mb-0 Una red inalámbrica es una infraestructura de comunicación que permite el intercambio de datos entre dispositivos mediante señales de radiofrecuencia. A diferencia de las redes cableadas, en las que la transmisión ocurre a través de conductores físicos, en las redes inalámbricas el medio de propagación es el aire.
        p Estas redes poseen características que facilitan su implementación en diversos entornos tecnológicos. Entre las más relevantes se encuentran la movilidad de los usuarios, la flexibilidad de instalación, la escalabilidad y la reducción de costos asociados a la infraestructura física.
        p.mb-4.mb-lg-0 Para comprender su funcionamiento, es necesario considerar varios parámetros técnicos que determinan el desempeño de la red. A continuación se sintetizan los principales elementos que intervienen en la definición de una red inalámbrica.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img19.png', alt='').m-auto
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img21.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Frecuencia
                p.mb-0.text-center Banda del espectro electromagnético utilizada para la transmisión de datos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img22.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Potencia de transmisión
                p.mb-0.text-center Nivel de energía con el que se emite la señal inalámbrica. Influye en el alcance de la comunicación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tipo de antena
                p.mb-0.text-center Dispositivo encargado de irradiar o recibir la señal de radiofrecuencia. Puede ser omnidireccional o direccional.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Estándar de comunicación
                p.mb-0.text-center Conjunto de especificaciones técnicas que regulan el funcionamiento de la red, como la familia IEEE 802.11.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Topología de red
                p.mb-0.text-center Forma en que los dispositivos se organizan y se conectan dentro de la infraestructura inalámbrica.
        .color___box_2(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.mb-5.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Estos elementos permiten establecer las condiciones de funcionamiento, cobertura y rendimiento de una red inalámbrica.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Diferencias operativas entre redes cableadas e inalámbricas
    .color___box_3
      .px-5
        p.mb-5 Las redes cableadas y las redes inalámbricas presentan diferencias significativas en términos de rendimiento, estabilidad y diseño de infraestructura. Estas diferencias están asociadas al medio de transmisión utilizado y a las condiciones del entorno en el que se implementa la red. Mientras las redes cableadas ofrecen mayor previsibilidad en el desempeño, las redes inalámbricas aportan flexibilidad y movilidad a los usuarios.
        .row.justify-content-center.mb-0
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Comparación operativa entre redes cableadas y redes inalámbricas
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Característica
                    th.ajuste-border-tabla.texto-left Red cableada
                    th.texto-left Red inalámbrica
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Medio de transmisión
                    td.ajuste-border-tabla.texto-left Cable físico
                    td.texto-left Aire
                  tr
                    td.ajuste-border-tabla.texto-left Interferencias
                    td.ajuste-border-tabla.texto-left Muy bajas
                    td.texto-left Altas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Movilidad
                    td.ajuste-border-tabla.texto-left Limitada
                    td.texto-left Alta
                  tr
                    td.ajuste-border-tabla.texto-left Estabilidad
                    td.ajuste-border-tabla.texto-left Muy alta
                    td.texto-left Variable
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Velocidad efectiva
                    td.ajuste-border-tabla.texto-left Alta y constante
                    td.texto-left Dependiente del entorno
            p.mb-0 En entornos empresariales es habitual la implementación de arquitecturas híbridas, en las cuales la red cableada funciona como infraestructura principal de comunicación y la red inalámbrica complementa el acceso al proporcionar movilidad y flexibilidad operativa a los usuarios.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Clasificación de redes inalámbricas
    p.mb-5 Las redes inalámbricas se clasifican según su alcance geográfico y nivel de cobertura, lo que permite seleccionar la tecnología más adecuada de acuerdo con los requerimientos de conectividad, movilidad y extensión del servicio. 
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="WPAN")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img26.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 WPAN
            p.mb-0 Red de Área Personal Inalámbrica (#[i Wireless Personal Area Network]). Opera generalmente a distancias menores de 10 m, utiliza con frecuencia la banda de 2.4 GHz y tecnologías como #[i Bluetooth]. Se caracteriza por bajo consumo energético y se emplea para la interconexión de dispositivos personales como auriculares, teclados, relojes inteligentes y teléfonos móviles.
      .py-3.py-md-4(titulo="WLAN")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img27.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 WLAN
            p.mb-0 Red de Área Local Inalámbrica (#[i Wireless Local Area Network]). Permite la conectividad dentro de edificios, oficinas o campus educativos. Utiliza estándares IEEE 802.11 y opera comúnmente en las bandas de 2.4 GHz y 5 GHz. Es la tecnología más utilizada en entornos empresariales y académicos.
      .py-3.py-md-4(titulo="WMAN")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img28.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 WMAN
            p.mb-0 Red de Área Metropolitana Inalámbrica (#[i Wireless Metropolitan Area Network)]. Proporciona cobertura en áreas urbanas amplias y permite interconectar múltiples redes locales dentro de una ciudad. Tecnologías como #[i WiMAX] han sido empleadas para este tipo de infraestructura.
      .py-3.py-md-4(titulo="WWAN")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img29.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 WWAN
            p.mb-0 Red de Área Amplia Inalámbrica (#[i Wireless Wide Area Network]). Ofrece conectividad a nivel regional o nacional mediante tecnologías móviles como 3G, 4G y 5G. Se utiliza para brindar acceso a internet a gran escala a través de infraestructura celular.
    .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Esta organización facilita la comprensión de las diferencias de alcance y funcionamiento entre los distintos tipos de redes inalámbricas, lo que contribuye a la selección adecuada de la arquitectura tecnológica según el escenario de implementación.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Comparación de redes inalámbricas según cobertura
    .color___box_3
      .px-5
        p.mb-5 La siguiente tabla sintetiza las principales características de cada tipo de red inalámbrica en función de su alcance y aplicación.
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Clasificación de redes inalámbricas según cobertura geográfica
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Tipo de red
                    th.ajuste-border-tabla.texto-left Cobertura aproximada
                    th.ajuste-border-tabla.texto-left Tecnología asociada
                    th.texto-left Aplicación principal
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left WPAN
                    td.ajuste-border-tabla.texto-left 1 - 10 m
                    td.ajuste-border-tabla.texto-left #[i Bluetooth]
                    td.texto-left Dispositivos personales
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left WLAN
                    td.ajuste-border-tabla.texto-left 30 - 100 m
                    td.ajuste-border-tabla.texto-left Wi-Fi
                    td.texto-left Redes empresariales
                  tr
                    td.ajuste-border-tabla.texto-left WMAN
                    td.ajuste-border-tabla.texto-left Hasta 50 km
                    td.ajuste-border-tabla.texto-left #[i WiMAX]
                    td.texto-left Redes metropolitanas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left WWAN
                    td.ajuste-border-tabla.texto-left Cobertura nacional
                    td.ajuste-border-tabla.texto-left 4G / 5G
                    td.texto-left Redes móviles
            p.mb-5 Esta clasificación facilita la selección de la arquitectura de red más adecuada según el alcance requerido, el tipo de dispositivo y la infraestructura disponible.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Caso de aplicación técnica
    .row.align-items-center.justify-content-center
      .col-xl
        p Considérese la implementación de una red inalámbrica en un aula universitaria con aproximadamente #[b 40 estudiantes conectados simultáneamente]. Para garantizar un funcionamiento adecuado, es necesario considerar parámetros técnicos relacionados tanto con la cobertura como con la capacidad de la red.
        .box___style_2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img30.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Entre los aspectos más relevantes se encuentran el uso del estándar #[b Wi-Fi 6 (802.11ax)], la configuración de anchos de canal de #[b 20 o 40 MHz] para reducir interferencias, la disponibilidad de un #[i Access Point] con capacidad suficiente para múltiples clientes y la planificación adecuada de canales para evitar solapamientos.
        p.mb-4.mb-lg-0 En este escenario, la capacidad del punto de acceso adquiere una importancia equivalente a la cobertura. Una planificación deficiente puede generar saturación de la red incluso cuando los niveles de señal son adecuados.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img31.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Ondas electromagnéticas
    .color___box_3
      .px-5
        p.mb-5 Las ondas electromagnéticas son perturbaciones que se propagan transportando energía mediante campos eléctricos y magnéticos oscilantes. En las redes inalámbricas, estas ondas permiten la transmisión de información digital modulada sobre una portadora de radiofrecuencia, lo que posibilita la comunicación entre dispositivos sin necesidad de medios físicos guiados.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img32.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Frecuencia
                p.mb-0 Representa el número de ciclos por segundo y se mide en #[i Hertz] (Hz). En redes inalámbricas se utilizan frecuencias expresadas en MHz y GHz. Un #[i megahertz] equivale a 1.000.000 Hz y un #[i gigahertz] equivale a 1.000.000.000 Hz.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img33.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Longitud de onda
                p.mb-0 Corresponde a la distancia física entre dos puntos consecutivos de una onda. Existe una relación inversamente proporcional entre frecuencia y longitud de onda: a mayor frecuencia, menor longitud de onda.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img34.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Relación matemática
                p.mb-0 La relación entre frecuencia y longitud de onda se expresa mediante la ecuación λ = c / f, donde λ es la longitud de onda, c es la velocidad de la luz (3 x 10⁸ m/s) y f es la frecuencia en #[i Hertz].
    .color___box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Esta relación permite comprender el comportamiento de propagación de las señales inalámbricas en distintos entornos.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación entre frecuencia y propagación
    p.mb-5 El comportamiento de propagación de las ondas electromagnéticas varía según la frecuencia utilizada, lo que incide directamente en la cobertura y la capacidad de transmisión de la red.
    .color___box_4
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img35.svg', alt="" ).m-auto
                h4.text-center Baja frecuencia
                p.mb-0.text-center Mayor alcance y mayor capacidad de penetración en obstáculos físicos.
          .col-xl-6.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img36.svg', alt="" ).m-auto
                h4.text-center Alta frecuencia
                p.mb-0.text-center Mayor capacidad de transmisión de datos, pero menor alcance.
        p.mb-5 Por ejemplo, en redes inalámbricas comunes se presentan las siguientes relaciones aproximadas:
        .row.justify-content-center.mb-0
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Relación entre banda de frecuencia y longitud de onda
            .tabla-a(data-aos="zoom-in").mb-3
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Banda
                    th.texto-left Longitud de onda aproximada
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left 2.4 GHz
                    td.texto-left 12.5 cm
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 5 GHz
                    td.texto-left 6 cm
            p.mb-5 Esto explica por qué las redes que operan en 2.4 GHz proporcionan mayor cobertura, mientras que las que utilizan 5 GHz ofrecen mayores velocidades de transmisión.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
          .col
            h3 Ejemplo de cálculo de longitud de onda
    .color___box_5
      .px-5
        p.mb-5 El cálculo de la longitud de onda permite estimar el comportamiento de propagación de la señal en un entorno específico.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Conversión de frecuencia
                p.mb-0.text-center 2.4 GHz = 2.4 x 10⁹ Hz.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img38.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Aplicación de la ecuación
                p.mb-0.text-center λ = (3 x 10⁸) / (2.4 x 10⁹).
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img39.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Resultado
                p.mb-0.text-center λ = 0.125 m ≈ 12.5 cm.
        .color___box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Este resultado indica que las ondas de 2.4 GHz poseen mayor capacidad de penetración en obstáculos en comparación con frecuencias superiores como 5 GHz o 6 GHz.  
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Potencia y decibeles
    p.mb-5 La potencia de transmisión es un parámetro fundamental en el diseño de redes inalámbricas, ya que determina la intensidad de la señal emitida y su alcance efectivo.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img41.png', alt="" ).m-auto
            h4.text-center dB
            p.mb-0.text-center Medida logarítmica que expresa la relación entre dos niveles de potencia.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img42.png', alt="" ).m-auto
            h4.text-center dBm
            p.mb-0.text-center Potencia expresada en decibelios referidos a un milivatio.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img43.png', alt="" ).m-auto
            h4.text-center dBi
            p.mb-0.text-center Ganancia isotrópica de una antena respecto a un radiador ideal.
    .color___box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Una correcta configuración de la potencia permite reducir interferencias y cumplir con los límites regulatorios establecidos.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Conversión entre dBm y #[i miliwatts]
    p.mb-5 En sistemas de radiofrecuencia es frecuente convertir valores de potencia entre #[i miliwatts] y decibelios.
    .color___box_5
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img44.png', alt="" ).m-auto
                h4.text-center Conversión a dBm
                p.mb-0.text-center P(dBm) = 10 log₁₀ (P(mW)).
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img45.png', alt="" ).m-auto
                h4.text-center Conversión a mW
                p.mb-0.text-center P(mW) = 10^(P(dBm)/10).
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img46.png', alt="" ).m-auto
                h4.text-center Ejemplo práctico
                p.mb-0.text-center Una potencia de 100 mW equivale aproximadamente a 20 dBm.
        .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Este valor es común en muchos puntos de acceso inalámbricos utilizados en redes locales.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación entre frecuencia y cobertura
    .color___box_3
      .px-5
        p.mb-5 La selección de la frecuencia de operación influye directamente en el desempeño de la red.
        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center.mb-4
              .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                .box___style_5.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-4
                        img(src='@/assets/curso/temas/img47.png', alt="" ).m-auto
                    h4.text-center 2.4 GHz
                    p.mb-0.text-center Mayor cobertura y penetración en obstáculos, menor velocidad de transmisión.
              .col-xl-6.col-md-9(data-aos="fade-left")
                .box___style_5.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-4
                        img(src='@/assets/curso/temas/img48.png', alt="" ).m-auto
                    h4.text-center 5 GHz
                    p.mb-0.text-center Menor cobertura, mayor velocidad y menor nivel de interferencia.
            p.mb-0 La elección adecuada depende del entorno físico y de la demanda de tráfico de la red.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Criterios técnicos para selección de banda
    p.mb-5 La selección de la banda de frecuencia debe realizarse considerando factores como densidad de usuarios, interferencias y capacidad requerida.
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/temas/img49.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="2.4 GHz").ajuste-cajaAcordion
            p.mb-3 Ofrece mayor cobertura, pero presenta mayor probabilidad de interferencia. Recomendada para entornos domésticos.
          .row(titulo="5 GHz").ajuste-cajaAcordion
            p.mb-3 Proporciona mayores velocidades de transmisión y menor congestión. Adecuada para oficinas y entornos empresariales.
          .row(titulo="6 GHz").ajuste-cajaAcordion
            p.mb-3 Permite alta capacidad y menor saturación del espectro. Requiere dispositivos compatibles y se emplea en redes empresariales modernas.
    .color___box_2.mb-0(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 El análisis del entorno radioeléctrico mediante herramientas de #[i site survey] permite seleccionar la banda más adecuada para garantizar el rendimiento esperado de la red inalámbrica.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Espectro electromagnético
    .row.align-items-center.justify-content-center.mb-5
      .col-xl
        .box___style_2.fit___box_2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img50.jpg', alt='').m-auto
            .col-xl
              p.mb-0 Las ondas electromagnéticas constituyen el fundamento físico de las comunicaciones inalámbricas. Estas ondas están formadas por un campo eléctrico y un campo magnético que oscilan perpendicularmente entre sí y se propagan en el espacio a la velocidad de la luz (aproximadamente 3 x 10⁸ m/s en el vacío).
        p.mb-4.mb-lg-0 En redes inalámbricas, la información digital se transmite mediante procesos de modulación sobre una onda portadora de radiofrecuencia, lo que permite convertir señales digitales en señales electromagnéticas capaces de propagarse por el aire. El espectro electromagnético corresponde al conjunto completo de frecuencias utilizadas para la transmisión de estas señales, siendo las bandas de radiofrecuencia las más empleadas en telecomunicaciones.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img51.png', alt='').m-auto
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="HF")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img52.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 HF
            p.mb-0 Rango de 3 a 30 MHz. Utilizado principalmente en sistemas de radiocomunicación.
      .py-3.py-md-4(titulo="VHF")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img53.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 VHF
            p.mb-0 Rango de 30 a 300 MHz. Empleado en servicios de televisión y comunicaciones aeronáuticas.
      .py-3.py-md-4(titulo="UHF")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img54.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 UHF
            p.mb-0 Rango de 300 MHz a 3 GHz. Utilizado en telefonía móvil y sistemas inalámbricos de corto alcance.
      .py-3.py-md-4(titulo="SHF")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img55.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 SHF
            p.mb-0 Rango de 3 a 30 GHz. Aplicado en redes Wi-Fi, enlaces de microondas y sistemas de radar.
    .color___box_3
      .px-5
        p.mb-5 El uso compartido del espectro en bandas de libre utilización implica la coexistencia de múltiples dispositivos, lo que puede generar interferencias si no se realiza una adecuada planificación técnica.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img56.png', alt="" ).m-auto
                h4.text-center 2.4 GHz
                p.mb-0.text-center Redes Wi-Fi y tecnologías como #[i Bluetooth].
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img57.png', alt="" ).m-auto
                h4.text-center 5 GHz
                p.mb-0.text-center Redes Wi-Fi de mayor velocidad y menor interferencia.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img58.png', alt="" ).m-auto
                h4.text-center 6 GHz
                p.mb-0.text-center Redes Wi-Fi basadas en estándares recientes como Wi-Fi 6E.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Concepto y características
    .color___box_3
      .px-5
        p.mb-5 El espectro electromagnético presenta características técnicas que influyen directamente en el desempeño de una red inalámbrica. Entre ellas se encuentran su condición de recurso regulado por el Estado, la división en bandas licenciadas y no licenciadas, la existencia de límites de potencia de transmisión y la posibilidad de interferencias cuando múltiples dispositivos utilizan la misma frecuencia. Las características técnicas del espectro electromagnético son: 
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img59.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Recurso regulado
                p.mb-0.text-center Su uso está controlado por organismos gubernamentales.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img60.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center División en bandas
                p.mb-0.text-center Existen bandas licenciadas y de uso libre.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img61.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Límites de potencia
                p.mb-0.text-center Se establecen valores máximos para evitar interferencias.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img62.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Compartición del espectro
                p.mb-0.text-center Puede generar congestión y degradación del servicio.
        .color___box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 La eficiencia espectral constituye un indicador clave, ya que relaciona la cantidad de información transmitida con el ancho de banda disponible. Tecnologías modernas como #[b 802.11ax] optimizan este parámetro mediante técnicas avanzadas de modulación.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Bandas de frecuencia utilizadas en redes inalámbricas
    p.mb-5 Las redes inalámbricas operan principalmente en las bandas de #[b 2.4 GHz, 5 GHz y 6 GHz], cada una con características específicas de cobertura y capacidad.
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 2.4 GHz
                p.mb-0 Proporciona mayor alcance y penetración en obstáculos. Dispone de tres canales no superpuestos y presenta alta congestión por uso compartido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 5 GHz
                p.mb-0 Ofrece mayor cantidad de canales disponibles y menor interferencia. Presenta menor capacidad de penetración en estructuras físicas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 6 GHz
                p.mb-0 Permite mayor capacidad y menor saturación del espectro. Requiere dispositivos compatibles con estándares recientes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
    .color___box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 La selección de la banda debe basarse en el análisis técnico del entorno y en los requerimientos de tráfico de la red.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Parametrización del espectro
    p.mb-5 La parametrización del espectro consiste en la configuración adecuada de variables técnicas que determinan el desempeño de la red inalámbrica.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img67.png', alt="" ).m-auto
            h4.text-center Canal de operación
            p.mb-0.text-center Define la frecuencia central utilizada por el dispositivo.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img68.png', alt="" ).m-auto
            h4.text-center Ancho de banda
            p.mb-0.text-center Determina la velocidad potencial de transmisión (20, 40, 80 o 160 MHz).
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img69.png', alt="" ).m-auto
            h4.text-center Potencia de transmisión
            p.mb-0.text-center Influye en el alcance de la señal y en el nivel de interferencia.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___style_6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img70.png', alt="" ).m-auto
            h4.text-center Control automático de potencia
            p.mb-0.text-center Permite ajustar dinámicamente la intensidad de señal.
    .color___box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Un mayor ancho de banda permite aumentar la velocidad de transmisión, pero también incrementa la probabilidad de interferencias, especialmente en entornos de alta densidad de usuarios.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Legislación nacional
    p.mb-5 En Colombia, la #[b Comisión de Regulación de Comunicaciones (CRC)] establece las condiciones técnicas para el uso del espectro radioeléctrico.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Potencia máxima permitida")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img71.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Potencia máxima permitida
            p.mb-0 Define límites para evitar interferencias perjudiciales.
      .py-3.py-md-4(titulo="Bandas autorizadas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img72.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Bandas autorizadas
            p.mb-0 Determina frecuencias disponibles para distintos servicios.
      .py-3.py-md-4(titulo="Requisitos de operación")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img73.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Requisitos de operación
            p.mb-0 Establece condiciones técnicas de funcionamiento.
    .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 El cumplimiento de la normativa nacional es obligatorio para garantizar el uso responsable del espectro y evitar sanciones.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Regulación internacional
    .color___box_3
      .px-5
        p.mb-5 La gestión global del espectro electromagnético se realiza mediante organismos internacionales que establecen lineamientos técnicos y de interoperabilidad.
        .row.justify-content-center.mb-5
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img74.png', alt="" ).m-auto
                h4.text-center ITU
                p.mb-0.text-center Coordina la asignación global de frecuencias y promueve el uso eficiente del espectro.
          .col-xl-6.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img75.png', alt="" ).m-auto
                h4.text-center IEEE
                p.mb-0.text-center Desarrolla estándares técnicos de comunicación inalámbrica como la familia 802.11.
    .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 La armonización entre la regulación nacional e internacional permite la interoperabilidad de dispositivos y la operación eficiente de redes inalámbricas a nivel global.
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Propagación de ondas de radio
    p.mb-5 La propagación de ondas de radio describe el comportamiento de la señal electromagnética al desplazarse desde el transmisor hasta el receptor. Este fenómeno está influenciado por el entorno físico, la frecuencia utilizada y la potencia de transmisión. Comprender la propagación es esencial para la evaluación técnica de cobertura y la planificación de redes inalámbricas. A continuación se presentan los principales fenómenos que afectan la propagación de las ondas de radio.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Reflexión")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img76.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Reflexión
            p.mb-0 Ocurre cuando la onda electromagnética impacta una superficie mayor que su longitud de onda y rebota en dirección distinta. Superficies metálicas y estructuras de concreto generan reflexiones significativas. La reflexión puede provocar interferencias constructivas o destructivas que afectan la calidad de la señal.
      .py-3.py-md-4(titulo="Refracción")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img77.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Refracción
            p.mb-0 Se presenta cuando la onda cambia de dirección al atravesar medios con distinta densidad, como vidrio o humedad en el aire. Este fenómeno puede alterar la trayectoria prevista de la señal y afectar la cobertura en entornos interiores.
      .py-3.py-md-4(titulo="Difracción")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img78.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Difracción
            p.mb-0 Permite que la señal rodee obstáculos cuando estos son comparables a la longitud de onda. Aunque posibilita mantener conectividad, la intensidad de la señal disminuye considerablemente.
      .py-3.py-md-4(titulo="Dispersión")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img79.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Dispersión
            p.mb-0 Ocurre cuando la señal impacta superficies irregulares y se fragmenta en múltiples direcciones. Esto puede generar multitrayectoria (#[i multipath]), fenómeno común en entornos urbanos. Tecnologías modernas implementan técnicas como #[i MIMO] para aprovechar el #[i multipath] en lugar de considerarlo una limitación.
    .color___box_5
      .px-5
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
          .col
            h3 Atenuación e interferencias
        p.mb-5 La atenuación corresponde a la pérdida progresiva de intensidad de la señal conforme aumenta la distancia. Esta pérdida se expresa en decibeles y depende de diversos factores del entorno. A continuación se presentan los factores que influyen en la atenuación y los tipos de interferencia que pueden presentarse en redes inalámbricas.
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-6.mb-4.mb-lg-0
            .box___style_7(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img80.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  h4 Factores de atenuación
                  p.mb-0 Distancia, obstáculos, frecuencia y condiciones ambientales.
          .col-xl-6
            .box___style_7(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img80.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  h4 Tipos de interferencia
                  p.mb-0 Interferencia co-canal, interferencia de canal adyacente e interferencia electromagnética externa.
        p.mb-5 La identificación de estos factores es fundamental en procesos de #[b #[i Site Survey]] y evaluación técnica de red.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
          .col
            h3 Pérdida por espacio libre (#[i Free Space Path Loss])
    .color___box_3
      .px-5
        p.mb-5 La pérdida por espacio libre representa la atenuación que experimenta una señal electromagnética a medida que aumenta la distancia entre el transmisor y el receptor. Este fenómeno es inherente a la propagación de las ondas de radio y constituye un parámetro esencial en el diseño de enlaces inalámbricos.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img81.png', alt="" ).m-auto
                h4.text-center Definición
                p.mb-0.text-center Atenuación de la señal debida a la dispersión de la energía en el espacio conforme aumenta la distancia.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img82.png', alt="" ).m-auto
                h4.text-center Expresión
                p.mb-0.text-center FSPL = 20 log (d) + 20 log (f) + 32.44.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img83.png', alt="" ).m-auto
                h4.text-center Variables
                p.mb-0.text-center d: distancia en kilómetros. f: frecuencia en MHz.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img84.png', alt="" ).m-auto
                h4.text-center Aplicación
                p.mb-0.text-center Permite estimar la potencia de señal recibida en un enlace inalámbrico.
    .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Este cálculo facilita la planificación de cobertura y la evaluación del desempeño esperado de una red.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Ejemplo de cálculo de FSPL
    p.mb-5 El siguiente procedimiento permite estimar la pérdida por espacio libre en un enlace inalámbrico típico.
    .box___style_8.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          ul.fa-ul.estilo___ul.mb-1
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Conversión de unidades]
            p.mb-3.box___style_9.fit___p_box Distancia: 50 m = 0.05 km. Frecuencia: 2.4 GHz = 2400 MHz.
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Aplicación de la fórmula]
            p.mb-3.box___style_9.fit___p_box FSPL = 20 log (0.05) + 20 log (2400) + 32.44.
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Resultado aproximado]
            p.mb-3.box___style_9.fit___p_box FSPL ≈ 74 dB.
          p.mb-0.fit___p_box Una pérdida cercana a 74 dB indica que la señal se debilita considerablemente con la distancia, por lo que deben considerarse variables como potencia de transmisión, ganancia de antena y presencia de obstáculos.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img85.png', alt='').m-auto
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Impacto de materiales en la propagación de la señal
    .color___box_3
      .px-5 Los elementos físicos del entorno influyen directamente en la atenuación de las señales inalámbricas.
        p.mb-5 
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img86.png', alt="" ).m-auto
                h4.text-center Madera
                p.mb-0.text-center 3 dB
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img87.png', alt="" ).m-auto
                h4.text-center Vidrio
                p.mb-0.text-center 4 dB
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img88.png', alt="" ).m-auto
                h4.text-center Concreto
                p.mb-0.text-center 12 dB
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img89.png', alt="" ).m-auto
                h4.text-center Metal
                p.mb-0.text-center Mayor a 20 dB
        .color___box_2.fit___color_box_2.mb-5(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 La presencia de múltiples obstáculos puede reducir significativamente el alcance efectivo de la red. Por esta razón, en entornos interiores es recomendable realizar estudios técnicos de cobertura mediante herramientas de #[i site survey].
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Presupuesto de enlace (#[i Link Budget])
    p.mb-5 El presupuesto de enlace permite determinar si la señal inalámbrica llegará al receptor con potencia suficiente para garantizar una comunicación estable.
    .box___style_8.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-2.fit___p_box Ecuación y variables del presupuesto de enlace Expresión.
          p.mb-2.box___style_9.fit___p_box.fit___box_9 <strong>PRX</strong> = PTX + GTX + GRX - L
          ul.fa-ul.estilo___ul.mb-3.mb-lg-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b PTX]	Potencia de transmisión en dBm.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b GTX]	Ganancia de la antena transmisora en dBi.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b GRX]	Ganancia de la antena receptora en dBi.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b L]	Pérdidas totales por propagación y obstáculos en dB.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img90.png', alt='').m-auto
    p.mb-5 Este cálculo permite estimar la viabilidad técnica de un enlace inalámbrico antes de su implementación.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Ejemplo de cálculo de presupuesto de enlace
    .box___style_10.mb-5(data-aos="zoom-in")
      .row.align-items-center.g-0
        .col-xl-6
          figure
            img(src='@/assets/curso/temas/img91.png', alt='').m-auto
        .col-xl-6
          .box___style_10-1
            p.mb-0 Supongamos un enlace inalámbrico con las siguientes características:
            p.mb-0 Potencia transmisión = #[b 20 dBm].
            p.mb-0 Ganancia antena transmisora = #[b 5 dBi].
            p.mb-0 Ganancia antena receptora = #[b 3 dBi].
            p.mb-0 Pérdidas estimadas = #[b 80 dB].
          .box___style_10-2
            p.mb-0 #[b Paso 1]: aplicar ecuación.
            p.mb-2.box___style_9.fit___box_10 P<span class="fit__text-small">RX</span> = 20 + 5 + 3 - 80
          .box___style_10-3
            p.mb-0 #[b Paso 2]: resultado.
            p.mb-0.box___style_9.fit___box_10 P <span class="fit__text-small">RX</span> = - 52dBm
          .box___style_10-4
            p.mb-0 Un nivel de señal de #[b -52 dBm] se considera #[b excelente], lo que garantiza estabilidad en la transmisión de datos.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Margen de desvanecimiento (#[i Fade Margin])
    .box___style_11.mb-5(data-aos="zoom-in")
      .row.align-items-center.g-0
        .col-xl-6.order-2.order-lg-1
          .box___style_11-1
            p.mb-0 El margen de desvanecimiento representa la diferencia entre la potencia recibida y la sensibilidad mínima del receptor.
          .box___style_11-2
            p.mb-0.box___style_9.fit___box_10 #[i Fade Margin] = P<span class="fit__text-small">RX</span> - Sensibilidad receptor.
          .box___style_11-3
            p.mb-0 En redes Wi-Fi se recomienda un margen mínimo entre #[b 10 dB y 20 dB] para garantizar estabilidad ante variaciones ambientales, interferencias o cambios en las condiciones de propagación.
        .col-xl-6.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img92.png', alt='').m-auto
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Criterio de viabilidad del enlace inalámbrico
    .color___box_3.fit___width_final
      .px-5 
        p.mb-5 La evaluación del presupuesto de enlace y del margen de desvanecimiento permite determinar si un enlace es técnicamente viable.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img93.png', alt="" ).m-auto
                h4.text-center A
                p.mb-0.text-center Uso de antenas de mayor ganancia. Incrementar potencia efectiva radiada.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img94.png', alt="" ).m-auto
                h4.text-center B
                p.mb-0.text-center Reducción de distancia entre dispositivos. Disminuir pérdidas por propagación.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img95.png', alt="" ).m-auto
                h4.text-center C
                p.mb-0 Incremento controlado de potencia. Mejorar el nivel de señal dentro de límites regulatorios.  Instalación de repetidores o puntos de acceso.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img96.png', alt="" ).m-auto
                h4.text-center D
                p.mb-0.text-center Ampliar cobertura y estabilidad del enlace.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 El análisis integral de estos parámetros permite diseñar redes inalámbricas confiables y optimizadas según las condiciones reales del entorno.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
