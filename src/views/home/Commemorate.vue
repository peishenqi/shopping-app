<template>
    <div class="commemorate">
        <header>
            <van-icon @click="onClickLeft" class="icon-left" name="arrow-left"/>
            <van-nav-bar
            title="纪念日礼物"
            />
            <van-icon @click="showPopup" class="icon-right" name="wap-nav"/>
             <van-popup
                v-model="show"
                position="top"
                :style="{ height: '25%' }"
                >
                <p><van-icon name="wap-home"/>首页</p>
                <p><van-icon name="star"/>分类</p>
                <p><van-icon name="shopping-cart"/>购物车</p>
                <p><van-icon name="manager"/>我的</p>
                </van-popup>
            <div>
                <van-grid :column-num="3">
                    <van-grid-item to="/birthday" text="生日" />
                    <van-grid-item to="/festival" text="节日礼物" />
                    <van-grid-item to="/surprise" text="惊喜" />
                </van-grid>
            </div>
        </header>
        
        <section>
            <div>
                <img src="https://img01.hua.com/uploadpic/newpic/9010999.jpg_220x240.jpg" alt="">
                <p>一往情深</p>
                <p>勿忘初心，方得始终</p>
                <p class="color">￥2999.00</p>
            </div>
            <div>
                <img src="https://img01.hua.com/uploadpic/newpic/9010999.jpg_220x240.jpg" alt="">
                <p>一往情深</p>
                <p>勿忘初心，方得始终</p>
                <p class="color">￥2999.00</p>
            </div>

        </section>
    </div>
</template>

<script>
export default {
     data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    onClickLeft() {
        console.log(111)
        this.$router.push({path:"/"})
    },
    // onClickRight() {
    //   Toast('按钮');
    // }
  },
    
    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.brithday{
    display: flex;
    flex-direction: column;
    height:100%;
    width:100%;
}
header{
    position: relative;
}
header p{
    font-size: 0.8rem;
    text-align: left;
    line-height: 2rem;
    position: relative;
    padding-left: 2.5rem;
}
header .van-icon{
  position: absolute;
  top:1.4rem;
  font-size: 1.6rem;
  z-index:10;
}
header .van-nav-bar{
  height:4rem;
  line-height: 4rem;
  /* background:#ccc; */
}
header .van-nav-bar__title{
  margin: 0 auto;
  font-size: 1.4rem;
}
.icon-left{
  left: 0;
  margin: 0 1rem;
}
.icon-right{
  right:0;
  margin: 0 1rem;
}
.van-popup--top {
    top: 3rem;
    left: 70%;
    width: 25%;
    border-radius: 0.2rem;
    padding-top: 0.5rem;
}
.van-popup--top p .van-icon{
    position: absolute;
    left:0.5rem;
    top:0.1rem;
    color: #ccc;
}

section{
  flex: 1;
  overflow-y:auto;
  background: #cccccc7a;
}
section div{
    width:46%;
    background: #fff;
    box-sizing: border-box;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    float:left;
    margin-left: 0.6rem;
    max-height: 18.5rem;
    margin-bottom: 0.3rem;
}
section div:nth-child(2n){
    float:right;
    margin-right: 0.6rem;
    margin-left: 0;
}
section img{
    width:100%;
    height:100%;
}
section div p{
    padding:0 1rem;
}

.color{
  color: red;
}
</style>