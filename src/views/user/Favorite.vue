<template>
  <div class="reminder">
    <div class="header">
      <van-nav-bar title="我的收藏" left-arrow>
        <van-icon name="wap-nav" slot="right" />
      </van-nav-bar>
    </div>
    <div class="main">
      <div class="pic">
        <p>哦欧！~你还没有收藏的商品</p>
      </div>
      <div class="recommend">
        <h3>为你推荐</h3>
        <div class="recommend_list">
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
          <dl>
            <dt>
              <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" />
            </dt>
            <dd>￥254</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.header .van-nav-bar {
  background: #ff734c;
}
.header .van-nav-bar__arrow,
.header .van-icon-wap-nav {
  color: #ccc;
}
.van-nav-bar__title {
  color: #fff;
}
.main {
  min-height: 27rem;

  position: relative;
}
.pic {
  height: 32rem;
  background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4230829731,1716708973&fm=26&gp=0.jpg")
    no-repeat;
}
.pic p {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  padding: 0;
  margin: 0;
}
.recommend h3 {
  font-weight: normal;
  height: 1.5rem;
  line-height: 1.5rem;
}
.recommend_list {
  display: flex;
  overflow-x: auto;
  height: 8rem;
}
.recommend_list dl {
  width: 7rem;
  height: 7rem;
  margin-right: 1rem;
}
.recommend_list dt img {
  width: 7rem;
  height: 5.5rem;
}
.recommend_list dd {
  text-align: center;
  margin-left: 0;
}
</style>
