<template>
  <div class="introduction">
    <div class="intr-banner">
      <img src="../assets/upload/intr_banner.png" alt="" />
    </div>
    <!-- 公司简介 -->
    <div class="intro w">
      <h3>NEWSCONSULTATION</h3>
      <span>——</span><span class="introduction-title">公司简介</span
      ><span>——</span>
      <p class="introduction-pargh">
        THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
        LUXURY.
      </p>
      <span>——</span>
      <div class="introduction-img">
        <div class="company">
          <img src="../assets/upload/company.png" alt="" />
        </div>
        <div class="company-source">
          <img src="../assets/image/company-source.png" alt="" />
        </div>
        <div class="company-rule">
          <div class="company-hope">
            <img src="../assets/image/company-hope.png" alt="" />
          </div>
          <div class="company-order">
            <img src="../assets/image/company-order.png" alt="" />
          </div>
          <div class="company-mind">
            <img src="../assets/image/company-mind.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 公司简介 -->

    <!-- 公司发展进程 -->
    <div class="company-develop w">
      <h3>DEVELOPMENT</h3>
      <span>——</span><span class="introduction-title">发展历程</span
      ><span>——</span>
      <p class="introduction-pargh">
        THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
        LUXURY.
      </p>
      <span>——</span>
      <div class="develop-img">
        <img src="../assets/image/develop.png" alt="" />
      </div>
      <!-- 公司发展进程 -->
    </div>
    <!-- 公司发展进程 -->

    <!-- 公司设计师 -->
    <div class="company-design w">
      <h3>DESINGNER</h3>
      <span>——</span><span class="introduction-title">设计师</span
      ><span>——</span>
      <p class="introduction-pargh">
        THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
        LUXURY.
      </p>
      <span>——</span>
      <div class="designer">
        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/upload/grcic.png" alt=""></div>
            <div class="swiper-slide"><img src="../assets/upload/nanna.png" alt=""></div>
            <div class="swiper-slide"><img src="../assets/upload/sandell.png" alt=""></div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <!-- 公司设计师 -->
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Introduction",
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>
<style scoped>
.intr-banner {
  width: 100%;
  height: 690px;
  overflow: hidden;
}
.intr-banner img,
.company-source img,
.company-hope img,
.company-order img,
.company-mind img,
.develop-img img {
  width: 100%;
  height: 100%;
}
.intro,
.company-develop,
.company-design {
  color: #fff;
  text-align: center;
  margin-top: 70px;
  overflow: hidden;
}
.intro h3,
.company-develop h3,
.company-design h3 {
  font-size: 30px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin-bottom: 17px;
}
.introduction-title {
  font-size: 30px;
  margin: 0 50px 0 50px;
}
.introduction-pargh {
  font-size: 12px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin: 28px 0 28px 0;
}
/* 简介图片样式 */
.introduction-img {
  margin-top: 70px;
}
.company {
  float: left;
  width: 450px;
  height: 385px;
  overflow: hidden;
  margin-right: 50px;
}
.company-source {
  float: left;
  width: 700px;
  height: 240px;
  margin: 45px 0 100px 0;
}
.company-hope,
.company-order,
.company-mind {
  float: left;
  width: 270px;
  height: 240px;
}
.company-order {
  margin: 0 195px 0 195px;
}
.company-rule {
  float: left;
  margin-top: 100px;
  margin-bottom: 100px;
}
/* 公司进展 */
.develop-img {
  margin-top: 100px;
}
/* 公司设计师样式 */
.designer{
  width: 100%;
  height: 545px;
  margin-top: 100px;
  margin-bottom: 145px;
}
/* Swiper轮播图样式 */
.swiper-container {
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
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
</style>