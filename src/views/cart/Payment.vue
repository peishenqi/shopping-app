<template>
    <div class="payment">
        <header>
      <van-nav-bar
        title="选择支付方式"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>

    <section>
        <div class="choice">
            <p>支付金额：￥138</p>
            <p class="ddh">订单号：847597527520</p>
        </div>

        <div class="zf">
            <div class="tu">
                <img src="../.././assets/timg.jpg" alt="">
            </div>
            <div class="zifu">
                <p>微信支付</p>
            </div>
        </div>
        <div class="zf">
            <div class="tu">
                <img src="../.././assets/timg (1).jpg" alt="">
            </div>
            <div class="zifu">
                <p>支付宝支付</p>
            </div>
        </div>
        <div class="zf">
            <div class="tu">
                <img class="xyk" src="../.././assets/u=221468187,2291446943&fm=15&gp=0.jpg" alt="">
            </div>
            <div class="zifu">
                <p>信用卡支付</p>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        onClickLeft() {
      this.$router.push({
            path:'order'
        })
    },
    }
}
</script>

<style scoped>
.van-icon{
    color: black
}
.choice{
    width:100%;
    height:7rem;
    background: url(../.././assets/user_bg.png)no-repeat;
    background-size: 100%;
    overflow: hidden;
}
.choice p{
    margin: 0;
    text-align: center;
    margin-top: 2rem;
    font-size: 0.8rem;
    color: #fff;
}
.choice .ddh{
    text-align: right;
    margin-right: 1rem;
}
.zf{
    width:80%;
    margin:2rem 10%;
    height:5rem;
    border-radius: 5px;
    display: flex;
    
    box-shadow: 2px 2px 2px 3px #ccc;
}
p{
     margin: 0;
}
.tu,img{
    width:5rem;
    height:5rem;
}
.xyk{
    width:3.5rem;
    height:3.5rem;
    margin: 0.8rem 0 0 0.8rem;
}
.zifu{
    height:5rem;
    line-height: 5rem;
   
}
</style>