import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Bruh from '../views/Bruh.vue'


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
    path: '/buddy',
    name: 'Buddy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Buddy.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
