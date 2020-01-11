<template>
  <div class="reminder">
    <div class="header">
      <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
      <van-icon name="wap-nav" slot="right" @click="showPopup" />

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
        <p>哦欧！~你还没有收藏的商品</p>
      </div>
      <div class="recommend">
        <h3>为你推荐</h3>
        <div class="recommend_list">
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
        </div>
      </div>
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
        path: "/user"
      });
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style  scoped>
.header {
  position: relative;
}
.van-icon-wap-nav {
  position: absolute;
  right: 1rem;
  margin-top: -2rem;
  z-index: 33;
}
.header .van-nav-bar {
  background: #ff734c;
}
.header .van-nav-bar__arrow,
.header .van-icon-wap-nav {
  color: #ccc;
}
.van-nav-bar__title {
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
  line-height: 2rem;
  /* text-align: left; */
  text-indent: 0.3rem;
}
.nav_list li {
  height: 3rem;
  line-height: 3rem;
}
.main {
  min-height: 27rem;

  position: relative;
}
.pic {
  height: 32rem;
  background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4230829731,1716708973&fm=26&gp=0.jpg")
    no-repeat;
}
.pic p {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  padding: 0;
  margin: 0;
}
.recommend h3 {
  font-weight: normal;
  height: 1.5rem;
  line-height: 1.5rem;
}
.recommend_list {
  display: flex;
  overflow-x: auto;
  height: 8rem;
}
.recommend_list dl {
  width: 7rem;
  height: 7rem;
  margin-right: 1rem;
}
.recommend_list dt img {
  width: 7rem;
  height: 5.5rem;
}
.recommend_list dd {
  text-align: center;
  margin-left: 0;
}
</style>
