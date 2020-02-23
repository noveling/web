<template>
    <div class="cart">
        <nav-bar><span slot="center">购物车</span></nav-bar>
        <my-scroll class="scroll-content" ref="myScroll"><shopping-cart-list v-if="$store.state.goodscart.length>0"></shopping-cart-list></my-scroll>
        <empty v-if="$store.state.goodscart.length==0"/>
        <settlement-bar><span slot="total-price">￥{{totalPrice}}</span></settlement-bar>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import ShoppingCartList from "./childComps/ShoppingCartList"
import Empty from "./childComps/Empty"
import SettlementBar from "./childComps/SettlementBar"
import MyScroll from "@/components/common/myscroll/MyScroll"

export default {
    components:{
        NavBar,
        ShoppingCartList,
        Empty,
        SettlementBar,
        MyScroll
    },
    data(){
        return {
            totalPrice:0
        }
    },
    mounted(){
        this.refreshTotalPrice()
    },
    updated(){
        this.refreshTotalPrice()
    },
    methods:{
        refreshTotalPrice(){
        this.totalPrice = this.$store.state.goodscart.filter(item=>{
                return item.currentState
                }).reduce((preVal,item)=>{
                    return parseFloat((item.count*item.goodsPrice+preVal).toFixed(2));
                },0)
        }
    },
    mounted(){
        this.$bus.$on("cartLoad",()=>{

            this.$refs.myScroll.myRefresh()
        })
    },
    activated(){
        this.$refs.myScroll.myRefresh()
    }
}
</script>

<style scoped>
.scroll-content{
    position: fixed;;
    right:5px;
    left:5px;
    top:46px;
    bottom:110px;
}
.cart{
    position:fixed;
    top:44px;
    bottom:49px;
    right:0;
    left:0;
    background: linear-gradient(180deg,rgb(255, 149, 206),#ffffff);
}
</style>
