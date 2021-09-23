<template lang="pug">
#main.container
  Header
  RouterView
  //- HelloWorld
</template>

<script>
import Header from '@/layouts/Header'
// import HelloWorld from '@/components/base/HelloWorld'

export default {
  name: 'App',
  components: { Header },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
