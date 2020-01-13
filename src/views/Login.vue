
<template>
  <div class="login">
    <div class="header">
      <van-nav-bar title="登录注册" left-arrow @click-left="header_left">
        <van-icon name="wap-nav" slot="right" @click-right="showPopup">
          <van-popup v-model="show" position="top" :style="{height:'30%'}" overlay>
            <ul class="nav_list">
              <li to="/">
                <van-icon name="wap-home" />首页
              </li>
              <li to="/sort">
                <van-icon name="star" />分类搜索
              </li>
              <li to="/cart">
                <van-icon name="shopping-cart" />j
              </li>
              <li to="/user">
                <van-icon name="manager" />我的
              </li>
            </ul>
          </van-popup>
        </van-icon>
      </van-nav-bar>
    </div>
    <div class="main" v-if="isreg">
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

      <p class="phone" @click="isChange">手机号短信登录</p>
    </div>
    <div class="main" v-if="islogin">
      <h2>Hua.com花礼网</h2>
      <div>
        <p>手机号/邮箱</p>
        <input type="text" placeholder="请输入手机号或邮箱" />
        <span></span>
      </div>
      <div>
        <p>密码</p>
        <input type="password" placeholder="请输入密码" autocomplete="off" />
        <span>忘记密码</span>
      </div>
      <van-button  @click="loginHandl" type="default" round :class="class1">登录</van-button>

      <p class="phone" @click="isChange">{{ischange}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      class1: ["reg"],
      class2: ["popup"],
      show: false,
      islogin: false,
      isreg: true,
      ischange: "",
      // userName:"",
      // password:"",
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
      this.ischang ? "手机短信登录" : "账号密码登录";
    },
    aa() {
      this.show = false;
    },
    // loginHandl(){
    //   let data = {
    //     userName:this.userName,
    //     password:this.password
    //   };
    //   axios.post("http://api.cat-shop.penkuoer.com/api/v1/auth/login",data).then(res=>{
    //     console.log(res);
    //   })
    // }
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
  width: 25%;

  left: 20rem;
  top: 2rem;
}
.nav_list {
  position: absolute;
  /* top: 1rem; */
  width: 25%;
  height: 8rem;
  color: #ccc;
}
.nav_list {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: left;
  text-indent: 0.3rem;
}
</style>