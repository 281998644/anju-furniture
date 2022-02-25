// 引入Vue
import Vue from 'vue'
// 引入vuex插件
import Vuex from 'vuex'
import detailStore from './detailStore'
import shopCarStore from './shopCarStore'
import classifyStore from './classifyStore'
import userStore from './userStore'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        detailStore,
        shopCarStore,
        classifyStore,
        userStore
    }
    
})