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
