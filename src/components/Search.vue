<template>
  <div class="searchBox">
    <div class="searchContent">
      <div class="shopcar">
        <a @click="toShopCar"
          ><img src="../assets/image/shopcar.png" alt=""
        /></a>
      </div>
      <div class="search">
        <input
          type="text"
          placeholder="搜索"
          v-model="search"
          @keydown.enter="searchProducts"
        />
        <a @click="searchProducts"
          ><img class="glass" src="../assets/image/glass.png" alt=""
        /></a>
      </div>
      <div class="users">
        <a 
          ><img src="../assets/image/userlogo.png" alt=""
        /></a>
        <span>{{id}}</span>
        <a class="login" @click="toLogin" v-show="!id">登录</a>
        <a class="register" @click="toRegist" v-show="!id">/免费注册</a>
        <a @click="exitLogin" v-show="id">退出</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      search: "",
      list: [],
      Login: "unLogin",
      id:''
    };
  },
  computed: {
    ...mapState("userStore", ["users"]),
  },
  methods: {
    searchProducts() {
      if (!this.search) {
        alert("请输入要搜索的商品");
      } else {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let result = [];
          this.list.forEach((item) => {
            if (item.info.indexOf(this.search) > -1) {
              result.push(item);
            }
          });
          this.$router.push({ name: "storeSearch", query: { list: result } });
        }, 500);
      }
    },
    toLogin() {
      if (!window.sessionStorage.getItem("Login")) {
        window.sessionStorage.setItem("Login", "unLogin");
      } else {
        this.Login = window.sessionStorage.getItem("Login");
        window.console.log(this.Login);
      }
      if (this.Login === "isLogin") {
        alert("您已登录,无需再次登录");
      } else {
        this.$router.push({ name: "loginLand" });
      }
    },
    toRegist() {
      if (!window.sessionStorage.getItem("Login")) {
        window.sessionStorage.setItem("Login", "unLogin");
      } else {
        this.Login = window.sessionStorage.getItem("Login");
        window.console.log(this.Login);
      }
      if (this.Login === "isLogin") {
        alert("您已登录,无需再次登录");
      } else {
        this.$router.push({ name: "loginRegist" });
      }
    },
    toShopCar() {
      if (!window.sessionStorage.getItem("Login")) {
        window.sessionStorage.setItem("Login", "unLogin");
      } else {
        this.Login = window.sessionStorage.getItem("Login");
        window.console.log(this.Login);
      }
      if (this.Login === "isLogin") {
        this.$router.replace({ name: "shopCar" });
      } else {
        this.$router.push({ name: "unLoginShopCar" });
      }
    },
    exitLogin(){
      window.sessionStorage.setItem('id','')
      window.sessionStorage.setItem('Login','unLogin')
      this.id=''
      this.$router.push('/home')
    }
  },
  mounted() {
    this.$http
      .get("data/products.json")
      .then((res) => {
        this.list = res.data.products;
      })
      .catch((err) => {
        window.console.log(err);
      });
    if (!window.sessionStorage.getItem("Login")) {
      window.sessionStorage.setItem("Login", "unLogin");
    }
    if(!window.sessionStorage.getItem('id')){
      window.sessionStorage.setItem('id','')
    }else{
      this.id=window.sessionStorage.getItem('id')
    }
  },
};
</script>
<style>
.searchBox {
  height: 25px;
  text-align: center;
}
.searchContent {
  line-height: 25px;
}
.users {
  float: right;
  color: #e4e7e6;
}
.users a {
  text-decoration: none;
  color: #e4e7e6;
  font-size: 18px;
}
.users a:hover {
  color: rgb(148, 34, 34);
}
.users span{
  margin-right: 10px;
  font-size: 22px;
}
.users img {
  margin-right: 6px;
}
.search {
  float: right;
  position: relative;
}
.search input {
  width: 150px;
  height: 25px;
  margin-left: 35px;
  padding: 5px;
  color: #fff;
  border: 1px solid #fff;
  outline: none;
  border-radius: 5px;
  background-color: #374840;
}
.glass {
  position: absolute;
  top: 10px;
  right: 5px;
  width: 12px;
  height: 12px;
}
.shopcar {
  float: right;
  margin-left: 32px;
}
</style>