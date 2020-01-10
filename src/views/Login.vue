
<template>
  <div class="login">
    <div class="header">
      <van-nav-bar title="登录注册" left-arrow @click="header_left">
        <van-icon name="wap-nav" slot="right" @click="showPopup">
          <van-popup v-model="show" position="right" :style="{ width: '20%' }">pp</van-popup>
        </van-icon>
      </van-nav-bar>
    </div>
    <div class="main">
      <h2>Hua.com花礼网</h2>
      <div>
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" />
        <span></span>
      </div>
      <div>
        <p>验证码</p>
        <input type="text" placeholder="请输入验证码" />
        <span>获取验证码</span>
      </div>
      <van-button type="default" round :class="class1">手机号登录/注册</van-button>

      <p class="phone">手机号短信登录aaa</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      class1: ["reg"],
      show: false
    };
  },
  methods: {
    header_left() {},
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
/* * {
  margin: 0;
  padding: 0;
} */
.login {
  margin: 0 1rem;
}
.login .main h2 {
  text-align: center;
  color: #ff734c;
  height: 2.8rem;
}
.login .main div {
  height: 3.5rem;
  border-bottom: #ccc solid 1px;
}
.login .main div p {
  line-height: 1;
  font-size: 0.8rem;
}
.login .main div input {
  outline: 0;
  border: 0;
  width: 75%;
}
.login .main div span {
  outline: 0;
  border: 0;
  width: 25%;
  font-size: 0.7rem;
  color: #ccc;
  float: right;
}

.reg {
  width: 100%;
  background: #ff734c;
  color: #fff;
  line-height: 2rem;
  margin-top: 2.4rem;
}
.phone {
  text-align: center;
  color: #ccc;
}
</style>