<template>
  <div class="order">
    <header>
      <van-nav-bar title="填写订单" left-arrow @click-left="onClickLeft" />
    </header>

    <section>
      <!--<van-cell title="收货人" is-link value="请添加收货人地址" />-->
      <div class="site">
        <div class="left">
          <p>姓名</p>
        </div>
        <div class="right">
          <p>张三</p>
          <p>地址</p>
        </div>
      </div>
      <van-cell
        class="day"
        title="送达日期"
        :value="date"
        @click="show = true"
      />
      <van-calendar v-model="show" @confirm="onConfirm" />

      <van-card
        num="1"
        :price="price"
        :desc="descriptions"
        :title="name"
        :thumb="coverImg"
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
      <van-submit-bar :price="total" button-text="支付" @submit="onSubmit" />
    </footer>
  </div>
</template>

<script>
import { get } from "../../utils/ajax";
export default {
  data() {
    return {
      date: "",
      show: false,
      message: "",
      name: "",
      descriptions: "",
      price: "",
      coverImg: "",
      total: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "cart",
      });
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    //支付
    onSubmit() {
      this.$router.push({
        path: "payment",
      });
    },
    //获取订单详情
    getOoderDetail() {
      let id = JSON.parse(localStorage.getItem("id"));
      // let a = JSON.parse(localStorage.getItem("ordersId"));
      // // console.log(a);
      // for (let i = 0; i < a.length; i++) {
      //   const element = a[i];
      //   // console.log(element);
      //   get("/api/v1/orders/" + a[i]).then(res => {
      //     console.log(res);
      //     let pid = res.data.details[0].product.id;
      //     // get("/api/v1/products/" + pid).then(res => {
      //     //   console.log(res.data.coverImg);
      //     //   this.coverImg = res.data.coverImg;
      //     //   this.price = res.data.price;
      //     //   this.descriptions = res.data.descriptions;
      //     //   this.name = res.data.name;
      //     //   this.total = this.price * 1 * 100;
      //     //   // console.log(this.total);
      //     //   // console.log(this.coverImg, this.name, this.descriptions, this.price);
      //     // });
      //   });
      // }
      get("/api/v1/orders/" + id).then(res => {
        // console.log(res);
        let pid = res.data.details[0].product._id;
        get("/api/v1/products/" + pid).then(res => {
          // console.log(res.data.coverImg);
          this.coverImg = res.data.coverImg;
          this.price = res.data.price;
          this.descriptions = res.data.descriptions;
          this.name = res.data.name;
          this.total = this.price * 1 * 100;
          // console.log(this.total);
          // console.log(this.coverImg, this.name, this.descriptions, this.price);
        });
      });
    },
  },
  mounted() {
    this.getOoderDetail();
  },
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
.van-icon {
  color: black;
}
section {
  flex: 1;
  background: #cccccc54;
  padding: 1rem;
}

.site {
  background: #fff;
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.site p {
  margin: 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8rem;
  line-height: 1.5rem;
}
.site .left {
  width: 20%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.site .right {
  width: 80%;
}
.day {
  border-bottom: 2px dashed #ed6a0c;
}
.van-card {
  border-radius: 10px;
  margin-top: 1rem;
}
.top {
  margin-top: 1rem;
}
footer {
  height: 50px;
}
</style>
