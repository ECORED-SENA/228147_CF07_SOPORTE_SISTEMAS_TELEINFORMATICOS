<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Seguridad en redes inalámbricas
    p.mb-5 Las redes inalámbricas utilizan el aire como medio de transmisión, por lo que se encuentran expuestas a riesgos como la interceptación de datos, los accesos no autorizados y las interferencias maliciosas. A diferencia de las redes cableadas, donde el acceso físico limita de manera significativa las amenazas, en los entornos inalámbricos cualquier dispositivo dentro del área de cobertura puede intentar conectarse o capturar tráfico.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3.fit___box_3-4.mb-3(data-aos="zoom-in")
          p.mb-0 Por esta razón, la implementación de mecanismos de seguridad adecuados resulta indispensable para garantizar la #[b confidencialidad, la integridad y la disponibilidad] de la información. Asimismo, la configuración de estos mecanismos constituye un componente esencial dentro de la definición técnica de los recursos de red.
        p.mb-0 La seguridad en redes inalámbricas se sustenta en una #[b arquitectura de seguridad multicapa], en la cual diferentes niveles de protección actúan de forma complementaria para fortalecer la defensa de la infraestructura de red. A continuación, se presentan los principales mecanismos de protección asociados a cada capa.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img177.jpg', alt='').m-auto
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img178.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img179.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Física
                p.mb-0.text-center Control de ubicación de equipos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img180.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Red
                p.mb-0.text-center Segmentación mediante VLAN.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img181.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Acceso
                p.mb-0.text-center Autenticación 802.1X.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img182.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cifrado
                p.mb-0.text-center WPA2 / WPA3.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img183.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Monitoreo
                p.mb-0.text-center Sistemas de detección de intrusos.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 La combinación de estos mecanismos contribuye a reducir el riesgo de intrusión, mejorar la capacidad de respuesta ante incidentes de seguridad y fortalecer la gestión integral de la red inalámbrica.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Concepto de seguridad inalámbrica
    p.mb-5 La seguridad inalámbrica se refiere al conjunto de medidas técnicas, protocolos y configuraciones orientadas a proteger una red frente a accesos no autorizados, ataques informáticos y pérdida de información. Este enfoque integra diversas acciones de control que permiten preservar la operación segura de la infraestructura tecnológica.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img184.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre las principales medidas de seguridad inalámbrica se incluyen la #[b autenticación de usuarios, el cifrado de datos, el control de acceso, el monitoreo del tráfico y la segmentación de la red]. La aplicación coordinada de estos mecanismos permite impedir la interceptación de la información y garantizar que únicamente los usuarios autorizados accedan a los recursos disponibles.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Servicios de seguridad
    p.mb-5 Los servicios de seguridad en redes inalámbricas se fundamentan en tres principios esenciales que permiten asegurar la protección de la información y la continuidad de los servicios de red. Estos principios constituyen la base conceptual para el diseño e implementación de políticas y controles de seguridad. A continuación, se presenta su caracterización comparativa.
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Confidencialidad
                p.mb-0 Garantiza que la información transmitida solo pueda ser leída por usuarios autorizados mediante mecanismos de cifrado que transforman los datos en formatos ilegibles para terceros.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img185.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Integridad
                p.mb-0 Asegura que la información no sea alterada durante su transmisión. Para ello, se emplean mecanismos de verificación que permiten detectar modificaciones no autorizadas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img186.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Disponibilidad
                p.mb-0 Garantiza que los servicios de red estén accesibles cuando los usuarios los requieran, lo cual implica protección frente a ataques de denegación de servicio y fallos técnicos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img187.png', alt='' style="max-width: 500px").m-auto
    .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
      .px-5
        .row.align-items-center.justify-content-center.p-3
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Estos servicios permiten fortalecer la seguridad operativa de las redes inalámbricas y contribuyen al mantenimiento de entornos tecnológicos confiables.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Mecanismos de cifrado
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_3.fit___box_3-2.mb-3(data-aos="zoom-in")
          p.mb-0 El cifrado es el proceso mediante el cual la información se transforma en un formato codificado con el propósito de impedir su lectura por personas no autorizadas. En las redes inalámbricas, este mecanismo constituye uno de los principales elementos de protección, ya que permite salvaguardar la #[b confidencialidad de los datos] transmitidos a través del medio radioeléctrico.
        p.mb-0 A lo largo de la evolución de la seguridad en redes Wi-Fi se han desarrollado diversos protocolos de cifrado que presentan diferencias en su funcionamiento, nivel de protección y vigencia tecnológica. A continuación, se describen sus principales características.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img188.png', alt='').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/temas/img189.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="<em>WEP (Wired Equivalent Privacy)</em>").ajuste-cajaAcordion
            p.mb-3 Fue uno de los primeros mecanismos de seguridad en redes Wi-Fi. Utiliza el algoritmo #[b RC4], pero presenta vulnerabilidades significativas que permiten su ruptura con relativa facilidad. Actualmente se considera #[b obsoleto] y no se recomienda su uso.
          .row(titulo="WPA (Wi-Fi <em>Protected Access</em>)").ajuste-cajaAcordion
            p.mb-3 Surgió como una mejora frente a las limitaciones de WEP. Introdujo el protocolo TKIP (#[i Temporal Key Integrity Protocol]), lo que permitió incrementar el nivel de seguridad. Sin embargo, con el tiempo se identificaron limitaciones frente a ataques modernos.
          .row(titulo="WPA2").ajuste-cajaAcordion
            p.mb-3 Incorpora el cifrado #[b AES] (#[i Advanced Encryption Standard]) en modo #[b CCMP], proporcionando mayor robustez criptográfica. Ha sido ampliamente adoptado en redes domésticas y empresariales.
          .row(titulo="WPA3").ajuste-cajaAcordion
            p.mb-3 Representa la versión más reciente de seguridad Wi-Fi. Integra autenticación #[b SAE] (#[i Simultaneous Authentication of Equals]), mayor protección frente a ataques de fuerza bruta y mejoras en el cifrado para redes públicas. Se considera el protocolo recomendado en entornos empresariales modernos.
    p.mb-5 La evolución de estos protocolos evidencia el fortalecimiento progresivo de los mecanismos de seguridad inalámbrica y la necesidad de adoptar tecnologías actualizadas que reduzcan la exposición a vulnerabilidades. Con el fin de establecer una comparación técnica entre estos protocolos, se presenta la siguiente síntesis.
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img190.png', alt="" ).m-auto
                h4.text-center WEP
                p.mb-0.text-center Nivel de seguridad muy bajo. Protocolo obsoleto.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img191.png', alt="" ).m-auto
                h4.text-center WPA
                p.mb-0.text-center Nivel de seguridad bajo. Actualmente en desuso.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img192.png', alt="" ).m-auto
                h4.text-center WPA2
                p.mb-0.text-center Nivel de seguridad alto. Ampliamente implementado.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img193.png', alt="" ).m-auto
                h4.text-center WPA3
                p.mb-0.text-center Nivel de seguridad muy alto. Protocolo recomendado.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Un aspecto relevante en la evolución reciente de la seguridad Wi-Fi es la incorporación del mecanismo de autenticación #[b SAE] en WPA3. Este mecanismo protege la red frente a ataques de diccionario offline, una vulnerabilidad presente en implementaciones basadas en #[b WPA2-PSK], lo que incrementa significativamente la protección global del sistema inalámbrico.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Protocolos de autenticación
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Los protocolos de autenticación permiten verificar la identidad de los usuarios o dispositivos antes de conceder acceso a la red inalámbrica. 
        .box___style_3.fit___box_3-5.mb-3(data-aos="zoom-in")
          p.mb-0 En entornos empresariales, este proceso no debe limitarse al uso de contraseñas compartidas, sino que debe apoyarse en mecanismos centralizados que faciliten la #[b trazabilidad, el control de accesos y la aplicación de políticas de seguridad].
        p.mb-0 Una autenticación adecuada contribuye a prevenir accesos no autorizados, reducir el riesgo de ataques internos y optimizar la administración de usuarios dentro de la infraestructura tecnológica. A continuación, se describen los principales protocolos utilizados en la autenticación de redes inalámbricas empresariales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img194.png', alt='').m-auto
    .color___box_4
      .px-5
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="IEEE 802.1X")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img195.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 IEEE 802.1X
                p.mb-0 Mecanismo de control de acceso basado en puertos que autentica los dispositivos antes de permitir el intercambio de tráfico en la red. Permite implementar autenticación individual por usuario y eliminar el uso de claves compartidas.
          .py-3.py-md-4(titulo="<em>EAP (Extensible Authentication Protocol)</em>")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img196.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 #[i EAP (Extensible Authentication Protocol)]
                p.mb-0 Marco de autenticación que soporta múltiples métodos de validación de identidad. Facilita la integración con infraestructuras corporativas y permite aplicar distintos niveles de seguridad.
          .py-3.py-md-4(titulo="<em>RADIUS (Remote Authentication Dial-In User Service)</em>")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img197.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 #[i RADIUS (Remote Authentication Dial-In User Service)]
                p.mb-0 Protocolo que centraliza los procesos de #[b autenticación, autorización y contabilidad]. Actúa como servidor encargado de validar credenciales y aplicar políticas de acceso.
        p.mb-5 El funcionamiento del estándar 802.1X se basa en un modelo compuesto por tres elementos principales, los cuales intervienen en el proceso de autenticación.
        .row.justify-content-center.mb-5
          .col-xl-4.mb-4.mb-lg-0
            .box___style_7.fit___box_7.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img198.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  h4 #[i Supplicant]
                  p.mb-0 Dispositivo o usuario que solicita acceso a la red inalámbrica.
          .col-xl-4.mb-4.mb-lg-0
            .box___style_7.fit___box_7.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img199.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  h4 #[i Authenticator]
                  p.mb-0 Punto de acceso o #[i switch] que controla la conexión y gestiona la solicitud de autenticación.
          .col-xl-4
            .box___style_7.fit___box_7.h-100(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img200.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  h4 Servidor de autenticación
                  p.mb-0 Sistema encargado de validar las credenciales, generalmente implementado mediante un servidor RADIUS.
        p.mb-5 El proceso de autenticación en redes empresariales se desarrolla mediante una secuencia de acciones que garantizan la validación segura de los usuarios. A continuación, se sintetizan las etapas principales.
    .box___style_14.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img201.png', alt='').m-auto
        .col-xl
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | El dispositivo cliente intenta conectarse al punto de acceso.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | El punto de acceso restringe el tráfico hasta validar las credenciales.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | El punto de acceso envía la solicitud al servidor RADIUS.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | El servidor verifica las credenciales en el sistema de identidad.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Si la autenticación es correcta, se autoriza el acceso a la red.
    p.mb-5 El protocolo #[b EAP] permite utilizar distintos métodos de autenticación según los requerimientos de seguridad de la organización. Entre los más utilizados se encuentran los siguientes.
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img202.png', alt="" ).m-auto
                h4.text-center EAP-TLS
                p.mb-0.text-center Utiliza certificados digitales para autenticar usuarios y dispositivos, proporcionando un alto nivel de seguridad.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img203.png', alt="" ).m-auto
                h4.text-center EAP-PEAP
                p.mb-0.text-center Establece un túnel seguro que protege las credenciales durante el proceso de autenticación.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img204.png', alt="" ).m-auto
                h4.text-center EAP-TTLS
                p.mb-0.text-center Implementa un túnel TLS combinado con mecanismos adicionales de validación de identidad.
        p.mb-5 La utilización de #[b RADIUS] permite aplicar políticas diferenciadas de acceso dentro de la red inalámbrica corporativa. A continuación, se presentan algunos ejemplos de su aplicación.
    .color___box_4
      .px-5
        .row.align-items-center.justify-content-center.mb-5
          .col-xl
            p 
            .box___style_2.mb-3(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img205.jpg', alt='').m-auto
                .col-xl
                  ul.fa-ul.estilo___ul
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Acceso administrativo]. Permisos ampliados para personal autorizado.
                    li.mb-1
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Acceso para invitados]. Conectividad limitada a servicios básicos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Acceso para dispositivos #[i IoT]]. Restricción a segmentos específicos de la red.
            p.mb-4.mb-lg-0 Como ejemplo práctico, una organización con múltiples usuarios puede implementar una arquitectura de autenticación centralizada que integre los distintos componentes de seguridad.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img206.png', alt='').m-auto
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img207.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Punto de acceso
                p.mb-0.text-center Recibe la solicitud inicial de conexión.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img208.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center #[i Switch] de red
                p.mb-0.text-center Transporta el tráfico hacia el sistema de autenticación.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img209.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Servidor RADIUS
                p.mb-0.text-center Valida credenciales y aplica políticas de acceso.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img210.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Directorio corporativo
                p.mb-0.text-center Almacena la información de identidad de los usuarios.
        .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 Este modelo permite implementar autenticación individual, registrar accesos con fines de auditoría y fortalecer el control de seguridad en la infraestructura inalámbrica empresarial.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Políticas de seguridad centralizadas
    .fondo___carrusel
      .px-5
        p.mb-5 La administración centralizada de la seguridad permite aplicar configuraciones uniformes en múltiples dispositivos de red, lo que reduce la probabilidad de errores humanos y facilita la gestión operativa. En entornos de mediana y gran escala, la configuración manual de cada punto de acceso resulta ineficiente y puede generar inconsistencias en la protección de la infraestructura inalámbrica. Las políticas centralizadas permiten definir diferentes parámetros de seguridad que contribuyen a la gestión integral de la red.
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img211.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img212.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Métodos de autenticación
                p.mb-0.text-center Definir mecanismos de validación de identidad para los usuarios.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img213.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Niveles de cifrado
                p.mb-0.text-center Establecer estándares de protección de la información transmitida.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img214.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Segmentación de red
                p.mb-0.text-center Limitar el acceso entre grupos de usuarios o dispositivos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img215.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Control de potencia
                p.mb-0.text-center Regular la cobertura inalámbrica para reducir riesgos de acceso externo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img216.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Restricciones por horario o ubicación
                p.mb-0.text-center Controlar el acceso según condiciones operativas o geográficas.    
    p.mb-5 Un componente fundamental en este modelo es el #[b #[i Wireless Controller]], sistema que permite administrar múltiples puntos de acceso desde una consola centralizada.
    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión centralizada de SSID")
        .row.align-items-center
          .col-lg.mb-4.mb-lg-0
            h4 Gestión centralizada de SSID
            p.mb-0 Configuración uniforme de redes inalámbricas.
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img217.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Balanceo de carga")
        .row.align-items-center
          .col-lg.mb-4.mb-lg-0
            h4 Balanceo de carga
            p.mb-0 Distribución eficiente de usuarios entre puntos de acceso.
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img218.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Monitoreo en tiempo real")
        .row.align-items-center
          .col-lg.mb-4.mb-lg-0
            h4 Monitoreo en tiempo real
            p.mb-0 Supervisión continua del estado de la red.
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img219.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Detección de puntos de acceso no autorizados")
        .row.align-items-center
          .col-lg.mb-4.mb-lg-0
            h4 Detección de puntos de acceso no autorizados
            p.mb-0 Identificación de amenazas potenciales.
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img220.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Control dinámico de potencia")
        .row.align-items-center
          .col-lg.mb-4.mb-lg-0
            h4 Control dinámico de potencia
            p.mb-0 Optimización de la cobertura inalámbrica.
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img221.jpg", alt="" style="max-width: 350px").m-auto
    .fondo___carrusel
      .px-5
        p.mb-5 Los controladores modernos incorporan además funciones avanzadas de seguridad que fortalecen la protección operativa.
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img222.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img223.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Detección automática de puntos de acceso no autorizados
                p.mb-0.text-center Prevenir accesos indebidos a la red corporativa.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img224.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Análisis de interferencias de radiofrecuencia
                p.mb-0.text-center Optimizar la calidad de la señal y la estabilidad del servicio.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img225.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Identificación de ataques de desautenticación
                p.mb-0.text-center Detectar intentos de desconexión maliciosa de usuarios.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img226.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Aislamiento de clientes
                p.mb-0.text-center Evitar la comunicación directa entre dispositivos no autorizados.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img227.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Monitoreo de tráfico sospechoso
                p.mb-0.text-center Identificar comportamientos anómalos en la red. 
    .color___box_3
      .px-5
        p.mb-5 La segmentación constituye otra estrategia clave dentro de las políticas centralizadas de seguridad.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img228.png', alt="" ).m-auto
                h4.text-center VLAN
                p.mb-0.text-center Separación lógica de dominios de red.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img229.png', alt="" ).m-auto
                h4.text-center SSID diferenciados
                p.mb-0.text-center Creación de redes inalámbricas con distintos niveles de acceso.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img230.png', alt="" ).m-auto
                h4.text-center Listas de control de acceso (ACL)
                p.mb-0.text-center Restricción del tráfico según reglas definidas.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img231.png', alt="" ).m-auto
                h4.text-center Políticas basadas en roles
                p.mb-0.text-center Asignación de permisos según el perfil del usuario.
    .row.align-items-center.justify-content-center
      .col-xl.mb-4.mb-lg-0
        .box___style_15(data-aos="fade-right")
          .row.align-items-center
            .col-xl-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/img232.svg', alt='' style="max-width: 90px").m-auto
            .col-xl
              p.mb-1 Esta segmentación permite configurar distintos escenarios de acceso.
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Red administrativa]. Acceso completo a recursos corporativos.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Red de invitados]. Acceso limitado a internet.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Red para dispositivos #[i IoT]]. Acceso restringido a servicios específicos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img233.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.6 Relación con la evaluación técnica de red
    p.mb-5 La seguridad debe considerarse desde la fase de diseño dentro del proceso de evaluación técnica de una red inalámbrica. No se trata únicamente de habilitar mecanismos de cifrado, sino de estructurar una arquitectura integral que incluya autenticación robusta, políticas centralizadas y segmentación acorde con los riesgos organizacionales. Una evaluación técnica adecuada debe verificar diferentes aspectos relacionados con la protección de la infraestructura.
    .row.align-items-center.justify-content-center
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img234.png', alt='').m-auto
      .col-xl.mb-4.mb-lg-0
        .box___style_15.fit___box_15.mb-3(data-aos="fade-left")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Protocolo de autenticación implementado]. Determina el nivel de control sobre el acceso a la red.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Nivel de cifrado configurado]. Define la protección de la información transmitida.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Existencia de control centralizado]. Facilita la administración y estandarización de políticas.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Cumplimiento de normativa vigente]. Garantiza alineación con estándares de seguridad.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Capacidad de monitoreo y auditoría]. Permite detectar incidentes y realizar seguimiento.
        p.mb-0 La correcta implementación de estos elementos asegura que la red inalámbrica no solo funcione adecuadamente desde el punto de vista técnico, sino que también proteja la información y los activos organizacionales.
    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.7 Amenazas y mitigación en redes inalámbricas
    p.mb-5 Las redes inalámbricas presentan amenazas específicas debido a la naturaleza abierta del medio de transmisión. La identificación temprana de estos riesgos permite implementar estrategias de mitigación efectivas. A continuación, se describen algunos de los ataques más comunes.
    .row.justify-content-center.mb-5
      .col-xl-10  
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="<em>Rogue AP</em>").ajuste-cajaAcordion
            p.mb-3 Conexión de un punto de acceso no autorizado a la red corporativa, con el fin de interceptar tráfico o generar accesos indebidos.
            .ajuste___limite-acordion
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 3.
                span Ataque #[i Evil Twin] mediante punto de acceso rogue 
              figure.mb-3
                img(src='@/assets/curso/temas/img235.svg', alt='Ilustración de amenaza de seguridad inalámbrica con un punto de acceso no autorizado que intercepta tráfico y simula una red legítima. ').m-auto
          .row(titulo="<em>Evil Twin</em>").ajuste-cajaAcordion
            p.mb-3 Creación de un punto de acceso falso con el mismo SSID de la red legítima para engañar a los usuarios y capturar información.
            .ajuste___limite-acordion
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 4.
                span Comparación entre red #[i Evil Twin] y punto de acceso legítimo en una conexión inalámbrica
              figure.mb-3
                img(src='@/assets/curso/temas/img236.svg', alt='Gráfico comparativo entre red inalámbrica auténtica y red falsa con el mismo identificador, que incluye dispositivos de usuario y flujos de conexión. ').m-auto
          .row(titulo="Ataque de desautenticación").ajuste-cajaAcordion
            p.mb-3 Envío de paquetes falsos para desconectar a los clientes y capturar el proceso de reconexión.
            .ajuste___limite-acordion
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 5.
                span Ataque de desautenticación en redes inalámbricas y expulsión del usuario de la conexión
              figure.mb-3
                img(src='@/assets/curso/temas/img237.svg', alt='Diagrama de ataque de desautenticación que integra envío de paquetes falsos, desconexión de clientes y reconexión forzada a la red. ').m-auto
    p.mb-5 Para reducir el impacto de estas amenazas, se pueden implementar diversas medidas de mitigación.
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img238.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img239.png').m-auto
                h4.mb-3.estilo-text Implementar WPA3 o WPA2-Enterprise
                p.mb-0.text-center Incrementar el nivel de protección del cifrado.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img240.png').m-auto
                h4.mb-3.estilo-text Autenticación 802.1X con RADIUS
                p.mb-0.text-center Garantizar validación individual de usuarios.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img241.png').m-auto
                h4.mb-3.estilo-text Detección de AP no autorizados
                p.mb-0.text-center Identificar accesos indebidos mediante controladores inalámbricos.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img242.png').m-auto
                h4.mb-3.estilo-text Segmentación mediante VLAN
                p.mb-0.text-center Limitar la propagación de amenazas.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img243.png').m-auto
                h4.mb-3.estilo-text Deshabilitar WPS
                p.mb-0.text-center Evitar vulnerabilidades en el proceso de conexión.
              .tarjeta.color-acento-botones.fit___card-sinbordes
                .row.justify-content-center.mb-4
                  .col-12
                    img(src='@/assets/curso/temas/img244.png').m-auto
                h4.mb-3.estilo-text Actualizar #[i firmware] perperiódicamente
                p.mb-0.text-center Corregir fallos de seguridad conocidos.
        .color___box_2(data-aos="flip-up")
          .px-5
            .row.align-items-center.justify-content-center.p-3
              .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
              .col-xl
                p.mb-0 La seguridad debe planificarse desde el diseño de la red y no implementarse únicamente como una medida posterior.
    <!------------------------------------------ SUBTEMA 8 ------------------------------------------>
    Separador
    #t_5_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.8 Seguridad física y monitoreo de la infraestructura inalámbrica
    p.mb-5 La protección de una red inalámbrica también depende de la seguridad física de sus componentes. La ubicación estratégica de los puntos de acceso y el control sobre los equipos de red contribuyen a reducir riesgos operativos.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_15.mb-3(data-aos="fade-right")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Ubicación estratégica de puntos de acceso]. Optimizar cobertura y reducir exposición externa.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Protección contra manipulación]. Evitar alteraciones no autorizadas de equipos.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Control de acceso a racks]. Restringir el contacto físico con la infraestructura.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Respaldo de configuraciones]. Facilitar la recuperación ante fallos o incidentes.
        p.mb-0 El monitoreo continuo permite detectar anomalías y prevenir incidentes de seguridad antes de que afecten la operación.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img245.jpg', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img246.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Análisis de registros de autenticación
              p.mb-0 Identificar intentos fallidos de acceso.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img247.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Detección de dispositivos desconocidos
              p.mb-0 Reconocer conexiones no autorizadas.
      .col-xl-3.mb-4.mb-lg-0
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img248.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Monitoreo de tráfico anómalo
              p.mb-0 Detectar comportamientos sospechosos.
      .col-xl-3
        .box___style_7.fit___box_7.h-100(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img249.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              h4 Evaluación de eventos de seguridad
              p.mb-0 Fortalecer la respuesta ante incidentes.
    p.mb-5 Para estas actividades se emplean diversas herramientas tecnológicas:
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img250.png', alt="" ).m-auto
                h4.text-center Sistemas SIEM
                p.mb-0.text-center Correlación y análisis de eventos de seguridad.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img251.png', alt="" ).m-auto
                h4.text-center Controladores inalámbricos
                p.mb-0.text-center Gestión y supervisión centralizada de la red.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_5.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img252.png', alt="" ).m-auto
                h4.text-center Plataformas de gestión de red
                p.mb-0.text-center Administración operativa y monitoreo del desempeño.
        p.mb-5 Como ejemplo de aplicación, una empresa puede implementar una arquitectura de seguridad inalámbrica basada en autenticación centralizada, segmentación lógica y monitoreo continuo.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_15.fit___box_15-1(data-aos="fade-right")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b  Autenticación WPA2-Enterprise con 802.1X]. Validación individual de usuarios.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Servidor RADIUS integrado con directorio corporativo]. Administración centralizada de credenciales.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Segmentación mediante VLAN]. Aislamiento de usuarios, invitados y dispositivos #[i IoT].
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Monitoreo centralizado]. Detección temprana de incidentes.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img253.jpg', alt='').m-auto
    .fit___width_final
      .color___box_2.fit___color_box_2.mb-0(data-aos="flip-up")
        .px-5
          .row.align-items-center.justify-content-center.p-3
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img12.svg', alt='' style="max-width: 90px").m-auto
            .col-xl
              p.mb-0 Esta estrategia permite mejorar el control de accesos, fortalecer la trazabilidad y aumentar la protección frente a ataques en la red inalámbrica empresarial.
</template>

<script>
export default {
  name: 'Tema5',
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
