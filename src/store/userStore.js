import axios from "axios"
export default {
    namespaced: true,
    actions: {
        getUsers(context){
            axios.get('data/usersList.json').then(res=>{
                context.commit('GETUSERS',res.data)
            }).catch(err=>{
                window.console.log('错误信息',err)
            })
        },
        addUser(context,value){
            context.commit('ADDUSER',value)
        }
    },
    mutations: {
        GETUSERS(state,value){
            state.users=value.users
        },
        ADDUSER(state,value){
            state.users.push(value)
        }
    },
    state: {
        users:[],
    },
    getters: {

    }
}