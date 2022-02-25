<template>
  <div class="storeSearch">
    <div class="store-search">
      <div class="classify">
        <h1>首页</h1>
        <router-link to="/onlineStore/storeContent" active-class="store-current"
          >&gt;&nbsp;&nbsp;<span>产品中心</span></router-link
        >
        <router-link to="/onlineStore/storeSearch" active-class="store-current"
          >&gt;&nbsp;&nbsp;<span>搜索</span></router-link
        >
      </div>
      <ul>
        <li
          class="card"
          v-for="(product, index) in productsShow"
          :key="product.id"
          @click="toDetails"
        >
          <img
            :src="
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
      <div class="unfound" v-show="!products.length">没有找到您搜索的商品</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "StoreSearch",
  data() {
    return {
      totalPage: [], //所有页面的数据
      pageSize: 8, //每页显示的数量
      pageNum: 1, //共几页
      productsShow: "", //当前显示的数据
      currentPage: 0, //默认当前显示第几页
    };
  },
  computed: {
    ...mapState("classifyStore", ["color", "jiaju", "jiegou", "price"]),
    products() {
      return this.$route.query.list;
    },
  },
  methods: {
    toDetails() {
      this.$router.push("/onlineStore/storeDetails");
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
    this.$store.dispatch("classifyStore/getClassify");
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
  },
  watch: {
    products(newvalue) {
      this.products.$set = newvalue;
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
    },
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
  height: 50px;
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
/* elementui 图片展示样式 */
.store-search {
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
.unfound {
  width: 100%;
  height: 600px;
  line-height: 600px;
  color: #fff;
  text-align: center;
}
</style>
