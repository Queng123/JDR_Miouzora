import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import MobsCreate from '../views/Mobs/Create/Create.vue'
import MobsList from '../views/Mobs/List/List.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mobs/Create',
      name: 'mobsCreate',
      component: MobsCreate
    },
    {
      path: '/mobs/List',
      name: 'mobsList',
      component: MobsList
    }
  ]
})

export default router
