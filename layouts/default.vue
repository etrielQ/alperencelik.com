<template>
  <div class="bg-grayBg">
    <AppHeader />
    <main
      :style="{
        'padding-top': $store.getters.updateHeaderHeight + 'rem',
      }"
    >
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/common/appHeader.vue'
import AppFooter from '@/components/common/appFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
