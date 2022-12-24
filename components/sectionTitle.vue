<template>
  <h3
    ref="sectionTitle"
    class="text-[5.8rem] text-grayDark font-secondary font-[400] mb-[-1rem] leading-[1.1em]"
  >
    {{ name }}
  </h3>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  async mounted() {
    await this.$nextTick()
    const str = this.$refs.sectionTitle
    const words = str.innerHTML.split(' ')
    const lastWord = str.innerHTML.split(' ').pop()
    str.innerHTML = ''
    words.forEach((element) => {
      if (element === lastWord) {
        str.innerHTML += `<span class="text-primary">${element}</span>`
      } else {
        str.innerHTML += `<span>${element} </span>`
      }
    })
  },
}
</script>
