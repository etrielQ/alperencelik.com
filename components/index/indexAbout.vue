<template>
  <div class="container">
    <div>
      <div class="grid grid-cols-2 gap-[10rem]">
        <div>
          <sectionTitle class="mb-2" name="Hi, I'm Alperen" />
          <div class="text-md text-grayDark font-[600]">
            Front-end Developer & UI/UX Designer
          </div>
          <p class="text-base text-grayLight mt-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div class="mt-[2rem]">
            <v-button link="#0" icon="" type="default">Read More</v-button>
          </div>
          <div
            class="pl-[2.5rem] mt-[3rem] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-[0.5rem] after:h-full after:rounded-tr-md after:rounded-br-md after:bg-primary"
          >
            <div class="text-sm font-[600] text-grayDark">Technologies</div>
            <div class="mt-[1.5rem]">
              <skill-item
                text="Css / Scss / Bootstrap / Tailwind / Vuetify"
                :progress="9"
              />
              <skill-item
                text="Vanilla Javascript / Jquery / Vue / Nuxt"
                :progress="8"
              />
              <skill-item text="Scrollmagic / Gsap / Anime.js" :progress="7" />
              <skill-item text="Webpack / Gulp / Vite" :progress="8" />
            </div>
            <div class="mt-[4rem]">
              <skill-item text="Css Bem Methodology" :progress="10" />
              <skill-item text="Adobe XD/ Figma" :progress="9" />
              <skill-item text="Adobe Photoshop / Illustrator" :progress="4" />
            </div>
          </div>
        </div>
        <div>
          <img
            class="max-h-[90rem] object-contain"
            src="~/static/images/about-image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
h
