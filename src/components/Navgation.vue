<template>
  <div class="navgation">
    <ul>
      <li >
        <router-link to="/home" active-class="current">首页
          <p>HOME&nbsp;&nbsp;&nbsp;PAGE</p></router-link>
      </li>
      <li>
        <router-link to="/onlineStore" active-class="current">产品中心<p>PRODUCT&nbsp;&nbsp;&nbsp;CENTER</p></router-link>
      </li>
      <li>
        <router-link to="/introduction" active-class="current">品牌介绍<p>BRAND&nbsp;&nbsp;&nbsp;INTRODUCTION</p></router-link>
      </li>
      <li>
        <router-link to="/news" active-class="current">新闻资讯<p>NEW&nbsp;&nbsp;&nbsp;INFORMATION</p></router-link> 
      </li>
      <li>
        <router-link to="/aboutUs" active-class="current">介绍我们<p>CONTACT&nbsp;&nbsp;&nbsp;US</p></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navgation",
};
</script>
<style >
.navgation {
  position: absolute;
  right: 5px;
  bottom: 33px;
  width: 700px;
  height: 60px;
}
.navgation ul li {
  float: left;
  height: 60px;
  padding: 2px 20px 0 20px;
  text-align: center;
  font-size: 10px;
}
.navgation ul li:hover {
  border-bottom: 2px solid #eec23d;
  color: #eec23d;
}
.navgation ul li:hover a {
  color: #eec23d;
}
.navgation ul li a {
  font-size: 18px;
}
.navgation ul li a p {
  margin-top: 15px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,STHeiti;
  font-size: 10px;
}
.current{
  color: #eec23d;
}
</style>