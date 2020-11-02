import api from '@/services/api'
import router from '@/router'

export default {
  state: {
    categories: [],
    idCategory: null,
    category: null,
    loadingCategory: false
  },
  mutations: {
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    },
    SET_CATEGORY (state, payload) {
      state.category = payload
    },
    SET_LOADING_CATEGORY (state, payload) {
      state.loadingCategory = payload
    }
  },
  actions: {
    async indexCategories ({ commit, getters }) {
      if (getters.isLoadingCategory) {
        return
      }
      commit('SET_LOADING_CATEGORY', true)

      try {
        const response = await api.get('/categories')

        commit('SET_CATEGORIES', response.data)
        commit('SET_LOADING_CATEGORY', false)
      } catch (error) {
        console.log(error)
      }
    },
    async storeCategories ({ commit, dispatch, getters }, newCategory) {
      if (getters.isLoadingCategory) {
        return
      }
      commit('SET_LOADING_CATEGORY', true)

      try {
        await api.post('/categories', newCategory)

        commit('SET_LOADING_CATEGORY', false)
        dispatch('indexCategories')
        router.push('/categories')
      } catch (error) {
        console.log(error)
      }
    },
    async showCategories ({ commit, getters }) {
      if (getters.isLoadingCategory) {
        return
      }
      commit('SET_LOADING_CATEGORY', true)

      try {
        const response = await api.get(`/categories/${getters.getIdCategory}`)

        commit('SET_CATEGORY', response.data)
        commit('SET_LOADING_CATEGORY', false)
      } catch (error) {
        console.log(error)
      }
    },
    async updateCategories ({ commit, dispatch, getters }) {
      if (getters.isLoadingCategory) {
        return
      }
      commit('SET_LOADING_CATEGORY', true)

      try {
        await api.put(`/categories/${getters.getIdCategory}`, getters.getCategory)

        commit('SET_LOADING_CATEGORY', false)
        dispatch('indexCategories')
      } catch (error) {
        console.log(error)
      }
    },
    async destroyCategories ({ commit, dispatch, getters }, _id) {
      if (getters.isLoadingCategory) {
        return
      }
      commit('SET_LOADING_CATEGORY', true)
      try {
        await api.delete(`/categories/${_id}`)

        commit('SET_LOADING_CATEGORY', false)
        dispatch('indexCategories')
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getCategories (state) {
      return state.categories
    },
    getIdCategory (state) {
      return state.idCategory
    },
    getCategory (state) {
      return state.category
    },
    isLoadingCategory (state) {
      return state.loadingCategory
    }
  }
}
