<template>
  <div class="order">
    <van-sticky>
    <header>
      <van-nav-bar
        title="填写订单"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    </van-sticky>

    <section>
      <!--<van-cell title="收货人" is-link value="请添加收货人地址" />-->
      <div class="site" @click="add">
        <div class="left">
          <p>姓名</p>
        </div>
        <div class="right">
          <p>张三</p>
          <p>地址</p>
        </div>
      </div>
      <van-cell class="day" title="送达日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
    
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            />

           <van-cell class="top" title="发票" value="选填" />
           <van-field
            v-model="message"
            rows="1"
            autosize
            label="备注"
            type="textarea"
            placeholder="请输入与客服沟通好的备注"
            />
    </section>

    <footer>
    <van-submit-bar
  :price="3050"
  button-text="支付"
  @submit="onSubmit"
/>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      show: false,
      message:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
            path:'cart'
        })
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    add(){
      this.$router.push({
        path:"/site"
      })
    },
    //支付
    onSubmit(){
        this.$router.push({
            path:'payment'
        })
    }
  }
};
</script>

<style scoped>
.order {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 550px;
}
header {
  height: 46px;
}
.van-icon{
    color: black
}
section {
  flex: 1;
  background: #cccccc54;
  padding: 1rem;
  min-height: 40rem;
}

.site{
    background: #fff;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
}
.site p{
    margin: 0;
    width:100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 0.8rem;
    line-height: 1.5rem;
}
.site .left{
    width:20%;
     display: flex;
     text-align: center;
     justify-content: center;
     align-items: center;
}
.site .right{
    width:80%;
}
.day{
    border-bottom: 2px dashed #ed6a0c;
}
.van-card{
    border-radius: 10px;
    margin-top: 1rem;
}
.top{
    margin-top: 1rem;
}
footer {
  height: 50px;
}
</style>
