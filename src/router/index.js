import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Index',
    redirect: '/home',
    component: () => import('@/Index.vue'),
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/fl',
        name: 'Fl',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Fl.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },{
    path: '/surprise',
    name: 'Surprise',
    component: () => import('../views/home/Surprise.vue')
  },{
    path: '/festival',
    name: 'Festival',
    component: () => import('../views/home/Festival.vue')
  },{
    path: '/commemorate',
    name: 'Commemorate',
    component: () => import('../views/home/Commemorate.vue')
  },{
    path: '/birthday',
    name: 'Birthday',
    component: () => import('../views/home/Birthday.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
