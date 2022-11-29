<template>
  <section class="relative h-[100rem]">
    <indexHeroPattern />
    <div class="container">
      <div
        class="max-w-[76rem] mx-auto pt-[10rem] relative before:bg-grayBg before:rounded-[100%] before:absolute before:-top-[15%] before:-left-[20%] before:w-[140%] before:h-[140%] before:shadow-hero"
      >
        <div class="flex flex-col items-center relative z-1">
          <span
            class="absolute top-[-4rem] left-1/2 -translate-x-1/2 bg-gradient-to-b from-primaryLight to-transparent w-[20rem] h-[20rem] rounded-full"
          ></span>
          <h1
            class="text-5xl font-secondary text-grayDark leading-[0.8] relative top-[2.5rem] text-center mb-[3rem]"
          >
            LET’S CREATE <span class="text-primary">INCREDIBLE</span> THINGS
          </h1>
          <p class="text-sm text-grayLight text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#0"
            class="group hover:bg-primary ease-in-out duration-300 hover:shadow-none flex items-center justify-center w-[7rem] h-[7rem] rounded-full shadow-dark bg-white mt-[5rem]"
          >
            <svg-icon
              name="iconPolygon"
              class="-rotate-90 relative left-[0.1rem] text-primary text-[2rem] group-hover:text-white ease-in-out duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
