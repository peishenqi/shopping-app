<template>
  <div class="coupon">
    <div class="header">
      <van-nav-bar title="优惠券" :style="{color:'#ccc'}" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="main">
      <div class="main_t">
        <!-- <p class="red" :class="{'isunuser':true,islost:false}" @click="unuser">未使用</p>
        <p @click="lost" :class="{'isunuser':false,islost:false}">已失效</p>-->
        <p class="red" :class="class1" @click="unuser">未使用</p>
        <p @click="lost" :class="class1">已失效</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Toast: "",
      //   class1: ["isunuser", "islost"],
      class1: { isunuser: true, islost: false }
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    unuser() {
      console.log(544);
      this.class1.islost = !this.class1.islost;
      this.class1.isunuser = !this.class1.isunuser;
    },
    lost() {
      console.log("55");
      this.class1.islost = !this.class1.islost;
      this.class1.isunuser = !this.class1.isunuser;
    }
  }
};
</script>
<style  scoped>
.main_t p {
  padding: 0;
  margin: 0;
  width: 50%;
  float: left;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  /* color: #ff734c;
  border-bottom: #ff734c 1px solid; */
}
.isunuser {
  color: #ff734c;
  border-bottom: #ff734c 1px solid;
}
.islost {
  color: #ff734c;
  border-bottom: #ff734c 1px solid;
}
/* .red {
  color: #ff734c;
  border-bottom: #ff734c 1px solid;
} */
</style>