<script setup lang="ts">

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section>
      <h3>{{ props.title }}</h3>
      <slot></slot>
  </section>
</template>

<style scoped>
  section {
    padding: 0.5rem;
    background-color: var(--color-light);
    border-width: 0.1rem;
    border-style: dashed;

    h3 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
</style>
