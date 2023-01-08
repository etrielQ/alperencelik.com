<template>
  <header
    ref="appHeader"
    class="fixed top-0 left-0 w-full h-auto z-30 ease-in-out duration-300"
    :class="isSticky ? 'top-[1rem]' : 'top-0'"
    @scroll="handleScroll"
  >
    <div
      class="container ease-in-out duration-300 rounded-[2rem]"
      :class="{
        'backdrop-blur-md py-[2rem] px-[2rem]': isSticky,
        'max-w-full py-[4rem]': !isSticky,
        'bg-primaryLight/30': !headerDark && isSticky,
        'bg-primaryDark/30': headerDark && isSticky,
      }"
    >
      <div class="flex items-center justify-between relative">
        <nuxt-link to="/" class="block w-[23rem]">
          <img
            v-if="headerDark == false"
            src="~/static/images/alperencelik-logo.svg"
            class="w-full object-contain"
            alt="alperencelik logo"
          />
          <img
            v-else
            src="~/static/images/alperencelik-logo-dark.svg"
            class="w-full object-contain"
            alt="alperencelik logo"
          />
        </nuxt-link>
        <ul
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center"
        >
          <li
            v-for="route in routeItems"
            :key="route.id"
            class="mr-[1.5rem] last:mr-0"
          >
            <nuxt-link
              :to="route.link"
              class="block font-semibold font-primary px-[2rem] py-[1rem] hover:bg-primaryLight hover:text-primary ease-in-out duration-300 rounded-[0.5rem]"
              :class="{
                'text-gray hover:bg-primaryLight ': headerDark === false,
                'text-primaryLight hover:bg-primaryDarken hover:text-primary':
                  headerDark == true,
              }"
              >{{ route.name }}
            </nuxt-link>
          </li>
        </ul>
        <div class="flex items-stretch justify-end shrink-0 relative">
          <v-button link="/" type="default">{{ $t('get-in-touch') }}</v-button>
          <div
            v-for="locale in availableLocales"
            :key="locale.code"
            v-click-outside="hideLanguageDropdown"
            class="group flex items-center ml-[2rem] px-[1.5rem] rounded-[0.8rem] cursor-pointer hover:bg-primaryLight ease-in-out duration-300"
            :class="{
              'is-language-active bg-primaryLight': isLanguageDropdown,
            }"
            @click="isLanguageDropdown = !isLanguageDropdown"
          >
            <img
              :src="locale.image"
              class="w-[2rem] h-[2rem] object-cover rounded-full mr-[1rem]"
              alt=""
            />
            <span
              class="font-primary font-medium text-gray group-hover:text-primary is-language-active:text-primary ease-in-out duration-300"
              :class="{ 'text-primaryLight': headerDark == true }"
              >{{ locale.name }}</span
            >
            <svg-icon
              name="iconPolygon"
              class="text-[0.8rem] text-grayLight ml-[0.7rem] group-hover:text-primary is-language-active:text-primary ease-in-out duration-300"
            ></svg-icon>
          </div>
          <transition name="fade">
            <ul
              v-if="isLanguageDropdown"
              class="bg-grayBgLight shadow-dark absolute top-full right-0 rounded-[1rem] p-[1rem] translate-y-[1rem]"
            >
              <li v-for="locale in locales" :key="locale.code">
                <nuxt-link
                  :to="switchLocalePath(locale.code)"
                  class="group flex items-center px-[2rem] py-[1rem] hover:bg-primaryLight ease-in-out duration-300 rounded-[0.5rem] font-primary"
                >
                  <img
                    :src="locale.image"
                    class="w-[2rem] h-[2rem] object-cover rounded-full mr-[1rem]"
                    alt=""
                  />
                  <span
                    class="font-medium text-grayDark group-hover:text-primary ease-in-out duration-300"
                    >{{ locale.name }}</span
                  >
                </nuxt-link>
              </li>
              <!-- <li>
                <nuxt-link
                  class="group flex items-center px-[2rem] py-[1rem] hover:bg-primaryLight ease-in-out duration-300 rounded-[0.5rem] font-primary"
                >
                  <img
                    src="/images/flag-tr.png"
                    class="w-[2rem] h-[2rem] object-cover rounded-full mr-[1rem]"
                    alt=""
                  />
                  <span
                    class="font-medium text-grayDark group-hover:text-primary ease-in-out duration-300"
                    >TUR</span
                  >
                </nuxt-link>
              </li> -->
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'AppHeader',
  directives: {
    ClickOutside,
  },

  data() {
    return {
      isLanguageDropdown: false,
      isSticky: false,
    }
  },

  computed: {
    routeItems() {
      return this.$store.state.routes
    },
    headerDark() {
      return this.$store.state.headerDark
    },
    locales() {
      return this.$i18n.locales
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
    const appHeaderHeight = this.$refs.appHeader.offsetHeight
    this.$store.commit('getHeaderHeight', appHeaderHeight)
  },

  methods: {
    hideLanguageDropdown() {
      this.isLanguageDropdown = false
    },
    handleScroll() {
      const appHeader = this.$refs.appHeader
      const sticky = appHeader.getBoundingClientRect().height / 2
      if (window.pageYOffset > sticky) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    },
  },
}
</script>
