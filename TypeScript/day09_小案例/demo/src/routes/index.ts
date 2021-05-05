import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Calprice from "../components/Calprice/index.vue";
import Slide from "../components/Slide/index.vue";
import TodoList from "../components/TodoList/index.vue";
import message from "../components/messageBoard/index.vue";
const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Calprice },
    { path: '/slide', component: Slide },
    { path: '/todolist', component: TodoList },
    { path: "/message", component: message }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router