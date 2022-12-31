export const state = () => ({
  headerHeight: 0,
  routes: [
    {
      id: 1,
      link: '/',
      name: 'Platforms',
    },
    {
      id: 2,
      link: '/',
      name: 'About',
    },
    {
      id: 3,
      link: '/',
      name: 'How I Work',
    },
    {
      id: 4,
      link: '/',
      name: 'Works',
    },
  ],
  works: [
    {
      name: 'Chace People',
      href: 'https://chacepeople.com',
      banner: '/_nuxt/static/images/work-chace.png',
      cover_1: '/_nuxt/static/images/chace-banner-1.png',
      cover_2: '/_nuxt/static/images/chace-banner-2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      awarded: true,
      tech: [
        {
          id: 0,
          name: 'Pug',
        },
        {
          id: 1,
          name: 'SCSS',
        },
        {
          id: 2,
          name: 'Vanilla Javascript',
        },
        {
          id: 3,
          name: 'GSAP',
        },
        {
          id: 4,
          name: 'PHP/Laravel',
        },
      ],
      release_date: 'MARCH 2022',
      madeIn: 'BABEL AGENCY',
      responsive: [
        { type: 'mobile', image: '' },
        { type: 'tablet', image: '' },
      ],
      tag: 'Frontend Development',
    },
    {
      name: 'Madamnica',
      href: 'https://madamnica.babelcloud.net',
      banner: '/_nuxt/static/images/work-madamnica.png',
      cover_1: '/_nuxt/static/images/madamnica-banner-1.png',
      cover_2: '/_nuxt/static/images/madamnica-banner-2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      awarded: false,
      tech: [
        {
          id: 0,
          name: 'Pug',
        },
        {
          id: 1,
          name: 'SCSS',
        },
        {
          id: 2,
          name: 'Vanilla Javascript',
        },
        {
          id: 3,
          name: 'GSAP',
        },
      ],
      release_date: 'MARCH 2021',
      madeIn: 'BABEL AGENCY',
      responsive: [
        { type: 'mobile', image: '' },
        { type: 'tablet', image: '' },
      ],
      tag: 'Frontend Development',
    },
  ],
})

export const getters = {
  updateHeaderHeight(state) {
    return state.headerHeight / 10
  },
}

export const mutations = {
  getHeaderHeight(state, commit) {
    state.headerHeight = commit
  },
}
