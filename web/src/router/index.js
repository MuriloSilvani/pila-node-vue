import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Dashboard from '../components/Dashboard/index.vue'
import Categories from '../components/Categories/index.vue'
import Launches from '../components/Launches/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }, {
        path: 'categories',
        name: 'Categories',
        component: Categories,
        children: [
          {
            name: 'New Categories',
            path: 'new',
            component: Categories
          }
        ]
      }, {
        path: 'launches',
        name: 'Launches',
        component: Launches,
        children: [
          {
            name: 'New Launches',
            path: 'new',
            component: Launches
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
