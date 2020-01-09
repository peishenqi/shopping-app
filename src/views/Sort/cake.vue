<template>
  <div class="sort_right">
    <div class="sortBanner">
      <img
        src="https://img02.hua.com/m/category/Classification/cake.png"
        alt="banner"
      />
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="value in 12" :key="value">
        <van-image
          src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png"
        />
        <p class="title">送恋人鲜花</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<style scoped>
.sortBanner {
  width: 100%;
}
.sortBanner img {
  width: 100%;
}
.title {
  color: #232323;
  line-height: 1;
}
</style>
