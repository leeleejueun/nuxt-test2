import { createStore } from "vuex";

const store = createStore({
    state: {
        data:[{id:0,name:'이주은'}]
    },
    getters:{},
    mutations:{
        getData(state,obj) { state.data = obj}
    },
    actions: {
        async getData({commit}){
            // await fetch('/api')
            //     .then(res => {res.json()})
            //     .then(data => {
            //         // console.log(data)
            //         commit('getData',data)
            //     })
            const {data : resData} =await useFetch('/api');
            commit('getData', resData._rawValue.work);
        }
    }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});