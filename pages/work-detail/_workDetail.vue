<template>
  <div>
    <appSubheader
      type="workDetail"
      :title="workData.name"
      :image="workData.banner"
      :workHref="workData.href"
      workShare="Share"
      :bcItem="bcItems"
    />
    <div class="container">
      <div class="rounded-bl-[5rem] rounded-br-[5rem] bg-grayBgLight flex">
        <div
          class="w-[40%] shrink-0 p-[6rem] mr-[6rem] border-r-[0.1rem] border-borderColor"
        >
          <div class="border-b-[0.1rem] border-borderColor pb-[3rem]">
            <div class="text-base text-grayLight font-[400] uppercase">
              Client
            </div>
            <div class="text-sm text-grayDark font-[700]">
              {{ workData.name }}
            </div>
          </div>
          <div class="pt-[3rem]">
            <div class="text-base text-grayLight font-[400] uppercase">
              DESCRIPTION
            </div>
            <div class="text-base text-gray font-[500] mt-[0.5rem]">
              {{ workData.desc }}
            </div>
          </div>
        </div>
        <div class="w-full p-[6rem] pl-0">
          <div>
            <div class="text-base text-grayLight font-[400] uppercase">
              Services
            </div>
            <div
              class="w-max mt-[1rem] text-primary text-xs bg-primaryLight rounded-md px-[3rem] py-[0.5rem] ease-in-out duration-300"
            >
              {{ workData.tag }}
            </div>
          </div>
          <div class="mt-[3rem] border-b-[0.1rem] border-borderColor pb-[5rem]">
            <div class="text-base text-grayLight font-[400] uppercase">
              USED TECHNOLOGIES
            </div>
            <div
              class="flex gap-[2.25rem] ease-in-out duration-300 flex-wrap mt-[1rem]"
            >
              <div
                v-for="(item, index) in workData.tech"
                :key="index"
                class="text-xs text-gray bg-grayBg rounded-md py-[0.5rem] px-[2rem] whitespace-nowrap"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center mt-[3rem]">
            <div>
              <div class="text-base text-grayLight font-[400] uppercase">
                Release Date
              </div>
              <div class="text-sm text-grayDark font-[700]">
                {{ workData.release_date }}
              </div>
            </div>
            <div class="text-right">
              <div class="text-base text-grayLight font-[400] uppercase">
                MADE IN THIS COMPANY
              </div>
              <div class="text-sm text-grayDark font-[700]">
                {{ workData.madeIn }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      v-if="workData.responsive !== null"
      class="pt-[10rem] overflow-hidden"
    >
      <div class="container">
        <sectionTitle name="Responsive Screens" />
        <div
          ref="responsiveSlider"
          class="swiper js-responsive-slider overflow-initial"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in workData.responsive"
              :key="index"
              class="swiper-slide w-max"
            >
              <div class="rounded-[1.5rem] overflow-hidden">
                <div
                  class="py-[1rem] px-[3rem] bg-grayBgLight flex gap-[3rem] items-center"
                  :class="{
                    'min-w-[120rem] w-full': item.type == 'desktop',
                    'w-[99rem]': item.type == 'tablet',
                    'w-[43rem]': item.type == 'mobile',
                  }"
                >
                  <div v-if="item.type == 'desktop'" class="flex gap-[1.5rem]">
                    <span
                      class="w-[1.8rem] h-[1.8rem] bg-borderColor rounded-full"
                    >
                    </span>
                    <span
                      class="w-[1.8rem] h-[1.8rem] bg-borderColor rounded-full"
                    >
                    </span>
                    <span
                      class="w-[1.8rem] h-[1.8rem] bg-borderColor rounded-full"
                    >
                    </span>
                  </div>
                  <div
                    class="h-[4.8rem] rounded-[2.5rem] bg-grayBg px-[3rem] py-[0.4rem] w-full flex items-center"
                  >
                    <div class="text-base font-[500] text-grayLight">
                      {{ workData.href }}
                    </div>
                  </div>
                </div>
                <div class="h-[59rem] w-full">
                  <img class="w-full h-full" :src="item.image" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-[5rem] mt-[42rem] mb-[10rem] relative h-[35rem] w-[calc(100%-(100vh-1621px/2))] rounded-tr-[5rem] bg-grayBgLight"
    >
      <div class="container">
        <div class="flex items-center justify-between">
          <div>
            <sectionTitle
              class="text-[7.8rem] max-w-[17rem]"
              name="See All Works"
            />
            <br />
            <v-button
              :link="
                nextData
                  ? `/work-detail/${nextData.slug}`
                  : `/work-detail/${workDatas[0].slug}`
              "
              icon="iconArrow"
              type="default"
            >
              Works
            </v-button>
          </div>
          <div class="flex gap-[4rem]">
            <div
              class="flex flex-col items-end justify-end pr-[3rem] relative after:absolute after:top-[-2rem] after:right-0 after:w-[0.6rem] after:h-[calc(100%+4rem)] after:bg-primary after:rounded-tl-[0.5rem] after:rounded-bl-[0.5rem]"
            >
              <div class="text-base font-[500] text-grayLight">NEXT WORK</div>
              <div class="mt-[5rem] text-lg text-grayDark font-[700]">
                {{ nextData ? nextData.name : workDatas[0].name }}
              </div>
              <div class="text-base font-[600] text-gray">
                {{ nextData ? nextData.tag : workDatas[0].tag }}
              </div>
            </div>
            <div class="w-[43rem] relative pr-[10rem]">
              <img
                class="absolute bottom-[-10rem] right-0 w-full h-[66.5rem]"
                :src="nextData ? nextData.cover_1 : workDatas[0].cover_1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper } from 'swiper'
import AppSubheader from '@/components/common/appSubheader.vue'
import SectionTitle from '@/components/sectionTitle.vue'
export default {
  components: {
    AppSubheader,
    SectionTitle,
  },
  data() {
    return {
      workData: [],
      workDatas: [],
      slug: this.$route.params.workDetail,
      bcItems: [{ name: 'Home' }, { name: 'Works' }],
      nextId: null,
      nextData: [],
    }
  },
  async mounted() {
    await this.$nextTick()
    // Fetching Data
    this.$store.commit('updateHeaderDark', true)
    this.workDatas = await this.$store.state.works
    this.workDatas.forEach((e, i) => {
      if (this.slug === e.slug) {
        this.nextId = i + 1
      }
    })
    this.nextData = this.workDatas[this.nextId]

    const data = this.workDatas.find((item) => {
      return item.slug === this.slug
    })
    this.workData = data
    // Swiper
    Swiper.use()
    const responsiveSwiper = new Swiper(this.$refs.responsiveSlider, {
      slidesPerView: 'auto',
      spaceBetween: 40,
      centeredSlides: true,
      speed: 900,
    })
    responsiveSwiper.on('slideChange', function () {})
  },
  methods: {},
}
</script>
