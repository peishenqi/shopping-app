<template>
  <div class="payment">
    <header>
      <van-nav-bar title="选择支付方式" left-arrow @click-left="onClickLeft" />
    </header>

    <section>
      <div class="choice">
        <p>支付金额：￥138</p>
        <p class="ddh">订单号：847597527520</p>
      </div>

      <div class="zf" @click="weixin">
        <div class="tu">
          <img src="../.././assets/timg.jpg" alt="" />
        </div>
        <div class="zifu">
          <p>微信支付</p>
        </div>
      </div>
      <div class="zf" @click="zhifubao">
        <div class="tu">
          <img src="../.././assets/timg (1).jpg" alt="" />
        </div>
        <div class="zifu">
          <p>支付宝支付</p>
        </div>
      </div>
      <div class="zf" @click="xinyongka">
        <div class="tu">
          <img
            class="xyk"
            src="../.././assets/u=221468187,2291446943&fm=15&gp=0.jpg"
            alt=""
          />
        </div>
        <div class="zifu">
          <p>信用卡支付</p>
        </div>
      </div>

      <van-popup v-model="password" position="bottom" :style="{ height: '45%' }">
        <!-- 密码输入框 -->
        <van-password-input
          :value="value"
          info="密码为 6 位数字"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />

        <!-- 数字键盘 -->
        <van-number-keyboard
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard = false"
        />
      </van-popup>
    </section>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      showKeyboard: true,
       password: false
    };
  },
  methods: {
    //   end(){
    //       password: false;
    //       Toast.success('支付成功');
    //   },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    onClickLeft() {
      this.$router.push({
        path: "order"
      });
    },
    weixin() {
      Toast("微信支付");
       this.password = !this.password;
    },
    zhifubao() {
      Toast("支付宝支付");
      this.password = !this.password;
    },
    xinyongka() {
      Toast("信用卡支付");
      this.password = !this.password;
    }
  }
};
</script>

<style scoped>
.van-icon {
  color: black;
}
.choice {
  width: 100%;
  height: 7rem;
  background: url(../.././assets/user_bg.png) no-repeat;
  background-size: 100%;
  overflow: hidden;
}
.choice p {
  margin: 0;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #fff;
}
.choice .ddh {
  text-align: right;
  margin-right: 1rem;
}
.zf {
  width: 80%;
  margin: 2rem 10%;
  height: 5rem;
  border-radius: 5px;
  display: flex;

  box-shadow: 2px 2px 2px 3px #ccc;
}
p {
  margin: 0;
}
.tu,
img {
  width: 5rem;
  height: 5rem;
}
.xyk {
  width: 3.5rem;
  height: 3.5rem;
  margin: 0.8rem 0 0 0.8rem;
}
.zifu {
  height: 5rem;
  line-height: 5rem;
}
</style>
