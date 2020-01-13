<template>
  <div class="reminder">
    <div class="header">
      <van-nav-bar title="生日/纪念日提醒" left-arrow>
        <van-icon name="wap-nav" slot="right" />
      </van-nav-bar>
    </div>
    <div class="main">
      <div class="pic">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4230829731,1716708973&fm=26&gp=0.jpg"
          alt
        />
      </div>
    </div>
    <div class="foot">
      <van-button type="default" size="small">+添加提醒</van-button>
    </div>
  </div>
</template>

<style  scoped>
/* .header .van-nav-bar {
  background: #ff734c;
} */
.header .van-nav-bar__arrow,
.header .van-icon-wap-nav ,.van-nav-bar__title{
  color: black;
}
 /* {
  color: #fff;
} */
.main {
  overflow-x: hidden;
  width: 100%;
  min-height: 27rem;
  background: #ccc;
}
.pic {
  width: 16rem;
  height: 16rem;
}
.mian .pic img {
  width: 100%;
  height: 100%;
}
.foot {
  padding: 0 2rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.foot .van-button--small {
  width: 100%;
  height: 2.6rem;
  background: #ff734c;
  border-radius: 0.5rem;
}
.foot .van-button__text {
  color: #fff;
}
</style>
