

<template>
  <div class="user-wrap">
    <div class="User">
      <van-nav-bar title="个人中心" left-arrow @click-left="onClickLeft" />
      <div class="login">
        <p>Hi,欢迎来到花礼网</p>
        <van-button round type="info">登录/注册</van-button>
      </div>
      <div class="user_main">
        <div class="order">
          <van-cell title="我的订单" is-link value="全部订单" />
          <van-grid :column-num="3" :border="false">
            <van-grid-item
              icon="https://img02.hua.com/m/member/center/myinfo_pendingpay.png"
              text="待付款"
            />
            <van-grid-item
              icon="https://img02.hua.com/m/member/center/myinfo_distribution.png"
              text="今日配送"
            />
            <van-grid-item
              icon="https://img02.hua.com/m/member/center/myinfo_evaluation.png"
              text="待评价"
            />
          </van-grid>
        </div>
        <div class="user_main_middle">
          <van-grid class="middle_top" square :border="false">
            <van-grid-item icon="coupon-o" text="优惠券" />
            <van-grid-item icon="vip-card-o" text="权益卡" />
            <van-grid-item icon="gold-coin-o" text="余额" />
            <van-grid-item icon="gem-o" text="会员积分" />
          </van-grid>
          <van-grid square :border="false">
            <van-grid-item icon="location-o" text="收货地址" />
            <van-grid-item icon="bulb-o" text="生日纪念提醒" />
            <van-grid-item icon="star-o" text="我的收藏" />
            <van-grid-item icon="clock-o" text="浏览记录" />
          </van-grid>
        </div>
        <van-grid class="user_main_bottom" :border="false">
          <van-grid-item icon="service-o" text="联系客服" />
          <van-grid-item icon="question-o" text="帮助中心" />
          <van-grid-item icon="info-o" text="关于花礼" />
          <van-grid-item icon="setting-o" text="设置" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
<script>
export default {
  methods: {
    onClickLeft() {
      alert("返回");
    },
    onClickRight() {
      alert("返回");
    }
  }
};
</script>
