import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/details',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import('../views/Maps.vue')
  },
  {
    path: '/gifts',
    name: 'gifts',
    component: () => import('../views/gifts.vue')
  },
  {
    path: '/attire',
    name: 'attire',
    component: () => import('../views/clothing.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/guide.vue')
  },
  {
    path: '/invite',
    name: 'invite',
    component: () => import('../views/Invite.vue') /** case sensitive! */
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
