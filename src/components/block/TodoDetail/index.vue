<template lang="pug">
.detail
  h1 Todo id {{ id }}
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    return { id: route.params.id }
  },
}
</script>
