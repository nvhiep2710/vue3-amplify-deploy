<template lang="pug">
Teleport(to="#teleport") Hello word from compoent
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>
