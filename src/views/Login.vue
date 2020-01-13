<template>
  <div class="login">
    <div class="header">
      <van-nav-bar title="登录注册" left-arrow @click-left="header_left" />
      <van-icon name="wap-nav" slot="right" size="1.5rem" @click="showPopup" />
      <!-- 右上角导航 -->
      <div class="nav" v-show="navShow">
        <router-link class="nav_link" to="/">
          <van-icon name="wap-home-o" />
          <span>首页</span>
        </router-link>
        <router-link class="nav_link" to="/Sort">
          <van-icon name="apps-o" />
          <span>分类</span>
        </router-link>
        <router-link class="nav_link" to="/Cart">
          <van-icon name="shopping-cart-o" />
          <span>购物车</span>
        </router-link>
        <router-link class="nav_link" to="/User">
          <van-icon name="user-circle-o" />
          <span>我的</span>
        </router-link>
      </div>
    </div>
    <!-- 注册 -->
    <div class="main" v-if="isreg">
      <h2>Hua.com花礼网</h2>
      <div>
        <p>用户名</p>
        <input type="text" placeholder="请设置用户名" v-model="phone" />
      </div>
      <div>
        <p>密码</p>
        <input type="text" placeholder="请设置密码" v-model="autoCode" />
      </div>
      <van-button type="default" round :class="class1" @click="regBtn">注册</van-button>

      <p class="phone" @click="isChange">登录</p>
    </div>
    <!-- 登录 -->
    <div class="main" v-if="islogin">
      <h2>Hua.com花礼网</h2>
      <div>
        <p>用户名</p>
        <input type="text" placeholder="请输入用户名" v-model="userName" />
      </div>
      <div>
        <p>密码</p>
        <input type="password" placeholder="请输入密码" autocomplete="off" v-model="password" />
      </div>
      <van-button @click="loginHandl" type="default" round :class="class1">登录</van-button>

      <p class="phone" @click="isChange">注册</p>
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
      autoCode: "",
      class1: ["reg"],
      class2: ["popup"],
      navShow: false,
      islogin: false,
      isreg: true,
      ischange: "",
      userName: "",
      password: ""
    };
  },
  methods: {
    header_left() {
      this.$router.push({
        path: "user"
      });
    },
    showPopup() {
      this.navShow = !this.navShow;
    },

    isChange() {
      // console.log("这是手机号切换");
      this.islogin = !this.islogin;
      this.isreg = !this.isreg;
    },
    regBtn() {
      // console.log(this.phone, this.autoCode);
      post("/api/v1/auth/reg", {
        // url: "/api/v1/auth/login",
        userName: this.phone,
        password: this.autoCode,
        // nickName: "admin",
        avatar:
          "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2310791297,2082199243&fm=26&gp=0.jpg"
      }).then(res => {
        if (res.data.code == "success") {
          this.$toast.success({ message: "注册成功" });
          this.phone = "";
          this.autoCode = "";
          var timer = setInterval(() => {
            this.isreg = false;
            this.islogin = true;
            clearInterval(timer);
            console.log(1);
          }, 3000);
        } else {
          this.$toast.success({ message: res.data.message });
        }
      });
    },
    //登录请求
    loginHandl() {
      let data = {
        userName: this.userName,
        password: this.password
      };
      post("/api/v1/auth/login", data).then(res => {
        console.log(res);
        
        // if(){

        // }else{

        // }
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
.reg {
  width: 100%;
  background: #ff734c;
  color: #fff;
  line-height: 2rem;
  margin-top: 2.4rem;
}
.phone {
  text-align: center;
  color: #71797f;
}

/* 弹出窗---->导航 */
.nav {
  position: absolute;
  width: 7rem;
  right: 0;
  top: 3rem;
  z-index: 999;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.nav_link {
  display: block;
  padding: 0 1rem;
  height: 3rem;
  line-height: 3rem;
  color: #666;
}
.nav_link span {
  margin-left: 0.5rem;
}
</style>
