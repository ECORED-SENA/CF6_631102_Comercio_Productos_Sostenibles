<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFFFFF") 5
      h1 #[i Storytelling]
    .row.mb-5(data-aos="fade-right")
      .col-lg-9
        .row.mb-4
          .col-lg-8.mb-4.mb-lg-0
            p La narración de una buena historia genera emoción, inspiración y fidelización. #[i Storytelling] es el arte de contar historias a través de la publicidad. El mundo digital transformó el lenguaje de la publicidad, hoy las marcas no solo hablan de los beneficios, sino de los valores agregados de sus productos o servicios. Por ejemplo, productos que desaparecen las manchas de la ropa hay muchos, mejores resultados obtendrán quien narre de manera diferente la  historia por un canal digital.
            .cajon.color-secundario.p-4
              p.mb-0 #[i Storytelling] consiste en captar la atención de un público objetivo mediante la narración de una historia. Su propósito es generar compromiso (#[i engagement]) y reminiscencia de marca creando vínculos con los usuarios y #[i leads] en función del tiempo.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img1.png').m-auto
        .row.mb-4.mb-lg-0
            .col-auto
              figure
                img(src='@/assets/curso/tema5/img1.svg').m-auto
            .col
              p.mb-0 La narrativa transmedia hace referencia a los diferentes medios digitales (propios, ganados, pagados) y plataformas #[i web] que se utilizan para el relato de una historia.  Jenkins (2001), presenta las características principales que debe tener una historia transmediática:
      .col-lg-3
        figure
          img(src='@/assets/curso/tema5/img2.png').m-auto
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1]. #[i Características historia transmedia]
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img2.svg').m-auto
    p.mb-5 El universo de una historia transmedia tiene tres componentes clave como matriz de información para la expansión de los relatos:
    .row.bg-color23
      .col-12.p-5
        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-lg-10
            .row.justify-content-center
              .col-10.col-lg.m-3.bg-color26
                .row
                  .col-12.px-5.pt-5
                    .row.align-items-start.mb-4
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema5/img6.svg')
                      .col
                        p.mb-0 #[b Mythos]
                    .row
                      .col-12
                        p.fig-position4 Hacen parte del o los conflictos, los personajes, los mitos, las leyes naturales y mágicas que rigen el universo, es decir, es la historia como tal.
              .col-10.col-lg.m-3.bg-color27
                .row
                  .col-12.px-5.pt-5
                    .row.align-items-start.mb-4
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema5/img7.svg')
                      .col
                        p.mb-0 #[b Etho]
                    .row
                      .col-12
                        p.fig-position4 Hacen parte de él: los sistemas de valores y las relaciones, protocolos que se permite y que no en el contexto del universo.
              .col-10.col-lg.m-3.bg-color28
                .row
                  .col-12.px-5.pt-5
                    .row.align-items-start.mb-4
                      .col-auto
                        figure
                          img(src='@/assets/curso/tema5/img8.svg')
                      .col
                        p.mb-0 #[b Topos]
                    .row
                      .col-12
                        p.fig-position4 Hace referencia al tiempo o espacio en el que transcurre dicho universo.
        .row(data-aos="fade-left")
          .col-lg-9.mb-4.mb-lg-0
            .cajon.color-acento-contenido.p-4
              p El protocolo para contar una buena historia está basado en las técnicas que se utilizan para generar un buen #[i engagement]; a continuación, se presentan siete técnicas para lograrlo:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Narrar una historia personal.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | El usuario debe ser un personaje de la historia.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Debe haber un sentido de humanidad en los hechos.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Se deben superar obstáculos.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Se debe usar un lenguaje natural y coloquial.
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Debe haber un llamado a la acción.
                li 
                  .lista-ol--cuadro__vineta
                    span 7
                  | Debe haber un final feliz.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img3.png').m-auto
      
</template>

<script>
export default {
  name: 'Tema5',
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
