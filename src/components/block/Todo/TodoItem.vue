<template lang="pug">
RouterLink(:to="{ name: 'TodoDetail', params: { id: item.id }}") {{ `${item.id}. ${item.title}` }}
</template>
<script>
import { toRefs, reactive } from 'vue'

export default {
  props: {
    item: { type: Object, default: () => ({}) },
  },
  setup(props) {
    const { item } = reactive(toRefs(props))
    return item
  },
}
</script>
<style lang="scss" scoped>
.list {
  padding: 20px;
  text-align: left;
}
</style>
