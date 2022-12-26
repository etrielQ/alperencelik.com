<template>
  <div class="bg-grayBg">
    <AppHeader />
    <main>
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
