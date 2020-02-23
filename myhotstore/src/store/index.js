import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        goodscart:[]
    },
    mutations:{
        addIntoCart(state,payload){
            state.goodscart.push(payload.goodsObj);
        },
        addCount(state,index){
            let newVal = ()=>{};
            newVal = state.goodscart[index];
            newVal.count++;
            Vue.set(state.goodscart,index,newVal)
        },
        subCount(state,index){
            let newVal = ()=>{};
            newVal = state.goodscart[index];
            newVal.count--;
            Vue.set(state.goodscart,index,newVal)
        },
        toggleState(state,index){
            let newVal = ()=>{};
            newVal = state.goodscart[index];
            newVal.currentState=!newVal.currentState;
            Vue.set(state.goodscart,index,newVal)
        }
    },
    actions:{
        addCart(context,payload){
            return new Promise((resolve,reject)=>{
                if(context.state.goodscart.find(item => item&&item.goodsId == payload.goodsObj.goodsId)){
                    resolve("repeat")
                }else{
                    payload.goodsObj.count=1;
                    payload.goodsObj.currentState=true;
                    context.commit("addIntoCart",payload)
                    resolve("success")
                }
            })
        }
    }
})