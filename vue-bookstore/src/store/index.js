import Vue from 'vue'
import Vuex from 'vuex'
import books from '@/modules/books'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: debug,
  modules:{books: books}
})
