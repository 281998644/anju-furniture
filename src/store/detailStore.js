import axios from "axios"
export default {
    namespaced: true,
    actions: {
        getColorAtr(context){
            axios.get('data/detailStore.json').then(res=>{
                context.commit('GETCOLORATR',res.data)
            }).catch(err=>{
                window.console.log('错误信息',err)
            })
        }
    },
    mutations: {
        GETCOLORATR(state,value){
            state.colorAtr=value.colorAtr;
            state.sizes=value.sizes;
        }
    },
    state: {
        colorAtr:[],
        sizes:[]
    },
    getters: {

    }
}