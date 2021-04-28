import { createRouter, createWebHistory } from 'vue-router'
import Authentication from '../views/Authentication.vue'
import Dashboard from '../views/Dashboard.vue'
import ConversionRates from '../views/ConversionRates'
import Users from '../views/Users'
import Transactions from '../views/Transactions'
import CreateUser from '../views/CreateUser'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/conversion-rates',
    name: 'conversion-rates',
    component: ConversionRates
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: Transactions
  },
  {
    path: '/create-user',
    name: 'create-user',
    component: CreateUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
