<script setup lang="ts">
import HeaderView from './components/HeaderView.vue';
import MainView from './components/MainView.vue';
import NavView from './components/NavView.vue';
</script>

<template>
  <HeaderView />
  <NavView />
  <MainView />
</template>

<style>

* {
    border: none;
    text-decoration: none;
}

body {
    margin: 0;
}

button, input {
    font-size: 1rem;
    padding: 0.5rem;

    &:hover {
        background-color: rgb(217, 231, 248);
    }
}

</style>
