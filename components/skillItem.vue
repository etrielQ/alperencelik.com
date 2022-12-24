<template>
  <div
    class="flex justify-between items-center border-b-2 border-borderColor py-[1.5rem] last:border-0"
  >
    <div class="text-base text-grayLight">
      {{ text }}
    </div>
    <div class="flex items-center gap-[1rem]">
      <div
        v-for="item in progress"
        :key="item + 'progress'"
        class="rounded-full bg-primary w-[1.6rem] h-[1.6rem]"
      ></div>
      <div
        v-for="item in emptyProgressItem"
        :key="item + 'emptyProgress'"
        class="rounded-full bg-primaryLight w-[1.6rem] h-[1.6rem]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    progress: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      emptyProgressItem: null,
    }
  },
  mounted() {
    this.emptyProgressItem = 10 - this.progress
  },
}
</script>
