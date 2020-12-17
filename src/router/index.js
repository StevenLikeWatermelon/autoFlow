import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/simple1',
    name: 'simple1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/simple1.vue')
  },
  {
    path: '/simple2',
    name: 'simple2',
    // route level code-splitting
    // this generates a separate chunk (simple1.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "simple1" */ '../views/simple2.vue')
  },
  {
    path: '/simple3',
    name: 'simple3',
    // route level code-splitting
    // this generates a separate chunk (simple1.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "simple1" */ '../views/simple3.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
