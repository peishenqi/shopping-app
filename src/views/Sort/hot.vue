  <template>
  <div class="sort_right">
    <div class="sortBanner" @click="toDetail">
      <img src="https://img02.hua.com/slider/20_valentine_all.jpg" alt="banner" />
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item :to="{name:'Girlfriend'}">
        <van-image src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png" />
        <p class="title">送女友鲜花</p>
      </van-grid-item>
      <van-grid-item :to="{name:'Elder'}">
        <van-image src="https://img02.hua.com/m/category/Classification/m_category_hot_Elder.png" />
        <p class="title">送长辈鲜花</p>
      </van-grid-item>
      <van-grid-item :to="{name:'Friend'}">
        <van-image
          src="https://img02.hua.com/m/category/Classification/m_category_hot_Boxedflowers.png"
        />
        <p class="title">送朋友鲜花</p>
      </van-grid-item>
      <van-grid-item :to="{name:'Birthday'}">
        <van-image
          src="https://img02.hua.com/m/category/Classification/m_category_hot_Birthday.png"
        />
        <p class="title">生日鲜花</p>
      </van-grid-item>
      <van-grid-item :to="{name:'Commemorate'}">
        <van-image
          src="https://img02.hua.com/m/category/Classification/m_category_hot_Goldfoilflower.png"
        />
        <p class="title">纪念日鲜花</p>
      </van-grid-item>
      <van-grid-item :to="{name:'Festival'}">
        <van-image src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png" />
        <p class="title">节日鲜花</p>
      </van-grid-item>
      <van-grid-item :to="{name:'Surprise'}">
        <van-image
          src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png"
        />
        <p class="title">惊喜</p>
      </van-grid-item>
      <van-grid-item :to="{name:'HotSale'}">
        <van-image
          src="https://img02.hua.com/m/category/Classification/m_category_hot_Jewelry.png"
        />
        <p class="title">热卖</p>
      </van-grid-item>
      <van-grid-item :to="{name:'Special'}">
        <van-image
          src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png"
        />
        <p class="title">特价</p>
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
      this.$router.push("Commemorate");
    }
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
.van-image {
  width: 4rem;
  height: 4rem;
}
</style>

