<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 3
      h1 Comunicación
    p.mb-5(data-aos="fade-right") La comunicación es un proceso recíproco de transmisión de información y conceptos a través de un sistema ordenado con un canal físico. Es de anotar que no todas las personas se comunican de la misma forma, aunque el ser humano utiliza la lingüística para comunicarse.
    .row.mb-5(data-aos="fade-left")
      .col-12.bg-color11
        .row.mt-4.p-4.p-lg-0
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img1.png', style="width: 450px").m-auto
          .col-lg-6
            .row.justify-content-center
              .col-10
                p.mb-0 De otra parte, la comunicación entre los humanos es un aspecto importante para la vida porque permite organizarse socialmente y tener interacciones; además, la comunicación ha avanzado tanto ya que se utilizan sistemas y códigos que permiten eliminar barreras como la distancia y desarrolla modelos de entendimiento y organización.
    .row.bg-color12(data-aos="fade-right")
      .col-12.p-5
        p.mb-5 En cuanto a la comunicación para la venta de productos sostenibles que crece cada día más a nivel mundial, #[span.txt-color1 los compradores tienen derecho a recibir información clara de los distintos productos y servicio que ofrece el mercado], es necesario que el vendedor maneje conocimientos sobre las especificaciones, la composición, calidad, precio y riesgo que tenga cada uno de ellos, con el objetivo de transmitir los principios para comunicar la sostenibilidad de productos, la información que le transmitan al consumidor le debe permitir que él pueda leer, comparar y elegir lo que va a comprar.
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema3/img2.png')
        p A pesar de que el mercado de productos sostenibles va en crecimiento, el volumen de información que llega al consumidor se transmite de forma imprecisa, indefinida o irrelevante, esto es fundamental a la hora de orientar al cliente, ya que con esto dan a los consumidores información eficaz sobre la sostenibilidad de productos.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Elementos y estructura del mensaje
    p.mb-5 #[span.txt-color1 Los mensajes constan de los siguientes elementos:] #[span.txt-color3 cabecera], que informa el mensaje del que envía a quién recibe; #[span.txt-color3 el contenido o cuerpo del mensaje] que es el texto del mensaje y #[span.txt-color3 la firma] que incluye datos de identificación tales como la empresa, el cargo, dirección, teléfono de contacto, etc.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Un mensaje incluye una cantidad de detalles que implican una minuciosa preparación, en donde hay que tener en cuenta la redacción, la ortografía, los símbolos, íconos, etc., que dan forma al contenido para que el argumento del concepto pueda convencer al lector de que está recibiendo toda la información que necesita darle, especialmente si el mensaje es publicitario, el formato debe estar acorde con el medio de comunicación que está empleando para divulgar el mensaje, lo que obliga a preparar un plan de medios adecuado.
    .row.mb-4
      .col-lg-5.bg-color3
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg').m-auto
          .col
            h4.mb-0 Codificación del mensaje
    p Un aspecto fundamental del formato es la codificación, estratégicamente representa el manejo del modelo estándar de la comunicación entre el anunciante y la audiencia, permite abreviar la información necesaria en argumentos y conceptos organizados de manera que facilite la transmisión, difusión y comprensión del mensaje.
    p.mb-5 #[b A continuación, se ilustra la estructura del mensaje: ]
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-8
        figure
          img(src='@/assets/curso/tema3/img3.svg')
    p.mb-5 Para que el proceso de comunicación se haga efectivo para el público, se hace necesario darse a entender, convirtiendo una idea en un hecho objetivo, para que llegue al interlocutor, por lo anterior, la emisión del mensaje debe considerarse como un acto que necesita correlación entre la planeación del contenido que coteja el publicista y el significado o validez que el público reciba.
    .row.mb-4
      .col-lg-5.bg-color3
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg').m-auto
          .col
            h4.mb-0 Elementos de la comunicación
    p La comunicación cuenta con diferentes elementos: el emisor, quien ejecuta o transmite el mensaje; el receptor, quien recibe el mensaje a través de un código, este código es un lenguaje hablado, escrito, etc.; el canal de comunicación, el medio por el que se transmite el mensaje, puede ser la voz, un escrito, etc.; y el #[i feedback], la retroalimentación o respuesta que se recibe de la persona con la que se está comunicando.
    p.mb-5 #[b El proceso de comunicación es un intercambio de ideas y contenidos que van desde el emisor hasta el receptor y viceversa, los elementos que intervienen en la comunicación son:]
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img4.svg')
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .cajon.color-primario.p-5
          p.mb-5 #[b La comunicación cumple con una serie de funciones y depende de los objetivos propuestos:]
          .row
            .col.mb-4.mb-lg-0
              ul.lista-ul
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  | 
                  p.mb-0 #[b Informativa]: comunicar información objetiva.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |
                  p.mb-0 #[b Expresiva:] mostrar sentimientos o emociones.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |
                  p.mb-0 #[b Formativa:] incidir en el otro y enseñarle cosas.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |
                  p.mb-0 #[b Persuasiva:] convencer a otros de que hagan algo.
                li
                  i.lista-ul__vineta(style="color: #EA3584")
                  |
                  p.mb-0 #[b Entretenimiento:] por el gusto de comunicarse.
            .col-auto
              figure
                img(src='@/assets/curso/tema3/img5.svg')
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Normativa de comunicación
    .row.bg-color12(data-aos="fade-right")
      .col-12.p-5
        p #[span.txt-color1 La comunicación ambiental está contemplada en la Norma ISO 14001], todas las organizaciones deben como requisito fundamental implementarla, por lo cual es muy importante que los funcionarios de la empresa conozcan y participen en el sistema de gestión ambiental, siendo formados y concientizados con respecto a las políticas medioambientales de la empresa, además deben proceder individualmente en el acatamiento de la norma.
        p.mb-5 Se hace necesario que los empleados conozcan que el sistema gestión ambiental no depende solo de las personas, también depende de la comunicación que haya entre ellas, y que tampoco depende de la comunicación interna de la organización, también deben comunicarse con el exterior de la organización, y entre las personas que se encuentran en el exterior se deben incluir todos los afectados por el impacto ambiental o por el mismo sistema de gestión ambiental.
        .row.justify-content-center.mb-5
          .col-lg-10
            figure
              img(src='@/assets/curso/tema3/img7.svg')
        p #[span.txt-color1 La comunicación ambiental interna] se entiende como comunicación interna los niveles y funciones que desempeñan las personas encargadas de la puesta en marcha, el progreso y el mantenimiento del sistema de gestión ambiental, donde se deben realizar:
    .row.mb-5(data-aos="fade-up")
      .col-12.bg-color14.p-5
        ul.lista-ul
          li.mb-3
            i.lista-ul__vineta(style="color: #EA3584")
            |  Capacitaciones a los empleados en la política ambiental.
          li.mb-3
            i.lista-ul__vineta(style="color: #EA3584")
            |  Relacionar el personal con el compromiso de mantener el sistema de gestión ambiental ISO14001, con el resto de los funcionarios.
          li
            i.lista-ul__vineta(style="color: #EA3584")
            |  Mantener informada a la Alta Dirección en el caso que se den cambios, y también de los resultados que arroje el sistema de gestión ambiental.
    p.mb-5 #[span.txt-color1 La comunicación ambiental externa] se da especialmente con las personas que puedan ser afectadas por el aspecto ambiental de la organización y del sistema de gestión ambiental; además, la puesta en marcha de la política ambiental es una manera de comunicarse con el exterior.
    .row.bg-color15(data-aos="fade-right")
      .col-12.p-5
        .row.justify-content-center
          .col-lg-10
            figure
              img(src='@/assets/curso/tema3/img9.svg')
    p Se debe mantener por escrito el procedimiento del método de comunicación, identificando los aspectos ambientales más relevantes, de la forma cómo se debe recibir, registrar y contestar las comunicaciones externas acerca del sistema de gestión ambiental de la organización. 
    p También hay que registrar y documentar las comunicaciones que arroje el sistema de gestión ambiental, que deben ser documentadas y archivadas para ser utilizadas como futuro material de referencia.
    p.mb-5 #[b La declaración ambiental es un requisito de la Norma ISO 14001, y dicha declaración ambiental tiene los siguientes apartes:]
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-8
        .row.mb-2
          .col-12.col-lg-4.bg-color16.p-4
            figure.mb-4
              img(src='@/assets/curso/tema3/img10.svg', style="width:60px").m-auto
            p.text-center Escribir todas las acciones que tengan programadas en el lugar de operaciones.
          .col-12.col-lg-4.bg-color17.p-4
            figure.mb-4
              img(src='@/assets/curso/tema3/img11.svg', style="width:60px").m-auto
            p.text-center Escribir los asuntos ambientales más importantes en el lugar de operaciones.
          .col-12.col-lg-4.bg-color18.p-4
            figure.mb-4
              img(src='@/assets/curso/tema3/img12.svg', style="width:60px").m-auto
            p.text-center Contar con las estadísticas de las emisiones de contaminación, generadas por los residuos y el consumo de materias primas.
        .row
          .col-12.col-lg-4.bg-color17.p-4
            figure.mb-4
              img(src='@/assets/curso/tema3/img13.svg', style="width:60px").m-auto
            p.text-center Identificar los factores relacionados con las actuaciones medioambientales.
          .col-12.col-lg-4.bg-color18.p-4
            figure.mb-4
              img(src='@/assets/curso/tema3/img14.svg', style="width:60px").m-auto
            p.text-center Crear la política ambiental y resumen de los programas de gestión ambiental y del sistema de gestión implementados por la empresa.
          .col-12.col-lg-4.bg-color16.p-4
            figure.mb-4
              img(src='@/assets/curso/tema3/img15.svg', style="width:60px").m-auto
            p.text-center Conocer el nombre de la entidad que va a verificar el sistema de gestión ambiental.
    .row(data-aos="fade-up")
      .col-12
        .cajon.color-secundario.p-5
          p #[b Se hacen las siguientes recomendaciones a la hora de implementar un sistema de gestión ambiental:]
          ul.lista-ul
            li.mb-3
              i.lista-ul__vineta(style="color: #EA3584")
              |  Crear y mantener la manera de recibir la documentación y contestar las comunicaciones de la empresa.
            li.mb-3
              i.lista-ul__vineta(style="color: #EA3584")
              |  El documento que contenga la política ambiental de la empresa debe ser accesible al público.
            li.mb-4
              i.lista-ul__vineta(style="color: #EA3584")
              |  La declaración ambiental debe identificar los cambios que se producen en la declaración anterior.
            li
              ul.lista-ul
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |  Tiene que estar escrita de forma clara y entendible para todo tipo de público.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |  Debe contener y relatar las actividades de los procesos ambientales, con la actuación y política ambientales.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |  Debe presentar resumen de las cifras sobre emisiones significativas.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |  Debe incluir la política ambiental.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |  Tiene que existir la fecha tope de la siguiente declaración ambiental.
                li.mb-3
                  i.lista-ul__vineta(style="color: #EA3584")
                  |  Debe tener el nombre del auditor del sistema de gestión ambiental.
                li
                  i.lista-ul__vineta(style="color: #EA3584")
                  |  Se tiene que preparar de forma anual la declaración ambiental que simplifica e identifica los cambios significativos producidos desde la declaración anterior.
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Plan de comunicación integral
    p El plan de comunicación integral es un documento que contiene diferentes acciones de comunicación que debe implementar la empresa, la comunicación se debe dar con los trabajadores, clientes, prospectos (clientes potenciales), hasta los proveedores, el entorno y todos los ámbitos de la empresa, así, el plan de comunicación integral es un elemento clave con el que cuenta el #[i marketing].
    p.mb-5 A continuación, se presenta cada uno de los elementos del plan y estructura de comunicación integral, donde se debe combinar con una serie de estrategias, esfuerzos, tácticas, acciones para su desarrollo:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-10.bg-color19.p-5
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img16.svg')
          .tarjeta.bg-color20.p-3(x="51.7%" y="12.6%" numero="")
            p.mb-0 #[b Analizar el entorno]: se debe hacer un estudio del entorno interno y externo de la empresa, realizando una matriz DOFA para identificar debilidades, oportunidades, amenazas y fortalezas que tenga la empresa.
          .tarjeta.bg-color20.p-3(x="32.2%" y="21.7%" numero="")
            p.mb-0 #[b Estudiar los antecedentes]: se refiere a recopilar información de la empresa, su historia desde los inicios, sus históricos de ventas, evolución a través de la historia, también se deben escribir sus éxitos y fracasos.
          .tarjeta.bg-color20.p-3(x="23.9%" y="38.7%" numero="")
            p.mb-0 #[b Fijarse los objetivos]: los objetivos delimitan la finalidad de las acciones de comunicación a implementar, son las metas que benefician la imagen corporativa de la empresa, analizan la situación y definen los objetivos medibles, alcanzables y realistas, de lo contrario no tienen ningún sentido.
          .tarjeta.bg-color20.p-3(x="24.4%" y="60.7%" numero="")
            p.mb-0 #[b Estudiar el público objetivo o #[i target]]: analizar el público objetivo y conocer quién es para plantear las acciones de comunicación correctas, se debe segmentar al cliente para poder llegar a él, son mujeres, hombres, rango de edad, nivel educativo, qué gustos, preferencias y estilo de vida  tiene, cuáles son los medios que utiliza para informarse, en fin, todo lo que pueda conocer de él.
          .tarjeta.bg-color20.p-3(x="33.2%" y="76.6%" numero="")
            p.mb-0 #[b Definir el mensaje]: con la información que tiene de la empresa y el segmento al que se va a dirigir, se debe redactar el mensaje con el que desea que lo reconozca el entorno, debe establecer los atributos por los que quiere que se conozca su producto o servicio, estos deben ser reales; no debe engañar al consumidor, de lo contrario su empresa perderá prestigio y credibilidad, debe seleccionar el tono y estilo con el que se va a comunicar.
          .tarjeta.bg-color20.p-3(x="52.7%" y="86%" numero="")
            p.mb-0 #[b Trazar las estrategias]: en este momento hay que pensar de qué manera va a alcanzar los objetivos que se ha propuesto en cada una de las áreas de comunicación, sin estrategias no hay coherencia, ni objetivos cumplidos.
          .tarjeta.bg-color20.p-3(x="69.8%" y="79%" numero="")
            p.mb-0 #[b Fijar un presupuesto]: destine un determinado dinero para llevar a cabo las acciones del plan, esto le ayudará a manejar mejor el presupuesto del que disponga; el plan de comunicación debe ser ambicioso para que le permita plantear buenas acciones.
          .tarjeta.bg-color20.p-3(x="80.1%" y="60.6%" numero="")
            p.mb-0 #[b Establecer las acciones]: las acciones deben ser concretas con el presupuesto que cuente, la información interna y externa que recogió y el mensaje que quiere lanzar; debe seleccionar los medios a utilizar para darse a conocer y que se acuerden de su producto o servicio.
          .tarjeta.bg-color20.p-3(x="77.6%" y="38.7%" numero="")
            p.mb-0 #[b Planificar las acciones]: debe tener una excelente planificación de las acciones a ejecutar, la forma correcta de hacerlo es diseñando un cronograma en el que aparezcan todas las acciones a realizar en un determinado tiempo, lo recomendable es hacer esta planificación anualmente, ahí deben aparecer las fechas en las que va a ejecutar cada una de ellas.
          .tarjeta.bg-color20.p-3(x="67.2%" y="21.8%" numero="")
            p.mb-0 #[b Ejecutar y monitorear]: lo que no se mide no se puede gestionar, este es el último paso del plan de comunicación integral, aquí se ejecutan las acciones que haya definido y en los tiempos establecidos en el cronograma; tenga en cuenta que debe hacer seguimiento para comprobar el cumplimiento de la planificación para ver si han cumplido los resultados esperados, esto le permitirá detectar los errores y corregirlos para conseguir los objetivos planteados.
    p.mb-5 #[b Puede acudir a los siguientes indicadores para medir las acciones:]
    ul.lista-ul
      li.mb-3
        i.lista-ul__vineta(style="color: #EA3584")
        |  
        p.mb-0 El nivel de cumplimiento de las acciones planeadas.
      li.mb-3
        i.lista-ul__vineta(style="color: #EA3584")
        |  
        p.mb-0 Monitorear el presupuesto que está invirtiendo en cada acción.
      li.mb-3
        i.lista-ul__vineta(style="color: #EA3584")
        |  
        p.mb-0 El impacto que genera cada acción, por ejemplo, la cantidad de personas que han una acción determinada.
      li
        i.lista-ul__vineta(style="color: #EA3584")
        |  
        p.mb-0 El resultado de cada acción, por ejemplo, consultas, ventas, suscripciones, visitas a la página #[i web], etc.

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
