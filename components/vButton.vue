<template>
  <nuxt-link
    :to="link"
    class="px-[3.2rem] py-[1rem] ease-in-out duration-300"
    :class="{
      'flex items-center w-max bg-grayBgLight text-primary rounded-[3rem] shadow-dark hover:bg-primary hover:text-white hover:shadow-none':
        type === 'default',
      'flex items-center text-gray text-base hover:text-primary items-center':
        type === 'alternate',
      'rounded-full px-[0] py-[0] flex items-center justify-center border-[0.1rem] border-borderColor bg-grayBgLight group w-[5rem] h-[5rem] hover:border-primary':
        type === 'only-i',
    }"
  >
    <span :class="{ 'font-primary font-semibold': type === 'default' }">
      <slot />
    </span>
    <span
      v-if="icon"
      class="ml-[2rem] flex items-center"
      :class="{
        'text-base  text-gray ml-0 group-hover:text-primary  ease-in-out duration-300':
          type === 'only-i',
      }"
    >
      <svg-icon :name="icon" />
    </span>
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
