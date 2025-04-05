<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/base64">BASE64</RouterLink>
    <RouterLink to="/guid">GUID</RouterLink>
    <RouterLink to="/sql">SQL</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  background-color: rgb(15, 155, 143);
  display: flex;

  a {
    padding: 1rem;
    font-size: 1rem;
    color: white;
    text-decoration: none;

    &:hover {
      background-color: #00000023;
    }
  }
}
</style>
