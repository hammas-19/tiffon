<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
<template>
  <Carousel :itemsToShow="6.5" :wrapAround="true" :transition="500">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">

        <!-- <ProductCardTest :image="'/gridImages/suit1.webp'" /> -->
        <img src="/gridImages/suit2.webp" class="rounded-xl h-full max-h-60" alt="">

      </div>
    </Slide>

    ...
  </Carousel>
</template>
  
<script setup>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
 defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
})


</script>
  

  