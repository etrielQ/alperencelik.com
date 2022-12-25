<template>
  <div
    class="overflow-hidden max-w-[70rem] h-[60rem] relative border-[0.1rem] rounded-[2.5rem] border-borderColor bg-grayBgLight after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-fromGradient after:z-[2] group hover:after:to-toGradient transition-all"
  >
    <div class="absolute top-0 left-0 w-full h-full z-[1]">
      <img
        class="absolute top-[10rem] left-[4rem] h-full z-[2]"
        src="~/static/images/chace-banner-1.png"
        alt=""
      />
      <img
        class="absolute top-0 right-[4rem] z-0"
        src="~/static/images/chace-banner-2.png"
        alt=""
      />
    </div>
    <div class="absolute left-0 bottom-0 z-[3] p-[4rem] w-full">
      <div class="flex items-center justify-between group-hover:text-primary">
        <div
          class="font-secondary uppercase text-xl text-grayDark h-[4.6rem] leading-[7.5rem] group-hover:text-primary transition-all"
        >
          Chace People
        </div>
        <div class="text-gray text-base flex items-center">
          <div class="mr-[1rem] group-hover:text-primary transition-all">
            Project Detail
          </div>
          <svg-icon
            name="iconArrow"
            class="group-hover:text-primary transition-all"
          />
        </div>
      </div>
      <div
        class="flex gap-[2.25rem] mt-0 h-0 opacity-0 group-hover:h-[4rem] group-hover:mt-[3rem] group-hover:opacity-100 transition-all"
      >
        <div
          class="text-xs text-gray bg-grayBg rounded-md py-[0.5rem] px-[2rem]"
        >
          Scss
        </div>
        <div
          class="text-xs text-gray bg-grayBg rounded-md py-[0.5rem] px-[2rem]"
        >
          Scss
        </div>
        <div
          class="text-xs text-gray bg-grayBg rounded-md py-[0.5rem] px-[2rem]"
        >
          Scss
        </div>
      </div>
    </div>
    <div
      class="absolute left-[4rem] top-[4rem] z-[5] text-primary text-xs bg-primaryLight rounded-md px-[3rem] py-[0.5rem] opacity-0 group-hover:opacity-100 transition-all"
    >
      Frontend Development
    </div>
  </div>
</template>
