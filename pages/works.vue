<template>
  <div>
    <appSubheader />
    <div class="container my-[10rem] grid grid-cols-2 gap-[10rem]">
      <work-card />
      <work-card />
      <work-card />
      <work-card />
      <work-card />
    </div>
  </div>
</template>

<script>
import AppSubheader from '@/components/common/appSubheader.vue'
import WorkCard from '~/components/workCard.vue'
export default {
  components: {
    AppSubheader,
    WorkCard,
  },
}
</script>
