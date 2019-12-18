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
    path: '/philosophy',
    name: 'philosophy',
    component: () => import('../views/Philosophy.vue')
  },
  {
    path: '/participants_dance',
    name: 'participants_dance',
    component: () => import('../views/Participants_dance.vue')
  },
  {
    path: '/participants_store',
    name: 'participants_store',
    component: () => import('../views/Participants_store.vue')
  },
  {
    path: '/companion',
    name: 'companion',
    component: () => import('../views/Companion.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/carnival',
    name: 'carnival',
    component: () => import('../views/Carnival.vue')
  },
  {
    path: '/dance',
    name: 'dance',
    component: () => import('../views/Dance.vue')
  },
  {
    path: '/park',
    name: 'park',
    component: () => import('../views/Park.vue')
  },
  {
    path: '/outline',
    name: 'outline',
    component: () => import('../views/Outline.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
