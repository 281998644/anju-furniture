import Vue from 'vue'
import App from './App.vue'
// 引入路由插件
import VueRouter from 'vue-router'
import router from './router'
// 引入store
import store from './store'
// 引入axios请求数据
import axios from 'axios'
//引入图片懒加载
import atm from './assets/image/atm.gif'
import VueLazyload from 'vue-lazyload'
// 引入element-ui插件
import { Form, FormItem, Input, Button, Row, InputNumber, Message, MessageBox, Pagination } from 'element-ui';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Row)
Vue.use(InputNumber)
Vue.use(Pagination)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$http = axios
//配置图片懒加载
Vue.use(VueLazyload,{
  loading:atm
})

new Vue({
  el: '#app',
  render: h => h(App),
  store:store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
