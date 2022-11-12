<template>
  <div class="container">
    <p>test</p>
    <svg-icon name="iconPolygon" />
    <div class="grid">
      <div v-for="n in 6" :key="n" class="col">asd</div>
    </div>
    <div class="flex items-center bg-blue-500">
      <Checkbox id="binary" v-model="checked" :binary="true" />
      <label for="binary" class="ml-2">{{ checked }}</label>
    </div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div v-for="n in 4" :key="n" class="swiper-slide h-52">Slide 1</div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import Checkbox from 'primevue/checkbox'
export default {
  name: 'IndexPage',
  components: {
    Checkbox,
  },
  data() {
    return {
      checked: false,
    }
  },
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // init Swiper:  eslint-disable used for deleting error of unsued const swiper
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      loop: false,
      grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 1500,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    // you can use different options later
    swiper.on('activeIndexChange', (swiper) => {
      // console.log(swiper)
    })
  },
}
</script>
