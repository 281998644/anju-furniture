<template>
  <div class="banner">
    <!-- Swiper -->
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/upload/banner1.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/upload/banner2.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/upload/banner1.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/upload/banner2.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/upload/banner1.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/upload/banner2.png" alt="" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
// 导入swiper插件的模块包
import Swiper, { Pagination, Navigation } from "swiper";
// 导入css样式
import "swiper/swiper-bundle.min.css";
export default {
  name: "Banner",
  mounted() {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      //  注册按钮与圆圈的模块
      modules: [Navigation, Pagination],
      // 配置圆圈
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // 配置前后按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
<style>
.banner {
  height: 690px;
  text-align: center;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  --swiper-theme-color: #fff; /* 设置Swiper风格 */
  /* --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  /* --swiper-navigation-color: #00ff33; 单独设置按钮颜色 */
  /* --swiper-navigation-size: 30px; 设置按钮大小 */ 
}
</style>