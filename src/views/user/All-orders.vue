<template>
    <div class="all-orders">
        <header>
            <van-sticky>
            <van-nav-bar
            title="我的订单"
            left-arrow
            @click-left="onClickLeft"
            />
            </van-sticky>
        </header>

        <section>
            <!-- <van-grid>
                <van-grid-item text="全部"/>
                <van-grid-item text="待付款" />
                <van-grid-item text="待发货" />
                <van-grid-item text="待评价" />
            </van-grid> -->
            <van-tabs v-model="active">
                <van-tab title="全部"></van-tab>
                <van-tab to="/obligation" title="待付款"></van-tab>
                <van-tab to="/distribution" title="待发货"></van-tab>
                <van-tab to="/evaluated" title="待评价"></van-tab>
            </van-tabs>

            <div class="NoOrders">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578656831451&di=68dfa6e40aaedaf512bc301f5f0f3617&imgtype=0&src=http%3A%2F%2Fres.smzdm.com%2Fzhuanti%2Fdouble12-2019%2Fimg%2Fblank-state.png" alt="">
                <p>还没有相关订单唉~</p>
                <button>去首页看看</button>
            </div>

        </section>


    </div>
</template>

<script>
export default {
    data() {
    return {
      active: 0
    };
  },
    methods:{
        onClickLeft() {
        this.$router.push({path:"/user"})
    },
    }
}
</script>

<style scoped>
.all-orders{
    width: 100%;
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
}
.NoOrders img{
    width:100%;
    max-height:20rem;
}
.NoOrders p{
    text-align: center;
    font-size: 0.8rem;
}
.NoOrders button{
    font-size: 0.8rem;
    display: block;
    height: 2rem;
    width:30%;
    margin: 0 auto;
    border: 0;
    background: #fa7651;
    border-radius: 10px;
}
.van-grid-item__content--center{
    border-bottom: 1px so red;
    
}
.van-grid-item__text{
    color:red;
}
</style>