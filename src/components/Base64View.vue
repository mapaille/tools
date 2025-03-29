<script setup lang="ts">
import { ref } from 'vue'
import SectionContainer from './SectionContainer.vue';

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
  <SectionContainer title="Plain">
    <input type="text" v-model="from" name="from" />
    <button @click="toBase64">Convert</button>
  </SectionContainer>
  <SectionContainer title="Base64">
    <input type="text" v-model="to" name="to" />
    <button @click="fromBase64">Convert</button>
  </SectionContainer>
</template>

<style scoped>
</style>
