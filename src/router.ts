import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import Base64Page from "./pages/Base64Page.vue";
import GuidPage from "./pages/GuidPage.vue";
import SqlPage from "./pages/SqlPage.vue";
import NotesPage from "./pages/NotesPage.vue";
import EditNotePage from "./pages/EditNotePage.vue";
import NewNotePage from "./pages/NewNotePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/base64", component: Base64Page },
  { path: "/guid", component: GuidPage },
  { path: "/sql", component: SqlPage },
  { path: "/notes", component: NotesPage },
  { path: "/notes/new", component: NewNotePage },
  { path: "/notes/:noteId", component: EditNotePage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
