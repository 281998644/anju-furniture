<template>
  <div class="newArrival w">
    <!-- 字体布局 -->
    <h3>NEWARRIVAL</h3>
    <span>——</span><span class="new-title">新品推荐</span><span>——</span>
    <p class="new-pargh">
      THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
      LUXURY.
    </p>
    <span>——</span>
    <!-- 图片布局 -->
    <div class="new-img">
      <div class="new-img-box1">
        <img src="../assets/upload/new-img-box1.png" alt="" />
      </div>
      <div class="new-img-box2">
        <button @click="toDetails">了解更多</button>
        <img src="../assets/upload/new-img-box2.png" alt="" />
      </div>
      <div class="new-img-box3">
        <button @click="toDetails">了解更多</button>
        <img src="../assets/upload/new-img-box3.png" alt="" />
      </div>
      <div class="new-img-box4">
        <img src="../assets/upload/new-img-box4.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewArrival",
  methods:{
    toDetails(){
      this.$router.push('/onlineStore/storeDetails')
    }
  }
};
</script>
<style>
/* 新品样式 */
.newArrival {
  color: #fff;
  text-align: center;
  margin-top: 50px;
  overflow: hidden;
}
.newArrival h3 {
  font-size: 30px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin-bottom: 17px;
}
.new-title {
  font-size: 30px;
  margin: 0 50px 0 50px;
}
.new-pargh {
  font-size: 12px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin: 28px 0 28px 0;
}
/* 新品图片样式 */
.new-img {
  overflow: hidden;
  margin-top: 70px;
}
.new-img-box1,
.new-img-box2,
.new-img-box3,
.new-img-box4 {
  float: left;
  width: 600px;
  height: 313px;
  overflow: hidden;
}
.new-img-box2,
.new-img-box3{
  position: relative;
}
.new-img-box2 button,
.new-img-box3 button{
  position: absolute;
  bottom: 42px;
  left: 50%;
  width: 129px;
  height: 45px;
  cursor: pointer;
  color: #fff;
  transform: translateX(-50%);
  border: 1px solid #fff;
  background-color: transparent;
}
</style>