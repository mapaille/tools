<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { ApiInterface } from "../api";
import HorizontalLayout from "./HorizontalLayout.vue";
import router from "../router";

const api = inject<ApiInterface>("api")!;

const props = defineProps({
  noteId: String,
});

const noteText = ref("");

onMounted(async () => {
  if (props.noteId) {
    await api.getNote(props.noteId).then((note) => {
      noteText.value = note.text;
    });
  }
});

async function submitNote() {
  if (props.noteId) {
    await api.updateNote(props.noteId, { text: noteText.value });
  } else {
    await api.createNote({ text: noteText.value });
  }

  await router.push({ path: "/notes" });
}
</script>

<template>
  <h2 v-if="props.noteId">EDIT NOTE</h2>
  <h2 v-else>NEW NOTE</h2>

  <form @submit.prevent="submitNote">
    <HorizontalLayout>
      <label for="noteText">Note Text:</label>
      <input type="text" id="noteText" v-model="noteText" required />
      <button type="submit">Save</button>
      <button @click.prevent="$router.push({ path: '/notes' })">Return</button>
    </HorizontalLayout>
  </form>
</template>

<style scoped></style>
