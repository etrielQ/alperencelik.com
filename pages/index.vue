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
  name: 'IndexPage',
}
</script>
