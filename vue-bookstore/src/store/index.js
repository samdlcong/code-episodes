import Vue from 'vue'
import Vuex from 'vuex'
// import books from '@/modules/books'
import HomePageData from '../fixtures/home/home.json'
var slider_images = require.context('../fixtures/sliders', false, /\.(png|jpg|gif|svg)$/)
var cover_images = require.context('../fixtures/covers', false, /\.(png|jpg|gif|svg)$/)

HomePageData.slides.forEach((x) => {
  x.img_url = slider_images('./' + x.img_url)
})

HomePageData.latestUpdated.forEach((x) => {
  x.img_url = cover_images('./' + x.img_url)
})

HomePageData.recommended.forEach((x) => {
  x.img_url = cover_images('./' + x.img_url)
})

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
const state = {
  announcement: 'ssss',
  slides: [],
  latestUpdated: [],
  recommended: []
}

const getters = {
  announcement: state => state.announcement,
  slides: state => state.slides,
  latestUpdated: state => state.latestUpdated,
  recommended: state => state.recommended
}

const mutations = {
  announcement: (state, text) => {
    state.announcement = text
  },
  slides: state => {
    state.slides = HomePageData.slides
  },
  latestUpdated: state => {
    state.latestUpdated = HomePageData.latestUpdated
  },
  recommended: state => {
    state.recommended = HomePageData.recommended
  }
}

const actions = {
  announcement: (state, text) => {
    state.commit('announcement', text)
  },
  slides: state => {
    state.commit('slides')
  },
  latestUpdated: state => {
    state.commit('latestUpdated')
  },
  recommended: state => {
    state.commit('recommended')
  }
}

export default new Vuex.Store({
  strict: debug,
  state,
  getters,
  mutations,
  actions
})
