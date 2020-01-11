<template>
  <div class="help">
    <div class="header">
      <van-nav-bar title="帮助中心" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main">
      <div class="main_c">
        <div class="main_c_l">
          <van-icon name="question-o" />
          <span>常见问题&gt;</span>
        </div>
        <ul class="main_c_r">
          <li>鲜花3小时送达</li>
          <li>提前半天预定</li>
          <li>异地送花</li>
          <li>鲜花免费配送</li>
        </ul>
      </div>

      <div class="main_c">
        <div class="main_c_l">
          <van-icon name="orders-o" />
          <span>订单帮助&gt;</span>
        </div>
        <ul class="main_c_r">
          <li>订单查询</li>
          <li>取消订单说明</li>
          <li>订单补交货款</li>
          <li>取消订单手续费</li>
        </ul>
      </div>
      <div class="main_c">
        <div class="main_c_l">
          <van-icon name="orders-o" />
          <span>售后服务&gt;</span>
        </div>
        <ul class="main_c_r">
          <li>投诉说明</li>
          <li>礼券说明</li>
          <li>鲜花售后服务</li>
          <li>绿植售后服务</li>
        </ul>
      </div>
      <div class="main_c">
        <div class="main_c_l">
          <van-icon name="point-gift-o" />
          <span>礼品卡&gt;</span>
        </div>
        <ul class="main_c_r">
          <li>使用规则</li>
          <li>使用方法</li>
          <li>查询余额</li>
          <li></li>
        </ul>
      </div>
      <div class="main_c">
        <div class="main_c_l">
          <van-icon name="bullhorn-o" />
          <span>配送说明&gt;</span>
        </div>
        <ul class="main_c_r">
          <li>配送说明</li>
          <li>配送范围</li>
          <li>配送费用查询</li>
          <li>港澳台配送说明</li>
        </ul>
      </div>
      <div class="main_c">
        <div class="main_c_l">
          <van-icon name="question-o" />
          <span>服务声明&gt;</span>
        </div>
        <ul class="main_c_r">
          <li>服务声明</li>
          <li>购物流程</li>
          <li>隐私条款</li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="foot">
      <div class="foot_l">
        <van-icon name="service-o" />
        <span>在线客服</span>
        <b>8:30-21:00</b>
      </div>
      <div class="foot_r">&gt;</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/user"
      });
    }
  }
};
</script>
<style  scoped>
.help {
  background: #ccc;
  min-height: 40rem;
}
.header .van-icon-arrow-left {
  color: #ccc;
}
.main_c {
  height: 9rem;
  background: #fff;
  margin: 0.2rem 0;
}
.main_c_l {
  width: 30%;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 9rem;
  box-sizing: border-box;
}
.van-icon-question-o,
.van-icon-point-gift-o,
.van-icon-bullhorn-o,
.van-icon-service-o,
.van-icon-orders-o,
.iconfont-express {
  font-size: 2rem;
}
.main_c_r {
  width: 70%;
  float: left;
}
.main_c_r li {
  float: left;
  height: 4.5rem;
  width: 50%;
  line-height: 4.5rem;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #ccc;
}
.foot {
  height: 3.4rem;
  background: #fff;
}
.foot .foot_l {
  /* margin: 0 2rem; */
  width: 90%;
  height: 3.4rem;
  float: left;
  line-height: 3.4rem;
}
.van-icon-service-o {
  font-size: 1.2rem;
  margin-left: 1rem;
}
.foot .foot_l span {
  margin: 0 1rem;
}
.foot .foot_l b {
  font-weight: normal;
  color: #ccc;
  /* margin-left: 2rem; */
}
.foot .foot_r {
  width: 10%;
  height: 3.4rem;
  float: right;
  line-height: 3.4rem;
}
</style>