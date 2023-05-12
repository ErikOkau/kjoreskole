import { createRouter, createWebHistory } from 'vue-router'
import brukerside from '../views/brukerside.vue'
import login from '../components/login.vue'
import bestill from '/Github/kjoreskole/Website/src/views/BestillTime.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'brukerside',
      component: brukerside
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/bestill',
      name: 'bestill',
      component: bestill
    }

  ]
})

export default router