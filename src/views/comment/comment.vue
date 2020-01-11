<template>
  <div class="comment">
    <van-nav-bar title="客户评价" fixed @click-left="toList" @click-right="showNav">
      <van-icon name="arrow-left" slot="left" size="1.5rem" />
      <van-icon name="wap-nav" slot="right" size="1.5rem" />
    </van-nav-bar>
    <p class="tip">
      最近已有
      <span>8071</span> 人评论
    </p>
    <div class="com_content" v-for="(item, index) in 2" :key="index">
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
    <van-button type="default" to="/">首页</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      starValue: 3
    };
  },
  methods: {
    toList() {
      alert("返回商品列表页");
    },
    showNav() {
      alert("显示导航");
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
.comment {
  padding: 3rem 0;
  background: #fff;
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
</style>
