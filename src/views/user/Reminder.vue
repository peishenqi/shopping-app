<template>
  <div class="reminder">
    <div class="header">
      <van-nav-bar title="生日/纪念日提醒" left-arrow @click-left="onClickLeft" />
      <van-icon name="wap-nav" slot="right" @click="showPopup" :style="{display:'none'}" />

      <van-popup
        v-model="show"
        position="top"
        :style="{height:'30%'}"
        :overlay="false"
        :closeable="true"
      >
        <ul class="nav_list">
          <li to="/">
            <van-icon name="wap-home" />首页
          </li>
          <li to="/sort">
            <van-icon name="star" />分类搜索
          </li>
          <li to="/cart">
            <van-icon name="shopping-cart" />购物车
          </li>
          <li to="/user">
            <van-icon name="manager" />我的
          </li>
        </ul>
      </van-popup>
    </div>
    <div class="main">
      <div class="pic">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4230829731,1716708973&fm=26&gp=0.jpg"
        />
      </div>
    </div>
    <div class="foot">
      <van-button type="default" size="small">+添加提醒</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "user"
      });
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style  scoped>
/* .header .van-nav-bar {
  background: #ff734c;
} */
.header .van-nav-bar__arrow,
.header .van-icon-wap-nav ,.van-nav-bar__title{
  color: black;
}
 /* {
  color: #fff;
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
  /* height: 3rem; */
  /* line-height: 2rem; */
  /* text-align: left; */
  /* text-indent: 0.3rem; */
/* } */
.nav_list li {
  height: 3rem;
  line-height: 3rem;
}
.main {
  overflow-x: hidden;
  width: 100%;
  min-height: 27rem;
  background: #ccc;
}
.pic {
  width: 16rem;
  height: 16rem;
}
.mian .pic img {
  width: 100%;
  height: 100%;
}
.foot {
  padding: 0 2rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.foot .van-button--small {
  width: 100%;
  height: 2.6rem;
  background: #ff734c;
  border-radius: 0.5rem;
}
.foot .van-button__text {
  color: #fff;
}
</style>
