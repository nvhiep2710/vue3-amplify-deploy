import list from './modules/list'
import update from './modules/update'
import detail from './modules/detail'
/** @type {import('vuex').Module} */

export default {
  namespaced: true,
  modules: { list, detail, update },
}
