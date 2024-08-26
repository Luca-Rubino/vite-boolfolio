import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './App.vue';
import AppProject from './components/ProjectsCard.vue';
// import AppAbout from './pages/AppAbout.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppProject
        },
        {
            path: '/project',
            name: 'project',
            component: AppProject
        },
        {
            path: '/about',
            name: 'about',
            component: AppHome
        },
    ]
});
export { router };