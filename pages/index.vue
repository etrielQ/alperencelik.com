<template>
  <div>
    <p>test</p>
    <svg-icon name="iconPolygon" />
    <div class="container">
      <div class="grid">
        <div class="col bg-black-alpha-40">asd</div>
        <div class="col">asd</div>
        <div class="col">asd</div>
      </div>
      <div class="field-checkbox">
        <Checkbox id="binary" v-model="checked" :binary="true" />
        <label for="binary">{{ checked }}</label>
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
