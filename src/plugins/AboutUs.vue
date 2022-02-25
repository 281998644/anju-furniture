<template>
  <div class="aboutus">
    <!-- 主图banner -->
    <div class="aboutus-banner">
      <img src="../assets/upload/aboutus-banner.png" alt="" />
    </div>
    <!-- 主图banner -->

    <!-- 服务热线 -->
    <div class="aboutusinfo w">
      <h3>SERICETIME</h3>
      <span>——</span><span class="aboutusinfo-title">服务时间</span
      ><span>——</span>
      <p class="aboutusinfo-pargh">
        THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
        LUXURY.
      </p>
      <span>——</span>
      <div class="serve">
        <img src="../assets/upload/serve.png" alt="" />
      </div>
    </div>
    <!-- 服务热线 -->

    <!-- 联系我们 -->
    <div class="cantact">
      <div class="w">
        <h3>CONTACTINFORMATION</h3>
        <span>——</span><span class="cantact-title">联系方式</span
        ><span>——</span>
        <p class="cantact-pargh">
          THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
          LUXURY.
        </p>
        <span>——</span>
        <div class="serve">
          <ul>
            <li><img src="../assets/upload/phone.png" alt="" /></li>
            <li><img src="../assets/upload/email.png" alt="" /></li>
            <li><img src="../assets/upload/kefu.png" alt="" /></li>
            <li><img src="../assets/upload/qq.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->

    <!-- 留言反馈 -->
    <div class="feedback w">
      <h3>FEEDBACKINFORMATION</h3>
      <span>——</span><span class="feedback-title">反馈信息</span><span>——</span>
      <p class="feedback-pargh">
        THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
        LUXURY.
      </p>
      <span>——</span>
      <div class="feed">
        <div class="feedform-img">
          <img src="../assets/upload/feedback.png" alt="" />
        </div>
        <div class="feedform">
          <p>留言反馈</p>
          <!-- element-ui  表格 -->
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名:" class="item">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="电话:">
              <el-input v-model.number="form.phone"></el-input>
            </el-form-item>
            <el-form-item
              label="邮箱:"
              :rules="[
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="地址:">
              <el-input v-model="form.adress"></el-input>
            </el-form-item>

            <el-form-item label="留言反馈:">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">发送给我们</el-button>
            </el-form-item>
          </el-form>
          <!-- element-ui  表格 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        adress: "",
        // region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      alert('感谢您的留言，我们会尽快回复您');
      this.form.name=""
      this.form.phone=""
      this.form.email=""
      this.form.adress=""
      this.form.desc=""
    },
  },
};
</script>
<style scoped>
/* 关于banner */
.aboutus-banner {
  width: 100%;
  height: 690px;
  overflow: hidden;
}
.aboutus-banner img {
  width: 100%;
  height: 100%;
}
/* 关于banner */

/* 关于服务热线 */
.aboutusinfo,
.cantact,
.feedback {
  color: #fff;
  text-align: center;
  margin-top: 70px;
  overflow: hidden;
}
.aboutusinfo h3,
.cantact h3,
.feedback h3 {
  font-size: 30px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin-bottom: 17px;
}
.aboutusinfo-title,
.cantact-title,
.feedback-title {
  font-size: 30px;
  margin: 0 50px 0 50px;
}
.aboutusinfo-pargh,
.cantact-pargh,
.feedback-pargh {
  font-size: 12px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin: 28px 0 28px 0;
}

.serve {
  width: 800px;
  height: 330px;
  margin: 100px 0 0 200px;
}
.serve img {
  width: 100%;
  height: 100%;
}
/* 关于服务热线 */

/* 联系我们 */
.cantact {
  width: 100%;
  height: 580px;
  padding: 55px;
  margin-top: 140px;
  background-color: #374840;
}

.serve ul li {
  float: left;
  width: 100px;
  height: 150px;
  margin-right: 120px;
}
.serve ul li:last-child {
  margin-right: 0;
}
/* 联系我们 */

/* 留言反馈 */
.feedform-img {
  float: left;
  width: 440px;
  height: 500px;
  margin: 100px 90px 100px 0;
}
.feedform-img img {
  width: 100%;
  height: 100%;
}
.feedform {
  float: left;
  margin-top: 150px;
}
.feedform p {
  margin-bottom: 20px;
}
.el-button {
  background-color: #7d7d7d;
  border: none;
}
.el-form-item {
  width: 500px;
}
.feedform /deep/ .el-form-item__label{
  font-weight: bold;
  font-size: 15px;
  color: #fff;
}
</style>