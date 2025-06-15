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
const errorMessage = ref("");
const noteText = ref("");

onMounted(async () => {
  try {
    isLoading.value = true;
    errorMessage.value = "";
    if (props.noteId) {
      const note = await api.getNote(props.noteId);
      noteText.value = note.text;
    }
  } catch (error) {
    console.error("Error loading note:", error);
    errorMessage.value = "Failed to load note. Please try again.";
  } finally {
    isLoading.value = false;
  }
});

async function submitNote() {
  try {
    errorMessage.value = "";
    isReadonly.value = true;
    isSaving.value = true;

    if (props.noteId) {
      await api.updateNote(props.noteId, { text: noteText.value });
    } else {
      await api.createNote({ text: noteText.value });
    }

    await router.push({ path: "/notes" });
  } catch (error) {
    console.error("Error saving note:", error);
    errorMessage.value = "Failed to save note. Please try again.";
  } finally {
    isReadonly.value = false;
    isSaving.value = false;
  }
}
</script>

<template>
  <h2 v-if="props.noteId">EDIT NOTE</h2>
  <h2 v-else>NEW NOTE</h2>

  <div v-if="isLoading">
    <LoadingSpinner />
  </div>
  <div v-else>
    <p v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </p>

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

        <button :readonly="isReadonly" :disabled="isSaving" type="submit">
          Save
        </button>

        <button
          @click.prevent="$router.push({ path: '/notes' })"
          :disabled="isSaving"
        >
          Return
        </button>
      </HorizontalLayout>
    </form>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  font-weight: bold;
}
</style>
