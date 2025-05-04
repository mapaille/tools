<script setup lang="ts">
import { ref } from 'vue'
import SectionContainer from './SectionContainer.vue';
import VerticalLayout from './VerticalLayout.vue';
import HorizontalLayout from './HorizontalLayout.vue';

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
  <VerticalLayout>
    <h3>BASE64</h3>

      <SectionContainer title="Conversion">
        <VerticalLayout>
          <HorizontalLayout>
          <input type="text" v-model="from" name="from" placeholder="Raw" />
          <button @click="toBase64">Convert</button>
        </HorizontalLayout>
        <HorizontalLayout>
      <input type="text" v-model="to" name="to" placeholder="Encoded" />
      <button @click="fromBase64">Convert</button>
    </HorizontalLayout>
        </VerticalLayout>

  </SectionContainer>

  </VerticalLayout>
</template>

<style scoped>
</style>
