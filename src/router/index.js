import { createRouter, createWebHistory } from 'vue-router'
import PageIndex from '../pages/Index.vue'
import PageConstruction from '../pages/Construction.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageIndex
    },
    {
      path: '/projets',
      name: 'projets',
      component: PageConstruction
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: PageConstruction
    },
    {
      path: '/tech',
      name: 'tech',
      component: PageConstruction
    },
    {
      path: '/archives',
      name: 'archives',
      component: PageConstruction
    },
    {
      path: '/joindre',
      name: 'joindre',
      component: PageConstruction
    },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
