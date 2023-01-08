<template>
  <div
    :style="{
      'padding-top': $store.getters.updateHeaderHeight + 'rem',
    }"
  >
    <indexHero />
    <indexAbout />
    <!-- <indexHowIWork />  -->
    <indexWorks />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('updateHeaderDark', false)
  },
}
</script>
