<template>
  <div class="comment">
    <van-nav-bar class="top" title="客户评价" fixed @click-left="toList" @click-right="showNav">
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
    <!-- 评论内容 -->
    <p class="tip">
      最近已有
      <span>8071</span> 人评论
    </p>
    <div class="com_content" v-for="(item, index) in 12" :key="index">
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
    <!-- footer 底部加入购物车 -->
    <div class="footer">
      <div class="footer_left fl">
        <van-image
          class="fl"
          width="50"
          height="50"
          src="http://img01.hua.com/uploadpic/newpic/9010966.jpg_80x87.jpg"
        />
        <van-button square class="pro_text">
          <div class="pro fl">
            <span>一往情深</span>
            <span class="price">￥ 259</span>
          </div>
        </van-button>
      </div>
      <div class="cart fr" @click="onClickButton">加入购物车</div>
    </div>
    <!-- 回到顶部按钮 -->
    <van-icon class="totop" v-show="totop" name="upgrade" size="2.5rem" @click="toTop" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      starValue: 3,
      navShow: false,
      totop: false
    };
  },
  // 事件方法
  methods: {
    toList() {
      this.$router.back(-1);
    },
    showNav() {
      this.navShow = !this.navShow;
    },
    onClickButton() {
      this.$notify("购物车加入成功");
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
    }
  },
  // 挂载后
  mounted() {
    // 监听滚动距离
    window.addEventListener("scroll", this.handleScroll);
  },
  // 销毁后
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
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
.comment {
  background: #fff;
}
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
.tip {
  margin: 0;
  padding: 0 1rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1rem;
}
.tip span {
  color: #ff7d00;
}
.com_content {
  padding: 1rem 0;
  border-top: 1px solid #e9ecf0;
}
.one_com_content {
  padding: 0 1rem;
}
.user_name {
  margin-top: 0.5rem;
  margin-left: 1rem;
}
.com_text {
  padding: 0 1rem;
}
.address {
  padding: 0.6rem 0;
  font-size: 0.78571429rem;
}
.totop {
  position: fixed;
  right: 0.5rem;
  bottom: 6rem;
  z-index: 999;
  color: #666;
}
.footer {
  position: fixed;
  bottom: 0;
  padding-left: 1rem;
  width: 100%;
  height: 3rem;
  background: #fff;
}
.footer_pic {
  height: 100%;
}

.pro_text {
  height: 3rem;
  border: 0;
}
.pro span {
  margin-top: 0.2rem;
  display: block;
  line-height: 1rem;
}
.price {
  color: #ff7d00;
}
.cart {
  width: 40%;
  height: 100%;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  background: #ff7d00;
}
</style>
