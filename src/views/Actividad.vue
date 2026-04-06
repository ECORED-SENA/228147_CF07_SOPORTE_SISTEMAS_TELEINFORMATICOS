<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de redes Inalámbricas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar su nivel de apropiación de los fundamentos técnicos de las redes inalámbricas, incluyendo espectro electromagnético, tecnologías, infraestructura, estándares, seguridad e implementación conforme a normativa de telecomunicaciones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Una red inalámbrica se caracteriza porque:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utiliza cableado estructurado como medio principal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transmite datos por ondas electromagnéticas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Funciona únicamente en redes móviles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Opera sin configuración técnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La banda de 2.4 GHz se destaca por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener menor cobertura que 5 GHz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer buena penetración en obstáculos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ser exclusiva para 5G.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No presentar interferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'El estándar IEEE 802.11 corresponde a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Normativa nacional colombiana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Redes cableadas <em>Ethernet</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Especificaciones para redes <em>WiFi</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Telefonía celular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'El dBm mide:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intensidad de señal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Velocidad de internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de usuarios conectados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipo de modulación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Una red <i>Mesh</i> permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conectar nodos entre sí con redundancia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar puntos de acceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar solo cableado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tener un único enlace central.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'WPA3 es un protocolo que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta la cobertura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce interferencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejora la seguridad <em>WiFi</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementa el ancho de canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'El <em>Site Survey</em> se realiza para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar IP automáticamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evaluar cobertura e interferencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear estándares IEEE.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Configurar VLAN.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '<em>Zigbee</em> se utiliza principalmente en:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Streaming</em> de video.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Redes empresariales de alta velocidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicaciones <em>IoT</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Redes satelitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'La reflexión ocurre cuando la señal:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rebota en una superficie.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se atenúa por distancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se divide en subcanales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atraviesa sin alteración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La CRC en Colombia:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseña estándares IEEE.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regula el espectro nacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fabrica equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administra redes privadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué característica principal distingue a la tecnología LoRa en redes <em>IoT</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitir transmisión de video en alta definición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Operar únicamente en redes cableadas industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ofrecer largo alcance con bajo consumo energético.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Requerir conexión directa con <em>routers WiFi</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la función principal de un <em>Access Point</em> dentro de una red inalámbrica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convertir señales eléctricas en fibra óptica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir la conexión de dispositivos inalámbricos a la red.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Medir variables ambientales en sistemas <em>IoT</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar la frecuencia de transmisión satelital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué tipo de antena irradia señal en un patrón de 360 grados?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Antena parabólica de alta ganancia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Antena panel de cobertura dirigida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Antena omnidireccional de cobertura circular.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Antena Yagi de enlace punto a punto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué topología inalámbrica permite que los dispositivos se conecten directamente entre sí sin punto de acceso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Topología infraestructura centralizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Topología ad-hoc entre dispositivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Topología punto multipunto centralizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Topología <em>mesh</em> controlada por <em>gateway</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué técnica de modulación divide el canal en múltiples subportadoras para mejorar la eficiencia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modulación FSK de frecuencia simple.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modulación analógica AM tradicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modulación ASK de amplitud digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modulación OFDM de múltiples subportadoras.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el mecanismo de cifrado más reciente recomendado para redes <em>WiFi</em> modernas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'WEP con cifrado RC4.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'WPA con protocolo TKIP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'WPA2 con cifrado AES.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'WPA3 con autenticación SAE.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué protocolo permite centralizar autenticación, autorización y contabilidad en redes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Protocolo FTP de transferencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Protocolo HTTP de navegación web.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protocolo RADIUS de autenticación centralizada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Protocolo SMTP de correo electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué mecanismo permite dividir una red en segmentos lógicos dentro de la misma infraestructura física?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema NAT de traducción de direcciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Protocolo DHCP de asignación automática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'VLAN para segmentación lógica de red.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Firewall</em> básico del <em>router</em> doméstico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué parámetro indica la intensidad de señal recibida en una red inalámbrica?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dirección MAC del dispositivo cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Número de canal utilizado por el AP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Velocidad máxima del estándar <em>WiFi</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel de señal RSSI medido en dBm.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué proceso analiza el entorno físico antes de instalar una red inalámbrica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balanceo automático de carga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Configuración de cifrado WPA3.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Site Survey</em> para evaluar cobertura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actualización de <em>firmware</em> del <em>router</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
