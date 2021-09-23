import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { TOTAL_LIST } from '@/assets/constants'

export default function todoRepositories() {
  const store = useStore()
  const page = ref(1)
  const count = ref(TOTAL_LIST)

  const list = computed(() => store.state.todo.list.todos)
  const loading = computed(() => store.state.todo.list.loading)

  const getTodoRepositories = async ({ page = 1 }) => {
    await store.dispatch('todo/list/doGetTodoList', { page })
  }

  onMounted(getTodoRepositories(page))

  return {
    count,
    page,
    list,
    loading,
    getTodoRepositories,
  }
}
