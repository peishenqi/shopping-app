<template>
  <div class="home">
    <van-sticky>
      <header>
        <van-icon @click="Sort" class="icon-left" name="qr" />
        <van-nav-bar title="没名字" />
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
          <img
            src="https://img02.hua.com/slider/20_valentine_banner_m.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img02.hua.com/slider/19_birthday_banner_m.jpg"
            alt
          />
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
      <h5 style="margin:0.5rem 1rem">| 一秒选择</h5>
      <div class="someone">
        <div>
          <van-image
            @click="Girlfriend"
            round
            width="10rem"
            height="10rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p>送女友</p>
        </div>
        <div>
          <van-image
            @click="Elder"
            round
            width="10rem"
            height="10rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p>送长辈</p>
        </div>
        <div>
          <van-image
            @click="Friend"
            round
            width="10rem"
            height="10rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p>送朋友</p>
        </div>
      </div>

      <!-- 热卖 -->
      <div class="select">
        <div class="hot" @click="HotSale">
          <h4>热卖榜</h4>
          <p>集万千宠爱</p>
          <img
            src="http://img1.imgtn.bdimg.com/it/u=1769307511,4173135256&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <!-- 特价 -->
        <div class="special" @click="Special">
          <h4>特价专区</h4>
          <p>超值好货</p>
          <img src="http://dpic.tiankong.com/7d/u9/QJ8445891788.jpg" alt />
        </div>
      </div>

      <!-- 送女友 -->
      <div class="girlfriend">
        <p>/~送女友~/</p>
        <van-card
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">
              <van-icon class="cart" name="shopping-cart-o" />
            </van-button>
          </div>
        </van-card>
      </div>

      <!-- 送长辈 -->
      <div class="eldership">
        <p>/~送长辈~/</p>

        <van-card
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">
              <van-icon class="cart" name="shopping-cart-o" />
            </van-button>
          </div>
        </van-card>
      </div>

      <!-- 送朋友 -->
      <div class="friend">
        <p>/~送朋友~/</p>
        <ul>
          <li v-for="item in product_list" :key="item._id">
            <router-link
              :to="{ name: 'product_detail', query: { id: item._id } }"
            >
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
      product_list: [],
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
    // jump(){
    //   this.$router.push({path:'Service'})
    // }
    loadProduct() {
      // console.log(12313);
      get("/api/v1/products", {
        per: 3,
        page: 1,
        name: "",
        product_catgory: "",
        price: "",
      }).then(res => {
        // console.log(res);
        for (let i = 0; i < res.data.products.length; i++) {
          let a = this.product_list.push(res.data.products[i]);
        }
      });
    },
    // getDetail(id) {
    //   // console.log(id);
    //   get("/api/v1/products/" + id).then(res => {
    //     console.log(res);

    //     this.$router.push({
    //       path: "/product_detail",
    //       params: { id: id },
    //       name: "product_detail",
    //     });
    //   });
    // },
  },
  mounted: function() {
    this.loadProduct();
  },
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
  /* overflow-y:auto; */
}
.van-swipe-item img {
  width: 100%;
  vertical-align: middle;
}
/* 选择 */
.someone {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
section .van-image {
  width: 5rem !important;
  height: 5rem !important;
}
.someone p {
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
}
/* 热卖榜 */
.select {
  width: 100%;
  height: 10rem;
}
.hot,
.special {
  width: 50%;
  box-sizing: border-box;
  position: relative;
  border: 5px solid #ccc;
  border-radius: 23%;
}
.hot img,
.special img {
  width: 100%;
  height: 9rem;
}
.hot h4,
.special h4 {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  color: #4b555f;
}
.hot p,
.special p {
  position: absolute;
  top: 2rem;
  left: 1rem;
  color: #6465668f;
}
.hot {
  float: left;
}
.special {
  float: right;
}
/* 送女友 */
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
.girlfriend p,
.eldership p,
.friend p {
  text-align: center;
  margin: 0.5rem 0;
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
</style>
