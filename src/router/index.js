import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('../views/ShoppingView.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/MessageView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/alter',
    name: 'alter',
    component: () => import('../views/AlterView.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/UploadView.vue')
  },
  {
    path: '/good',
    name: 'good',
    component: () => import('../views/GoodView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
