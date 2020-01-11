<template>
    <div class="about">
        <header>
            <van-icon @click="onClickLeft" class="icon-left" name="arrow-left"/>
            <van-nav-bar
            title="关于我们"
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
        </header>
        
        <section>
            <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578651779158&di=f178e51922131e89e465fc6b4d69f791&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170513%2F463c6150d4264b2793d1731323f1cf21_th.jpg" alt="">
            </div>

            <div class="inform">
                <h1>消费者告知书</h1>
                <p>尊敬的客户：</p>
                <p>您好！为帮助您更好地选购跨境商品，请您在购买前务必认真、详细阅读并完全理解本告知书的全部内容，并对自身风险承担做出客观判断。同意本告知书内容后再下单购买：</p>
                <p>1.您在考拉海购上购买的跨境商品等同于境外购买，商品本身可能无中文标签，如有需要，您可以通过商品详情页查看相关商品标签中文翻译或联系客服。</p>
                <p>2.根据相关法律政策，您选购的跨境商品仅限个人自用，不得进行再次销售。</p>
                <p>3.您购买的跨境商品符合原产地有关质量、安全、卫生、环保、标识等标准或技术规范要求，可能与我国标准有所不同，由此可能产生的危害、损失或者其他风险，将由您自行承担。</p>
                <p>4.考拉海购为平台经营者，商品均由商家向您提供，由其承担商品质量安全保证责任。</p>
                <p><br/></p>
                <p>考拉海购精选全球好货，严控每一个环节，为顾客提供正品保障。</p>
                <p><br/></p>
                <p>谢谢！</p>
            </div>

            <div>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578654014741&di=30877d1d26d923a66dc688a53c771c09&imgtype=0&src=http%3A%2F%2Fimg0.pclady.com.cn%2Fpclady%2F1602%2F03%2F1440328_3.jpg" alt="">
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
        // console.log(111)
        this.$router.push({path:"/user"})
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
.about{
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
  background:#ccc;
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
    overflow-y: auto;
}
section img{
    width:100%;
    max-height:20rem;
}
.inform{
    margin: 1rem;
}
section h1{
    text-align: center;
    font-weight: normal;
    line-height: 3rem;
}
section p{
    font-size: 0.8rem;
    line-height: 1.5rem;
}
</style>