<template lang="pug">
nav
  RouterLink(to="/") Home
  RouterLink(to="/todo") Vue3
  RouterLink(to="/user/brian") User
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    &:not(:last-child) {
      padding-right: 20px;
    }
  }
}
</style>
