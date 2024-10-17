import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from './components/HomeView.vue';
import GuidView from './components/GuidView.vue';
const routes = [
    { path: '/', component: HomeView },
    { path: '/guid', component: GuidView },
];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
export default router;
//# sourceMappingURL=router.js.map