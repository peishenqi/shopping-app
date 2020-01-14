<template>
  <div class="address">
    <header>
      <van-nav-bar title="新增收货地址" left-arrow @click-left="onClickLeft" />
    </header>

    <section>
      <van-address-edit
        :area-list="areaList"
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </section>
  </div>
</template>

<script>
import areaList from "../../assets/area";
import { post, get } from "../../utils/ajax";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/site" });
    },

    onSave() {
      console.log();
      post("/api/v1/addresses", {
        receiver: this.receiver,
        mobile: this.mobile,
        regions: this.regions,
        address: this.address,
        idDefault: this.idDefault,
      }).then(res => {
        console.log(res);
        this.searchResult.push(res.data);
      });
    },
    onDelete() {
      console.log("shanchu");
    },

    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
.address {
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
</style>
