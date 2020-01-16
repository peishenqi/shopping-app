<template>
  <div class="detail">
    <div class="top">
      <van-nav-bar title="花礼网" @click-left="toList" @click-right="showNav">
        <van-icon name="arrow-left" slot="left" size="1.5rem" />
        <van-icon name="wap-nav" slot="right" size="1.5rem" />
      </van-nav-bar>
      <!-- 右上角导航 -->
      <div class="nav" v-show="navShow">
        <router-link class="nav_link" to="/">
          <van-icon name="wap-home-o" />
          <span>首页</span>
        </router-link>
        <router-link class="nav_link" to="/Sort">
          <van-icon name="apps-o" />
          <span>分类</span>
        </router-link>
        <router-link class="nav_link" to="/Cart">
          <van-icon name="shopping-cart-o" />
          <span>购物车</span>
        </router-link>
        <router-link class="nav_link" to="/User">
          <van-icon name="user-circle-o" />
          <span>我的</span>
        </router-link>
      </div>
    </div>
    <div class="item">
      <!-- 商品详情轮播 -->
      <van-swipe :height="450" :autoplay="3000">
        <van-swipe-item>
          <van-image :src="coverImg" />
        </van-swipe-item>
        <van-swipe-item>
          <!-- <van-image :src="coverImg" /> -->
          <van-image src="https://img01.hua.com/uploadpic/newpic/201801162043054106.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="https://img01.hua.com/uploadpic/newpic/201909021919180631.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image src="https://img01.hua.com/uploadpic/newpic/201708091719050547.jpg" />
        </van-swipe-item>
      </van-swipe>
      <!-- 商品标题 -->
      <div class="content">
        <div class="title clean">
          <p>
            {{ name }}
            <span>经典爆款，年销售冠军！</span>
          </p>
          <van-icon class="star" name="star-o" size="1.5rem" />
        </div>
        <div class="price clean">
          <p class="newPri fl">
            ￥ {{ price }}
            <span>￥ 9999</span>
          </p>
          <p class="fr">已售11.69万件</p>
        </div>
        <van-cell title="APP下单立减 5 元" is-link icon="fire-o" />
      </div>
      <!-- 商品规格 -->
      <div class="spec">
        <!-- <div>
          花语
          <span class="language"
            >你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</span
          >
        </div>-->
        <div class="left">
          <p>材料</p>
          <p>配送</p>
        </div>
        <div class="right">
          <p>{{ descriptions }}</p>
          <p>全国</p>
        </div>
      </div>
      <div class="select">
        <van-cell class="selected" is-link @click="showPopup">
          已选
          <span class="seleName0">一往情深</span>
        </van-cell>
        <van-popup v-model="selectedsShow" position="bottom" :style="{ height: '45%' }">
          <div class="selected_top clean">
            <img
              class="select_img fl"
              src="https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg"
              alt
            />
            <div class="selected_top_r fl">
              <p class="selected_price">￥ 259</p>
              <p class="selected_name">
                已选
                <span>一往情深</span>
              </p>
            </div>
          </div>
          <div class="selected_bottom">
            <van-cell value="选择" />
            <van-row type="flex" justify="space-around">
              <van-col span="6">一往情深</van-col>
              <van-col span="6">你最珍贵</van-col>
              <van-col span="6">暖暖</van-col>
            </van-row>
          </div>
          <van-goods-action>
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton()" />
            <van-goods-action-button type="danger" text="立即购买" @click="onPayButton" />
          </van-goods-action>
        </van-popup>
        <van-cell is-link @click="Delivery">
          配送至
          <span class="seleaddress">{{ addrInfo }}</span>
        </van-cell>
        <van-popup v-model="showDelivery" position="bottom" :style="{ height: '45%' }">
          <van-area
            @confirm="onConfirm"
            @cancel="oncCancel"
            :area-list="areaList"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            title="配送至"
          />
        </van-popup>
      </div>
      <!-- 评价 -->
      <div class="comment">
        <van-cell
          class="comment_title"
          title="订单评价"
          is-link
          value="最近已有8071条评价"
          @click="toComment"
        />
        <!-- <router-view></router-view> -->
        <div class="com_content">
          <div class="one_com_content clean">
            <van-image
              class="fl"
              round
              width="2rem"
              height="2rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <span class="user_name fl">用户名</span>
            <van-rate class="com_star fr" v-model="starValue" :count="5" size="1rem" readonly />
          </div>
          <div class="com_text">
            <p>哇！太棒了主要是女朋友开心，年底争取喝喜酒，我俩很幸福，感谢！</p>
            <van-image
              width="100"
              height="120"
              src="//img.hua.com/reviewpic/app/2019/05/15/638bc4c8179349508252d27fcbf8f77d.jpeg"
            />
            <van-cell class="address" title="江苏南京市江宁区" icon="location-o" />
          </div>
        </div>
        <van-button type="default" class="more" to="/comment">查看更多评论</van-button>
      </div>
      <!-- 图文详情 -->
      <div class="details">
        <van-cell class="details_title" value="图文详情" />
        <van-image src="https://img02.hua.com/pc/images/xianhua_cardstyle.jpg" />
        <van-image src="https://img01.hua.com/uploadpic/images/by_20180615112041289.jpg" />
        <van-image src="https://img01.hua.com/uploadpic/images/by_20180615111319404.jpg" />
      </div>
    </div>
    <!-- 底部 footer -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIconService" />
      <van-goods-action-icon icon="cart-o" text="购物车" :to="{name: 'Cart'}" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onPayButton" />
    </van-goods-action>
    <!-- 回到顶部按钮 -->
    <van-icon class="totop" v-show="totop" name="upgrade" size="2.5rem" @click="toTop" />
  </div>
