import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: () => import('@/Index.vue'),
    children: [
      // 首页
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      // 分类
      {
        path: '/sort',
        name: 'Sort',
        redirect: "hot", //   重定向，指向  hot
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Sort.vue'),
        children: [{
          // 热门推荐
          path: "/hot",
          component: () => import("../views/Sort/hot.vue"),
          name: "hot",
        }, {
          // 鲜花
          path: "/flower",
          component: () => import("../views/Sort/flower.vue"),
          name: "flower"
        }, {
          // 永生花
          path: "/foreverFlower",
          component: () => import("../views/Sort/foreverFlower.vue"),
          name: "foreverFlower"
        }, {
          // 蛋糕
          path: "/cake",
          component: () => import("../views/Sort/cake.vue"),
          name: "cake"
        }, {
          // 特色礼品
          path: "/gift",
          component: () => import("../views/Sort/gift.vue"),
          name: "gift"
        }, {
          // 礼篮
          path: "/hamper",
          component: () => import("../views/Sort/hamper.vue"),
          name: "hamper"
        }, {
          // 绿植花卉
          path: "/greenplant",
          component: () => import("../views/Sort/greenplant.vue"),
          name: "greenplant"
        }]
      },
      // 购物车
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      },
      // 我的
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
  }, {
    path: '/surprise',
    name: 'Surprise',
    component: () => import('../views/home/Surprise.vue')
  }, {
    path: '/festival',
    name: 'Festival',
    component: () => import('../views/home/Festival.vue')
  }, {
    path: '/commemorate',
    name: 'Commemorate',
    component: () => import('../views/home/Commemorate.vue')
  }, {
    path: '/birthday',
    name: 'Birthday',
    component: () => import('../views/home/Birthday.vue')
  },
  // 详情页
  {
    path: '/product_detail',
    name: 'product_detail',
    component: () => import('../views/product_detail.vue'),

  },
  // 评论页
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/comment/comment.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
