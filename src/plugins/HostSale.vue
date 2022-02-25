<template>
  <div class="hostSale w">
    <!-- 字体布局 -->
    <h3>HOSTSALE</h3>
    <span>——</span><span class="host-title">热卖系列</span><span>——</span>
    <p class="host-pargh">
      THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
      LUXURY.
    </p>
    <span>——</span>
    <!-- 图片布局 -->
    <div class="host-img">
      <div class="host-img-box1">
        <img src="../assets/upload/host-img-box1.png" alt="" />
        <div class="host-img-context">
          <div class="host-img-info1">
            <p>北欧现代简约小户型</p>
            <p>轻奢大理石桌椅组合餐桌</p>
          </div>
          <router-link class="host-img-btn" to="/onlineStore/storeDetails">
            <span>￥2280</span>
            <span>立即购买</span>
          </router-link>
          <p class="host-img-info2">6人圆桌</p>
        </div>
      </div>
      <div class="host-img-box2">
        <img src="../assets/upload/host-img-box2.png" alt="" />
        <div class="host-img-context">
          <div class="host-img-info1">
            <p>北欧现代简约小户型</p>
            <p>轻奢大理石桌椅组合餐桌</p>
          </div>
          <router-link class="host-img-btn" to="/onlineStore/storeDetails">
            <span>￥2280</span>
            <span>立即购买</span>
          </router-link>
          <p class="host-img-info2">6人圆桌</p>
        </div>
      </div>
      <div class="host-img-box3">
        <img src="../assets/upload/host-img-box3.png" alt="" />
        <div class="host-img-context">
          <div class="host-img-info1">
            <p>北欧现代简约小户型</p>
            <p>轻奢大理石桌椅组合餐桌</p>
          </div>
          <router-link class="host-img-btn" to="/onlineStore/storeDetails">
            <span>￥2280</span>
            <span>立即购买</span>
          </router-link>
          <p class="host-img-info2">6人圆桌</p>
        </div>
      </div>
      <div class="host-img-box4">
        <img src="../assets/upload/host-img-box4.png" alt="" />
        <div class="host-img-context">
          <div class="host-img-info1">
            <p>北欧现代简约小户型</p>
            <p>轻奢大理石桌椅组合餐桌</p>
          </div>
          <router-link class="host-img-btn" to="/onlineStore/storeDetails">
            <span>￥2280</span>
            <span>立即购买</span>
          </router-link>
          <p class="host-img-info2">6人圆桌</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HostSale",
};
</script>
<style>
/* 新品样式 */
.hostSale {
  color: #fff;
  text-align: center;
  margin-top: 50px;
  overflow: hidden;
}
.hostSale h3 {
  font-size: 30px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin-bottom: 17px;
}
.host-title {
  font-size: 30px;
  margin: 0 50px 0 50px;
}
.host-pargh {
  font-size: 12px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin: 28px 0 28px 0;
}
/* 新品图片样式 */
.host-img {
  margin: 70px 0 176px 0;
  background-color: #374840;
  padding: 64px 64px 0 64px;
  overflow: hidden;
}
.host-img-box1,
.host-img-box2,
.host-img-box3,
.host-img-box4 {
  float: left;
  position: relative;
  width: 520px;
  height: 650px;
  overflow: hidden;
}
.host-img .host-img-box1,
.host-img .host-img-box3 {
  margin-right: 30px;
}
.host-img-box1 img,
.host-img-box2 img,
.host-img-box3 img,
.host-img-box4 img {
  width: 100%;
  height: 385px;
}

.host-img-context .host-img-info1 {
  float: left;
  text-align: left;
}
.host-img-context .host-img-info2 {
  float: right;
}
.host-img-context {
  margin: 43px 0 43px 0;
}
.host-img-btn {
  position: absolute;
  bottom: 87px;
  left: 0;
  width: 186px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 18px;
  background-color: #495d54;
  cursor: pointer;
}
.host-img-btn span:first-child{
  margin-right: 20px;
}
</style>