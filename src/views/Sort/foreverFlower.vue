<template>
  <div class="sort_right">
    <div class="sortBanner">
      <img src="https://img02.hua.com/m/category/Classification/ppf.png?v" alt="banner" />
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item
        v-for="(v, i) in porList"
        :key="i"
        :to="{ name: 'product_detail', query: { id: v._id } }"
      >
        <van-image :src="v.coverImg" />
        <p class="title">{{v.name}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import { get } from "../../utils/ajax";
export default {
  data() {
    return {
      porList: []
    };
  },
  created() {
    let listData = {
      per: 30,
      page: 1,
      name: "foreverFlower",
      product_category: "5e1ec56d1765543bc028d9c5"
    };
    get("/api/v1/products", listData).then(res => {
      let list = res.data.products;

      list.forEach(v => {
        let categoryID = v.productCategory._id;
        if (categoryID == listData.product_category) {
          this.porList.push(v);
        }
      });
    });
  }
};
</script>
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
