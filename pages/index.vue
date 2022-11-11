<template>
  <div class="container">
    <p>test</p>
    <svg-icon name="iconPolygon" />
    <div class="container">
      <div class="grid">
        <div v-for="n in 6" :key="n" class="col">asd</div>
      </div>
      <div class="flex items-center">
        <Checkbox id="binary" v-model="checked" :binary="true" />
        <label for="binary" class="ml-2">{{ checked }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from 'primevue/checkbox'
export default {
  name: 'IndexPage',
  components: {
    Checkbox,
  },
  data() {
    return {
      checked: false,
    }
  },
}
</script>
