<template>
  <div class="detail">
    <div class="top">
      <van-nav-bar title="花礼网" fixed @click-left="toList" @click-right="showNav">
        <van-icon name="arrow-left" slot="left" size="1.5rem" />
        <van-icon name="wap-nav" slot="right" size="1.5rem" />
      </van-nav-bar>
      <div class="nav" v-show="nav">
        <ul>
          <li>
            <van-icon name="wap-home-o" />
            <span>首页</span>
          </li>
          <li>
            <van-icon name="apps-o" />
            <span>分类</span>
          </li>
          <li>
            <van-icon name="shopping-cart-o" />
            <span>购物车</span>
          </li>
          <li>
            <van-icon name="user-circle-o" />
            <span>我的</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="item">
      <!-- 商品详情轮播 -->
      <van-swipe :height="450" :autoplay="3000">
        <van-swipe-item>
          <van-image src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
        </van-swipe-item>
        <van-swipe-item>
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
            一往情深-精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎
            <span>经典爆款，年销售冠军！</span>
          </p>
          <van-icon class="star" name="star-o" size="1.5rem" />
        </div>
        <div class="price clean">
          <p class="newPri fl">
            ￥ 259
            <span>￥ 315</span>
          </p>
          <p class="fr">已售11.69万件</p>
        </div>
        <van-cell title="APP下单立减 5 元" is-link icon="fire-o" />
      </div>
      <!-- 商品规格 -->
      <div class="spec">
        <div>
          花语
          <span class="language">你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</span>
        </div>
        <div>
          材料
          <span>高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎</span>
        </div>
        <div>
          配送
          <span>全国</span>
        </div>
      </div>
      <div class="select">
        <van-cell is-link @click="showPopup">已选</van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
          <van-goods-action>
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
          </van-goods-action>
        </van-popup>
        <van-cell is-link @click="Delivery">配送至</van-cell>
        <van-popup v-model="showDelivery" position="bottom" :style="{ height: '45%'}">
          <!-- <van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" title="配送至" /> -->
        </van-popup>
      </div>
      <!-- 评价 -->
      <div class="comment">
        <van-cell title="订单评价" is-link value="最近已有8071条评价" @click="toComment" />
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
        <van-button type="default" class="more">查看更多评论</van-button>
      </div>
    </div>
    <!-- 底部 footer -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      show: false,
      showDelivery: false,
      starValue: 3,
      nav: false
    };
  },
  methods: {
    toList() {
      alert("返回上一页");
    },
    showNav() {
      this.nav = !this.nav;
    },
    showPopup() {
      this.show = true;
    },
    Delivery() {
      this.showDelivery = true;
    },
    toComment() {
      this.$router.push("comment");
    },
    onClickIcon() {
      alert("点击图标");
    },
    onClickButton() {
      alert("点击按钮");
    }
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
.nav li {
  padding: 0 1rem;
  height: 3rem;
  line-height: 3rem;
}
.nav li span {
  margin-left: 0.5rem;
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
  padding: 0 1rem;
  background: #fff;
  font-size: 0.85714286rem;
  line-height: 1rem;
}
.spec div {
  padding: 0.8rem 0;
}
.spec span {
  display: inline-block;
  width: 80%;
  margin-left: 1rem;
}
.comment {
  position: relative;
  padding-bottom: 2rem;
  background: #fff;
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
  bottom: 0;
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
  padding: 0.6rem 0;
  font-size: 0.78571429rem;
}
</style>

