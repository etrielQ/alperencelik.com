<template>
  <button class="bg-primary p-2">
    <span v-if="icon" class="">{{ icon }}</span>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
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
