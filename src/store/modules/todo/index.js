import list from './modules/list'
import detail from './modules/detail'
/** @type {import('vuex').Module} */

export default {
  namespaced: true,
  modules: { list, detail },
}
