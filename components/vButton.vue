<template>
  <nuxt-link
    :to="link"
    class="px-[3.2rem] py-[1rem] ease-in-out duration-300"
    :class="{
      'bg-grayBgLight text-primary rounded-[3rem] shadow-dark hover:bg-primary hover:text-white hover:shadow-none':
        type === 'default',
    }"
  >
    <span class="font-primary font-semibold">
      <slot />
    </span>
    <span v-if="icon" class="">{{ icon }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '/',
    },
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>
