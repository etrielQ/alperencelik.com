<template>
  <div>
    <div class="py-[10rem] container">
      <div
        class="grid grid-cols-2 g-[4rem] h-[69rem] rounded-[5rem] bg-gradient-to-b from-grayBgLight"
      >
        <div class="relative">
          <img
            class="absolute bottom-0 left-0"
            src="~/static/images/contact-seperator-img.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center">
          <section-title name="Get in Touch" />
          <div
            class="font-secondary text-3xl text-grayDark font-[400] h-[9.2rem] leading-[5.6rem] mt-[5rem]"
          >
            let's create something
            <br />
            <span class="text-primary">fantastic</span> with me
          </div>
          <div class="text-sm text-grayLight font-[300] mt-[3rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <a
            href="#0"
            class="font-secondary text-primary text-[6.8rem] h-[4.6rem] leading-[7.6rem] mt-[3rem]"
          >
            info@alperencelik.com
          </a>
          <div class="flex items-center gap-[5rem] mt-[4rem]">
            <v-button type="only-i" icon="iconGithub" link="#0"> </v-button>
            <v-button type="only-i" icon="iconBehance" link="#0"> </v-button>
            <v-button type="only-i" icon="iconLinkedin" link="#0"> </v-button>
            <v-button type="only-i" icon="iconInstagram" link="#0"> </v-button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-grayBgLight">
      <div class="container flex items-center justify-between py-[7rem]">
        <img
          class="max-w-[28rem] object-contain"
          src="~/static/images/alperencelik-logo.svg"
          alt=""
        />
        <div class="text-sm text-grayLight">
          © alperencelik.com | All rights reserved.
        </div>
        <nuxt-link
          to="#0"
          class="text-base text-gray font-[600] border-b-[0.1rem] border-borderColor"
          >Cookie Policy</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
