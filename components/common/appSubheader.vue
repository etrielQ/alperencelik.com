<template>
  <div class="relative overflow-hidden bg-primaryDark">
    <div class="absolute top-0 left-0 w-full h-full">
      <appSubheaderPattern />
    </div>
    <div class="container relative z-[1]">
      <!-- Subheader Visit Website  -->
      <div
        class="flex items-center pt-[22rem]"
        :class="workHref || workShare ? 'justify-between' : 'justify-center'"
      >
        <div class="flex flex-col">
          <div
            class="font-secondary text-primaryLight text-[9rem] h-[9rem] font-[400] uppercase"
          >
            {{ title }}
          </div>
          <div
            class="flex items-center"
            :class="workHref || workShare ? '' : 'justify-center'"
          >
            <breadcrumb-item
              color="text-primaryLight"
              :first="index == 0 ? true : false"
              icon="iconArrow"
              v-for="(bc, index) in bcItem"
              :key="index"
            >
              {{ bc.name }}
            </breadcrumb-item>
            <breadcrumb-item color="text-primary" :first="false">
              {{ title }}
            </breadcrumb-item>
          </div>
        </div>
        <div
          v-if="workShare"
          class="flex items-center px-[5rem] py-[3.5rem] bg-primaryDarken rounded-[1rem]"
        >
          <a target="_blank" :href="workHref" class="flex items-center">
            <div class="text-base text-primaryLight font-[600]">
              Visit Website
            </div>
            <svg-icon
              class="rotate-[-45deg] text-primaryLight ml-[1rem]"
              name="iconArrow"
            />
          </a>

          <div
            v-if="workHref"
            class="w-[0.1rem] h-[3.4rem] bg-primaryLight mx-[4rem]"
          ></div>
          <a v-if="workHref" href="#0">
            <svg-icon name="iconShare" />
          </a>
        </div>
      </div>

      <!-- Subheader Image -->
      <div
        v-if="image"
        class="mt-[7.5rem] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-primaryDark after:z-[1]"
      >
        <img class="h-[60rem] w-full" :src="image" alt="" />
      </div>

      <!-- Filter Items -->
      <slot />
    </div>
  </div>
</template>

<script>
import appSubheaderPattern from '@/components/common/appSubheaderPattern.vue'
export default {
  components: {
    appSubheaderPattern,
  },
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    bcItem: {
      type: Array,
      default: () => [],
    },
    workHref: {
      type: String,
      default: '',
    },
    workShare: {
      type: String,
      default: '',
    },
    filterItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
