import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import Base64View from './components/Base64View.vue'
import GuidView from './components/GuidView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/base64', component: Base64View },
    { path: '/guid', component: GuidView }
];
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
