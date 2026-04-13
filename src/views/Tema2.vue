<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tecnologías inalámbricas
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Las tecnologías inalámbricas permiten la transmisión de datos mediante radiofrecuencia en diferentes rangos de cobertura, velocidad y consumo energético. Su evolución ha estado marcada por el aumento en la capacidad de transmisión, la reducción de latencia y la optimización del uso del espectro. La correcta selección tecnológica constituye un elemento fundamental en la definición de recursos de red conforme a procedimientos de telecomunicaciones.
        .box___style_3.fit___box_3(data-aos="zoom-in")
          p.mb-0 Las tecnologías inalámbricas presentan diferencias técnicas relacionadas con variables como el alcance, la velocidad de transmisión, el consumo energético y el tipo de aplicación para el cual fueron diseñadas. Estas características determinan su uso en distintos escenarios de implementación.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img97.png', alt='').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/temas/img98.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="<em>Bluetooth</em>").ajuste-cajaAcordion
            p.mb-3 Ofrece alcance aproximado de 10 m y baja velocidad de transmisión. Se utiliza principalmente en la interconexión de dispositivos personales como auriculares, teclados y teléfonos móviles. Presenta bajo consumo energético.
          .row(titulo="<em>Zigbee</em>").ajuste-cajaAcordion
            p.mb-3 Permite alcances cercanos a 100 m con baja velocidad de transmisión. Está orientada a aplicaciones de automatización y domótica, con consumo energético reducido.
          .row(titulo="Wi-Fi").ajuste-cajaAcordion
            p.mb-3 Proporciona alcances cercanos a 100 m y altas velocidades de transmisión. Se emplea en redes locales empresariales, educativas y domésticas para transporte de grandes volúmenes de datos.
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="<em>LoRa</em>").ajuste-cajaAcordion
            p.mb-3 Permite comunicaciones a varios kilómetros con muy baja velocidad. Está diseñada para aplicaciones de #[i Internet of Things (IoT)] y dispositivos alimentados por batería.
          .row(titulo="5G").ajuste-cajaAcordion
            p.mb-3 Ofrece cobertura de varios kilómetros y velocidades muy altas. Se utiliza en redes móviles de nueva generación y servicios de banda ancha inalámbrica.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img99.png", alt="" ).m-auto
    .row.align-items-center.justify-content-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img100.svg', alt='' style="max-width: 90px").m-auto
      .col-xl
        p La selección de la tecnología depende del escenario de uso y de los requerimientos de conectividad.
        p.mb-0 La elección de una tecnología inalámbrica debe realizarse considerando variables relacionadas con la aplicación, el volumen de información transmitida y las condiciones del entorno.
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img101.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img102.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Volumen de datos
                p.mb-0.text-center Tecnologías de alta capacidad como Wi-Fi son adecuadas para tráfico intensivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img103.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Latencia permitida
                p.mb-0.text-center Aplicaciones en tiempo real requieren tecnologías de baja latencia.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img104.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Disponibilidad de infraestructura
                p.mb-0.text-center Determina viabilidad técnica y económica de implementación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img105.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Costo de implementación
                p.mb-0.text-center Influye en la selección de equipos y arquitectura de red.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img106.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Consumo energético
                p.mb-0.text-center Tecnologías como #[i LoRa] o #[i Zigbee] optimizan la duración de baterías.
        .color___box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Por ejemplo, Wi-Fi resulta apropiada para transmisión continua de grandes volúmenes de datos, mientras que tecnologías como #[i LoRa] y #[i Zigbee] se orientan a comunicaciones esporádicas de baja velocidad en dispositivos con requerimientos de eficiencia energética.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto y evolución de tecnologías inalámbricas
    p.mb-5 Una tecnología inalámbrica es un conjunto de protocolos, estándares y mecanismos físicos que permiten la transmisión de datos sin medios guiados. Estas tecnologías se desarrollan bajo lineamientos técnicos establecidos por organismos internacionales y responden a necesidades específicas de cobertura, movilidad y eficiencia energética. A continuación se sintetiza la evolución general de las tecnologías inalámbricas.
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 1.
      span Evolución de tecnologías inalámbricas
    figure.ocultar__img_md(data-aos="zoom-in")
      img(src='@/assets/curso/temas/img107.svg', alt='Diagrama  sobre la evolución de tecnologías inalámbricas que incluye las generaciones 1G, 2G, 3G, 4G y 5G, junto con Wi-Fi 6 y Wi-Fi 6E, con notas breves sobre transmisión analógica de voz, digitalización de la comunicación, introducción de datos móviles, aumento de velocidad y conectividad basada en IP, baja latencia con alta densidad de dispositivos y mayor eficiencia espectral del Wi-Fi.').m-auto
    figure.ocultar__img_lg(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img108.svg', alt='Diagrama  sobre la evolución de tecnologías inalámbricas que incluye las generaciones 1G, 2G, 3G, 4G y 5G, junto con Wi-Fi 6 y Wi-Fi 6E, con notas breves sobre transmisión analógica de voz, digitalización de la comunicación, introducción de datos móviles, aumento de velocidad y conectividad basada en IP, baja latencia con alta densidad de dispositivos y mayor eficiencia espectral del Wi-Fi.').m-auto
    .color___box_2.mb-0(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 La evolución tecnológica ha permitido pasar de redes centradas en voz a infraestructuras orientadas a la transmisión de datos y a la conexión de dispositivos del #[i Internet of Things] (#[i IoT]).
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tecnologías de corto alcance
    p.mb-5 Las tecnologías de corto alcance están diseñadas para comunicaciones en distancias reducidas con bajo consumo energético. Se utilizan principalmente para la interconexión de dispositivos personales y sistemas de automatización. A continuación se presentan algunas de las principales tecnologías de corto alcance utilizadas en redes inalámbricas.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="<em>Bluetooth</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img109.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i Bluetooth]
            p.mb-0 Opera en la banda de 2.4 GHz y se utiliza para la conexión de dispositivos personales. Presenta bajo consumo energético mediante #[i Bluetooth Low Energy] (#[i BLE]), alcance aproximado entre 10 y 100 metros según la versión y velocidad moderada de transmisión. Se emplea en dispositivos médicos, sistemas de domótica y accesorios electrónicos. Entre sus ventajas se encuentran el bajo consumo energético y la facilidad de implementación. Como limitación, no resulta adecuado para redes con alta demanda de datos.
      .py-3.py-md-4(titulo="<em>UWB (Ultra Wide Band)</em>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img110.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 #[i UWB (Ultra Wide Band)]
            p.mb-0 Utiliza un amplio espectro de frecuencias para transmitir datos a corta distancia con alta precisión. Presenta alta precisión en posicionamiento, baja interferencia y bajo consumo energético. Se emplea en aplicaciones de localización en interiores y sistemas de acceso inteligente.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Tecnologías de red local y metropolitana
    p.mb-5 Las tecnologías de red local y metropolitana permiten la interconexión de dispositivos en entornos empresariales, institucionales y urbanos. Estas tecnologías se diferencian principalmente por su alcance, capacidad de transmisión y tipo de infraestructura requerida. A continuación se presentan algunas de las principales tecnologías utilizadas en redes inalámbricas de alcance local y metropolitano.
    .row.align-items-center.mb-0
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/temas/img111.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Wi-Fi").ajuste-cajaAcordion
            p.mb-3 Es la tecnología más utilizada en redes locales inalámbricas y opera bajo los estándares #[b IEEE 802.11]. Funciona en las bandas de #[b 2.4 GHz, 5 GHz y 6 GHz], soporta altas velocidades de transmisión y permite múltiples usuarios simultáneos. Implementa técnicas como #[b MIMO y OFDMA] para optimizar la eficiencia espectral. Se utiliza en redes empresariales, instituciones educativas, hogares y espacios públicos. La correcta configuración de redes Wi-Fi implica definir parámetros como canal, ancho de banda, potencia de transmisión y tipo de cifrado.
          .row(titulo="<em>WiMAX (Worldwide Interoperability for Microwave Access)</em>").ajuste-cajaAcordion
            p.mb-3 Tecnología diseñada para proporcionar cobertura inalámbrica a escala metropolitana. Presenta mayor alcance que Wi-Fi y se emplea en entornos rurales o zonas donde no existe infraestructura cableada. Opera generalmente en bandas licenciadas. Aunque su uso ha disminuido frente a tecnologías móviles más avanzadas, continúa siendo relevante en ciertos escenarios de conectividad.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Tecnologías móviles
    p.mb-5 A continuación, se presenta un video que explica la evolución de las tecnologías móviles 3G, 4G y 5G, destacando sus características técnicas, capacidades de transmisión de datos y su impacto en el desarrollo de las redes de telecomunicaciones modernas.
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Tecnologías móviles.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Tecnología para #[i IoT]
    .row.align-items-center.justify-content-center.mb-5
      .col-xl
        .box___style_2.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img112.jpg', alt='').m-auto
            .col-xl
              p.mb-0 El Internet de las Cosas (#[i Internet of Things - IoT]) requiere tecnologías inalámbricas diseñadas específicamente para la comunicación entre dispositivos de bajo consumo energético, la transmisión de pequeñas cantidades de datos y la operación prolongada mediante baterías.
        p.mb-4.mb-lg-0 A diferencia de las redes Wi-Fi o móviles tradicionales, las tecnologías #[i IoT] priorizan la eficiencia energética, la cobertura extendida y la escalabilidad. Estas tecnologías permiten la interconexión de sensores, actuadores y dispositivos inteligentes en sectores como agricultura, industria, salud, logística y ciudades inteligentes. A continuación se presentan algunas de las principales tecnologías utilizadas en redes #[i IoT].
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img113.png', alt='').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img114.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="<em>Zigbee</em>").ajuste-cajaAcordion
            p.mb-3 Tecnología inalámbrica basada en el estándar #[b IEEE 802.15.4], diseñada para comunicaciones de corto alcance y bajo consumo energético. Opera en la banda de #[b 2.4 GHz], permite velocidades de transmisión hasta #[b 250 Kbps] y utiliza una arquitectura de red tipo malla (mesh). Presenta bajo consumo energético y un alcance aproximado entre #[b 10 y 100 metros].
          .row(titulo="<em>LoRa (Long Range)</em>").ajuste-cajaAcordion
            p.mb-3 Tecnología de comunicación de largo alcance y bajo consumo energético diseñada para redes #[b LPWAN (#[i Low Power Wide Area Network])]. Opera en bandas #[b sub-GHz], ofrece alcances de varios kilómetros en entornos abiertos y velocidades de transmisión bajas entre #[b 0.3 Kbps y 50 Kbps]. Su arquitectura se basa en un #[b #[i gateway] central] y se caracteriza por su consumo energético muy reducido.
          .row(titulo="<em>NB-IoT (Narrowband Internet of Things)</em>").ajuste-cajaAcordion
            p.mb-3 Tecnología basada en redes celulares #[b LTE], diseñada para la comunicación de dispositivos IoT con bajo consumo energético y amplia cobertura. Opera sobre infraestructura #[b 4G], presenta alta penetración en interiores y permite soportar una gran cantidad de dispositivos conectados simultáneamente.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Caso de aplicación técnica
    p.mb-5 El diseño de redes inalámbricas debe responder a las condiciones específicas del entorno y a los requerimientos operativos del sistema que se desea implementar. Un ejemplo representativo corresponde al despliegue de un sistema de monitoreo ambiental en una finca agrícola, donde se requiere conectar sensores de temperatura y humedad distribuidos en un área de varios kilómetros. En este escenario se presentan condiciones técnicas particulares, como bajo volumen de datos transmitidos, funcionamiento de los sensores mediante baterías y necesidad de cobertura de largo alcance.
    .color___box_3.fit___width_final
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img115.png', alt="" ).m-auto
                h4.text-center  Volumen de datos
                p.mb-0.text-center Bajó, debido a transmisión periódica de mediciones.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img116.png', alt="" ).m-auto
                h4.text-center Fuente de energía
                p.mb-0.text-center Sensores alimentados por baterías.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img117.png', alt="" ).m-auto
                h4.text-center Alcance requerido
                p.mb-0.text-center Cobertura de varios kilómetros.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img118.png', alt="" ).m-auto
                h4.text-center Tipo de comunicación
                p.mb-0.text-center Envío esporádico de información ambiental.
        .color___box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 De acuerdo con estas características, la tecnología más adecuada corresponde a #[i LoRa], ya que permite establecer comunicaciones a largas distancias con bajo consumo energético y resulta apropiada para aplicaciones de #[i Internet of Things] en entornos rurales o agrícolas. Esta selección tecnológica contribuye a optimizar la autonomía de los dispositivos y garantizar la cobertura necesaria para el funcionamiento del sistema de monitoreo.
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
