
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },


  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
  },

  {
    path: '/schema',
    name: 'schema',
    component: () => import('@/views/schema'),
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
