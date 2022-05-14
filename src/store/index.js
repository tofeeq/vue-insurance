import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import insurance from './modules/insurance'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    insurance,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
