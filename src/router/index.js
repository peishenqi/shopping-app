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
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  //首页 惊喜
  {
    path: '/surprise',
    name: 'Surprise',
    component: () => import('../views/home/Surprise.vue')
  },
  //首页 节日
  {
    path: '/festival',
    name: 'Festival',
    component: () => import('../views/home/Festival.vue')
  },
  //首页 纪念日
  {
    path: '/commemorate',
    name: 'Commemorate',
    component: () => import('../views/home/Commemorate.vue')
  },
  //首页 生日
  {
    path: '/birthday',
    name: 'Birthday',
    component: () => import('../views/home/Birthday.vue')
  },
  //首页 送女友
  {
    path: '/girlfriend',
    name: 'Girlfriend',
    component: () => import('../views/home/Girlfriend.vue')
  },
  //首页 送长辈
  {
    path: '/elder',
    name: 'Elder',
    component: () => import('../views/home/Elder.vue')
  },
  //首页 送朋友
  {
    path: '/friend',
    name: 'Friend',
    component: () => import('../views/home/Friend.vue')
  },
  //首页 热卖榜
  {
    path: '/hotSale',
    name: 'HotSale',
    component: () => import('../views/home/HotSale.vue')
  },
  //首页 特价专区
  {
    path: '/special',
    name: 'Special',
    component: () => import('../views/home/Special.vue')
  },
  //我的页面 关于我们
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/user/About.vue')
  },
  //我的页面 设置
  {
    path: '/set',
    name: 'Set',
    component: () => import('../views/user/Set.vue')
  },
  //我的页面 联系客服
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/user/Contact.vue')
  },
  //我的页面 帮助中心
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/user/Help.vue')
  },
  //我的页面 优惠劵
  {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('../views/user/Coupon.vue')
  },
  //我的页面 今日配送
  {
    path: '/distribution',
    name: 'Distribution',
    component: () => import('../views/user/Distribution.vue')
  },
  //我的页面 权益卡
  {
    path: '/equity-card',
    name: 'Equity-card',
    component: () => import('../views/user/Equity-card.vue')
  },
  //我的页面 待评价
  {
    path: '/evaluated',
    name: 'Evaluated',
    component: () => import('../views/user/Evaluated.vue')
  },
  //我的页面 我的收藏
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/user/Favorite.vue')
  },
  //我的页面 浏览记录
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/user/History.vue')
  },
  //我的页面 会员积分
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/user/Member.vue')
  },
  //我的页面 待付款
  {
    path: '/obligation',
    name: 'Obligation',
    component: () => import('../views/user/Obligation.vue')
  },
  //我的页面 余额
  {
    path: '/remaining',
    name: 'Remaining',
    component: () => import('../views/user/Remaining.vue')
  },
  //我的页面 生日纪念提醒
  {
    path: '/reminder',
    name: 'Reminder',
    component: () => import('../views/user/Reminder.vue')
  },
  //我的页面 收货地址
  {
    path: '/site',
    name: 'Site',
    component: () => import('../views/user/Site.vue')
  },
  //我的页面 全部订单
  {
    path: '/all-orders',
    name: 'All-orders',
    component: () => import('../views/user/All-orders.vue')
  },
  //我的页面 新增收货地址
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/user/Address.vue')
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
