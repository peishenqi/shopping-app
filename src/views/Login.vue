<template>
  <div class="login">
    <div class="header">
      <van-nav-bar title="登录注册" left-arrow @click-left="header_left" />
      <van-icon name="wap-nav" slot="right" @click="showPopup" />

      <van-popup
        v-model="show"
        position="top"
        :style="{ height: '30%' }"
        :overlay="false"
        :closeable="true"
      >
        <ul class="nav_list">
          <li>
            <router-link :to="{ name: 'Home' }">
              <van-icon name="wap-home" />首页
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Sort' }">
              <van-icon name="star" />分类搜索
            </router-link>
          </li>
          <li to="/cart">
            <router-link :to="{ name: 'Cart' }">
              <van-icon name="shopping-cart" />购物车
            </router-link>
          </li>
          <li to="/user">
            <router-link :to="{ name: 'User' }">
              <van-icon name="manager" />我的
            </router-link>
          </li>
        </ul>
      </van-popup>
    </div>
    <div class="main" v-if="isreg">
      <h2>Hua.com花礼网</h2>
      <div>
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" v-model="phone" />
        <span></span>
      </div>
      <div>
        <p>验证码</p>
        <input type="text" placeholder="请输入验证码" v-model="autoCode" />
        <span>获取验证码</span>
      </div>
      <van-button type="default" round :class="class1" @click="regBtn">手机号登录/注册</van-button>

      <p class="phone" @click="isChange">手机号短信登录</p>
    </div>
    <div class="main" v-if="islogin">
      <h2>Hua.com花礼网</h2>
      <div>
        <p>手机号/邮箱</p>
        <input type="text" placeholder="请输入手机号或邮箱" v-model="phone" />
        <span></span>
      </div>
      <div>
        <p>密码</p>
        <input type="password" placeholder="请输入密码" autocomplete="off" v-model="pwd" />
        <span>忘记密码</span>
      </div>
      <van-button type="default" round :class="class1">登录</van-button>

      <p class="phone" @click="isChange">手机短信登录</p>
    </div>
  </div>
</template>
<script>
import { get, post } from "../utils/ajax";
import axios from "axios";

export default {
  data() {
    return {
      phone: "",
      pwd: "",
      autoCode: "",
      class1: ["reg"],
      class2: ["popup"],
      show: false,
      islogin: false,
      isreg: true,
      ischange: "",

      show: false
    };
  },
  methods: {
    header_left() {
      this.$router.push({
        path: "user"
      });
    },
    showPopup() {
      this.show = true;
    },

    isChange() {
      // console.log("这是手机号切换");
      this.islogin = !this.islogin;
      this.isreg = !this.isreg;
    },
    regBtn() {
      console.log(this.phone, this.autoCode);
      post("/api/v1/auth/reg", {
        // url: "/api/v1/auth/login",
        userName: "admin",
        password: "admin@12138",
        nickName: "admin",
        avatar:
          "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2310791297,2082199243&fm=26&gp=0.jpg"
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
}
.van-icon-wap-nav {
  position: absolute;
  right: 0;
  margin-top: -2rem;
  z-index: 33;
}

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
.van-icon-arrow-left,
.van-icon-wap-nav {
  color: #ccc;
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
.van-popup--top {
  width: 30%;
  box-shadow: 1px 1px 1px 1px #ccc;
  left: 15rem;
  top: 2rem;
}
.nav_list {
  position: absolute;

  width: 45%;
  height: 9rem;
  color: #ccc;
}
.nav_list {
  width: 100%;
  /* height: 3rem; */
  line-height: 2rem;
  /* text-align: left; */
  text-indent: 0.3rem;
}
.nav_list li {
  height: 3rem;
  line-height: 3rem;
}
</style>
