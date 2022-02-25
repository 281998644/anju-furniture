<template>
  <div class="shopCar">
    <div class="shopHeader">
      <div class="w">
        <div class="logo">
          <h1>
            <router-link to="/"
              ><img src="../assets/upload/logo.png" alt="" /></router-link
            >安居官网
          </h1>
        </div>
        <h3>购物车</h3>
      </div>
    </div>
    <div class="shopContent">
      <div class="w">
        <div class="products">
          <div class="products-top">
            <ul>
              <li>全部商品</li>
            </ul>
          </div>
          <div class="products-title">
            <input type="checkbox" />全选
            <span>商品信息</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </div>
          <div class="products-main">
            <div class="products-none">
              <span>您还未登录,赶紧去登录吧</span>
              <button @click="toLogin">登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";
export default {
  name: "ShopCar",
  components: { Footer },
  data() {
    return {};
  },

  methods: {
      toLogin(){
          this.$router.push({name:'loginLand'})
      }
  },
};
</script>
<style scoped>
.current {
  background-color: #374840;
}
.shopHeader {
  width: 100%;
  height: 180px;
  background-color: #374840;
}
.logo {
  display: inline-block;
  width: 160px;
  height: 90px;
  margin-top: 50px;
  overflow: hidden;
}
.shopHeader h3 {
  display: inline-block;
  color: #d4d2d2;
}
.products {
  margin-top: 30px;
}
.products-top {
  width: 100%;
  height: 36px;
  padding: 5px;
  border-bottom: 2px solid #fff;
}
.products-top ul li {
  height: 100%;
  font-size: 18px;
  color: #ff8e00;
}

.products-title {
  width: 100%;
  height: 30px;
  font-size: 16px;
  color: #fff;
  margin: 20px 0 0 20px;
}
.products-title span:nth-child(2) {
  margin-left: 60px;
}
.products-title span:nth-child(3) {
  margin-left: 600px;
}
.products-title span:nth-child(n + 4) {
  margin-left: 70px;
}
.products-main {
  position: relative;
  border: 1px solid #fff;
  margin-bottom: 50px;
}
.products-none {
  width: 100%;
  height: 500px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 500px;
}
.products-none button {
  position: absolute;
  top: 55%;
  left: 50%;
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 18px;
  background-color: #374840;
  transform: translateX(-50%);
  border: none;
  cursor: pointer;
}
</style>