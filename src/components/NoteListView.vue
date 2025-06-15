<script setup lang="ts">
import { PaginatedResponse } from "../types/paginatedResponse";
import { NoteResponse } from "../types/noteResponse";
import { inject, onMounted, ref } from "vue";
import HorizontalLayout from "./HorizontalLayout.vue";
import { ApiInterface } from "../api";
import LoadingSpinner from "./LoadingSpinner.vue";

const api = inject<ApiInterface>("api")!;
const pageNumber = ref(1);
const pageSize = ref(10);
const loading = ref(true);
const notes = ref<PaginatedResponse<NoteResponse>>();

onMounted(async () => {
  await fetchNotes();
});

async function fetchNotes() {
  loading.value = true;
  notes.value = await api.getNotes(pageNumber.value, pageSize.value);
  loading.value = false;
}
</script>

<template>
  <h2>NOTES</h2>

  <HorizontalLayout>
    <button @click="$router.push({ path: '/notes/new' })">New</button>
    <button @click="fetchNotes">Refresh</button>
  </HorizontalLayout>

  <div v-if="loading">
    <LoadingSpinner />
  </div>

  <div v-else-if="notes">
    <table>
      <thead>
        <tr>
          <th style="width: 100%"></th>
          <th style="width: auto"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in notes.items" :key="note.id">
          <td>{{ note.text }}</td>
          <td>
            <HorizontalLayout>
              <button @click="$router.push({ path: '/notes/' + note.id })">
                Edit
              </button>
              <button
                @click="
                  async () => {
                    await api.deleteNote(note.id).then(async () => {
                      await fetchNotes();
                    });
                  }
                "
              >
                Delete
              </button>
            </HorizontalLayout>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Showing {{ notes.items.length }} of {{ notes.totalCount }} notes.</p>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
</style>
