<template>
  <div class="sort">
    <!-- 搜索 -->

    <van-search class="search" placeholder="搜索鲜花、蛋糕、礼品" shape="round" v-model="valueSearch" />
    <div class="sort_main">
      <!-- 侧栏导航 -->
      <div class="nav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="热门推荐" :to="{ name: 'hot' }" />
          <van-sidebar-item title="鲜花" :to="{ name: 'flower' }" />
          <van-sidebar-item title="永生花" :to="{ name: 'foreverFlower' }" />
          <van-sidebar-item title="蛋糕" :to="{ name: 'cake' }" />
          <van-sidebar-item title="特色礼品" :to="{ name: 'gift' }" />
          <van-sidebar-item title="礼篮" :to="{ name: 'hamper' }" />
          <van-sidebar-item title="绿植花卉" :to="{ name: 'greenplant' }" />
        </van-sidebar>
      </div>
      <router-view class="view_show"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueSearch: "",
      activeKey: 0
    };
  },
};
</script>
<style scoped>
.sort {
  width: 100vw;
  height: 100vh;
  font-size: 3vw;
}
.search {
  width: 100%;
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 999;
}
.sort_main {
  display: flex;
  width: 100%;
}
.nav {
  position: fixed;
  top: 3.5rem;
  z-index: 998;
}
.van-sidebar {
  width: 5.3rem;
}
.van-sidebar-item {
  text-align: center;
}
.van-sidebar-item :hover {
  color: #f00;
}
.view_show {
  flex: 1;
  margin: 3.6rem 0.8rem;
  padding-left: 5.3rem;
}
</style>


