# anju

## 该项目是一个名为“安居”的在线的家具商城官网，在设计方面，前期通过PS、AI、cooker等软件进行网页的构思与设计，制作草稿图、原型图与完成图，包括主页、详情页、在线商城等9个页面，在技术开发方面、运用了html、js、css、Vue全家桶（vuex、vueRouter）、axios、swiper（插件）等技术进行开发。

## 1.整个项目是通过VueRouter路由的跳转实现多页面的转换
主页
![image](https://github.com/281998644/anju-furniture/blob/master/images/homepage.png)
![image](https://github.com/281998644/anju-furniture/blob/master/images/homepage1.png)
![image](https://github.com/281998644/anju-furniture/blob/master/images/homepage2.png)

更多页面展示在images文件中


## 2.在线商城页面，页面中的商品过多，因此通过分页来展示，还可以分类显示以及搜索商品，项目中的数据均以本地文件json的方式，通过发送axios请求存在vuex中，形成一个集中式数据状态存取。
![image](https://github.com/281998644/anju-furniture/blob/master/images/products.png)

## 3.详情页面，布局以一个轮播图与商品的规格选择、下方由一个商品介绍组成。实现了选择商品的颜色、以及规格的功能、可以添加到购物车中展示。
![image](https://github.com/281998644/anju-furniture/blob/master/images/details.png)

## 4.购物车的基本增、删、全选功能的实现
![image](https://github.com/281998644/anju-furniture/blob/master/images/shopcar2.png)

## 5.用户的登录通过简单的sessionStorage 将登录状态保存在浏览器中，实现了正则限制表单验证，与登录状态时购物车的切换
![image](https://github.com/281998644/anju-furniture/blob/master/images/login.png)
![image](https://github.com/281998644/anju-furniture/blob/master/images/regist.png)
![image](https://github.com/281998644/anju-furniture/blob/master/images/shopcar1.png)
![image](https://github.com/281998644/anju-furniture/blob/master/images/signin.png)

## 优化方面
  （1）做了SEO优化提高网站的排名
  （2）节流与防抖、避免同一时间触发多次事件 （登录注册功能）
  （3）图片的懒加载lazyload（使用vue中的vue-lazyload）











