import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "central panel",
            component: () => import("@/views/HomeView.vue")
        },
        {
            path: "/reactor",
            name: "reactor",
            component: () => import("@/views/ReactorView.vue"),
        },
        {
            path: "/reactor/:name",
            name: "component",
            component: () => import("@/views/ReactorComponentView.vue"),
        },
        {
            path: "/documentation",
            name: "Documentation",
            component: () => import("@/views/DocumentationView.vue")
        }
    ],
})

export default router
