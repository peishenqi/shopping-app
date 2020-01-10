<template>
  <div class="Cart">
    <!-- header -->
    <div>
      <!-- <van-nav-bar left-arrow @click-left="onClickLeft" :class="classA" title="购物车" /> -->
      <van-nav-bar title="购物车" left-arrow @click-left="onClickLeft" :class="classA" />
    </div>
    <!-- main  -->
    <div class="main">
      <div class="top">
        <span class="span">登录后将同步您的购物车商品</span>
        <van-button type="primary" round size="small" :class="class2" @click="login">登录</van-button>
      </div>
      <div class="emptycart">
        <div class="emptycart_t">
          <img src="https://img02.hua.com/m/Shopping/m_shopping_empty_cart.png?v2" alt />
        </div>
        <div class="emptycart_c">
          <p>购物车内暂时没有商品</p>
        </div>

        <div class="emptycart_b">
          <van-button type="primary" round size="small" :class="class3" @click="toLook">去逛逛</van-button>
        </div>
      </div>
      <div class="guess">
        <h3>猜你喜欢</h3>
        <dl>
          <dt>
            <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
          </dt>
          <dd>一往情深.精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</dd>
          <span>￥259</span>
        </dl>
        <dl>
          <dt>
            <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
          </dt>
          <dd>一往情深.精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</dd>
          <span>￥259</span>
        </dl>
        <dl>
          <dt>
            <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
          </dt>
          <dd>一往情深.精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</dd>
          <span>￥259</span>
        </dl>
        <dl>
          <dt>
            <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
          </dt>
          <dd>一往情深.精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</dd>
          <span>￥259</span>
        </dl>
        <dl>
          <dt>
            <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
          </dt>
          <dd>一往情深.精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</dd>
          <span>￥259</span>
        </dl>
        <dl>
          <dt>
            <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
          </dt>
          <dd>一往情深.精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</dd>
          <span>￥259</span>
        </dl>
      </div>
    </div>
    <p class="main_b">已经到底了...</p>
    <div class="foot"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classA: ["header_left"],
      class2: ["login"],
      class3: ["tolook"]
    };
  },
  methods: {
    onClickLeft() {
      // Toast("返回");
      // path: "/fl";
      // name: "Fl";
      this.$router.push({
        path: "sort"
      });
    },
    toLook() {
      this.$router.push({
        path: "/"
      });
    },
    login() {
      this.$router.push({
        path: "user"
      });
    }
  }
};
</script>
<style scoped>
/* * {
  padding: 0;
  margin: 0;
} */
.Cart {
  background: #ccc;
}

.Cart .van-nav-bar__arrow {
  color: #ccc;
}

.Cart .top {
  display: flex;
  justify-content: center;
  background: #fff0ec;
  height: 2.5rem;
  line-height: 2.3rempx;
  font-size: 0.8px;
}
.main {
  overflow: hidden;
  background: #fff;
}
.main .span {
  margin-right: 0.8rem;
}
.main .login {
  width: 54px;
  height: 1.4rempx;
  background: none;
  border: 1px solid #ff734c;
  color: #ff734c;
  font-size: 0.8rem;
  line-height: 1.4rem;
  text-align: center;

  display: inline-block;
}
.Cart .emptycart {
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  /* margin-bottom: 0.3rem; */
}
.emptycart_t {
  height: 10rem;
  width: 100%;
  position: relative;
}
.emptycart img {
  width: 8.8rem;
  height: 7rem;
  position: absolute;
  bottom: 0;
  left: 50%;

  margin-left: -4.4rem;
}
.Cart .emptycart .emptycart_c {
  padding-top: 0.6rem;
  margin-top: 0.4rem;
}
.Cart .emptycart .emptycart_b .tolook {
  width: 6.5rem;
  height: 1.4rem;
  background: #ff734c;
  text-align: center;
  line-height: 20px;
  color: #fff;
  display: block;
}

.guess {
  margin-top: 0.3rem;
  background: #fff;
  padding: 0 0.4rem;
}
.guess h3 {
  height: 2rem;
  font-size: 1.14285714rem;
  color: #232628;
  padding: 0 1.14285714rem;
  line-height: 2rem;
}
.guess dl {
  width: 49%;
  max-height: 22rem;
  float: left;
  box-shadow: 3px 5px 5px #ccc;
  margin-bottom: 0.3rem;
}
.guess dl:nth-child(2n) {
  float: right;
}
.guess dl img {
  width: 100%;
  max-height: 19rem;
}
.guess dl dd {
  margin-left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guess dl span {
  color: #ff734c;
}
.main_b {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  background: #fff;
}
.foot {
  height: 50px;
}
</style>