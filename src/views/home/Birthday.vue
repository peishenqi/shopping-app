<template>
  <div class="brithday">
    <van-sticky>
    <header>
      <van-icon @click="onClickLeft" class="icon-left" name="arrow-left" />
      <van-nav-bar title="生日礼物" />
      <van-icon @click="showPopup" class="icon-right" name="wap-nav" />
                <!-- 右上角导航 -->
      <van-popup v-model="show" position="top" :style="{ height: '25%' }">
        <p @click="home">
          <van-icon name="wap-home" />首页
        </p>
        <p @click="hot">
          <van-icon name="star" />分类
        </p>
        <p @click="cart">
          <van-icon name="shopping-cart" />购物车
        </p>
        <p @click="user">
          <van-icon name="manager" />我的
        </p>
      </van-popup>
      <div>
        <van-grid :column-num="3">
          <van-grid-item to="/commemorate" text="纪念日礼物" />
          <van-grid-item to="/festival" text="节日礼物" />
          <van-grid-item to="/surprise" text="惊喜" />
        </van-grid>
      </div>
    </header>
    </van-sticky>

    <section>
      <div @click="toDetail(item._id)" v-for="(item, index) in list" :key="index">
        <img :src="item.coverImg" alt />
        <p>{{item.name}}</p>
        <p class="desc">{{item.descriptions}}</p>
        <p class="price">￥ {{item.price}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { get } from "../../utils/ajax";
export default {
  data() {
    return {
      show: false,
       navShow: false,
      list: []
    };
  },

  methods: {
    home(){
      this.$router.push({ path: "/" });
    },
    hot(){
      this.$router.push({ path: "/hot" });

    },
    cart(){
      this.$router.push({ path: "/cart" });
    },
    user(){
      this.$router.push({ path: "/user" });
    },
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
      console.log(111);
      this.$router.push({ path: "/" });
    },
    toDetail(id) {
      console.log(id);

      this.$router.push({
        name: "product_detail",
        query: { id: id }
      });
    },
    loadProduct() {
      let listData = {
        per: 10,
        pages: 1,
        name: "",
        product_category: ""
      };
      get("/api/v1/products", listData).then(res => {
        console.log(res);
        this.list = res.data.products;
      });
    }
  },
  created() {
    this.loadProduct();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clean:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.brithday {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
header {
  position: relative;
}
 header p {
  font-size: 0.8rem;
  text-align: left;
  line-height: 2rem;
  position: relative;
  padding-left: 2.5rem;
}
header .van-icon {
  position: absolute;
  top: 1.4rem;
  font-size: 1.6rem;
  z-index: 10;
} 
header .van-nav-bar {
  height: 4rem;
  line-height: 4rem;
  /* background:#ccc; */
}
header .van-nav-bar__title {
  margin: 0 auto;
  font-size: 1.4rem;
}
.icon-left {
  left: 0;
  margin: 0 1rem;
}
.icon-right {
  right: 0;
  margin: 0 1rem;
}
.van-popup--top {
  top: 3rem;
  left: 70%;
  width: 25%;
  border-radius: 0.2rem;
  padding-top: 0.5rem;
}
.van-popup--top p .van-icon {
  position: absolute;
  left: 0.5rem;
  top: 0.1rem;
  color: #ccc;
}

section {
  flex: 1;
  overflow-y: auto;
  background: #cccccc7a;
}
section div {
  width: 46%;
  background: #fff;
  box-sizing: border-box;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 0.8rem;
  float: left;
  margin-left: 0.6rem;
  /* max-height: 30.5rem; */
  margin-bottom: 0.3rem;
}
/* section div:nth-child(2n) {
  float: right;
  margin-right: 0.6rem;
  margin-left: 0;
} */
section img {
  width: 100%;
  height: 90%;
}
section div p {
  padding: 0 1rem;
  line-height: 1.4rem;
}
.desc {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  color: #ff734c;
}

/* .nav {
  position: absolute;
  width: 7rem;
  right: 1rem;
  top: 3rem;
  z-index: 999;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px;
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
} */
</style>
