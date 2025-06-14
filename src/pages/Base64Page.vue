<script setup lang="ts">
import { ref } from "vue";
import SectionContainer from "../components/SectionContainer.vue";
import VerticalLayout from "../components/VerticalLayout.vue";
import HorizontalLayout from "../components/HorizontalLayout.vue";

const from = ref<string>("");
const to = ref<string>("");

const fromBase64 = (): void => {
  from.value = atob(to.value);
};

const toBase64 = (): void => {
  to.value = btoa(from.value);
};
</script>

<template>
  <h2>BASE64</h2>
  <SectionContainer title="Encoding">
    <VerticalLayout>
      <HorizontalLayout>
        <input type="text" v-model="from" name="from" placeholder="Raw" />
        <button @click="toBase64">Encode</button>
      </HorizontalLayout>
      <HorizontalLayout>
        <input type="text" v-model="to" name="to" placeholder="Encoded" />
        <button @click="fromBase64">Decode</button>
      </HorizontalLayout>
    </VerticalLayout>
  </SectionContainer>
</template>

<style scoped></style>
