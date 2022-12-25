<template>
  <div class="py-[10rem] overflow-hidden">
    <div class="container">
      <div class="section-top section-top-between">
        <section-title name="Works" />
        <v-button link="#0" icon="iconArrow" type="default">
          See All Works
        </v-button>
      </div>
      <div ref="workSlider" class="swiper overflow-visible mt-[5.5rem]">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <workCard />
          </div>
          <div class="swiper-slide">
            <workCard />
          </div>
          <div class="swiper-slide">
            <workCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'swiper'
export default {
  async mounted() {
    await this.$nextTick()
    Swiper.use()
    const workSlider = new Swiper(this.$refs.workSlider, {
      slidesPerView: 2,
      spaceBetween: 50,
      speed: 800,
    })
    workSlider.on('slideChange', function () {})
  },
}
</script>
