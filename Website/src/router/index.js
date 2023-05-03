import { createRouter, createWebHistory } from 'vue-router'
import Hjem from '../views/Hjem.vue'
import Bestill from '../views/BestillTime.vue'
import login from '../views/login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hjem
    },
    {
      path: '/Bestill',
      name: 'Bestill',
      component: Bestill
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }


  ]
})
export default router