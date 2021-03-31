import axios from 'axios'

export default {
  state: {
    loading: false,
  },
  mutations: {
    LOADING: s => (s.loading = true),
    LOADED: s => (s.loading = false),
  },
  actions: {
    doGetTodoDetail: async ({ commit }, payload) => {
      commit('LOADING')
      try {
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${payload}`
        )
        return result
      } catch (e) {
        console.log(e)
      } finally {
        commit('LOADED')
      }
    },
  },
}
