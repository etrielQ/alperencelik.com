export const state = () => ({
  headerHeight: 0,
  headerDark: false,
  routes: [
    {
      id: 1,
      link: '/#platforms',
      name: 'Platforms',
    },
    {
      id: 2,
      link: '/#about',
      name: 'About',
    },
    {
      id: 3,
      link: '/',
      name: 'How I Work',
    },
    {
      id: 4,
      link: '/works',
      name: 'Works',
    },
  ],
  works: [
    {
      name: 'Chace People',
      slug: 'chace-people',
      href: 'https://chacepeople.com',
      banner: '/images/work-chace.png',
      cover_1: '/images/chace-banner-1.png',
      cover_2: '/images/chace-banner-2.png',
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
        { type: 'desktop', image: '/images/chace-desktop.png' },
        { type: 'tablet', image: '/images/chace-tablet.png' },
        { type: 'mobile', image: '/images/chace-mobile.png' },
      ],
      tag: 'Frontend Development',
    },
    {
      name: 'Madamnica',
      slug: 'madamnica',
      href: 'http://madamnica.babelcloud.net',
      banner: '/images/work-madamnica.png',
      cover_1: '/images/madamnica-banner-1.png',
      cover_2: '/images/madamnica-banner-2.png',
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
      responsive: null,
      tag: 'UI/UX Design',
    },
    {
      name: 'Chace People 2',
      slug: 'chace-people-2',
      href: 'https://chacepeople.com',
      banner: '/images/work-chace.png',
      cover_1: '/images/chace-banner-1.png',
      cover_2: '/images/chace-banner-2.png',
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
      name: 'Madamnica 2',
      slug: 'madamnica-2',
      href: 'http://madamnica.babelcloud.net',
      banner: '/images/work-madamnica.png',
      cover_1: '/images/madamnica-banner-1.png',
      cover_2: '/images/madamnica-banner-2.png',
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
      ],
      release_date: 'MARCH 2021',
      madeIn: 'BABEL AGENCY',
      responsive: [
        { type: 'mobile', image: '' },
        { type: 'tablet', image: '' },
      ],
      tag: 'UI/UX Design',
    },
  ],
})

export const getters = {
  updateHeaderHeight(state) {
    return state.headerHeight / 10
  },
  getHeaderDark(state) {
    return state.headerDark
  },
}

export const mutations = {
  getHeaderHeight(state, commit) {
    state.headerHeight = commit
  },
  updateHeaderDark(state, commit) {
    state.headerDark = commit
  },
}
