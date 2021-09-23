<template lang="pug">
.list
  .loading(v-if='loading') loading...
  template(v-else)
    .item(v-for='item in list')
      TodoItem(:item='item', :key='item.id')
  template(v-if='list.length > 0')
    Pagination(
      :count='count',
      :page='page',
      @page-change='changePage'
    )
</template>
<script>
import todoRepositories from '@/composables/todoRepositories'
import TodoItem from './TodoItem.vue'
import Pagination from '@/components/base/Pagination'

export default {
  name: 'TodoList',
  components: { TodoItem, Pagination },
  setup() {
    const {
      count,
      page,
      list,
      loading,
      getTodoRepositories,
    } = todoRepositories()

    const changePage = async pageNumber => {
      page.value = pageNumber
      await getTodoRepositories({ page: pageNumber })
    }

    return { loading, list, count, page, changePage }
  },
}
</script>
<style lang="scss" scoped>
.list {
  padding: 20px;
  text-align: left;
}
.loading {
  text-align: center;
  min-height: 300px;
}
</style>
