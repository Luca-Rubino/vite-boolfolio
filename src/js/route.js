import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/page/Home.vue'
import ChiSono from '../views/page/ChiSono.vue'
import Portfolio from '../views/page/Portfolio.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/ChiSono',
    component: ChiSono
  },
  {
    path: '/Portfolio',
    component: Portfolio
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
