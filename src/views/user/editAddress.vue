<template>
  <div class="address">
    <header>
      <van-nav-bar title="编辑收货地址" left-arrow @click-left="onClickLeft" />
    </header>

    <section>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :address-info="editAddress"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-area="onChangeArea"
        @change-detail="onChangeDetail"
        change-default
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
      regions: "",
      editAddress: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/site" });
    },
    // 修改收件地区时触发
    onChangeArea(val) {
      let val1 = val[0].name;
      let val2 = val[1].name;
      let val3 = val[2].name;
      this.regions = val1 + "" + val2 + "" + val3;
      // console.log(this.regions);
    },
    // 修改详细地址时触发
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: val,
            address: this.regions
          }
        ];
      }
    },
    onSave(content) {
      console.log(content);
      let data = {
        receiver: content.name,
        mobile: content.tel,
        regions: content.province + "" + content.city + "" + content.county,
        address: content.addressDetail,
        idDefault: false
      };
      console.log(data);
      let id = localStorage.getItem("userID");
      post("/api/v1/addresses/" + id, data).then(res => {
        console.log(res.data);
        this.$router.push("Site");
      });
    },
    onDelete() {
      console.log(1111);

      /* let token = localStorage.getItem("token");
      let userData = {
        headers: {
          authorization: "Bearer " + token
        }
      };
      post(
        "/api/v1/addresses/" + localStorage.getItem("userID"),
        userData
      ).then(res => {
        console.log(res.data);
      }); */
    }
  },
  created() {
    let editAddress = localStorage.getItem("editAddress");
    if (editAddress) {
      editAddress = JSON.parse(editAddress);
      this.editAddress = editAddress;
    }
  }
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
