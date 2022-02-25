<template>
  <div class="footer">
    <div class="w">
      <div class="footer-logo">
        <img src="../assets/upload/logo.png" alt="" />
      </div>
      <div class="footer-about">
        <dl>
          <dt>关于我们</dt>
          <dd>美团概述</dd>
          <dd>美团简介</dd>
          <dd>企业理念</dd>
          <dd>发展里程碑</dd>
        </dl>
        <dl>
          <dt>客户服务</dt>
          <dd>服务政策</dd>
          <dd>服务流程</dd>
          <dd>服务规范</dd>
          <dd>预约定制</dd>
        </dl>

        <dl>
          <dt>售后保障</dt>
          <dd>收货指南</dd>
          <dd>退货政策</dd>
          <dd>物流配送</dd>
          <dd>常见问题</dd>
        </dl>

        <dl>
          <dt>联系我们</dt>
          <dd>查询货品</dd>
          <dd>查询详情</dd>
          <dd>店舖位置</dd>
          <dd>各地联络</dd>
        </dl>
      </div>
      <div class="quickMark">
        <img src="../assets/image/quickMark.png" alt="" />
        <p>公司电话: 060 - 68686868</p>
        <p>公司传真: 060 - 68686868</p>
        <p>公司地址: 广西省桂林市金鸡路</p>
      </div>
      <div class="footer-number"></div>
      <div class="footer-serve">
        <ul>
          <li>
            <img src="../assets/image/maintain.png" alt="" />
            <p>保修</p>
          </li>
          <li>
            <img src="../assets/image/quality.png" alt="" />
            <p>品质保证</p>
          </li>
          <li>
            <img src="../assets/image/sock.png" alt="" />
            <p>安全保障</p>
          </li>
          <li>
            <img src="../assets/image/email.png" alt="" />
            <p>15天包邮</p>
          </li>
          <li>
            <img src="../assets/image/delivery.png" alt="" />
            <p>快递</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-line"></div>
    <div class="footer-copyright">
      <p>© 2003-2017 TMALL.COM 安居家居有限公司 版权所有 不得转载 | 私隐政策</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.footer {
  position: relative;
  height: 488px;
  background-color: #374840;
}
/* 底部图标的样式 */
.footer-logo {
  float: left;
  margin-top: 82px;
  overflow: hidden;
}
/* 底部导航 */
.footer-about dl {
  float: left;
  margin: 82px 0 0 110px;
}
.footer-about dl dt {
  color: #c1c1c0;
  font-size: 20px;
}
.footer-about dl dd {
  padding: 6px 0 6px 0;
  font-size: 14px;
  color: #8b8b8b;
}
/* 二维码的样式 */
.quickMark {
  float: left;
  width: 200px;
  height: 192px;
  margin: 82px 0 0 70px;
  text-align: left;
  overflow: hidden;
}
.quickMark img {
  width: 116px;
  height: 116px;
  margin-bottom: 12px;
}
.quickMark p {
  color: #8b8b8b;
  font-size: 14px;
}
/* 服务的样式 */
.footer-serve ul {
  margin-left: 270px;
  text-align: center;
}
.footer-serve ul li {
  float: left;
  width: 60px;
  height: 88px;
  font-size: 14px;
  margin-right: 80px;
  color: #828383;
}
.footer-serve ul li img {
  width: 100%;
  height: 55px;
  margin-bottom: 18px;
}
.footer-line {
  position: absolute;
  width: 100%;
  bottom: 100px;
  left: 0;
  border: 1px solid #c1c1c0;
}
.footer-copyright p{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    font-size: 14px;
    color: #656564;
}
</style>