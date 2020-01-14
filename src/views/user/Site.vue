<template>
  <div class="site">
    <header>
      <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />
    </header>

    <section>
      <div class="no">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578656831451&di=68dfa6e40aaedaf512bc301f5f0f3617&imgtype=0&src=http%3A%2F%2Fres.smzdm.com%2Fzhuanti%2Fdouble12-2019%2Fimg%2Fblank-state.png"
          alt=""
        />
        <p>没有收货地址呐~</p>
        <button @click="address">设置收货地址</button>
      </div>

      <div class="yes">
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          :disabled-list="disabledList"
          disabled-text="以下地址超出配送范围"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { get } from "../../utils/ajax";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/user" });
    },
    address() {
      this.$router.push({ path: "/address" });
    },
    onAdd() {
      this.$router.push({ path: "/address" });
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    //获取地址信息
    getAddress() {
      get("/api/v1/addresses", { per: 3, page: 1 }).then(res => {
        console.log(res.data);
        for (let i = 0; i < res.data.addresses.length; i++) {
          this.list.push(res.data.addresses[i]);
        }
      });
    },
  },
  mounted() {
    this.getAddress();
  },
};
</script>

<style scoped>
.site {
  width: 100%;
  display: flex;
  flex-direction: column;
}
header,
.van-nav-bar {
  height: 50px;
}
.van-icon {
  color: black;
}
section {
  flex: 1;
}
.no {
  display: none;
}
.no img {
  width: 100%;
  max-height: 15rem;
}
.no p {
  text-align: center;
  font-size: 0.8rem;
}
.no button {
  font-size: 0.8rem;
  display: block;
  height: 2rem;
  width: 30%;
  margin: 0 auto;
  border: 0;
  background: #fa7651;
  border-radius: 10px;
}
</style>
