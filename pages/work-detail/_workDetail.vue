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
    <section class="py-[10rem]">
      <div class="container">
        <sectionTitle name="Responsive Screens" />
        <div class="swiper js-responsive-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="work-slider__item work-slider__item--mobile">
                <div class="work-slider__item-top"></div>
              </div>
              <div class="work-slider__item work-slider__item--tablet"></div>
              <div class="work-slider__item work-slider__item--desktop"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
    }
  },
  async mounted() {
    this.workDatas = await this.$store.state.works
    const data = this.workDatas.find(
      (item) => item.name.toLowerCase().replace(' ', '-') === this.slug
    )
    this.workData = data
  },
  methods: {},
}
</script>
