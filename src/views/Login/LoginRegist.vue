<template>
  <!-- 登录页面element -->
  <div class="login-box">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" status-icon label-width="8opx"
          ><h3>注册账号</h3>
          <hr />
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="user.username"
              placeholder="请输入用户名"
              prefix-icon
            ></el-input
          ></el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input
              v-model="user.email"
              placeholder="请输入邮箱"
              prefix-icon
              @blur="sendEmail"
            ></el-input
          ></el-form-item>
          <el-form-item id="password" prop="password" label="设置密码">
            <el-input
              v-model="user.password"
              show-password
              placeholder="请输入密码"
              @keyup.native="pswValue"
              @contextmenu.prevent.native
            ></el-input
          ></el-form-item>
          <router-link :to="{ path: '/login/loginLand' }">已有账号</router-link>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="doRegisr"
              >注册</el-button
            ></el-form-item
          >
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import debounce from '../../assets/js/debounce'
export default {
  name: "LoginRegist",
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
      },
      isLogin:false
    };
  },
  computed: {
    ...mapState("userStore", ["users"]),
  },
  methods: {
    sendEmail() {
      let regEmail =
        /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[ a-zA-Z0-9_-]+)+$/;
      if (this.user.email != "" && !regEmail.test(this.user.email)) {
        this.$message({
          message: "邮箱格式不正确",
          type: "error",
        });
        this.user.email = "";
      }
    },
    doRegisr: debounce(function() {
      if (!this.user.username) {
        this.$message({
          message: "用户名不能为空",
          type: "error",
        });
        return false;
      }
      if (!this.user.password || this.user.password.length < 8) {
        this.$message({
          message: "请输入大于8位数的密码",
          type: "error",
        });
        return false;
      }
      if (!this.user.email) {
        this.$message({
          message: "请输入邮箱地址",
          type: "error",
        });
        return false;
      }
      let flag = 1;
      let newUser = {};
      this.users.forEach((user) => {
        if (this.user.username == user.username) {
          flag = 2;
          return false;
        }
        if (this.user.email == user.email) {
          flag = 3;
          return false;
        }
      });
      if (flag == 2) {
        alert("用户名已存在");
      } else if (flag == 3) {
        alert("邮箱已被注册");
      } else {
        this.$message({
          message: "注册成功",
          type: "success",
        });
        this.$router.push({ name: "loginLand", query: { users: this.users } });
        newUser.username = this.user.username;
        newUser.email = this.user.email;
        newUser.password = this.user.password;
        this.users.push(newUser);
        this.$store.dispatch("userStore/addUser", newUser);
        this.user.username = "";
        this.user.email = "";
        this.user.password = "";
        this.isLogin=true
      }
    },1000),
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
  top: 50px;
  right: 165px;
}
.login-wrap {
  width: 450px;
  height: 500px;
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
  margin: 10px 0 0 40px;
  width: 80%;
}
.el-form-item {
  width: 395px;
  height: 61px;
}
</style>