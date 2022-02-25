<template>
  <div class="storeContent">
    <div class="classify">
      <h1>首页</h1>
      <router-link to="/onlineStore/storeContent" active-class="store-current"
        >&gt;&nbsp;&nbsp;<span>产品中心</span></router-link
      >
      <router-link
        to="/onlineStore/storeDetails"
        active-class="store-current"
        v-if="$router.path == '/onlineStore/storeDetails'"
        >&gt;&nbsp;&nbsp;<span>产品详情</span></router-link
      >
      <div class="classify-all">
        <p>全部分类</p>
        <ul>
          <li>客厅家具</li>
          <li v-for="(furniture,index) in jiaju" :key="furniture.id">
            <a @click="toSearchJiaju(furniture,index)" :class="{select:index==selectjiaju}">{{ furniture.title }}</a>
          </li>
        </ul>
        <ul>
          <li>颜色</li>
          <li v-for="(color,index) in color" :key="color.id">
            <a @click="toSearchColor(color,index)" :class="{select:index==selectcolor}"> {{ color.title }}</a>
          </li>
        </ul>
        <ul>
          <li>结构</li>
          <li v-for="(jiegou,index) in jiegou" :key="jiegou.id">
            <a @click="toSearchJiegou(jiegou,index)" :class="{select:index==selectjiegou}">{{ jiegou.title }}</a>
          </li>
        </ul>
        <ul>
          <li>价格</li>
          <li v-for="(price,index) in price" :key="price.id">
            <a @click="toSearchPrice(price,index)" :class="{select:index==selectprice}">{{ price.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="store-product">
      <ul>
        <li
          class="card"
          v-for="(product, index) in productsShow"
          :key="product.id"
          @click="toDetails"
        >
          <img
            v-lazy="
              require('../../assets/upload/host-img-box' +
                (index + 1 < 5 ? ++index : (index = 1)) +
                '.png')
            "
            alt=""
          />
          <p>{{ product.info }}</p>
          <p>
            ￥{{ product.newPrice }}
            <span class="pianyi"> ￥{{ product.oldPrice }}</span>
          </p>
          <p class="sale">已售999+</p>
        </li>
      </ul>
      <div class="page" v-show="productsShow">
        <ul>
          <button class="prePage" @click="prePage()" v-show="currentPage">
            &lt; 上一页
          </button>
          <li
            v-for="(page, index) in pageNum"
            :key="index"
            :class="{ select: index == currentPage }"
            @click="pageNow(index)"
          >
            {{ index + 1 }}
          </li>
          <button
            class="nextPage"
            @click="nextPage()"
            v-show="currentPage != pageNum - 1"
          >
            下一页 &gt;
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "storeContent",
  data() {
    return {
      products: [], //发送请求后台传过来的数据
      totalPage: [], //所有页面的数据
      pageSize: 8, //每页显示的数量
      pageNum: 1, //共几页
      productsShow: "", //当前显示的数据
      currentPage: 0, //默认当前显示第几页
      selectjiaju:-1,
      selectcolor:-1,
      selectjiegou:-1,
      selectprice:-1,
    };
  },
  computed: {
    ...mapState("classifyStore", ["color", "jiaju", "jiegou", "price"]),
  },
  methods: {
    toDetails() {
      this.$router.push("/onlineStore/storeDetails");
    },
    toSearchJiaju(value,index) {
      let result = [];
      this.products.forEach((product) => {
        if (product.jiaju == value.title) {
          result.push(product);
        }
      });
      this.productsShow = result;
      this.selectjiaju=index
    },
    toSearchColor(value,index) {
      let result = [];
      this.products.forEach((product) => {
        if (product.color == value.title) {
          result.push(product);
        }
      });
      this.productsShow = result;
      this.selectcolor=index
    },
    toSearchJiegou(value,index) {
      let result = [];
      this.products.forEach((product) => {
        if (product.jiegou == value.title) {
          result.push(product);
        }
      });
      this.productsShow = result;
      this.selectjiegou=index
    },
    toSearchPrice(value,index) {
      let minprice = 0;
      let maxprice = 0;
      let result = value.title;
      result = result.split("-");
      minprice = result[0].replace(/[^0-9]/gi, "");
      minprice = parseInt(minprice);
      maxprice = parseInt(result[1]);
      let price = [];
      this.products.forEach((product) => {
        if (
          parseInt(product.newPrice) < maxprice &&
          parseInt(product.newPrice) > minprice
        ) {
          price.push(product);
        }
      });
      this.productsShow = price;
      this.selectprice=index
      
},
    // 下一页
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return;
      this.productsShow = this.totalPage[++this.currentPage];
    },

    // 上一页
    prePage() {
      if (this.currentPage === 0) return;
      this.productsShow = this.totalPage[--this.currentPage];
    },

    // 当前页面
    pageNow(index) {
      this.productsShow = this.totalPage[index];
      this.currentPage = index;
    },
  },
  mounted() {
    this.$http
      .get("data/products.json")
      .then((res) => {
        this.products = res.data.products;
        for (let i = 0; i < this.products.length; i++) {
          this.totalPage.push(this.products);
        }
        this.pageNum = Math.ceil(this.products.length / this.pageSize) || 1;
        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.products.slice(
            this.pageSize * i,
            this.pageSize * (i + 1)
          );
        }
        this.productsShow = this.totalPage[this.currentPage];
      })
      .catch((error) => {
        window.console.log(error.data);
      });
    this.$store.dispatch("classifyStore/getClassify");
  },
};
</script>

<style scoped>
.select {
  color: #e1820f;
}
.store-current span {
  color: #e1820f;
}
.classify {
  position: relative;
  width: 100%;
  height: 280px;
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
.classify-all p {
  width: 120px;
  height: 70px;
  font-size: 30px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin-left: 50%;
  transform: translateX(-50%);
}

.classify-all ul {
  width: 100%;
  height: 42px;
  line-height: 42px;
  border: 1px solid #fff;
}
.classify-all ul li {
  float: left;
  width: 200px;
  height: 42px;
  font-size: 18px;
  text-align: center;
}
.classify-all ul li a:hover {
  color: rgb(187, 61, 61);
}
.classify-all ul li:first-child {
  width: 168px;
  height: 100%;
  background-color: #374840;
  text-align: center;
}
.jiaju {
  border-bottom: 1px solid #fff;
}
/* elementui 图片展示样式 */
.store-product {
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
}
.card {
  position: relative;
  float: left;
  width: 280px;
  height: 330px;
  margin: 0 20px 70px 0;
  cursor: pointer;
}
.card img {
  width: 100%;
  height: 244px;
}
.card p:first-of-type {
  width: 100%;
  height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card p {
  font-size: 12px;
  color: #fff;
  margin-top: 25px;
}
.card .pianyi {
  text-decoration: line-through;
}
.sale {
  position: absolute;
  right: 0;
  bottom: 0;
}
.page {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.prePage {
  margin-right: 50px;
}
.page ul li {
  float: left;
  width: 30px;
  height: 30px;
  margin-top: 5px;
  cursor: pointer;
}
.prePage,
.nextPage {
  float: left;
  width: 80px;
  height: 30px;
  margin-top: 5px;
  margin-left: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #374840;
  border: none;
}
</style>
