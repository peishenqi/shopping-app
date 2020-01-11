<template>
  <div class="Equity-card">
    <div class="header">
      <van-nav-bar title="我的权益卡" :style="{color:'#ccc'}" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main">
      <img src="https://img02.hua.com/m/images/card/img/empty.png" alt />
      <p>您还没有权益卡哦...</p>
      <van-button type="default" round size="small">购买权益卡</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Toast: ""
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
.Equity-card {
  background: #ccc;
  min-height: 100rem;
}
.van-icon-arrow-left {
  color: #ccc;
}
.main {
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}
.main img {
  width: 12rem;
  margin-top: 2.5rem;
}
.van-button--round {
  width: 9rem;
  color: #fff;
  background: #ff734c;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
}
</style>

