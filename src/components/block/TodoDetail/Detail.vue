<template lang="pug">
.detail
  h3 Todo Detail
  p Id : {{ todo.id }}
  p Title : {{ todo.title }}
  p Status : {{ status }}
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  async setup() {
    const route = useRoute()
    const id = route.params.id
    const store = useStore()

    const todo = await store.dispatch('todo/detail/doGetTodoDetail', id)
    const status = computed(() => (todo.completed ? 'Act9ve' : 'Inactive'))

    return { todo, status }
  },
}
</script>
<style lang="scss" scoped>
.detail {
  margin-top: 20px;
}
</style>
