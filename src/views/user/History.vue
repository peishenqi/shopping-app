<template>
    <div class="history">
        <van-sticky>
        <header>
            <van-nav-bar
                title="浏览记录"
                left-arrow
                @click-left="onClickLeft"
                />
        </header>
        </van-sticky>
        <section>
            <div class="no">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578656831451&di=68dfa6e40aaedaf512bc301f5f0f3617&imgtype=0&src=http%3A%2F%2Fres.smzdm.com%2Fzhuanti%2Fdouble12-2019%2Fimg%2Fblank-state.png" alt="">
                <p>近期暂无浏览记录~</p>
            </div>

            <div class="record">
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578656831451&di=68dfa6e40aaedaf512bc301f5f0f3617&imgtype=0&src=http%3A%2F%2Fres.smzdm.com%2Fzhuanti%2Fdouble12-2019%2Fimg%2Fblank-state.png" alt="">
                    <p>开始的dvk kdokdsvkc基本实际上</p>
                    <p>看句话袋女十点半是收到第三步VB度数据UI深V四大V </p>
                    <p>￥344.00</p>
                </div>
                <div>
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578656831451&di=68dfa6e40aaedaf512bc301f5f0f3617&imgtype=0&src=http%3A%2F%2Fres.smzdm.com%2Fzhuanti%2Fdouble12-2019%2Fimg%2Fblank-state.png" alt="">
                    <p>开始的dvk kdokdsvkc基本实际上</p>
                    <p>看句话袋女十点半是收到第三步VB度数据UI深V四大V </p>
                    <p>￥344.00</p>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    methods: {
        onClickLeft() {
            // console.log(111)
            this.$router.push({path:"/user"})
        },
    },
}
</script>

<style scoped>
.history{
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
.no{
    text-align: center;
}
.no img{
    width:100%;
    max-height:30rem;
}
.record{
    box-sizing: border-box;
    /* padding: 1rem; */
    width:100%;
    min-height:10rem ;
    /* background: #ccc; */
}
.record div{
    box-sizing: border-box;
    padding:0.5rem;
    margin-bottom: 1rem;
    background: #ebedf0cf;
    float: left;
    width:50%;

}
.record img{
    width:100%;
    max-height:15rem;
}
.record p{
    line-height: 1rem;
    font-size: 0.8rem;
    margin: 0;
    margin-top: 0.5rem;
}
.record p:nth-child(2){
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.record p:nth-child(3){
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.record p:nth-child(4){
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: red;
}
.record div:nth-child(2n){
    float: right;
}
</style>