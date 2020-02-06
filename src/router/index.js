import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/participants_dance',
    name: 'participants_dance',
    component: () => import('../views/form/Participants_dance.vue')
  },
  {
    path: '/participants_idol',
    name: 'participants_idol',
    component: () => import('../views/form/Participants_idol.vue')
  },
  {
    path: '/companion',
    name: 'companion',
    component: () => import('../views/Companion.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/form/Contact.vue')
  },
  {
    path: '/form/trim',
    name: 'trim',
    component: () => import('../views/form/Trim.vue')
  },
  {
    path: '/form/store',
    name: 'store',
    component: () => import('../views/form/Store.vue')
  },
  {
    path: '/form/freemarket',
    name: 'freemarket',
    component: () => import('../views/form/Freemarket.vue')
  },
  {
    path: '/dance',
    name: 'dance',
    component: () => import('../views/Dance.vue')
  },
  {
    path: '/idol',
    name: 'idol',
    component: () => import('../views/Idol.vue')
  },
  {
    path: '/outline',
    name: 'outline',
    component: () => import('../views/Outline.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes,
})

export default router
