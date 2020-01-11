<template>
    <div class="member">
        <header>
            <van-nav-bar
                title="会员积分"
                left-arrow
                @click-left="onClickLeft"
                />
        </header>
        <section>
            <div class="money">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578651779158&di=f178e51922131e89e465fc6b4d69f791&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170513%2F463c6150d4264b2793d1731323f1cf21_th.jpg" alt=""/>
                <p class="money-a">积分 0</p>
                <p class="money-b">积分兑换</p>
                <!-- <button class="money-b">积分兑换</button> -->
            </div>
            <div class="detail">
                <p>积分明细</p>
            </div>
            
        </section>
    </div>
</template>

<script>
export default {
    //data() {
    //     return {
    //         show: false
    //     }
    //},
    methods: {
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
.remaining{
    width: 100%;
    /* min-height:55rem;
    background: #cccccc59; */
    display: flex;
    flex-direction: column;
}
header,.van-nav-bar{
    height:50px;
}
.van-icon{
    color: black;
}
section{
    flex: 1;
    overflow-y: auto;
}
.detail{
    margin:0 1rem;
}
section img{
    width:100%;
    max-height:20rem;
}
.detail p{
    border-bottom: 1px solid #ccc;
    line-height: 2rem;
    font-size: 0.9rem;
}
.money{
    position: relative;
}
.money-a,.money-b{
    position: absolute;
    left:0;
    right:0;
    margin: auto;
    text-align: center;
     font-size: 1rem;
}
.money-a{
    height:1rem;
    width: 100%;
    top:0;
    bottom: 1rem;
    color: #000;
}
.money-b{
    height: 2rem;
    line-height: 2rem;
    width:5rem;
    top:3rem;
    bottom: 0;
    border: 1px solid #fff;
    background: #fff;
    color: red;
}
</style>