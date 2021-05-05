import { createRouter, createWebHistory } from 'vue-router'
import Authentication from '../views/Authentication.vue'
import Dashboard from '../views/Dashboard.vue'
import ConversionRates from '../views/ConversionRates'
import Users from '../views/Users'
import User from '../views/User'
import Transactions from '../views/Transactions'
import CreateUser from '../views/CreateUser'
import AllTransactions from '../views/AllTransactions'
import PendingTransactions from '../views/PendingTransactions'
import InProgress from '../views/InProgress'
import Completed from '../views/Completed'
// import RequestUserDetails from '../views/RequestUserDetails'


const routes = [
  {
    path:'/auth',
    name: 'authentication',
    component: Authentication
  },
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
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: '',
        name: 'all-transactions',
        component: AllTransactions
      },
      {
        path: '/pending',
        name: 'pending-transactions',
        component: PendingTransactions
      },
      {
        path: '/in-progress',
        name: 'in-progress',
        component: InProgress
      },
      {
        path: '/completed',
        name: 'completed',
        component: Completed
      }
    ]
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
  },
  // {
  //   path: '/request-user-details',
  //   name: 'request-user-details',
  //   component: RequestUserDetails
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
