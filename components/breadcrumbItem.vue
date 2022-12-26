<template>
  <div
    class="text-base"
    :class="color + ' ' + (first == false ? 'ml-[2rem]' : '')"
  >
    <slot />
    <svg-icon v-if="icon" class="ml-[2rem]" :name="icon" />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    first: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
