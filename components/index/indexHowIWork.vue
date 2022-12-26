<template>
  <div
    class="js-how-work py-[10rem] w-[300%] border-y-[0.1rem] border-borderColor h-[100vh] relative overflow-x-hidden bg-white after:content-[''] after:absolute after:top-[50%] after:left-0 after:w-[62rem] after:h-[62rem] after:rounded-full after:bg-primaryLight after:blur-[7.5rem] after:-translate-y-1/2 after:-translate-x-1/3"
    data-type="horizontal"
  >
    <div class="container">
      <div class="flex flex-col justify-center items-center">
        <section-title name="How I Work" />
        <p
          class="text-base text-grayLight font-[400] max-w-[54rem] text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <div class="scroll-content flex flex-wrap">
          <describe-card />
          <describe-card />
          <describe-card />
          <describe-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
export default {
  mounted() {
    // Section Pinning
    // console.log(document.querySelector('.js-how-work').offsetWidth)
    // const sections = gsap.utils.toArray('.scroll-content')
    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.js-how-work',
    //     pin: true,
    //     scrub: 1,
    //     // snap: 1 / (sections.length - 1),
    //     end: () => '+=' + document.querySelector('.js-how-work').offsetWidth,
    //     markers: true,
    //   },
    // })
  },
}
</script>
