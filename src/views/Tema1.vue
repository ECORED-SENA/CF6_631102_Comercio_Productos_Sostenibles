<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 1
      h1 #[i Ecomarketing]
    .row.bg-color1(data-aos="fade-right")
      .col-12.p-5
        .row.justify-content-center
          .col-lg-6
            figure.mb-4
              img(src='@/assets/curso/tema1/img2.svg').m-auto
          .col-lg-10.bg-color2
            p.mb-0.mt-4 En Colombia se ha desarrollado el Plan Nacional de Producción y Consumo Sostenible, el cual contempla siete (7) ejes estratégicos para lograr cambios en los patrones de producción y consumo hacia la sostenibilidad. A continuación, se desarrolla cada uno de los ejes:
    .tarjeta.tarjeta--amarilla.p-4.p-lg-5.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[b Infraestructura sostenible]
            p Este eje consiste en que el Estado, a través de sus políticas, promueva sistemas sostenibles a gran escala y modelos que generen impacto en los indicadores del medio ambiente que ayuden al desarrollo de una cultura sostenible a través del diseño de proyectos de infraestructura en transporte público, vial o fluvial, como también en la generación de energías limpias. 
            p En la actualidad el sector empresarial está realizando proyectos de uso eficiente de recursos tales como: el agua, los residuos industriales, techos verdes (hechos con vegetación), el uso de materiales reciclados en el sector de la construcción y la certificación LEED (Líder en Eficiencia Energética y Diseño Sostenible).
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img2.png', style="width: 350px").m-auto
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[b Fortalecimiento de la regulación]
            p Este eje se refiere al ajuste del marco regulatorio ambiental, teniendo en cuenta la tendencia del mercado global, incluyendo los principios de prevención; se deben tener en cuenta las transformaciones productivas sostenibles y competitivas, las acciones para cumplir con la estrategia para fortalecer y aumentar la capacidad técnica para el seguimiento de la regulación ambiental.
            p En el tema ambiental están excluidos del IVA las maquinarias y equipos utilizados para el control y monitoreo necesarios para cumplir con la ley vigente, maquinaria importada con fines de recolectar las basuras o desperdicios, equipos para tratar las aguas residuales, equipos que midan las emisiones atmosféricas y recursos sólidos en la recuperación de ríos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img3.png', style="width: 350px").m-auto
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[b Compras responsables]
            p Este eje se orienta a crear una cultura en donde el comprador final tenga en cuenta el aspecto sostenible de los productos o servicios que adquiere. Esta estrategia busca fortalecer los instrumentos económicos que existen y el desarrollo de nuevos instrumentos que promuevan la fabricación y el consumo sostenible, preparando pautas que contengan descripciones técnicas de las particularidades de los productos, servicios y negocios sostenibles.
            p Para cumplir con este eje se tienen en cuenta las áreas de transporte eficiente, hotelería, empaques y envases de alimentos e implementos de oficina.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img4.png', style="width: 350px").m-auto
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[b Capacitación e investigación]
            p Este eje tiene como objetivo el fortalecimiento de la investigación en la producción y el consumo sostenible entre los empleados y establecimientos implicados en la implementación de la política medioambiental, fortaleciendo la educación de estos temas en instituciones y fundaciones, ampliando el financiamiento para programas de este tipo, donde se involucren entidades educativas públicas como el SENA, las instituciones de educación superior y el Ministerio de Ambiente y Desarrollo Sostenible.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img5.png', style="width: 350px").m-auto
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[b Cultura y autogestión]
            p Con este eje se incentiva a las entidades a autorregularse implementando programas empresariales de autorregulación, teniendo como base la información pública del desempeño ambiental que impulsa la autogestión publicando informes de sostenibilidad, teniendo en cuenta los criterios de la iniciativa global de reportes. La prioridad de este eje es que sea implementado en medianas y grandes empresas de los sectores: alimentos, construcción, agroindustria y manufactura (empaques y envases del sector químico, alimentos y metalúrgico).
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img6.png', style="width: 350px").m-auto
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[b Encadenamiento]
            p Este eje hace referencia a los negocios inclusivos de las organizaciones, estos son negocios que realizan actividades que incluyen a poblaciones para contribuir a su desarrollo social y económico. Esta estrategia busca optimizar el aprovechamiento de los residuos de recursos naturales e insumos; y para conseguirlo se hace necesario la transmisión de buenas prácticas medioambientales, el uso de tecnologías limpias y la comercialización de productos sostenibles a través del encadenamiento de actores y empresas que desean una unión y colaboración entre empresas que buscan cambios grupales.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img7.png', style="width: 350px").m-auto
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h4 #[b Emprendimiento en negocios verdes]
            p El eje de negocios verdes apunta a la transformación productiva y a la generación de empleo. Su principal objetivo es promover el emprendimiento en el ámbito de servicios y productos de negocios ambientalmente aprovechables, teniendo en cuenta la biodiversidad; al igual que el fortalecimiento de negocios existentes donde se involucra la capacidad de redes y programas de incubación y emprendimientos verdes, que puedan participar en espacios de intercambio comercial, tales como ferias, exposiciones, concursos de planes de negocios, donde se presenten proyectos en temas de energía eficiente, adaptación al cambio climático, al manejo de residuos, materiales de construcción sostenibles y tecnologías limpias.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img8.png', style="width: 350px").m-auto
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.bg-color2
        p.mb-4.mt-4 Dentro de esos ejes estratégicos se contempla el principio siete (7), #[span.txt-color1 “Emprendimiento en negocios verdes”], el cual se desarrolla teniendo en cuenta su importancia, así:
        .cajon.color-primario.p-5
          ul.lista-ul
            li 
              i.lista-ul__vineta(style="color: #EA3584")
              | El emprendimiento en negocios verdes consiste en el desarrollo de bienes y servicios con calidades ambientales, que permiten el aprovechamiento de recursos naturales de manera sostenible.
            li 
              i.lista-ul__vineta(style="color: #EA3584")
              | La estrategia de emprendimiento de negocios verdes está dirigida especialmente para el desarrollo de las empresas que involucren temas tales como el uso eficiente de la energía, la adaptación al cambio climático, el buen manejo de residuos sólidos, uso de tecnologías limpias y materiales para construcción sostenibles, uso y respeto por la biodiversidad, biotecnología y agroindustria.
            li 
              i.lista-ul__vineta(style="color: #EA3584")
              | El desarrollo de estos bienes y servicios requiere de un estudio de mercado en el cual se establezcan los gastos y necesidades por parte de los clientes o consumidores disponibles, al igual que el desarrollo de sus características, usos, precios, distribución y promoción.
            li 
              i.lista-ul__vineta(style="color: #EA3584")
              | 
              p.mb-0 En consecuencia, en los negocios verdes, al igual que en cualquier otro tipo de negocios, es necesario contar con los conocimientos básicos de mercadeo, y en este caso, del mercadeo o #[span.txt-color1 #[i marketing] verde].
    .row.mb-4
      .col-lg-6.bg-color3
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg').m-auto
          .col-8
            h4.mb-0 #[i Marketing] verde
    p.mb-5 Es, entonces, la comercialización de productos que presumen ser ambientalmente seguros para el medio ambiente y para su público meta. Este incluye diversas actividades, tales como reducción de residuos, cambios en el producto desde su desarrollo hasta su embalaje y modificaciones en su mezcla de comunicación.
    .row.mb-5(data-aos="fade-up")
      .col-12.py-4.bg-color4
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img9.png').m-auto
          .col-lg-6
            p El pilar del #[i marketing] tradicional, al igual que el verde, es enfocarse en la presentación de los beneficios a los clientes. Así mismo, crear una mayor conciencia por parte de los clientes acerca de los productos que compran o consumen y que estos sean preferidos sobre sus competidores “no verdes”.
    p.mb-5 Grant (2007) destaca cinco (5) puntos clave para tener en cuenta para llevar a cabo de manera adecuada prácticas de #[i marketing] verde, a saber:
    .row.justify-content-center.bg-color5.mb-5(data-aos="fade-right")
      .col-lg-6
        ImagenInfografica.color-secundario.pt-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img4.svg')
          .tarjeta.bg-color6.p-3(x="18%" y="46%" numero="")
            h5 Intuitivo
            p Realizar bienes y servicios más "normales", creando el sentido de conciencia ambiental por medio de las mejores alternativas que sean accesibles y fáciles de interpretar.
          .tarjeta.bg-color6.p-3(x="25.5%" y="28%" numero="")
            h5 Integrativo
            p Los bienes y servicios se deben desarrollar bajo el enfoque de sostenibilidad, permitiendo la combinación del desarrollo económico con el desarrollo social y ambiental.
          .tarjeta.bg-color6.p-3(x="50%" y="17%" numero="")
            h5 Innovador
            p Desarrollo de bienes y servicios creativos que aporten nuevos estilos de vida saludables y sostenibles.
          .tarjeta.bg-color6.p-3(x="71.5%" y="28%" numero="")
            h5 Invitador
            p Los productos verdes, por sus cualidades, son a menudo mejores, más eficientes, durables y eficaces, razones suficientes para ser preferidos por los consumidores. El desafío de las empresas está en lidiar con la cultura y los nuevos estilos de vida.
          .tarjeta.bg-color6.p-3(x="77.4%" y="46%" numero="")
            h5 Informativo
            p La falta de información afecta el comportamiento de las personas, por esto es importante crear contenido que aporte y enseñe al público en general acerca de la responsabilidad con el medio ambiente y cómo cuidarlo.
    .row.mb-4
      .col-lg-6.bg-color3
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img3.svg').m-auto
          .col-8
            h4.mb-0 Mezcla del #[i marketing] verde
    p(data-aos="fade-left") Se deriva del #[i marketing] tradicional, en el cual se establecen las 4P (precio, producto, plaza y promoción) para las empresas, las cuales se adaptan según su perfil y preferencias. Esta mezcla de mercadeo es crucial para el futuro desempeño de las empresas, y para el caso de los negocios verdes, se realizan los ajustes para lograr un enfoque más ecológico.
    p.mb-5 #[b A continuación, se presenta el comparativo donde se define cada una de las P en el #[i marketing] tradicional, en contraste con el #[i marketing] verde:]
    .row.bg-color7(data-aos="fade-right")
      .col-12.p-5
        .row.mb-5
          .col-12
            .row.justify-content-center
              .col-auto.bg-color8
                p.text-center.mb-0.mx-4 #[b Mezcla de #[i marketing]]
        .row
          .col-lg-6
            .row.mb-5
              .col-2
              .col
                p.mb-0 #[b Tradicional]
            .row.mb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img6.svg').m-auto
              .col
                p.mb-0 #[b Producto]: en esta variable se establecen las necesidades que se desean satisfacer en el consumidor y los servicios necesarios para el disfrute del producto. Asimismo, se indican los atributos, usos y su valor agregado.
            .row.mb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img7.svg').m-auto
              .col
                p.mb-0 #[b Precio]: se refiere a la cantidad de dinero que el cliente debe pagar por adquirir los productos. La definición de precios se establece por diferentes estrategias, dependiendo de cada empresa y le permite ser más competitivos en el sector en el que se desempeñe.
            .row.mb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img8.svg').m-auto
              .col
                p.mb-0 #[b Promoción]: son todas las actividades que comunican los méritos del producto y ayudan a persuadir a los clientes meta. En esta variable se contemplan los elementos publicitarios a utilizar.
            .row.mb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img9.svg').m-auto
              .col
                p.mb-0 #[b Plaza]: son las actividades que realiza la empresa, encaminadas a que el producto se encuentre disponible para los clientes meta. En esta variable se establecen los canales de distribución a utilizar.
          .col-lg-6
            .row.mb-5
              .col-2
              .col
                p.mb-0 #[b Verde]
            .row.mb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img10.svg').m-auto
              .col
                p.mb-0 #[b Producto verde]: responde a necesidades y requerimientos ambientales y de salud. Una vez que las necesidades del cliente son consideradas claves para mejorar, se desarrollan nuevos productos con caracterización de productos ambientalmente sostenibles y seguros.
            .row.mb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img11.svg').m-auto
              .col
                p.mb-0 #[b Precio verde]: se refiere al precio especificado a la luz de las políticas de la empresa, con respecto a las consideraciones ambientales impuestas por las normas e instrucciones de la empresa o de sus iniciativas ecológicas.
            .row.mb-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img12.svg').m-auto
              .col
                p.mb-0 #[b Promoción verde]: se refiere al suministro de información real acerca de los productos, de una manera que no perjudique los intereses de los consumidores.
            .row.mb-0.mb-lg-5
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img13.svg').m-auto
              .col
                p.mb-0 #[b Plaza verde]: se refiere a la distribución de productos ecológicos que son adecuados para los consumidores, en términos de facilitar la entrega y garantizar procedimientos de reciclaje, que se realizan dentro de las condiciones y requisitos ambientales.
    .row.justify-content-center.mb-5
      .col-auto.bg-color9
        p.mb-0.mx-4 #[b Y para una mejor comprensión, en el siguiente video se presentan ejemplos de mercadeo verde:]
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/PbdVwChb71Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
