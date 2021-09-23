import axios from 'axios'
import { LIMIT_LIST } from '@/assets/constants'

export default {
  namespaced: true,
  state: {
    todos: [],
  },
  mutations: {
    SET_DATA: (s, p) => (s.todos = p),
    START: s => (s.loading = true),
    DONE: s => (s.loading = false),
  },
  actions: {
    doGetTodoList: async ({ commit }, { page }) => {
      commit('START')
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${LIMIT_LIST}`
        )
        commit('SET_DATA', data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('DONE')
      }
    },
  },
}
