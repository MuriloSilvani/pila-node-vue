import api from '@/services/api'

export default {
  state: {
    categories: [],
    idCategory: null,
    category: null
  },
  mutations: {
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    },
    SET_CATEGORY (state, payload) {
      state.category = payload
    }
  },
  actions: {
    async indexCategories ({ commit }) {
      try {
        const response = await api.get('/categories')

        commit('SET_CATEGORIES', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async storeCategories ({ dispatch, getters }) {
      try {
        await api.post('/categories', getters.getCategory)

        dispatch('indexCategories')
      } catch (error) {
        console.log(error)
      }
    },
    async showCategories ({ commit, getters }) {
      try {
        const response = await api.get(`/categories/${getters.getIdCategory}`)

        commit('SET_CATEGORY', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async updateCategories ({ dispatch, getters }) {
      try {
        await api.put(`/categories/${getters.getIdCategory}`, getters.getCategory)

        dispatch('indexCategories')
      } catch (error) {
        console.log(error)
      }
    },
    async destroyCategories ({ dispatch, getters }) {
      try {
        await api.delete(`/categories/${getters.getIdCategory}`)

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
    }
  }
}
