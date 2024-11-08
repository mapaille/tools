<script setup lang="ts">
import { ref } from 'vue'

const from = ref<string>('');
const to = ref<string>('');

const fromBase64 = (): void => {
    from.value = atob(to.value);
};

const toBase64 = (): void => {
    to.value = btoa(from.value);
};
</script>

<template>
  <h3>Plain</h3>
  <div class="flex">
    <input type="text" v-model="from" />
    <button @click="toBase64">Convert</button>
  </div>
  <h3>Base64</h3>
  <div class="flex">
    <input type="text" v-model="to" />
    <button @click="fromBase64">Convert</button>
  </div>
</template>

<style scoped lang="scss">
</style>
