<template>
  <div
    class="overflow-hidden max-w-[70rem] h-[60rem] relative border-[0.1rem] rounded-[2.5rem] border-borderColor bg-grayBgLight after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:ease-in-out after:duration-300 after:bg-gradient-to-t after:from-fromGradient after:z-[2] group hover:after:to-toGradient ease-in-out duration-300"
  >
    <div class="absolute top-0 left-0 w-full h-full z-[1]">
      <img
        class="absolute top-[10rem] left-[4rem] h-full z-[2] max-w-[38rem]"
        :src="workData.cover_1"
        alt=""
      />
      <img
        class="absolute top-0 right-[4rem] z-0 max-w-[38rem]"
        :src="workData.cover_2"
        alt=""
      />
    </div>
    <div
      v-if="workData.awarded"
      class="absolute top-0 right-0 w-[8rem] h-[8rem] rounded-tr-[2.4rem] bg-[#c2a556] z-[3] flex items-center justify-center"
    >
      <svg-icon class="text-[3.4rem] text-white" name="iconAward" />
    </div>
    <div class="absolute left-0 bottom-0 z-[3] p-[4rem] w-full">
      <div class="flex items-center justify-between group-hover:text-primary">
        <div
          class="font-secondary uppercase text-xl text-grayDark h-[4.6rem] leading-[7.5rem] group-hover:text-primary ease-in-out duration-300"
        >
          {{ workData.name }}
        </div>
        <div class="text-gray text-base flex items-center">
          <v-button
            class="group-hover:text-primary"
            type="alternate"
            icon="iconArrow"
            :link="
              'work-detail/' + workData.name.toLowerCase().replace(' ', '-')
            "
          >
            Project Detail
          </v-button>
        </div>
      </div>
      <div
        class="flex gap-[2.25rem] mt-0 h-0 max-h-0 opacity-0 group-hover:h-full group-hover:max-h-[9.29rem] group-hover:mt-[3rem] group-hover:opacity-100 ease-in-out duration-300 flex-wrap"
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
    <div
      class="absolute left-[4rem] top-[4rem] z-[5] text-primary text-xs bg-primaryLight rounded-md px-[3rem] py-[0.5rem] opacity-0 group-hover:opacity-100 ease-in-out duration-300"
    >
      {{ workData.tag }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    workData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
