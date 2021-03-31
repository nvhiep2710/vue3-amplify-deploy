import { createStore } from 'vuex'
import todo from './modules/todo'
import auth from './modules/auth.js'

export default createStore({
  modules: {
    auth,
    todo,
  },
})
