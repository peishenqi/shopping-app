<template>
  <div class="coupon">
    <div class="header">
      <van-nav-bar title="优惠券" :style="{color:'#ccc'}" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main">
      <div class="main_t">
        <van-tabs v-model="active">
          <van-tab title="未使用 ">—哦欧！~小主一张券都没有—</van-tab>
          <van-tab title="已失效 "></van-tab>
        </van-tabs>
        <!-- <p class="red" :class="class1" @click="unuser">未使用</p>
        <p @click="lost" :class="class1">已失效</p>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push({
        path: "user"
      });
    }
  }
};
</script>
<style  scoped>
.van-icon-arrow-left {
  color: #ccc;
}
.main_t p {
  padding: 0;
  margin: 0;
  width: 50%;
  float: left;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  /* color: #ff734c;
  border-bottom: #ff734c 1px solid; */
}

.van-tab--active {
  color: #ff734c;
  border-bottom: #ff734c 1px solid;
}
.van-tab__pane {
  color: #ccc;
  text-align: center;
  line-height: 4rem;
}
</style>