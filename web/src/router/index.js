import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Dashboard from '../components/Dashboard/index.vue'

import Categories from '../components/Categories/index.vue'
import NewCategory from '../components/NewCategory/index.vue'

import Launches from '../components/Launches/index.vue'
import NewLaunch from '../components/NewLaunch/index.vue'

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
        path: '/categories',
        name: 'Categories',
        component: Categories
      }, {
        name: 'New Category',
        path: 'categories/new',
        component: NewCategory
      }, {
        path: 'launches',
        name: 'Launches',
        component: Launches
      },
      {
        name: 'New Launch',
        path: 'launches/new',
        component: NewLaunch
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
