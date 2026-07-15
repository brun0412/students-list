import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SingleStudent from "../views/SingleStudent.vue";

const routes=[
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/student/:id',
        name: 'singleStudent',
        component: SingleStudent
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;