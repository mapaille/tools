<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref<dataRow[]>([]);

onMounted(() => {
  axios
    .get<dataRow[]>("https://jsonplaceholder.typicode.com/posts")
    .then(response => data.value = response.data)
    .catch(error => console.log(error));
});

class dataRow {
  id: string
  userId: string
  title: string
  body: string
}
</script>

<template>
  <h3>Welcome</h3>
  <table>
    <tr v-for="row in data">
      <td>{{ row.id }}</td>
      <td>{{ row.userId }}</td>
      <td>{{ row.title }}</td>
      <td>{{ row.body }}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
</style>
