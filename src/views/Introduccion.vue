<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .color___box_1
      .px-5
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            p Las redes inalámbricas constituyen uno de los pilares fundamentales de la infraestructura de telecomunicaciones actual. Su implementación permite la transmisión de información sin medios físicos guiados, utilizando ondas electromagnéticas reguladas por estándares y normativa técnica. La comprensión de sus fundamentos físicos, tecnológicos y normativos es indispensable para definir correctamente los parámetros y recursos que garantizan el funcionamiento eficiente de una red de datos.
            .box___style_1.mb-3(data-aos="fade-right")
              .row.justify-content-center
                .col-xl-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src="@/assets/curso/intro/img1.svg", alt="" style="max-width: 80px").m-auto
                .col-xl
                  p.mb-0 La evaluación técnica de una red inalámbrica inicia con la identificación de frecuencias, espectro disponible, topologías, dispositivos y mecanismos de seguridad que intervienen en su operación. Definir estos elementos conforme a procedimientos de telecomunicaciones permite establecer configuraciones óptimas, minimizar interferencias y asegurar el cumplimiento de las disposiciones nacionales e internacionales vigentes.
            p El contenido de este componente desarrolla los conceptos esenciales relacionados con el espectro electromagnético, tecnologías inalámbricas, infraestructura, estándares de comunicación y protocolos de seguridad. Asimismo, aborda la integración de soluciones #[i IoT] y los procesos de inspección técnica necesarios para la implementación y verificación de redes inalámbricas en diferentes contextos organizacionales.
            p.mb-0 La apropiación de estos conocimientos fortalece la capacidad para analizar, estructurar y evaluar soluciones inalámbricas bajo criterios técnicos y normativos, contribuyendo al aseguramiento de la calidad, confiabilidad y desempeño de la red de datos.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro/img2.png", alt="").m-auto
</template>

<script>
export default {
  name: 'Introduccion',
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
