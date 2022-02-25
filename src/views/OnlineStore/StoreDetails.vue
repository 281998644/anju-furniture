<template>
  <div class="storeDetails">
    <div class="classify">
      <h1>首页</h1>
      <router-link to="/onlineStore/storeContent" active-class="store-current"
        >&gt;&nbsp;&nbsp;
        <span>产品中心</span>
      </router-link>
      <router-link to="/onlineStore/storeDetails" active-class="store-current"
        >&gt;&nbsp;&nbsp;<span>产品详情</span></router-link
      >
    </div>
    <div class="details">
      <div class="addShopCar">
        <div class="addShopCar-img">
          <!-- Swiper -->
          <div
            style="
              --swiper-navigation-color: #fff;
              --swiper-pagination-color: #fff;
            "
            class="swiper mySwiper2"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img1.png" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img2.png" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img3.png" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img4.png" />
              </div>
            </div>
          </div>
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img1.png" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img2.png" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img3.png" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/upload/detail-img4.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="addShopCar-info">
          <h1>北欧单人沙发椅售楼处接待洽谈桌椅 组合商务轻奢咖啡厅休闲椅子</h1>
          <h3>原价<span>￥750.00-4000.00</span></h3>
          <h3 ref="cheap">优惠价￥375.00-2000.00 <a>查看更多&gt;</a></h3>
          <div class="addShopCar-like">
            <ul>
              <li>月销量: 30</li>
              <li>累计评价: 200</li>
              <li>地点: 广州</li>
              <li><img src="../../assets/image/like.png" alt="" /></li>
            </ul>
          </div>
          <div class="addShopCar-color">
            <span>颜色分类</span>
            <ul>
              <li
                v-for="(color, index) in colorAtr"
                :key="color.id"
                :class="{ current: index == colorNum }"
                @click="selectColor(index)"
              >
                <img
                  :src="
                    require('../../assets/image/sofa' + (index + 1) + '.png')
                  "
                />
              </li>
            </ul>
          </div>
          <div class="addShopCar-size">
            <span>规格</span>
            <ul>
              <li
                v-for="(size, index) in sizes"
                :key="size.id"
                :class="{ current: index == sizeNum }"
                @click="selectSize(index)"
              >
                {{ size.size }}
              </li>
            </ul>
          </div>
          <div class="addShopCar-count">
            <span>数量</span>
            <span
              ><el-input-number
                size="mini"
                v-model="num1"
                :min="1"
                :max="999"
              ></el-input-number
            ></span>
            <span>件</span>
            <span>库存{{ num1 > 0 ? 999 - num1 : 999 }}件</span>
          </div>
          <div class="addShopCar-promise">
            <span>服务承诺</span>
            <span>
              正品保证 极速退款 七天无理由退换<br />配送说明:
              预计20个工作日送达(限大陆地区),其它地区请咨询客服。
            </span>
          </div>
        </div>
        <div class="addShopCar-btn">
          <button @click="addShopCar(num1, colorNum, sizeNum)">
            加入购物车
          </button>
          <button @click="addShopCar(num1, colorNum, sizeNum)">立即购买</button>
        </div>
      </div>
      <div class="details-img">
        <ul>
          <li><img src="../../assets/upload/details-content1.png" alt="" /></li>
          <li><img src="../../assets/upload/details-content2.png" alt="" /></li>
          <li><img src="../../assets/upload/details-content3.png" alt="" /></li>
          <li><img src="../../assets/upload/details-content4.png" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper, { Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";
import { mapState } from "vuex";
export default {
  name: "StoreDetails",
  data() {
    return {
      num1: "1",
      colorNum: 0,
      sizeNum: 0,
    };
  },
  computed: {
    ...mapState("detailStore", ["colorAtr", "sizes"]),
  },
  mounted() {
    new Swiper(".mySwiper2", {
      spaceBetween: 10,
      modules: [Thumbs],
      loop: true,
      thumbs: {
        swiper: {
          el: ".mySwiper",
          spaceBetween: 10,
          slidesPerView: 4,
          watchSlidesVisibility: true /*避免出现bug*/,
        },
      },
    });
    this.$store.dispatch("detailStore/getColorAtr");
  },
  methods: {
    // 选择商品的颜色
    selectColor(index) {
      this.colorNum = index;
    },

    // 选择商品的大小规格
    selectSize(index) {
      this.sizeNum = index;
      this.$refs.cheap.innerHTML =
        "优惠价￥" + this.sizes[index].price.toFixed(2);
    },

    // 加入购物车
    addShopCar(num, colorNum, sizeNum) {
      if (!window.sessionStorage.getItem("Login")) {
        window.sessionStorage.setItem("Login", "unLogin");
      } else {
        this.Login = window.sessionStorage.getItem("Login");
        window.console.log(this.Login);
      }
      if (this.Login === "isLogin") {
        let list = [];
        list.push(
          this.colorAtr[colorNum].color,
          this.sizes[sizeNum].size,
          "数量:" + num,
          "￥" + this.sizes[sizeNum].price
        );
        alert("加入购物车成功");

        let shopCarlist = {};
        shopCarlist.price = this.colorAtr[colorNum].price.toFixed(2);
        shopCarlist.info = this.colorAtr[colorNum].info;
        shopCarlist.people = this.colorAtr[colorNum].people;
        shopCarlist.num = num;
        this.$store.dispatch("shopCarStore/addShopCar", shopCarlist);
        this.$router.push({ name: "shopCar" });
      } else {
        this.$router.push({ name: "unLoginShopCar" });
      }
    },
  },
};
</script>

<style scoped>
.current {
  border: 2px solid #f8b551 !important;
}
.store-current span {
  color: #e1820f;
}
.classify {
  width: 100%;
  height: 30px;
  margin-top: 60px;
  color: #fff;
  font-size: 14px;
}
.classify h1 {
  float: left;
  font-size: 16px;
  color: #fff;
  margin-right: 10px;
}
.classify a {
  float: left;
}
.details {
  padding: 10px;
  margin-bottom: 50px;
  border: 2px solid #fff;
  overflow: hidden;
}
.addShopCar-img {
  float: left;
  width: 540px;
  height: 650px;
}
/* swiper样式 */
.swiper {
  width: 540px;
  height: 650px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* swiper样式 */

.addShopCar-info {
  float: left;
  width: 600px;
  height: 650px;
  margin-left: 30px;
}
.addShopCar-info h1 {
  font-size: 30px;
  color: #fff;
  margin-bottom: 30px;
}
.addShopCar-info h3:nth-of-type(1) {
  color: #a5aca8;
  font-size: 26px;
  margin-bottom: 10px;
}
.addShopCar-info h3:nth-of-type(1) span {
  text-decoration: line-through;
}
.addShopCar-info h3:nth-of-type(2) {
  color: #f8b551;
  font-size: 26px;
}
.addShopCar-info h3:nth-of-type(2) a {
  float: right;
  font-size: 16px;
}
.addShopCar-like {
  width: 600px;
  height: 50px;
  margin-top: 10px;
  font-size: 16px;
  border: 1px solid #374840;
}
.addShopCar-like ul li {
  float: left;
  line-height: 50px;
  color: #a5aca8;
  background-color: #374840;
  overflow: hidden;
}
.addShopCar-like ul li:first-child {
  padding: 0 30px 0 30px;
}
.addShopCar-like ul li:nth-child(2) {
  padding-right: 90px;
}
.addShopCar-like ul li:nth-child(3) {
  padding-right: 100px;
}
.addShopCar-like ul li:last-child {
  width: 100px;
  text-align: center;
  background-color: #495d54;
  cursor: pointer;
}
.addShopCar-color {
  margin-top: 30px;
  overflow: hidden;
}
.addShopCar-color span {
  float: left;
  font-size: 16px;
  color: #fff;
}
.addShopCar-color ul li {
  float: left;
  margin-left: 30px;
  cursor: pointer;
}
.addShopCar-size {
  margin-top: 30px;
  overflow: hidden;
}
.addShopCar-size span {
  float: left;
  font-size: 16px;
  color: #fff;
}
.addShopCar-size ul li {
  width: 320px;
  height: 35px;
  margin-left: 90px;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  cursor: pointer;
  border: 1px dashed #fff;
}
.addShopCar-size ul li:nth-of-type(n + 2) {
  margin-top: 20px;
}

.addShopCar-count {
  color: #fff;
  font-size: 16px;
  margin-top: 30px;
}
.addShopCar-count span {
  margin-right: 60px;
}

.addShopCar-promise {
  color: #fff;
  font-size: 16px;
  margin-top: 30px;
}
.addShopCar-promise span {
  float: left;
  margin-right: 30px;
}
.addShopCar-btn button:first-child {
  width: 170px;
  height: 44px;
  margin-left: 650px;
  background-color: #f8b551;
  border: none;
  color: #fff;
  cursor: pointer;
}
.addShopCar-btn button:last-child {
  width: 170px;
  height: 44px;
  margin-left: 30px;
  background-color: transparent;
  border: 1px solid #f8b551;
  cursor: pointer;
  color: #fff;
}

.details-img {
  margin-top: 50px;
  border-top: 1px solid #fff;
}
.details-img ul li {
  width: 100%;
  margin-top: 10px;
}
.details-img ul li img {
  width: 100%;
}
</style>
