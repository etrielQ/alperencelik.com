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

      <Splide :options="options">
        <SplideSlide v-for="n in 4" :key="n">
          <img
            class="w-full h-52 object-cover"
            src="https://images.unsplash.com/photo-1638204958375-4824be216720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
            alt="Sample 1"
          />
        </SplideSlide>
      </Splide>
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
      options: {
        type: 'loop',
        width: '100%',
        perPage: 3,
        gap: '1rem',
      },
    }
  },
}
</script>
