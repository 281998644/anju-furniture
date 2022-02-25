import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        getShopCarProducts(context) {
            axios.get('data/shopCar.json').then(res => {
                context.commit('ADDPRODUCTS', res.data.products)
            }).catch(err => {
                window.console.log(err)
            })
        },
        delShopCarProducts(context, value) {
            context.commit('DELSHOPCARPRODUCTS', value)
        },
        delShopCarProductsAll(context, value) {
            context.commit('DELSHOPCARPRODUCTSALL', value)
        },
        payForShopCarProducts(context, value) {
            context.commit('PAYFORSHOPCARPRODUCTS', value)
        },
        addShopCar(context, value) {
            context.commit('ADDSHOPCAR', value)
        }
    },
    mutations: {
        ADDPRODUCTS(state, value) {
            state.shopCarProducts = value
        },
        DELSHOPCARPRODUCTS(state, value) {
            state.shopCarProducts.splice(value, 1)
        },
        DELSHOPCARPRODUCTSALL(state, value) {
            window.console.log(value)
            if (value) {
                state.shopCarProducts = []
            }
            state.shopCarProducts = state.shopCarProducts.filter(products => {
                return products.checked != true
            })


        },
        PAYFORSHOPCARPRODUCTS(state, value) {
            state.shopCarProducts = value
        },
        ADDSHOPCAR(state, value) {
            let oldProduct = state.shopCarProducts.find(item => { return item.people == value.people })
            if (oldProduct) {
                oldProduct.num += value.num
            } else {
                state.shopCarProducts.push(value)
            }

        }
    },
    state: {
        shopCarProducts: []
    },
    getters: {

    }
}