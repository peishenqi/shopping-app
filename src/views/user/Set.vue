<template>
  <div class="set">
    <header>
      <van-sticky>
        <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
      </van-sticky>
    </header>

    <section>
      <van-cell title="个人资料" is-link />

      <van-cell title="账号和绑定" is-link />

      <van-cell title="反馈建议" is-link />

      <van-cell title="推荐好友" is-link />

      <van-cell title="清除本地缓存" is-link value="86.05KB" />

      <van-cell title="检测更新" is-link value="当前版本6.4" />

      <van-cell-group>
        <van-switch-cell v-model="checked" title="WiFi下自动升级客户端" />
      </van-cell-group>

      <van-button color="#7232dd" size="large" @click="loginOut"
        >退出登录</van-button
      >
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/User" })
    },
    loginOut() {
      localStorage.removeItem("token")
      this.$router.push({ name: "Login" })
    }
  }
}
</script>

<style scoped>
.set {
  width: 100%;
  min-height: 55rem;
  background: #cccccc59;
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
  margin: 1rem 0.5rem 0.5rem;
  overflow-y: auto;
}
section .van-cell {
  margin-bottom: 1rem;
  border-radius: 4%;
  height: 3rem;
}
.van-cell__title span {
  white-space: nowrap;
}
section span {
  font-size: 0.6rem;
}
.van-button {
  margin-top: 1rem;
  background: #ff6034bd !important;
  border: 0;
}
</style>
