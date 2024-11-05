import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/page/Home.vue';
import ChiSono from '../views/page/ChiSono.vue';
import Portfolio from '../views/page/Portfolio.vue';
import CurriculumVitee from '../views/page/CurriculumVitee.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Chi_Sono',
    component: ChiSono
  },
  {
    path: '/Portfolio',
    component: Portfolio
  },
  {
    path: '/CurriculumVitee',
    component: CurriculumVitee
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
