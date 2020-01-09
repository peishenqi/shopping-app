<template>
  <div id="app">
    <div id="nav">
     <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home
" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="star" to="/Fl">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" to="/Cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/User">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
   data() {
    return {
      active: 0
    }
  }
}
</script>
