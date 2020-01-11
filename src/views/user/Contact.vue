<template>
  <div class="contact">
    <div class="header">
      <van-nav-bar title="客服" left-arrow @click-left="onClickLeft" />
      <van-icon name="wap-nav" slot="right" @click="showPopup" />

      <van-popup
        v-model="show"
        position="top"
        :style="{ height: '30%' }"
        :overlay="false"
        :closeable="true"
      >
        <ul class="nav_list">
          <li to="/"><van-icon name="wap-home" />首页</li>
          <li to="/sort"><van-icon name="star" />分类搜索</li>
          <li to="/cart"><van-icon name="shopping-cart" />购物车</li>
          <li to="/user"><van-icon name="manager" />我的</li>
        </ul>
      </van-popup>
    </div>
    <div class="main">
      <div class="main_t">
        <div>
          <img
            src="http://img4.imgtn.bdimg.com/it/u=3824642019,3199656362&fm=214&gp=0.jpg"
            alt
          />
          <span>专属秘书|喜棠</span>
        </div>
        <div class="mess">
          Hi，我是您的专属秘书喜棠，添加我微信，我将帮您催单，有需求时，1对1帮您走绿色通道。
        </div>
        <div class="wxh">
          <span>微信号：huali_duebass</span>
          <van-button type="default" size="small" @click="add"
            >加我微信</van-button
          >
        </div>
      </div>
      <div class="main_c">
        <div class="main_c_l">
          <van-icon name="service" />
          <span>在线客服</span>
        </div>
        <div class="main_c_r">
          <van-icon name="phone-circle" />
          <span>400电话</span>
        </div>
      </div>
      <div class="main_b">
        <span> <van-icon name="chat" />&nbsp;&nbsp;&nbsp;在线留言 </span>
        <b>&gt;</b>
      </div>
    </div>
    <p class="server">客服服务时间为：08:30-21:00</p>
  </div>
</template>
<script>
import Vue from "vue";
import { Dialog } from "vant";
export default {
  data() {
    return {
      show: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "user",
      });
    },
    showPopup() {
      this.show = true;
    },
    add() {
      Dialog.confirm({
        title: "复制成功",
        message: "微信号已复制成功，是否跳转到微信添加好友？",
      })
        .then(() => {
          // on confirm
          alert("已复制成功");
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>
<style scoped>
.header {
  position: relative;
}
.van-icon-wap-nav {
  position: absolute;
  right: 1rem;
  margin-top: -2rem;
  z-index: 33;
}
.van-popup--top {
  width: 30%;
  box-shadow: 1px 1px 1px 1px #ccc;
  left: 15rem;
  top: 3rem;
}
.nav_list {
  position: absolute;

  width: 45%;
  height: 9rem;
  color: #999;
}
.nav_list {
  width: 100%;
  line-height: 2rem;
  text-indent: 0.3rem;
}
.nav_list li {
  height: 3rem;
  line-height: 3rem;
}
.contact {
  min-height: 40rem;
  background: #ccc;
}
.header .van-nav-bar {
  background: #ff734c;
}
.header .van-nav-bar__arrow,
.header .van-icon-wap-nav {
  color: #ccc;
}
.main {
  margin: 0;
  padding: 0 1rem;
  background: #fff;
}
.main_t {
  height: 9rem;
}
.main_t img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  padding: 0.5rem;
  vertical-align: middle;
}
.main_t span {
  text-align: left;
  line-height: 3.5rem;
  height: 3.5rem;
  display: inline-block;
  vertical-align: middle;
}

.mess {
  /* border: 1px #ccc solid; */
  height: 2.6rem;
  font-size: 0.8rem;
  line-height: 1.3rem;
  padding: 0.3rem;
  box-shadow: 2px 2px 2px 2px #ccc;
}
.wxh {
  height: 2rem;
}
.wxh span {
  height: 2rem;
  line-height: 2rem;
}
.wxh .van-button--small {
  width: 5rem;
  height: 1.8rem;
  float: right;
  margin-top: 0.3rem;
  line-height: 1.8rem;
  background: #ff734c;
  color: #fff;
}
.main_c {
  height: 10rem;
}
.main_c_l,
.main_c_r {
  height: 10rem;
  float: left;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.van-icon-service,
.van-icon-phone-circle {
  font-size: 5rem;
  color: #ff734c;
}
.main_b {
  height: 3rem;
  line-height: 3rem;
}
.main_b b {
  float: right;
  font-weight: normal;
  color: #ccc;
}

.server {
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
  line-height: 2rem;
}
</style>
