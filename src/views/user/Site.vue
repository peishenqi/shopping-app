<template>
  <div class="site">
    <header>
      <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />
    </header>

    <section>
      <div class="no" v-show="notAdress">
        <van-address-list @add="onAdd">
          <van-image
            class="notAdress_pic"
            src="https://img02.hua.com/m/images/m_no_address.png?v3"
          />
          <p>暂无收货地址呐~</p>
        </van-address-list>
      </div>

      <div class="yes" v-show="hasAddress">
        <van-address-list
          v-model="chosenAddressId"
          :list="addressList"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { get, put } from "../../utils/ajax";
export default {
  data() {
    return {
      chosenAddressId: "1",
      addressList: [],
      notAdress: true,
      hasAddress: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    address() {
      this.$router.push({ path: "/address" });
    },
    //获取地址信息
    getAddress() {
      let token = localStorage.getItem("token");
      if (token) {
        let addressData = {
          headers: {
            authorization: "Bearer" + token
          },
          per: 3,
          page: 1
        };
        get("/api/v1/addresses", addressData).then(res => {
          // console.log(res.data.addresses);
          let result = res.data.addresses;
          if (result.length !== 0) {
            this.notAdress = false;
            this.hasAddress = true;
            result.forEach(v => {
              let addressArr = {
                id: v._id,
                name: v.receiver,
                tel: v.mobile,
                address: v.regions + "-" + v.address,
                isDefault: false
              };
              this.addressList.push(addressArr);
            });
          }
        });
      } else {
        this.$router.push("Login");
      }
    },
    // 新增地址
    onAdd() {
      this.$router.push({ path: "/address" });
    },
    // 编辑地址
    onEdit(item, index) {
      console.log(item);
      console.log(index);
      /* let editAddressData = {
        receiver: item.name,
        mobile: item.tel,
        regions: item.address,
        address: item.address,
        idDefault: item.isDefault
      };
      put("/api/v1/addresses/" + item.id, editAddressData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        }); */
    }
  },
  created() {
    this.getAddress();
  }
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
.notAdress_pic {
  margin-left: 28%;
  width: 10rem;
}
.no p {
  text-align: center;
  font-size: 1rem;
}
</style>
