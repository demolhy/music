import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import icon from '../static/icon/iconfont.css'




Vue.use(VueRouter,icon)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/details.vue')
  },
  {
    path: '/musicContent',
    name: 'musicContent',
    component: () => import('../views/musicContent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
