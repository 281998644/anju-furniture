<template>
  <div class="news">
    <div class="news-banner">
      <img src="../assets/upload/news-banner.png" alt="" />
    </div>

    <!-- 行业资讯 -->
    <div class="newsinfo w">
      <h3>INDUSTRYINFORMAYION</h3>
      <span>——</span><span class="newsinfo-title">行业资讯</span><span>——</span>
      <p class="newsinfo-pargh">
        THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
        LUXURY.
      </p>
      <span>——</span>
      <div class="news-img">
        <div class="news-img-box1">
          <img src="../assets/upload/news-info.png" alt="" />
        </div>
        <div class="news-img-box2">
          <img src="../assets/upload/news-info3.png" alt="" />
        </div>
        <div class="news-img-box3">
          <img src="../assets/upload/news-info4.png" alt="" />
        </div>
        <div class="news-img-box4">
          <img src="../assets/upload/news-info2.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 行业资讯 -->

    <!-- 公司新闻 -->
    <div class="company-news w">
      <h3>COMPANYNEWS</h3>
      <span>——</span><span class="company-news-title">公司新闻</span
      ><span>——</span>
      <p class="company-news-pargh">
        THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
        LUXURY.
      </p>
      <span>——</span>
      <div class="company-news-img">
        <div class="company-news-img-box1">
          <img src="../assets/upload/company-news.png" alt="" />
          <img src="../assets/upload/hangye.png" alt="" />
        </div>
        <div class="company-news-img-box2">
          <img src="../assets/upload/company-news2.png" alt="" />
          <img src="../assets/upload/hangye.png" alt="" />
        </div>
        <div class="company-news-img-box3">
          <img src="../assets/upload/company-news3.png" alt="" />
          <img src="../assets/upload/hangye.png" alt="" />
        </div>
        <div class="company-news-img-box4">
          <img src="../assets/upload/company-news4.png" alt="" />
          <img src="../assets/upload/hangye.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 公司新闻 -->
  </div>
</template>
<script>
export default {
  name: "News",
};
</script>
<style scoped>
/* 新闻banner */
.news-banner {
  width: 100%;
  height: 690px;
  overflow: hidden;
}
/* 新闻banner */

/* 行内资讯 */
.news img {
  width: 100%;
  height: 100%;
}
.newsinfo,
.company-news {
  color: #fff;
  text-align: center;
  margin-top: 70px;
  overflow: hidden;
}
.newsinfo h3,
.company-news h3 {
  font-size: 30px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin-bottom: 17px;
}
.newsinfo-title,
.company-news-title {
  font-size: 30px;
  margin: 0 50px 0 50px;
}
.newsinfo-pargh,
.company-news-pargh {
  font-size: 12px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin: 28px 0 28px 0;
}
.news-img {
  overflow: hidden;
  margin-top: 70px;
}
.news-img-box1,
.news-img-box2,
.news-img-box3,
.news-img-box4 {
  float: left;
  width: 600px;
  height: 313px;
  overflow: hidden;
}
.news-img-box2,
.news-img-box3 {
  padding: 20px;
}
/* 行内资讯 */

/* 公司新闻 */
.company-news-img{
    margin-top: 70px;
}
.company-news-img-box1,
.company-news-img-box2,
.company-news-img-box3,
.company-news-img-box4 {
  float: left;
  width: 550px;
  height: 220px;
  margin: 0 50px 70px 0;
}
.company-news-img-box1 img:first-child,
.company-news-img-box2 img:first-child,
.company-news-img-box3 img:first-child,
.company-news-img-box4 img:first-child {
  width: 260px;
  height: 220px;
}
.company-news-img-box1 img:last-child,
.company-news-img-box2 img:last-child,
.company-news-img-box3 img:last-child,
.company-news-img-box4 img:last-child {
  width: 230px;
  height: 220px;
  margin-left: 20px;
}
/* 公司新闻 */
</style>