<template>
  <div class="Cart">
    <!-- header -->
    <div>
      <!-- <van-nav-bar left-arrow @click-left="onClickLeft" :class="classA" title="购物车" /> -->
      <van-nav-bar
        title="购物车"
        left-arrow
        @click-left="onClickLeft"
        :class="classA"
      />
    </div>
    <!-- main  -->
    <div class="main" v-if="isNothing">
      <div class="top">
        <span class="span">登录后将同步您的购物车商品</span>
        <van-button
          type="primary"
          round
          size="small"
          :class="class2"
          @click="login"
          >登录</van-button
        >
      </div>
      <div class="emptycart">
        <div class="emptycart_t">
          <img
            src="https://img02.hua.com/m/Shopping/m_shopping_empty_cart.png?v2"
            alt
          />
        </div>
        <div class="emptycart_c">
          <p>购物车内暂时没有商品</p>
        </div>

        <div class="emptycart_b">
          <van-button
            type="primary"
            round
            size="small"
            :class="class3"
            @click="toLook"
            >去逛逛</van-button
          >
        </div>
      </div>
      <div class="guess">
        <h3>猜你喜欢</h3>
        <dl v-for="p in lists" :key="p._id">
          <dt>
            <img :src="p.coverImg" alt />
          </dt>
          <dd>{{ p.descriptions }}</dd>
          <span>￥{{ p.price }}</span>
          <p></p>
        </dl>
      </div>
      <p class="main_b">已经到底了...</p>
    </div>

    <div class="main" v-if="!isNothing">
      <div class="main_top">
        <div style="min-height:7.5rem;" v-for="item in list" :key="item._id">
          <div class="left">
            <input v-model="item.checked" type="checkbox" class="singleSel" />
          </div>
          <div class="right">
            <van-card
              :price="item.product.price"
              :title="item.product.descriptions"
              :thumb="item.product.coverImg"
            >
              <div slot="tags">
                数量
                <van-stepper
                  v-model="item.quantity"
                  @plus="addNum(item._id)"
                  @minus="subNum(item._id)"
                />
                <!-- <span class="proPrice">{{item.product.price}}</span> -->
              </div>
            </van-card>
            <div @click="del(item._id)" class="delete">
              <van-icon name="delete" />
            </div>
          </div>
        </div>
      </div>

      <div class="main_center">
        <van-tabs v-model="active">
          <van-tab title="购买该商品的还购买了">
            <div class="recommend_list">
              <dl v-for="v in like" :key="v._id">
                <router-link
                  :to="{ name: 'product_detail', query: { id: v._id } }"
                >
                  <dt>
                    <img :src="v.coverImg" />
                  </dt>
                  <dd>￥{{ v.price }}</dd>
                </router-link>
              </dl>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div class="main_bottom">
        <van-submit-bar
          :price="total"
          button-text="提交订单"
          @submit="onSubmit"
        >
          <van-checkbox v-model="checkedAll">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
import { get, del } from "../utils/ajax";
import { Dialog } from "vant";
export default {
  data() {
    return {
      value: 1,
      active: 2,
      isNothing: false,
      classA: ["header_left"],
      class2: ["login"],
      class3: ["tolook"],
      list: [],
      ischecked: false,
      lists: [],
      like: [],
    };
  },
  // 购物车数据请求
  async created() {
    const res = await get("/api/v1/shop_carts");
    console.log(res.data);
    // console.log(res.data.length)
    if (!res.data.length == 0) {
    } else {
      this.isNothing = !this.isNothing;
    }
    this.list = [];
    res.data.forEach(item => {
      this.list.push({
        ...item,
        ...{ checked: false },
      });
    });
  },
  mounted: function() {
    this.loadproduct();
    this.and();
  },
  methods: {
    //猜你喜欢数据获取
    loadproduct() {
      const data = {
        per: 10,
        page: 2,
        name: "",
        product_category: "",
      };
      get("/api/v1/products", data).then(res => {
        // console.log(res.data.products);
        this.lists = [];
        res.data.products.forEach(p => {
          this.lists.push({
            ...p,
          });
        });
      });
    },
    //买了还买了
    and() {
      const data = {
        per: 8,
        page: 4,
        name: "",
        product_category: "",
      };
      get("/api/v1/products", data).then(res => {
        console.log(res.data.products);
        this.like = [];
        res.data.products.forEach(v => {
          this.like.push({
            ...v,
          });
        });
      });
    },
    //返回按钮
    onClickLeft() {
      this.$router.back(-1);
    },
    //去逛逛
    toLook() {
      this.$router.push({
        path: "/",
      });
    },
    //登录同步购物车
    login() {
      this.$router.push({
        path: "user",
        name: "User",
      });
    },
    //提交订单
    onSubmit() {
      this.$router.push({
        path: "order",
      });
    },
    //删除商品
    del(id) {
      Dialog.confirm({
        title: "确认删除",
        message: "该操作无法撤回，请谨慎选择",
      })
        .then(() => {
          console.log(id);
          del("/api/v1/shop_carts/" + id).then(res => {
            console.log(res);
            window.location.reload();
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    //数量加按钮
    addNum(id) {
      console.log("数量加按钮");
      console.log(id);
      get("/api/v1/products/" + id).then(res => {
        console.log(res);
        let num = localStorage.getItem("num");
        console.log(num);
      });
      // console.log(this.$route)
    },
    //数量减按钮
    subNum(id) {
      console.log("数量减按钮");
      // console.log("数量加按钮");
      console.log(id);
      get("/api/v1/products/" + id).then(res => {
        console.log(res);
      });
      console.log(this.$route);
    },
  },

  computed: {
    checkedAll: {
      //单选
      get() {
        return (
          this.list.filter(item => item.checked).length == this.list.length
        );
      },
      //全选
      set(val) {
        // console.log(111);
        this.list.forEach(item => (item.checked = val));
      },
    },
    //总价
    total() {
      return this.list
        .filter(item => item.checked)
        .reduce(function(v, item) {
          console.log(item);
          return v + item.product.price * item.quantity * 100;
        }, 0);
    },
  },
};
</script>

<style scoped>
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
  line-height: 2.5rem;
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
  margin-top: 0.4rem;
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
  border: 0;
}

.guess {
  margin-top: 0.3rem;
  background: #fff;
  padding: 0 0.4rem;
  min-height: 22rem;
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
  display: block;
}
.foot {
  height: 50px;
}
.main_top {
  overflow: hidden;
  min-height: 15rem;
}
.van-card__header {
  width: 100%;
  float: right;
}
.singleSel {
  /* margin-top: 3rem; */
  display: inline;
}
.van-card__title {
  height: 2rem;
  font-size: 1rem;
}
.van-stepper__input {
  width: 10rem;
}
.proPrice {
  color: #ff734c;
  font-size: 1.4rem;
}

.main_center .van-tabs__line {
  background-color: #ff734c;
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

.van-submit-bar__text {
  text-align: left;
}
.van-submit-bar__price {
  color: #ff734c;
}
.van-tab__text,
.van-tabs {
  margin-top: 2rem;
}
.left {
  width: 10%;
  min-height: 7rem;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  width: 90%;
  height: 100%;
  float: right;
  position: relative;
}
.van-submit-bar__text {
  padding-left: 2rem;
}
.delete {
  display: inline;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}
</style>
