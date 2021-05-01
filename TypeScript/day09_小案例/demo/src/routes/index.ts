import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Calprice from "../components/Calprice/index.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Calprice }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router