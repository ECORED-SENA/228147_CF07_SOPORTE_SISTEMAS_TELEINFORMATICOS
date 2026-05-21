<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Infraestructura y equipos de conectividad
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La infraestructura inalámbrica está compuesta por el conjunto de dispositivos, interfaces y elementos físicos que permiten la transmisión y recepción de datos mediante radiofrecuencia. La correcta selección y configuración de estos recursos es fundamental para garantizar conectividad estable, cobertura adecuada y cumplimiento de los parámetros definidos en los procedimientos de telecomunicaciones. La evaluación técnica de la red requiere analizar compatibilidad entre equipos, capacidad de procesamiento, potencia de transmisión y características del entorno físico.
        .box___style_3.fit___box_3(data-aos="zoom-in")
          p.mb-0 En redes empresariales modernas, la infraestructura inalámbrica se integra con la red cableada para conformar una arquitectura jerárquica organizada en diferentes capas funcionales. Esta estructura permite optimizar el rendimiento, facilitar la administración del tráfico y garantizar niveles adecuados de seguridad y disponibilidad de los servicios de red.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img119.png', alt='').m-auto
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 2.
      span Arquitectura jerárquica de red
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img120.svg', alt='Esquema de arquitectura de red inalámbrica con capas de acceso, distribución y núcleo, que incluye puntos de acceso, equipos de control y conexión a servicios corporativos e internet. ').m-auto
    .row.align-items-center.justify-content-center.mb-0
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img121.png', alt='').m-auto
      .col-xl
        .box___style_12.mb-3(data-aos="fade-left")
          p.mb-0 En esta arquitectura, los puntos de acceso funcionan como dispositivos de borde que facilitan la conectividad de los usuarios, mientras que equipos como routers, #[i switches] y controladores inalámbricos gestionan el enrutamiento, la seguridad y la administración centralizada de la red.
        p.mb-0 Adicionalmente, en muchos entornos empresariales, los puntos de acceso se alimentan mediante la tecnología #[i Power over Ethernet (PoE)], la cual permite suministrar energía eléctrica y conectividad de datos a través de un mismo cable de red. Esta característica simplifica la instalación física de la infraestructura y reduce costos operativos.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Componentes de infraestructura inalámbrica
    p.mb-5 La infraestructura inalámbrica integra dispositivos que permiten la interconexión entre usuarios finales y la red de datos principal.  La selección de los componentes que conforman la infraestructura inalámbrica debe realizarse a partir de un análisis técnico del entorno de operación y de los requerimientos de desempeño de la red. Factores como la cantidad de usuarios, el área de cobertura y las capacidades del equipamiento influyen directamente en la calidad del servicio.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img122.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Densidad de usuarios conectados
                p.mb-0 Determina la cantidad de puntos de acceso necesarios y la capacidad de procesamiento requerida para gestionar múltiples conexiones simultáneas.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img123.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Área de cobertura requerida
                p.mb-0 Influye en la ubicación estratégica de los dispositivos y en la potencia de transmisión configurada.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img124.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Capacidad de procesamiento del equipo
                p.mb-0 Permite soportar funciones avanzadas de gestión de tráfico, autenticación y calidad de servicio.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img125.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Compatibilidad con estándares inalámbricos
                p.mb-0 Garantiza interoperabilidad y aprovechamiento de tecnologías modernas como #[b Wi-Fi 6 (802.11ax)].
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img126.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Soporte para tecnologías de seguridad
                p.mb-0 Facilita la implementación de mecanismos de cifrado, autenticación y segmentación de red.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3.fit___box_3-1.mb-3(data-aos="zoom-in")
          p.mb-0 En entornos empresariales de alta densidad, se recomienda emplear puntos de acceso con soporte para tecnologías como #[i MU-MIMO], #[i OFDMA] y administración mediante controladores centralizados. Estas características permiten optimizar la eficiencia espectral, mejorar la distribución del ancho de banda y garantizar mayor estabilidad en la conectividad de los usuarios.
        p.mb-0 Estos componentes determinan la capacidad de cobertura, estabilidad y escalabilidad del sistema.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img127.png', alt='').m-auto
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Interfaces de red inalámbrica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img128.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Interfaces de red inalámbrica
            p.mb-0 Son dispositivos electrónicos integrados o externos que permiten a un equipo conectarse a una red mediante radiofrecuencia. Estas pueden encontrarse en tarjetas de red internas (PCIe, M.2), adaptadores USB inalámbricos, módulos integrados en dispositivos móviles e interfaces industriales para equipos IoT. Las interfaces operan bajo estándares específicos como IEEE 802.11 y deben ser compatibles con las bandas de frecuencia configuradas en la infraestructura. Su capacidad se evalúa considerando velocidad soportada, tipo de modulación, compatibilidad con WPA3 y soporte para tecnologías como MIMO.
      .py-3.py-md-4(titulo="Dispositivos de infraestructura")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img129.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Dispositivos de infraestructura
            p.mb-0 Son equipos que gestionan, distribuyen y controlan la conectividad inalámbrica dentro de la red. Incluyen puntos de acceso (#[i Access Point]), controladores inalámbricos (#[i Wireless Controller]), repetidores, #[i bridges] inalámbricos y #[i gateways  IoT]. Estos dispositivos permiten administrar múltiples conexiones simultáneamente, segmentar tráfico y aplicar políticas de seguridad centralizadas. Su selección depende del tamaño de la red, la densidad de usuarios y los requerimientos de desempeño.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Equipos de conectividad
    p.mb-5 Los equipos de conectividad permiten establecer enlaces inalámbricos entre dispositivos, redes locales y servicios externos. La correcta selección e implementación de estos elementos contribuye a garantizar estabilidad operativa, eficiencia en el uso del espectro radioeléctrico y adecuada administración del tráfico de red. A continuación, se presenta la función que cumple cada equipo dentro de la arquitectura inalámbrica.
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img130.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Adaptadores inalámbricos
                p.mb-0 Permiten que equipos sin conectividad inalámbrica integrada puedan conectarse a la red. Deben seleccionarse considerando compatibilidad con estándares actuales, velocidad máxima soportada, tipo de cifrado admitido y soporte para bandas de frecuencia disponibles.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img131.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 #[i Access Point]
                p.mb-0 El #[i Access Point (AP)] es el dispositivo central en una red WLAN. Permite la conexión de múltiples dispositivos inalámbricos y actúa como puente hacia la red cableada. Sus parámetros principales incluyen SSID, canal de operación, ancho de banda, potencia de transmisión y tipo de autenticación. La ubicación estratégica del AP es determinante para garantizar cobertura uniforme.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img132.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 #[i Bridges] inalámbricos
                p.mb-0 Los #[i bridges] inalámbricos permiten conectar dos redes físicas mediante un enlace inalámbrico punto a punto o punto multipunto. Son utilizados cuando no es viable instalar cableado estructurado. Se emplean en conexión entre edificios, enlaces rurales e infraestructura empresarial distribuida.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img133.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 #[i Routers] inalámbricos
                p.mb-0 El #[i router] inalámbrico combina funciones de enrutamiento y punto de acceso. Permite la conexión a internet y la distribución de red local inalámbrica. Incluye NAT, DHCP, #[i firewall] básico y gestión de tráfico. En entornos empresariales suele complementarse con equipos especializados de mayor capacidad.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img134.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Repetidores
                p.mb-0 Los repetidores amplifican la señal inalámbrica existente para extender la cobertura. Aunque mejoran el alcance, pueden reducir el ancho de banda efectivo debido a la retransmisión de datos.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img135.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Redes #[i Mesh]
                p.mb-0 Las redes #[i Mesh] utilizan múltiples nodos interconectados que distribuyen la señal de manera inteligente. Cada nodo puede actuar como repetidor y punto de acceso simultáneamente. Presentan ventajas como mayor cobertura, redundancia, autoconfiguración y funcionamiento adecuado en entornos de gran extensión.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img136.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 #[i Wireless Controllers]
                p.mb-0 Los #[i Wireless Controllers] permiten la administración centralizada de múltiples puntos de acceso. Facilitan la aplicación de políticas de seguridad, gestión de usuarios, control de potencia, balanceo de carga y actualizaciones remotas. En entornos corporativos son esenciales para garantizar control y monitoreo continuo.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Antenas
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Las antenas son dispositivos encargados de transformar señales eléctricas en ondas electromagnéticas para su transmisión y realizar el proceso inverso durante la recepción. En redes inalámbricas, la antena influye directamente en la cobertura, la intensidad de la señal y la estabilidad de la conexión.
        .box___style_3.mb-3(data-aos="zoom-in")
          p.mb-0 La selección adecuada del tipo de antena depende del entorno físico, la distancia entre dispositivos y el tipo de topología implementada. Desde el punto de vista técnico, una antena no amplifica la señal en términos absolutos, sino que concentra la energía en determinadas direcciones, aumentando su alcance efectivo. 
        p.mb-0 A continuación se presentan los principales tipos de antenas utilizadas en redes inalámbricas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img137.png', alt='').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/temas/img138.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Antenas omnidireccionales").ajuste-cajaAcordion
            p.mb-3 Irradian la señal en un patrón circular de #[b 360 grados] en el plano horizontal. Son utilizadas comúnmente en redes Wi-Fi de interiores y entornos empresariales donde se requiere cobertura uniforme alrededor del punto de acceso. Presentan cobertura circular, instalación sencilla y uso frecuente en oficinas y hogares. Su ganancia suele oscilar aproximadamente entre #[b 2 dBi y 9 dBi]. Permiten una distribución uniforme de la señal y son adecuadas para áreas abiertas. Como limitación, presentan menor alcance en comparación con antenas direccionales y pueden generar interferencias si no se configuran correctamente los canales. En procesos de evaluación de red se recomiendan cuando se requiere cobertura general y movilidad de usuarios.
          .row(titulo="Antenas direccionales").ajuste-cajaAcordion
            p.mb-3 Concentran la señal en una dirección específica, lo que permite alcanzar mayores distancias en comparación con las antenas omnidireccionales. Entre los tipos más comunes se encuentran la antena panel, la antena Yagi, la antena parabólica y la antena sectorial. Presentan mayor ganancia (generalmente #[b 10 dBi o superior]) y cobertura enfocada, por lo que se utilizan en enlaces punto a punto o punto multipunto. Son empleadas en conexión entre edificios, enlaces rurales y redes metropolitanas. Sus ventajas incluyen mayor alcance, reducción de interferencias laterales y mayor estabilidad en enlaces de larga distancia. Como limitaciones, requieren alineación precisa y presentan cobertura limitada fuera del ángulo de transmisión.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Ganancia y patrón de radiación
    p.mb-5 La ganancia de una antena se mide en #[b dBi (decibelios respecto a una antena isotrópica ideal)]. Este valor indica qué tan concentrada se encuentra la energía radiada en una dirección específica. A continuación se presentan los conceptos técnicos asociados a la ganancia y al patrón de radiación de las antenas.
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img139.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Relación entre ganancia y cobertura
                p.mb-0 Una mayor ganancia permite mayor alcance, aunque reduce la cobertura angular. Por el contrario, una menor ganancia proporciona mayor cobertura general, pero menor alcance efectivo.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img140.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Patrón de radiación
                p.mb-0 Describe la forma en que la antena distribuye la señal en el espacio. Puede representarse mediante diagramas polares que indican la intensidad relativa de la señal en diferentes direcciones.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img141.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Criterios de selección
                p.mb-0 La selección adecuada de la ganancia debe considerar la cobertura requerida, la potencia máxima permitida por normativa, el tipo de topología de red y la densidad de usuarios.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img142.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center EIRP
                p.mb-0 La combinación de potencia de transmisión y ganancia de antena determina la #[b Potencia Isotrópica Radiada Equivalente (EIRP)], la cual está sujeta a límites regulatorios establecidos por las autoridades nacionales.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Potencia radiada equivalente (#[i Equivalent Isotropically Radiated Power])
    p.mb-5 En sistemas inalámbricos no solo influye la potencia generada por el transmisor, sino también la ganancia de la antena utilizada. Para evaluar la potencia real emitida al espacio se utiliza el concepto de Potencia Isotrópica Radiada Equivalente (EIRP). La EIRP representa la potencia total efectiva que un sistema de transmisión irradia hacia el entorno, considerando la ganancia de la antena y las pérdidas presentes en el sistema.
    .box___style_13.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img143.png', alt='').m-auto
        .col-xl
          p.mb-2.fit___p_box La expresión utilizada para calcular la EIRP es:
          p.mb-2.box___style_9.fit___box_9 EIRP = P<span class="fit__text-small">TX</span>+ G<span class="fit__text-small">antena</span> - L<span class="fit__text-small">cable</span>
          p.mb-2.fit___p_box donde:
          ul.fa-ul.estilo___ul.mb-2
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b P]<strong><span class="fit__text-small">TX</span></strong> = potencia del transmisor (dBm).
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | <strong>G<span class="fit__text-small">antena</span></strong> = ganancia de la antena (dBi).
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | <strong>L<span class="fit__text-small">cable</span></strong> = pérdidas del cable o conectores (dB).
          p.mb-0.fit___p_box Este cálculo permite verificar que el sistema cumpla con los límites regulatorios establecidos por las autoridades de telecomunicaciones.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Ejemplo técnico de cálculo de EIRP
    p.mb-5 Supongamos un sistema inalámbrico con las siguientes características:
    .box___style_8.fit___box_8.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          ul.fa-ul.estilo___ul.mb-2
            li.mb-1.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Potencia del transmisor: 20 dBm.
            li.mb-1.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Ganancia de la antena: 8 dBi.
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Pérdidas en cable y conectores: 2 dB.
          p.mb-2.fit___p_box A continuación, se presenta el procedimiento para calcular la potencia isotrópica radiada equivalente (EIRP) mediante la aplicación de la ecuación, la sustitución de los valores y la obtención del resultado final.
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Paso 1]: aplicar la ecuación.
            p.mb-3.box___style_9.fit___p_box EIRP = P<span class="fit__text-small">TX</span>+ G<span class="fit__text-small">antena</span> - L<span class="fit__text-small">cable</span>
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Paso 2]: sustituir valores.
            p.mb-3.box___style_9.fit___p_box EIRP = 20 + 8 - 2
            li.mb-0.d-flex
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Paso 3]: resultado.
            p.mb-3.box___style_9.fit___p_box EIRP = 26 dBm
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img144.png', alt='').m-auto
    .color___box_2.mb-5(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Esto significa que el sistema irradia una potencia efectiva equivalente a #[b 26 dBm,] valor que debe compararse con los límites establecidos por la normativa del espectro radioeléctrico. En muchos países, la banda de #[b 2.4 GHz] tiene límites regulatorios cercanos a #[b 36 dBm EIRP], por lo que este sistema estaría dentro del rango permitido.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Relación entre potencia radiada y cobertura
    .color___box_3
      .px-5
        p.mb-5 La potencia radiada equivalente influye directamente en el alcance de una red inalámbrica; sin embargo, el comportamiento real de la cobertura depende también de otras variables técnicas asociadas al entorno de propagación.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img145.png', alt="" ).m-auto
                h4.text-center  Frecuencia de operación
                p.mb-0.text-center Frecuencias bajas proporcionan mayor alcance y penetración.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img146.png', alt="" ).m-auto
                h4.text-center Obstáculos físicos
                p.mb-0.text-center Materiales del entorno pueden atenuar la señal.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img147.png', alt="" ).m-auto
                h4.text-center Interferencias externas
                p.mb-0.text-center Redes cercanas pueden degradar la calidad del enlace. 
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img148.png', alt="" ).m-auto
                h4.text-center Sensibilidad del receptor
                p.mb-0.text-center Determina el nivel mínimo de señal necesario para la comunicación.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 En redes Wi-Fi interiores con potencias cercanas a #[b 20-25 dBm EIRP], el alcance típico suele situarse entre #[b 30 y 50 metros], dependiendo de las condiciones físicas del entorno. Por esta razón, en infraestructuras empresariales es habitual distribuir múltiples puntos de acceso con el fin de garantizar cobertura uniforme y evitar zonas sin conectividad.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Topologías inalámbricas
    p.mb-5 La topología inalámbrica describe la estructura lógica y física mediante la cual los dispositivos se conectan entre sí dentro de una red. En redes inalámbricas, la topología determina el modelo de comunicación, el nivel de dependencia entre dispositivos y la forma en que se distribuye la señal. La correcta definición de la topología forma parte del proceso de evaluación y planificación técnica de red, ya que influye en la estabilidad, la redundancia y la eficiencia del sistema. A continuación se presentan las principales topologías utilizadas en redes inalámbricas.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ad-hoc
                p.mb-0 Modelo de conexión directa entre dispositivos sin necesidad de un punto de acceso central. Cada dispositivo actúa como nodo independiente y puede comunicarse directamente con otros dispositivos dentro de su rango de cobertura. Se caracteriza por no requerir infraestructura fija, permitir conexiones temporales y ofrecer fácil implementación, aunque presenta escalabilidad limitada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img149.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Infraestructura
                p.mb-0 Es la topología más utilizada en redes #[i WLAN]. En este modelo, los dispositivos se conectan a través de un punto de acceso (#[i Access Point]), el cual actúa como intermediario entre los clientes y la red principal. Permite gestión centralizada, mayor control de seguridad, escalabilidad e integración con la red cableada.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img150.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Punto a punto
                p.mb-0 Conecta directamente dos dispositivos o redes mediante un enlace inalámbrico dedicado. Se utiliza comúnmente para interconectar edificios o sedes remotas. Presenta uso de antenas direccionales, alta estabilidad en enlaces dedicados y mayor alcance que una #[i WLAN] tradicional.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img151.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Punto multipunto
                p.mb-0 Un nodo central se comunica con múltiples nodos remotos. Es una topología común en redes metropolitanas o implementaciones rurales. Se caracteriza por utilizar un nodo central con antena sectorial y múltiples receptores, lo que permite un uso eficiente de la infraestructura.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img152.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Mesh]
                p.mb-0 La topología #[i Mesh] (malla) permite que múltiples nodos se interconecten entre sí formando una red autorrecuperable y redundante. Cada nodo puede retransmitir la señal hacia otros nodos. Se caracteriza por ofrecer redundancia de rutas, autoconfiguración y alta disponibilidad de la red.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img153.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img4.svg" style="max-width: 60px").m-auto
      .col
        h3 Caso de aplicación técnica
    p.mb-5 Considérese la implementación de una red inalámbrica en un campus universitario compuesto por varios edificios, donde se requiere garantizar conectividad estable y administración eficiente de los recursos de red.
    .color___box_3.fit___width_final
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img154.png', alt="" ).m-auto
                h4.text-center  Instalación de #[i Access Point] distribuidos en cada edificio
                p.mb-0.text-center Garantizar cobertura uniforme y adecuada densidad de servicio.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img155.png', alt="" ).m-auto
                h4.text-center Uso de antenas omnidireccionales en interiores
                p.mb-0.text-center Optimizar la distribución de la señal en espacios cerrados.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img156.png', alt="" ).m-auto
                h4.text-center Implementación de enlaces punto a punto entre edificios
                p.mb-0.text-center Proporcionar interconexión estable mediante antenas direccionales.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img157.png', alt="" ).m-auto
                h4.text-center Administración mediante controladores inalámbricos
                p.mb-0.text-center Facilitar configuración centralizada y monitoreo del rendimiento.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Este diseño contribuye a mejorar la cobertura general del campus, simplificar la gestión de la infraestructura inalámbrica y asegurar niveles adecuados de estabilidad en la conectividad de los usuarios.
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
