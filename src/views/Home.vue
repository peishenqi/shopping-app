<template>
  <div class="home">
    <van-sticky>
      <header>
        <van-icon @click="Sort" class="icon-left" name="qr" />
        <van-nav-bar title="花礼网" />
        <i class="icon-right van-icon van-icon-service"></i>
      </header>
    </van-sticky>

    <section>
      <!-- 轮播 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="https://img02.hua.com/slider/18_youflower_m.jpg?830" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img02.hua.com/slider/20_valentine_banner_m.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img02.hua.com/slider/19_birthday_banner_m.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://img02.hua.com/slider/17_mjz_m.jpg" alt />
        </van-swipe-item>
      </van-swipe>

      <!-- 分类 -->
      <van-grid>
        <van-grid-item to="/Birthday" icon="birthday-cake-o" text="生日" />
        <van-grid-item to="/Commemorate" icon="flower-o" text="纪念日" />
        <van-grid-item to="/Festival" icon="gift-o" text="节日" />
        <van-grid-item to="/Surprise" icon="gem-o" text="惊喜" />
      </van-grid>

      <!-- 选择 -->
      <h5 style="margin:0.5rem 1rem,font-size:1.15rem">| 一秒选择</h5>
      <div class="someone">
        <div class="home_nav">
          <van-image
            class="nav_pic"
            @click="Girlfriend"
            width="10rem"
            height="10rem"
            src="https://img02.hua.com/m/home/img/m_home_use_lover.png"
          />
          <p>送女友</p>
        </div>
        <div class="home_nav">
          <van-image
            class="nav_pic"
            @click="Elder"
            width="10rem"
            height="10rem"
            src="https://img02.hua.com/m/home/img/m_home_use_elder.png"
          />
          <p>送长辈</p>
        </div>
        <div class="home_nav">
          <van-image
            class="nav_pic"
            @click="Friend"
            width="10rem"
            height="10rem"
            src="https://img02.hua.com/m/home/img/m_home_use_friends.png"
          />
          <p>送朋友</p>
        </div>
      </div>

      <!-- 热卖 -->
      <div class="select">
        <div class="hot" @click="HotSale">
          <h4>热卖榜</h4>
          <p>集万千宠爱</p>
          <!-- <img src="http://img1.imgtn.bdimg.com/it/u=1769307511,4173135256&fm=26&gp=0.jpg" alt /> -->
        </div>
        <!-- 特价 -->
        <div class="special" @click="Special">
          <h4>特价专区</h4>
          <p>超值好货</p>
          <!-- <img src="http://dpic.tiankong.com/7d/u9/QJ8445891788.jpg" alt /> -->
        </div>
      </div>

      <!-- 鲜花推荐 -->

      <div class="give">
        <div class="recommend">鲜花推荐</div>
        <ul class="list">
          <li v-for="item in product_list" :key="item._id">
            <router-link :to="{ name: 'product_detail', query: { id: item._id } }">
              <van-card
                :price="item.price"
                :desc="item.descriptions"
                :title="item.name"
                :thumb="item.coverImg"
              >
                <div slot="footer">
                  <van-button size="mini">
                    <van-icon class="cart" name="shopping-cart-o" />
                  </van-button>
                </div>
              </van-card>
            </router-link>
          </li>
        </ul>
        <van-button class="more" plain hairline type="info" :to="{name:'Sort'}">查看更多</van-button>
      </div>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import { get } from "../utils/ajax";

export default {
  data() {
    return {
      coverImg: "",
      descriptions: "",
      name: "",
      price: "",
      product_list: []
    };
  },
  name: "Home",
  components: {},
  methods: {
    Sort() {
      this.$router.push({ path: "Sort" });
    },
    Girlfriend() {
      this.$router.push({ path: "Girlfriend" });
    },
    Elder() {
      this.$router.push({ path: "Elder" });
    },
    Friend() {
      this.$router.push({ path: "Friend" });
    },
    HotSale() {
      this.$router.push({ path: "HotSale" });
    },
    Special() {
      this.$router.push({ path: "Special" });
    },

    loadProduct() {
      // console.log(12313);
      get("/api/v1/products", {
        per: 3,
        page: 1,
        name: "",
        product_catgory: "",
        price: ""
      }).then(res => {
        // console.log(res);
        this.product_list = res.data.products;
        /* for (let i = 0; i < res.data.products.length; i++) {
          console.log(res.data.products[i].coverImg);
        } */
      });
    }
  },
  mounted: function() {
    this.loadProduct();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
header {
  /* background: black; */
  position: relative;
}
header .van-icon {
  position: absolute;
  font-size: 1.6rem;
  top: 1.4rem;
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

section {
  flex: 1;
}
.van-swipe {
  transform: translateZ(0);
}
.van-swipe-item img {
  width: 100%;
  vertical-align: middle;
}
/* 选择 */
h5 {
  font-size: 1.15rem;
}
.someone {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.home_nav {
  position: relative;
  margin: 1rem 0;
}
.nav_pic {
  width: 7.5rem !important;
  height: 8.5rem !important;
}
.home_nav p {
  position: absolute;
  bottom: 0.6rem;
  left: 2.5rem;
  font-size: 1rem;
  color: #fff;
}
/* 热卖榜 */
.select {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 10rem;
}
.hot,
.special {
  width: 49%;
  position: relative;
}
.hot {
  border: 1px solid #ccc;
  background: url(../assets/home_hot_bg.png) no-repeat;
  background-size: 100%;
}
.special {
  border: 1px solid #ccc;
  border-left: 0;
  background: url(../assets/m_home_special2.png) no-repeat;
  background-size: 100%;
}
.hot h4,
.special h4 {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #4b555f;
}
.hot p,
.special p {
  position: absolute;
  top: 3rem;
  left: 1rem;
  color: #6465668f;
  font-size: 0.5rem;
}
.hot {
  float: left;
}
.special {
  float: right;
}
/* 鲜花推荐 */
.recommend {
  width: 100%;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: 900;
}
.give {
  margin: 1.5rem 0 3rem;
  position: relative;
}
.give p {
  text-align: center;
  margin: 0.5rem 0;
}
.cart {
  font-size: 1.3rem;
}
.van-button {
  border: 0;
}
.van-card {
  background: #fff;
  padding: 0 1rem;
}
.list {
  width: 100%;
  height: 34.5rem;
  overflow: hidden;
}

.van-card__desc {
  height: 3rem;
}
.van-ellipsis {
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2 !important;
  overflow: hidden !important;
  height: 4rem !important;
}
footer {
  height: 50px;
  background: #fff;
}
.more {
  width: 7rem;
  height: 2rem;
  line-height: 1.5rem;
  border-color: #333;
  color: #333;
  position: absolute;
  bottom: -2rem;
  left: 9rem;
}
</style>
