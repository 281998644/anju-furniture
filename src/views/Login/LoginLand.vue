<template>
  <!-- 登录页面element -->
  <div class="login-box">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" status-icon label-width="8opx"
          ><h3>登录</h3>
          <hr />
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="user.username"
              placeholder="请输入用户名"
              prefix-icon
            ></el-input
          ></el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input
              v-model="user.password"
              show-password
              placeholder="请输入密码"
              @keyup.native="pswValue"
              @contextmenu.prevent.native
            ></el-input
          ></el-form-item>
          <router-link
            :to="{ path: '/login/loginRegist', query: { users: this.users } }"
            >找回密码</router-link
          >
          <router-link
            :to="{ path: '/login/loginRegist', query: { users: this.users } }"
            >注册账号</router-link
          ><el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="doLogin()"
              >登录</el-button
            ></el-form-item
          >
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
//导入封装好的节流方法
import debounce from "../../assets/js/debounce";
export default {
  name: "LoginLand",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      localUser: [],
    };
  },
  computed: {
    ...mapState("userStore", ["users"]),
  },
  methods: {
    //通过封装节流函数，防止连续点击
    doLogin: debounce(function () {
      if (!this.user.username || this.user.username.trim() == "") {
        this.$message({
          message: "请输入用户名",
          type: "error",
        });
      }
      if (
        !this.user.password ||
        !this.user.password.trim() ||
        this.user.password.trim().length < 8
      ) {
        this.$message({
          message: "请输入大于八位数的密码",
          type: "error",
        });
        this.user.password = "";
      }

      // 判断输入的用户是否存在
      let isDone = 0;
      if (this.users && this.user) {
        this.users.forEach((user) => {
          if (this.user.username == user.username) {
            if (this.user.password == user.password) {
              isDone = 1;
            }
          }
        });
      }
      if (isDone) {
        this.$router.push("/home");
        window.sessionStorage.setItem("id", this.user.username);
        this.user.username = "";
        this.user.email = "";
        this.user.password = "";
        window.sessionStorage.setItem("Login", "isLogin");
      } else {
        alert("用户名或密码错误,请重新输入");
      }
    },200),

    // 限制输入密码不能为空字符
    pswValue() {
      this.user.password = this.user.password.replace(/[\u4e00-\u9fa5]/gi, "");
    },
  },
  mounted() {
    this.$store.dispatch("userStore/getUsers");
  },
};
</script>
<style scoped>
/* 登录页面样式 */
.login-box {
  position: absolute;
  top: 100px;
  right: 165px;
}
.login-wrap {
  width: 450px;
  height: 440px;
  overflow: hidden;
  padding-top: 10px;
  line-height: 40px;
  background-color: #fff;
}

#password {
  margin-bottom: 5px;
}

h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
  text-decoration: none;
  color: #a7a7a7;
  font-size: 15px;
}
.login-box a {
  font-size: 16px;
  color: #a7a7a7;
}
a:hover {
  color: coral;
}
.el-button {
  margin: 50px 0 0 40px;
  width: 80%;
}
.el-form-item {
  width: 395px;
  height: 61px;
}
</style>