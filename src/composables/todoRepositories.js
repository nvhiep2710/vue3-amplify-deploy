import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default function todoRepositories() {
  const store = useStore()

  const repositories = computed(() => store.state.todo.list.todos)
  const loading = computed(() => store.state.todo.list.loading)

  const getTodoRepositories = async () => {
    await store.dispatch('todo/list/doGetTodoList')
  }

  onMounted(getTodoRepositories)

  return {
    repositories,
    loading,
  }
}
