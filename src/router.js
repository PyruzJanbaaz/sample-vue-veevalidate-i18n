import {createWebHistory, createRouter} from "vue-router";

function load(component) {
    return () => import(`@/views/${component}.vue`)
}

const routes = [
    {
        path: '',
        name: "Home",
        component: load('Home'),
    },
    {
        path: '/about',
        name: "About",
        component: load('AboutUs'),
    },
    {
        path: '/contact',
        name: "Contact",
        component: load('ContactUs'),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;