</template>
<script>
import { get, post } from "../utils/ajax";
import area from "../assets/area";
import { Dialog } from "vant";
export default {
  data() {
    return {
      id: "",
      coverImg: "",
      name: "",
      descriptions: "",
      price: "",
      current: 0,
      navShow: false,
      selectedsShow: false,
      showDelivery: false,
      areaList: area,
      addrInfo: "",
      totop: false,
      starValue: 3,
      quantity: 1
    };
  },
  methods: {
    toList() {
      this.$router.back(-1);
    },
    // 弹窗导航显示
    showNav() {
      this.navShow = !this.navShow;
    },
    //  规格选择显示
    showPopup() {
      this.selectedsShow = true;
    },
    //  地址选择显示
    Delivery() {
      this.showDelivery = true;
    },
    onConfirm(val) {
      //确定选择
      this.showDelivery = false;
      this.addrInfo = val[0].name + "-" + val[1].name + "-" + val[2].name;
    },
    oncCancel() {
      //取消选择
      this.showDelivery = false;
    },

    toComment() {
      this.$router.push("comment");
    },

    // console.log("点击客服图标");
    onClickIconService() {
      this.$router.push("Contact");
    },

    onClickButton() {
      // alert("点击按钮");
      console.log(this.id);
      post("/api/v1/shop_carts", {
        product: this.id,
        quantity: this.quantity
      }).then(res => {
        // console.log(res.data);
        Dialog({ message: res.data.message });
      });
    },
    //立即购买
    onPayButton() {
      alert("点击购买按钮");
    },
    //   页面滚动距离
    handleScroll() {
      let scollTop = window.scrollY;

      if (scollTop > 1000) {
        this.totop = true; // 回到顶部
      } else {
        this.totop = false;
      }
    },
    // 回到顶部
    toTop() {
      let timer = setInterval(() => {
        let scrollTop = Math.floor(-window.scrollY / 5);
        document.body.scrollTop = window.scrollY + scrollTop;
        document.documentElement.scrollTop = window.scrollY + scrollTop;
        if (window.scrollY == 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    getDetail() {
      // console.log(id);
      get("/api/v1/products/" + this.$route.query.id).then(res => {
        console.log(res.data);
        this.coverImg = res.data.coverImg;
        this.name = res.data.name;
        this.descriptions = res.data.descriptions;
        this.price = res.data.price;
        this.id = res.data._id;
        localStorage.setItem("num", this.quantity);
      });
    }
  },
  mounted() {
    // 监听滚动距离
    window.addEventListener("scroll", this.handleScroll);
    this.getDetail();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    console.log(this.$route.query.id);
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

.detail {
  padding-bottom: 4rem;
  background: #e9ecf0;
}
/* top */
.top {
  position: relative;
}
.van-icon-arrow-left:before {
  color: #818384;
}
.van-icon-wap-nav:before {
  color: #818384;
}
/* 弹出窗---->导航 */
.nav {
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
}

.van-swipe {
  transform: translateZ(0);
}
.content {
  padding: 0 1rem;
  background: #fff;
}
.title p {
  float: left;
  width: 85%;
}
.title p span {
  margin-left: 1rem;
  color: #ff734c;
}
.star {
  float: right;
  width: 15%;
  height: 4.65rem;
  text-align: right;
  line-height: 4.65rem;
}
.price p {
  margin: 0.5rem 0;
}
.newPri {
  font-size: 1.42857143rem;
  color: #ff734c;
  font-weight: 600;
}
.newPri span {
  margin-right: 1.14285714rem;
  margin-left: 0.42857143rem;
  color: #b4babf;
  font-size: 1rem;
  font-weight: normal;
  text-decoration: line-through;
}
.van-cell {
  margin-bottom: 1rem;
  border-top: 1px solid #eff1f4;
  font-size: 1.14285714rem;
}
.spec {
  display: flex;
  padding: 0 1rem;
  background: #fff;
  font-size: 0.85714286rem;
  line-height: 1rem;
}
.left {
  display: flex;
  flex-direction: column;
  width: 3.5rem;
}
.right {
  flex: 1;
}
.selected {
  margin: 0;
  margin-top: 1rem;
}
.selected_top {
  padding: 1rem;
}
.select_img {
  width: 6rem;
}
.selected_top_r {
  margin-left: 2rem;
}
.selected_price {
  font-size: 1rem;
  color: #ff734c;
}
.selected_name {
  color: #71797f;
}
.selected_name span {
  color: #232628;
}
.seleName0 {
  margin-left: 1rem;
}
.seleaddress {
  margin-left: 1rem;
}
.van-col {
  width: 7rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  color: #232628;
  background: #f7f9fa;
}
.van-col:nth-of-type(1) {
  border: 1px solid #ff734c;
  background-color: #fff;
  color: #ff734c;
}
.comment {
  position: relative;
  padding-bottom: 4rem;
  background: #fff;
}
.comment_title {
  font-size: 0.8rem;
}
.one_com_content {
  padding: 0 1rem;
}
.user_name {
  margin-top: 0.5rem;
  margin-left: 1rem;
}
.more {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  margin-left: -3.6rem;
  width: 7.25rem;
  height: 2rem;
  line-height: 2rem;
  border: 1px solid;
  border-radius: 6px;
}
.com_text {
  padding: 0 1rem;
}
.address {
  margin-bottom: 0;
  padding: 0.6rem 0;
  font-size: 0.78571429rem;
}
.details {
  margin-top: 0.6rem;
  background: #fafafa;
}
.details_title {
  margin: 0;
}
.totop {
  position: fixed;
  right: 0.5rem;
  bottom: 6rem;
  z-index: 999;
  color: #666;
}
</style>
