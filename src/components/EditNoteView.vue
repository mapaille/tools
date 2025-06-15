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

const loading = ref(true);
const readonly = ref(false);
const saving = ref(false);
const noteText = ref("");

onMounted(async () => {
  if (props.noteId) {
    await api.getNote(props.noteId).then((note) => {
      noteText.value = note.text;
    });
  }
  loading.value = false;
});

async function submitNote() {
  readonly.value = true;
  saving.value = true;

  if (props.noteId) {
    await api.updateNote(props.noteId, { text: noteText.value });
  } else {
    await api.createNote({ text: noteText.value });
  }

  readonly.value = false;
  saving.value = false;
  await router.push({ path: "/notes" });
}
</script>

<template>
  <h2 v-if="props.noteId">EDIT NOTE</h2>
  <h2 v-else>NEW NOTE</h2>

  <div v-if="loading">
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
          v-bind:readonly="readonly"
          v-bind:disabled="saving"
          required
        />

        <button
          v-bind:readonly="readonly"
          v-bind:disabled="saving"
          button
          type="submit"
        >
          Save
        </button>

        <button
          @click.prevent="$router.push({ path: '/notes' })"
          v-bind:disabled="saving"
        >
          Return
        </button>
      </HorizontalLayout>
    </form>
  </div>
</template>

<style scoped></style>
