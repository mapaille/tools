<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/base64">Base64</RouterLink>
    <RouterLink to="/guid">Guid</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: black;
  padding: 1rem;

  a {
    margin-right: 0.5rem;
    color: white;
    text-decoration: none;
  }

  a:last-child {
    margin-right: 0;
  }
}
</style>
