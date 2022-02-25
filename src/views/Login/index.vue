<template>
  <div class="login">
    <div class="w">
      <div class="logo">
        <h1>
          <router-link to="/"
            ><img src="../../assets/upload/logo.png" alt="" /></router-link
          >安居官网
        </h1>
      </div>
      <h3>欢迎登录</h3>
    </div>
    <div class="login-banner">
      <img src="../../assets/upload/banner2.png" alt="" />
      <!-- 登录页面element -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/Footer";
export default {
  name: "Login",
  components: { Footer },
  data() {
    return {};
  },
};
</script>
<style scoped>
.logo {
  display: inline-block;
  width: 160px;
  height: 90px;
  margin-top: 50px;
  overflow: hidden;
}
.login h3 {
  display: inline-block;
  color: #d4d2d2;
}
.login-banner {
  position: relative;
  width: 100%;
  height: 630px;
  margin-top: 30px;
  overflow: hidden;
}
.login-banner img {
  width: 100%;
  height: 100%;
}
</style>