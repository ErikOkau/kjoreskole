import { createRouter, createWebHistory } from 'vue-router'
import HjemAdmin from '../views/HjemAdmin.vue'



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
      path: '/signup',
      name: 'signup',
      component: () => import('../components/registrere_bruker.vue')
    }

  ]
})

export default router