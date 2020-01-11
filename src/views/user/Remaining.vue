<template>
    <div class="remaining">
        <header>
            <van-nav-bar
                title="我的余额"
                left-arrow
                @click-left="onClickLeft"
                />
        </header>
        <section>
            <div class="money">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578651779158&di=f178e51922131e89e465fc6b4d69f791&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170513%2F463c6150d4264b2793d1731323f1cf21_th.jpg" alt=""/>
                <p class="money-a">余额</p>
                <p class="money-b">￥0</p>
            </div>
            <div class="detail">
                <p>交易明细</p>
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
.money p{
    position: absolute;
}
.money-a{
    top:3rem;
    left: 1.4rem;
    font-size: 1rem;
    color: #fff;
}
.money-b{
    top: 4rem;
    left: 1rem;
    font-size: 2rem;
    color: #fff;
}
</style>