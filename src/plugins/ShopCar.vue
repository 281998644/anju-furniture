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
              <li>
                全部商品<span>{{ shopCarProducts.length }}</span>
              </li>
            </ul>
          </div>
          <div class="products-title">
            <input
              type="checkbox"
              :checked="checkAllFlag"
              @click="checkAll(!checkAllFlag)"
            />全选
            <span>商品信息</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </div>
          <div class="products-main">
            <ul>
              <li
                v-for="(products, index) in shopCarProducts"
                :key="products.id"
                ref="products"
                :class="{ current: products.checked }"
              >
                <input
                  type="checkbox"
                  @click="selectProducts(products)"
                  ref="checkbox"
                />
                <div class="products-img">
                  <img src="../assets/upload/host-img-box1.png" alt="" />
                </div>
                <p>
                  {{ products.info }}
                </p>
                <span>人数: {{ products.people }}</span>
                <span>￥{{ products.price }}</span>
                <span
                  ><el-input-number
                    size="mini"
                    v-model="products.num"
                    :min="1"
                    :max="99"
                    @change="getTotalPrice"
                  ></el-input-number
                ></span>
                <span>￥{{ (products.num * products.price).toFixed(2) }}</span>
                <a @click="deleteProducts(index)">删除</a>
              </li>
            </ul>
            <div class="products-none" v-show="!shopCarProducts.length">
              <span>购物车中暂无商品,快去抢购吧</span>
            </div>
            <div class="products-edit" v-show="shopCarProducts.length">
              <input
                type="checkbox"
                :checked="checkAllFlag"
                @click="checkAll(!checkAllFlag)"
              />全选
              <span @click="deleteAll()">全部删除</span>
              <span>已选 {{ checkNum }} 件</span>
              <span> 合计(不含运费):</span>
              <span>￥{{ totalPrice }}</span>
              <button @click="payFor">结算</button>
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
import { mapState } from "vuex";
export default {
  name: "ShopCar",
  components: { Footer },
  data() {
    return {
      // products: [],
      totalPrice: 0, //商品的总价
      selectId: [], //选中的商品的id
      checkNum: 0, //选择的商品的数量（结算时需显示的数量）
      checkAllFlag: false, //是否全选
    };
  },
  computed: {
    ...mapState("shopCarStore", ["shopCarProducts"]),
  },
  methods: {
    //删除商品
    deleteProducts(index) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          // this.shopCarProducts.splice(index, 1);
          this.$store.dispatch('shopCarStore/delShopCarProducts',index)
          this.getTotalPrice();
          let count = 0;
          this.shopCarProducts.forEach((products) => {
            if (products.checked) {
              count++;
            }
          });
          this.checkNum = count;
          if (!this.shopCarProducts.length) {
            this.checkAllFlag = false;
          }
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    //删除已选择的
    deleteAll() {
      this.shopCarProducts.forEach((products) => {
        if (products.checked) {
          this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
            center: true,
          })
            .then(() => {
              this.$store.dispatch('shopCarStore/delShopCarProductsAll',this.checkAllFlag)
              if (this.checkAllFlag) {
                // this.shopCarProducts = [];
                this.checkAllFlag = !this.checkAllFlag;
              }
              // this.shopCarProducts = this.shopCarProducts.filter((products) => {
              //   return products.checked != true;
              // });
              this.checkNum = 0;
              this.getTotalPrice();
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除",
              });
            });
        }
      });
    },
    //  获取总价
    getTotalPrice() {
      let price = 0;
      var _this = this;
      this.totalPrice = 0;
      this.shopCarProducts.forEach((products) => {
        _this.$set(products, "num", products.num);
        if (products.checked) {
          price += products.price * products.num;
          _this.totalPrice = price.toFixed(2);
        }
      });
    },

    //单选按钮显示总价价格
    selectProducts(products) {
      //判断是否未定义，如果没有点击过的按钮时没有注册的，需要先注册checked属性
      if (typeof products.checked == "undefined") {
        this.$set(products, "checked", true);
        this.checkNum++;
      } else {
        //如果已经注册，则设置checked属性为否，不能直接取false，需要取反值
        products.checked = !products.checked;
        products.checked ? this.checkNum++ : this.checkNum--;
      }
      this.getTotalPrice();
      this.checkNum == this.shopCarProducts.length
        ? this.checkAll(true)
        : (this.checkAllFlag = false);
    },

    // 全选按钮
    checkAll(flag) {
      this.checkAllFlag = flag;
      flag ? (this.checkNum = this.shopCarProducts.length) : (this.checkNum = 0);
      this.shopCarProducts.forEach((products) => {
        if (typeof products.checked == "undefined") {
          this.$set(products, "checked", this.checkAllFlag);
        } else {
          products.checked = this.checkAllFlag;
        }
        this.$refs.checkbox.forEach((checkbox) => {
          checkbox.checked = this.checkAllFlag;
        });
      });
      this.getTotalPrice();
      this.checkAllFlag != this.checkAllFlag;
    },

    // 支付功能
    payFor() {
      if (this.checkNum <= 0) {
        alert("请选择需要支付的商品");
      } else {
        let mylist = [];
        let newProducts = [];
        alert("您共需要支付:" + this.totalPrice + "元");
        this.shopCarProducts.forEach((products) => {
          if (products.checked) {
            mylist.push(products);
          }
          if (!products.checked) {
            newProducts.push(products);
          }
        });
        this.$store.dispatch('shopCarStore/payForShopCarProducts',newProducts)
        // this.shopCarProducts = newProducts;
        this.getTotalPrice();
        this.checkNum = 0;
        this.checkAllFlag=false
        window.console.log(mylist, this.totalPrice);
      }
    },
  },
  mounted() {
    this.$store.dispatch('shopCarStore/getShopCarProducts')
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
  border: 1px solid #fff;
  margin-bottom: 50px;
}
.products-main ul li {
  width: 100%;
  height: 160px;
  padding: 0 30px 0 30px;
  font-size: 14px;
}
.products-main ul li input {
  float: left;
  width: 22px;
  height: 22px;
  margin-top: 70px;
}
.products-img {
  float: left;
  width: 100px;
  height: 100px;
  margin: 30px 0 0 55px;
}
.products-img img {
  width: 100%;
  height: 100%;
}
.products-main ul li p {
  float: left;
  width: 200px;
  font-size: 14px;
  margin: 60px 0 0 55px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.products-main ul li {
  position: relative;
}
.products-main ul li span {
  float: left;
  margin-top: 60px;
}
.products-main ul li span:nth-of-type(1) {
  margin-left: 90px;
  margin-right: 165px;
}
.products-main ul li span:nth-of-type(3) {
  margin-left: 50px;
  margin-right: 20px;
}
.products-main ul li a {
  position: absolute;
  top: 60px;
  right: 70px;
  cursor: pointer;
}
.products-edit {
  position: relative;
  height: 54px;
  line-height: 54px;
  font-size: 16px;
  padding-left: 30px;
  color: #fff;
  background-color: #374840;
}
.products-edit span:nth-of-type(1) {
  margin-left: 20px;
  cursor: pointer;
}
.products-edit span:nth-of-type(2) {
  margin-left: 600px;
}
.products-edit span:nth-of-type(3) {
  margin-left: 25px;
}
.products-edit span:nth-of-type(4) {
  margin-left: 5px;
  font-size: 20px;
  color: #e1820f;
}
.products-edit button {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100%;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #e1820f;
}

.products-none {
  width: 100%;
  height: 500px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 500px;
}
/* element计数器样式 */
.el-input-number {
  width: 100px;
}
</style>