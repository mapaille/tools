<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/base64">BASE64</RouterLink>
    <RouterLink to="/guid">GUID</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: black;
  display: flex;

  a {
    padding: 1rem;
    font-size: 1rem;
    color: white;
    text-decoration: none;

    &:hover {
      background-color: #333;
    }
  }
}
</style>
