<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  gap: var(--layout-gap);
}
</style>
