import HomePageData from '../fixtures/home/home.json'

export default {
  state: {
    announcement: '',
    slides: [],
    latestUpdated: [],
    recommended: []
    // announcement: HomePageData.announcement,
    // slides: HomePageData.slides,
    // latestUpdated: HomePageData.latestUpdated,
    // recommended: HomePageData.recommended
  },
  actions: {
    getHomeData (context) {
      console.log('hehe')
      context.commit('getHomeDataInitial', HomePageData)
    }
  },
  mutations: {
    getHomeDataInitial (state, res) {
      state.announcement = res.announcement
      state.latestUpdated = res.latestUpdated
      state.slides = res.slides
      state.recommended = res.recommended
    }
  }
}