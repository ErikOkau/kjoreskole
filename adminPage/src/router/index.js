import { createRouter, createWebHistory } from 'vue-router'
import HjemAdmin from '../views/HjemAdmin.vue'
import Website from '/Github/kjoreskole/Website/src/views/Hjem.vue'
import signup from '../components/registrere_bruker.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HjemAdmin
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue')
    },
    {
      path: '/website',
      name: 'website',
      component: Website
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }

  ]
})

export default router