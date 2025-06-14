import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Api, ApiInterface } from "./api";

const app = createApp(App);

app.provide<ApiInterface>("api", new Api(import.meta.env.VITE_API_BASE_URL));

app.use(router);

app.mount("#app");
