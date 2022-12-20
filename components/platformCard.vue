<template>
  <div
    class="h-full flex flex-col bg-grayBgLight border border-borderColor rounded-[0.8rem] self-stretch group transition-all"
  >
    <div
      class="flex h-[10rem] rounded-t-md p-5 items-center relative transition-all group-hover:color"
      :class="'group-hover:' + color"
    >
      <img
        class="transition-all absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:translate-x-[0] group-hover:left-[1.25rem]"
        :src="logo"
        alt=""
      />
      <a
        :href="link"
        class="text-xxs flex text-white items-center absolute top-[50%] right-[1.25rem] opacity-0 translate-y-[-50%] transition-all group-hover:opacity-100 group-hover:w-max"
      >
        <p class="mr-2">go to platform</p>
        <svg-icon name="iconArrow" />
      </a>
    </div>
    <div class="content py-5 mx-5">
      <p class="text-gray text-base font-[600] mb-2">Offers:</p>
      <div class="flex flex-wrap gap-5">
        <div
          v-for="tag in tags"
          :key="tag.id"
          class="px-5 bg-grayBg text-gray w-max rounded-md"
        >
          {{ tag.text }}
        </div>
      </div>
    </div>
    <div class="p-5 flex mt-auto border-t-2 border-borderColor">
      <div class="text-base text-grayDark font-[600] mr-4">Profile:</div>
      <div class="flex flex-wrap gap-4">
        <div v-for="item in profile" :key="item.id" class="flex items-center">
          <img class="rounded-full mr-3" :src="item.image" alt="" />
          <div class="text-xxs text-gray font-[500]">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: () => '',
    },
    color: {
      type: String,
      default: () => '',
    },
    link: {
      type: String,
      default: () => '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
    profile: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
