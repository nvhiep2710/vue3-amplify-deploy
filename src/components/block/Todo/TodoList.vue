<template lang="pug">
.list
  .loading(v-if="loading") loading...
  template(v-else)
    .item(v-for='item in repositories')
      RouterLink(:to="{ name: 'TodoDetail', params: { id: item.id }}") {{ `${item.id}. ${item.title}` }}
</template>
<script>
import todoRepositories from '@/composables/todoRepositories'

export default {
  setup() {
    // const id = context.root.$route.params.id

    const { repositories, loading } = todoRepositories()

    return { loading, repositories }
  },
}
</script>
<style lang="scss" scoped>
.list {
  padding: 20px;
  text-align: left;
}
</style>
