<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: #FFFFFF")
      h1 Introducción
    p.mb-5 Apreciado aprendiz le invitamos a que amplíe sus conocimientos con el contenido de este componente formativo, el cual se convertirá en un insumo fundamental para que elabore una campaña de productos sostenibles de manera adecuada y creativa para su empresa, brindándole herramientas para una comunicación clara y precisa, destacando los atributos y beneficios ambientales de los productos sostenibles, con el propósito de que esto represente mayores ventas e ingresos a la empresa y para lo cual se abordarán conceptos de #[i ecomarketing], los diferentes tipos de #[i brief], #[i insight] y #[i storytelling].
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
