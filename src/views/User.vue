<template>
  <div class="user-wrap">
    <div class="User">
      <van-nav-bar title="个人中心" left-arrow @click-left="onClickLeft" />

      <!-- 未登录显示 -->
      <div class="login" v-show="notLogin">
        <p>Hi,欢迎来到花礼网</p>
        <van-button to="/login" round type="info">登录/注册</van-button>
      </div>
      <!-- 登录之后显示 -->
      <div class="login isLogin" v-show="isLogin">
        <van-image
          class="portrait fl"
          round
          width="4rem"
          height="4rem"
          src="https://img02.hua.com/pc/assets/img/avatar_default_09.jpg"
        />
        <div class="username fl">
          <div class="name">{{ nickName }}</div>
          <div class="vip">
            <van-icon name="gem" />
            <span>VIP会员</span>
          </div>
        </div>
      </div>

      <div class="user_main">
        <div class="order">
          <van-cell title="我的订单" is-link value="全部订单" to="/all-orders" />
          <van-grid :column-num="3" :border="false">
            <van-grid-item
              to="/obligation"
              icon="https://img02.hua.com/m/member/center/myinfo_pendingpay.png"
              text="待付款"
            />
            <van-grid-item
              to="/distribution"
              icon="https://img02.hua.com/m/member/center/myinfo_distribution.png"
              text="今日配送"
            />
            <van-grid-item
              to="/evaluated"
              icon="https://img02.hua.com/m/member/center/myinfo_evaluation.png"
              text="待评价"
            />
          </van-grid>
        </div>
        <div class="user_main_middle">
          <van-grid class="middle_top" square :border="false">
            <van-grid-item to="/coupon" icon="coupon-o" text="优惠券" />
            <van-grid-item to="/equity-card" icon="vip-card-o" text="权益卡" />
            <van-grid-item to="/remaining" icon="gold-coin-o" text="余额" />
            <van-grid-item to="/member" icon="gem-o" text="会员积分" />
          </van-grid>
          <van-grid square :border="false">
            <van-grid-item to="/site" icon="location-o" text="收货地址" />
            <van-grid-item to="/reminder" icon="bulb-o" text="生日纪念提醒" />
            <van-grid-item to="/favorite" icon="star-o" text="我的收藏" />
            <van-grid-item to="/history" icon="clock-o" text="浏览记录" />
          </van-grid>
        </div>
        <van-grid class="user_main_bottom" :border="false">
          <van-grid-item to="/contact" icon="service-o" text="联系客服" />
          <van-grid-item to="/help" icon="question-o" text="帮助中心" />
          <van-grid-item to="/about" icon="info-o" text="关于花礼" />
          <van-grid-item to="/set" icon="setting-o" text="设置" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post } from "../utils/ajax";
import axios from "axios";

export default {
  data() {
    return {
      notLogin: true,
      isLogin: false,
      nickName: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  created() {
    let token = localStorage.getItem("token");
    if (token) {
      this.isLogin = true;
      this.notLogin = false;
      let userData = {
        headers: {
          authorization: "Bearer " + token
        }
      };
      get("/api/v1/users/info", userData).then(res => {
        console.log(res);
        this.nickName = res.data.userName;
        localStorage.setItem("userID", res.data._id);
      });
    }
  }
};
</script>
<style scoped>
.clean:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.user-wrap {
  width: 100%;
  height: 100%;
  background: #e9ecf0;
}
.User {
  height: 41.6875rem;
}
.van-nav-bar .van-icon {
  color: #000;
}
.login {
  padding: 1rem;
  height: 7rem;
  text-align: center;
  color: #fff;
  background: url(../assets/user_bg.png) no-repeat;
  background-size: 100%;
  overflow: hidden;
}
.van-button {
  width: 7.875rem;
  height: 2.25rem;
  color: #232628;
  border: 0;
  background: #fff;
  line-height: 2.25rem;
}
.login p {
  line-height: 1;
}
.isLogin {
  padding-top: 1.5rem;
}
.portrait {
  margin-left: 20%;
  border: 2px solid #fff;
}
.username {
  margin-top: 0.8rem;
  margin-left: 1.5rem;
}
.vip {
  margin-top: 0.25rem;
  margin-left: 0.6rem;
  padding: 0.2rem 0.5rem;
  width: 4rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.8rem;
  background: #fe6600;
  border-radius: 1rem;
}
.van-icon {
  top: 0.1rem;
}
.vip span {
  margin-left: 0.3rem;
}

.user_main {
  margin-left: 2%;
  padding-top: 6.5rem;
  width: 96%;
  background: #e9ecf0;
  position: relative;
}
.order {
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: -1.5rem;
}
.user_main_middle {
  margin: 0.5rem 0;
  border-radius: 5px;
}
.middle_top {
  border-bottom: 1px solid #e4e6e8;
}
.user_main_bottom {
  border-radius: 5px;
}
</style>
