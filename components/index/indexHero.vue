<template>
  <section class="relative h-[100rem]">
    <indexHeroPattern />
    <div class="container">
      <div
        class="max-w-[76rem] mx-auto pt-[10rem] relative before:bg-grayBg before:rounded-[100%] before:absolute before:-top-[15%] before:-left-[20%] before:w-[140%] before:h-[140%] before:shadow-hero"
      >
        <div class="flex flex-col items-center relative z-1">
          <span
            class="absolute top-[-4rem] left-1/2 -translate-x-1/2 bg-gradient-to-b from-primaryLight to-transparent w-[20rem] h-[20rem] rounded-full"
          ></span>
          <h1
            class="text-5xl font-secondary text-grayDark leading-[0.8] relative top-[2.5rem] text-center mb-[3rem]"
          >
            LET’S CREATE <span class="text-primary">INCREDIBLE</span> THINGS
          </h1>
          <p class="text-sm text-grayLight text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#0"
            class="group hover:bg-primary ease-in-out duration-300 hover:shadow-none flex items-center justify-center w-[7rem] h-[7rem] rounded-full shadow-dark bg-white mt-[5rem]"
          >
            <svg-icon
              name="iconPolygon"
              class="-rotate-90 relative left-[0.1rem] text-primary text-[2rem] group-hover:text-white ease-in-out duration-300"
            />
          </a>
        </div>
      </div>
      <div class="absolute right-[4.5rem] top-[12rem] flex flex-col gap-[2rem]">
        <v-button type="only-i" icon="iconGithub" link="#0"> </v-button>
        <v-button type="only-i" icon="iconBehance" link="#0"> </v-button>
        <v-button type="only-i" icon="iconLinkedin" link="#0"> </v-button>
        <v-button type="only-i" icon="iconInstagram" link="#0"> </v-button>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="container">
        <sectionTitle name="Platforms" />
        <div ref="platformSlider" class="swiper overflow-visible">
          <div class="swiper-wrapper items-stretch">
            <div
              v-for="item in platformItems"
              :key="item.id"
              class="swiper-slide h-auto"
            >
              <PlatformCard
                :logo="item.logo"
                :link="item.link"
                :tags="item.tags"
                :profile="item.profile"
                :color="item.color"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination, EffectCoverflow } from 'swiper'
export default {
  data() {
    return {
      platformItems: [
        {
          id: 1,
          logo: 'images/upwork-logo.png',
          link: '#0',
          color: 'bg-upwork',
          tags: [
            { id: 1, text: 'Psd/Figma to Html or Vue/Nuxt' },
            { id: 2, text: 'Ui Development' },
            { id: 3, text: 'UI - UX Designing' },
          ],
          profile: [
            {
              id: 1,
              image: 'images/alperen-pp.jpg',
              name: 'Alperen Çelik',
              link: '#0',
            },
          ],
        },
        {
          id: 2,
          logo: 'images/upwork-logo.png',
          link: '#0',
          color: 'bg-upwork',
          tags: [
            { id: 1, text: 'Psd/Figma to Html or Vue/Nuxt' },
            { id: 2, text: 'Ui Development' },
            { id: 3, text: 'UI - UX Designing' },
          ],
          profile: [
            {
              id: 1,
              image: 'images/alperen-pp.jpg',
              name: 'Alperen Çelik',
              link: '#0',
            },
          ],
        },
        {
          id: 3,
          logo: 'images/upwork-logo.png',
          link: '#0',
          color: 'bg-upwork',
          tags: [
            { id: 1, text: 'Psd/Figma to Html or Vue/Nuxt' },
            { id: 2, text: 'Ui Development' },
            { id: 3, text: 'UI - UX Designing' },
          ],
          profile: [
            {
              id: 1,
              image: 'images/alperen-pp.jpg',
              name: 'Alperen Çelik',
              link: '#0',
            },
          ],
        },
        {
          id: 4,
          logo: 'images/upwork-logo.png',
          link: '#0',
          color: 'bg-upwork',
          tags: [{ id: 1, text: 'Psd/Figma to Html or Vue/Nuxt' }],
          profile: [
            {
              id: 1,
              image: 'images/alperen-pp.jpg',
              name: 'Alperen Çelik',
              link: '#0',
            },
          ],
        },
      ],
    }
  },
  async mounted() {
    await this.$nextTick()
    Swiper.use([Navigation, Pagination, EffectCoverflow])
    const platformSwiper = new Swiper(this.$refs.platformSlider, {
      slidesPerView: 3,
      spaceBetween: 40,
    })
    platformSwiper.on('slideChange', function () {})
  },
}
</script>
