<script setup lang="ts">
import { ref } from "vue";
import SectionContainer from "../components/SectionContainer.vue";
import HorizontalLayout from "../components/HorizontalLayout.vue";

const guid = ref<string>(generateGUID());

function regenerateGUID(): void {
  guid.value = generateGUID();
}

async function copyToClipboard(): Promise<void> {
  await navigator.clipboard.writeText(guid.value.toString());
}

function generateGUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
</script>

<template>
  <h2>GUID</h2>
  <SectionContainer title="Generation">
    <HorizontalLayout>
      <input readonly type="text" v-model="guid" name="value" />
      <button @click="regenerateGUID">Regenerate</button>
      <button @click="copyToClipboard">Copy</button>
    </HorizontalLayout>
  </SectionContainer>
</template>

<style scoped></style>
