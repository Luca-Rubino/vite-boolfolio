import { createRouter, createWebHistory } from 'vue-router';

import Index from './App.vue';
// import AppProject from './components/ProjectsCard.vue';
// import AppAbout from './pages/AppAbout.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Index
        }
    ]
});
export { router };