import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Type from "../views/Type.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/type/:id",
        name: "Type",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Type,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
