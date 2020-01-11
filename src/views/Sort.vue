<template>
  <div class="sort">
    <!-- 搜索 -->

    <van-search class="search" placeholder="搜索鲜花、蛋糕、礼品" shape="round" v-model="value" />
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

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      isFixed: false,
      offsetTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  methods: {
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    }
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
