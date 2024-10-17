<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink class="navbar-brand" to="/">Home</RouterLink>
    <RouterLink class="nav-link" to="/guid">Guid</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  padding: 1rem;

  a {
    margin-right: 0.5rem;
  }

  a:last-child {
    margin-right: 0;
  }
}
</style>
