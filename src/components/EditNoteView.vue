<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { ApiInterface } from "../api";
import HorizontalLayout from "./HorizontalLayout.vue";
import router from "../router";
import LoadingSpinner from "./LoadingSpinner.vue";

const api = inject<ApiInterface>("api")!;

const props = defineProps({
  noteId: String,
});

const isLoading = ref(true);
const isReadonly = ref(false);
const isSaving = ref(false);
const noteText = ref("");

onMounted(async () => {
  if (props.noteId) {
    await api.getNote(props.noteId).then((note) => {
      noteText.value = note.text;
    });
  }
  isLoading.value = false;
});

async function submitNote() {
  isReadonly.value = true;
  isSaving.value = true;

  if (props.noteId) {
    await api.updateNote(props.noteId, { text: noteText.value });
  } else {
    await api.createNote({ text: noteText.value });
  }

  isReadonly.value = false;
  isSaving.value = false;
  await router.push({ path: "/notes" });
}
</script>

<template>
  <h2 v-if="props.noteId">EDIT NOTE</h2>
  <h2 v-else>NEW NOTE</h2>

  <div v-if="isLoading">
    <LoadingSpinner />
  </div>
  <div v-else>
    <form @submit.prevent="submitNote">
      <HorizontalLayout>
        <label for="noteText">Note Text:</label>

        <input
          type="text"
          id="noteText"
          v-model="noteText"
          v-bind:readonly="isReadonly"
          v-bind:disabled="isSaving"
          required
        />

        <button
          v-bind:readonly="isReadonly"
          v-bind:disabled="isSaving"
          button
          type="submit"
        >
          Save
        </button>

        <button
          @click.prevent="$router.push({ path: '/notes' })"
          v-bind:disabled="isSaving"
        >
          Return
        </button>
      </HorizontalLayout>
    </form>
  </div>
</template>

<style scoped></style>
