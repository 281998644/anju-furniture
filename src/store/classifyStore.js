import axios from "axios"
export default {
    namespaced: true,
    actions: {
        getClassify(context){
            axios.get('data/productsClassify.json').then(res=>{
                context.commit('GETCLASSIFY',res.data.productsClassify)
            }).catch(err=>{
                window.console.log('错误信息',err)
            })
        }
    },
    mutations: {
        GETCLASSIFY(state,value){
            state.jiaju=value.jiaju;
            state.jiegou=value.jiegou;
            state.color=value.color;
            state.price=value.price;
        }
    },
    state: {
        jiaju:[],
        jiegou:[],
        color:[],
        price:[]
    },
    getters: {

    }
}