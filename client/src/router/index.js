import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../authentication/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    beforeEnter: Auth.routeGuard,
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/external',
    name: 'External',
    beforeEnter: Auth.routeGuard,
    component: () => import('../views/External.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
