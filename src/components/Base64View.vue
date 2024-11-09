<script setup lang="ts">
import { ref } from 'vue'
import FlexContainer from './FlexContainer.vue';

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
  <FlexContainer>
    <input type="text" v-model="from" />
    <button @click="toBase64">Convert</button>
  </FlexContainer>
  <h3>Base64</h3>
  <FlexContainer>
    <input type="text" v-model="to" />
    <button @click="fromBase64">Convert</button>
  </FlexContainer>
</template>

<style scoped lang="scss">
</style>
