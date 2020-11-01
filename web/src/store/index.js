import Vue from 'vue'
import Vuex from 'vuex'

import categoriesStore from '@/store/modules/categoriesStore'
import launchesStore from '@/store/modules/launchesStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categoriesStore,
    launchesStore
  }
})
