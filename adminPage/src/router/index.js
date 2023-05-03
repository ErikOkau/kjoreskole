import { createRouter, createWebHistory } from 'vue-router'
import HjemAdmin from '/Github/kjoreskole/adminPage/src/views/HjemAdmin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HjemAdmin
    },

  ]
})
export default router