<script setup lang="ts">
import HeaderView from "./components/HeaderView.vue";
import MainView from "./components/MainView.vue";
</script>

<template>
  <HeaderView />
  <MainView />
</template>

<style>
:root {
  --color-primary: black;
  --color-secondary: darkblue;
  --color-light: #f8f8f8;

  --layout-gap: 0.5rem;
}

body {
  margin: 0;
}

button {
  background-color: var(--color-primary);
  color: white;
  border-style: none;

  &:hover {
    background-color: var(--color-secondary);
  }
}

button,
input {
  font-size: 1rem;
  padding: 0.3rem;
}
</style>
