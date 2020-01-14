  <template>
  <div class="sort_right">
    <div class="sortBanner" @click="toDetail" >
      <img src="https://img02.hua.com/slider/20_valentine_all.jpg" alt="banner" />
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="value in 12" :key="value">
        <van-image src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png" />
        <p class="title">送恋人鲜花</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import axios from "axios";
import { get, post } from "../../utils/ajax";

export default {
  data() {
    return {};
  },
  methods: {
    toDetail() {
      // this.$router.push("product_detail");
      this.$router.push("Commemorate");
    }
  }
  /* created() {
    let listData = {
      per: 30,
      page: 1,
      name: "hot",
      product_category: 1
    };
    get("/api/v1/products", listData).then(res => {
      console.log(res);

    });
  } */
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

