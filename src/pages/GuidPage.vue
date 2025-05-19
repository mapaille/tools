<script setup lang="ts">
  import { ref } from 'vue'
  import SectionContainer from '../components/SectionContainer.vue';
  import HorizontalLayout from '../components/HorizontalLayout.vue';
  import VerticalLayout from '../components/VerticalLayout.vue';

  const guid = ref<string>(generateGUID());

  function regenerateGUID(): void {
    guid.value = generateGUID();
  };

  async function copyToClipboard(): Promise<void> {
    await navigator.clipboard.writeText(guid.value.toString());
  };

  function generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
    v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
</script>

<template>
<VerticalLayout>
  <h3>GUID</h3>
  <SectionContainer title="Generation">
    <HorizontalLayout>
      <input readonly type="text" v-model="guid" name="value" />
    <button @click="regenerateGUID">Regenerate</button>
    <button @click="copyToClipboard">Copy</button>
    </HorizontalLayout>
  </SectionContainer>
</VerticalLayout>


</template>

<style scoped>
</style>
