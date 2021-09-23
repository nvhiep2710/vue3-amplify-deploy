<template lang="pug">
Suspense
  template(#default)
    TodoDetail
  template(#fallback)
    | suspense loading...
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    TodoDetail: defineAsyncComponent(() => import('./Detail.vue')),
  },
}
</script>
