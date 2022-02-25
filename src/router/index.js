import VueRouter from 'vue-router'
// import HomeContent from '../views/Home'
import Login from '../views/Login'
import Index from '../views/Index'
import LoginLand from '../views/Login/LoginLand'
import LoginRegist from '../views/Login/LoginRegist'
import OnlineStore from '../views/OnlineStore'
import StoreContent from '../views/OnlineStore/StoreContent'
import StoreDetails from '../views/OnlineStore/StoreDetails'
import StoreSearch from '../views/OnlineStore/StoreSearch'
import Introduction from '../plugins/Introduction'
import News from '../plugins/News'
import AboutUs from '../plugins/AboutUs'
import ShopCar from '../plugins/ShopCar'
// import UnLoginShopCar from '../plugins/UnLoginShopCar'
//通过路由懒加载，路由调用时再导入


const router = new VueRouter({
    routes: [
        {
            name: "home",
            path: "/",
            redirect: '/home',
            component: Index,
            children: [
                {
                    name: 'homeContent',
                    path: 'home',
                    component: () => import('../views/Home')
                },
                {
                    name: 'onlineStore',
                    path: '/onlineStore',
                    redirect: "/onlineStore/storeContent",
                    component: OnlineStore,
                    children: [
                        {
                            name: "storeContent",
                            path: "/onlineStore/storeContent",
                            component: StoreContent
                        },
                        {
                            name: "storeDetails",
                            path: "/onlineStore/storeDetails",
                            component: StoreDetails
                        },
                        {
                            name: "storeSearch",
                            path: "/onlineStore/storeSearch",
                            component: StoreSearch,
                        },
                    ]
                },
                {
                    name: 'introduction',
                    path: '/introduction',
                    component: Introduction
                },
                {
                    name: 'news',
                    path: '/news',
                    component: News
                }, {
                    name: 'aboutus',
                    path: '/aboutus',
                    component: AboutUs
                },
            ]
        },
        {
            name: "login",
            path: "/login",
            redirect: "/login/loginLand",
            component: Login,
            children: [
                {
                    name: "loginLand",
                    path: "/login/loginland",
                    component: LoginLand
                },
                {
                    name: "loginRegist",
                    path: "/login/loginRegist",
                    component: LoginRegist
                }
            ]
        },
        {
            name: "shopCar",
            path: "/shopCar",
            component: ShopCar
        },
        {
            name: 'unLoginShopCar',
            path: '/unLoginShopCar',
            component: () => import('../plugins/UnLoginShopCar')
        }

    ]
})
router.afterEach(() => {
    window.scrollTo(0, 0)
})
router.beforeEach((to, from, next) => {
    if (to.name == 'loginRegist' || to.name == 'loginLand' || to.name == 'login') {
        if (window.sessionStorage.getItem('Login') == 'isLogin') {
            next('/home')
        }
    }
    next()
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router
