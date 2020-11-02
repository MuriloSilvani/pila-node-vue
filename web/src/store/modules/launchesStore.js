import api from '@/services/api'
import router from '@/router'

export default {
  state: {
    launches: [],
    idLaunch: null,
    launch: null,
    loadingLaunch: false
  },
  mutations: {
    SET_LAUNCHES (state, payload) {
      state.launches = payload
    },
    SET_LAUNCH (state, payload) {
      state.launch = payload
    },
    SET_LOADING_LAUNCH (state, payload) {
      state.loadingLaunch = payload
    }
  },
  actions: {
    async indexLaunches ({ commit, getters }) {
      if (getters.isLoadingLaunch) {
        return
      }
      commit('SET_LOADING_LAUNCH', true)

      try {
        const response = await api.get('/launches')

        commit('SET_LAUNCHES', response.data)
        commit('SET_LOADING_LAUNCH', false)
      } catch (error) {
        console.log(error)
      }
    },
    async storeLaunches ({ commit, dispatch, getters }, newLaunch) {
      if (getters.isLoadingLaunch) {
        return
      }
      commit('SET_LOADING_LAUNCH', true)

      try {
        await api.post('/launches', newLaunch)

        commit('SET_LOADING_LAUNCH', false)
        dispatch('indexLaunches')
        router.push('/launches')
      } catch (error) {
        console.log(error)
      }
    },
    async showLaunches ({ commit, getters }) {
      if (getters.isLoadingLaunch) {
        return
      }
      commit('SET_LOADING_LAUNCH', true)

      try {
        const response = await api.get(`/launches/${getters.getIdLaunch}`)

        commit('SET_LAUNCH', response.data)
        commit('SET_LOADING_LAUNCH', false)
      } catch (error) {
        console.log(error)
      }
    },
    async updateLaunches ({ commit, dispatch, getters }) {
      if (getters.isLoadingLaunch) {
        return
      }
      commit('SET_LOADING_LAUNCH', true)

      try {
        await api.put(`/launches/${getters.getIdLaunch}`, getters.getLaunch)

        commit('SET_LOADING_LAUNCH', false)
        dispatch('indexLaunches')
      } catch (error) {
        console.log(error)
      }
    },
    async destroyLaunches ({ commit, dispatch, getters }, _id) {
      if (getters.isLoadingLaunch) {
        return
      }
      commit('SET_LOADING_LAUNCH', true)
      try {
        await api.delete(`/launches/${_id}`)

        commit('SET_LOADING_LAUNCH', false)
        dispatch('indexLaunches')
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getLaunches (state) {
      return state.launches
    },
    getIdLaunch (state) {
      return state.idLaunch
    },
    getLaunch (state) {
      return state.launch
    },
    isLoadingLaunch (state) {
      return state.loadingLaunch
    }
  }
}
