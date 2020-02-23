<template>
    <div class="settlement-bar">
        <div class="settle-btn align-center">
            <check-btn :btnState="isSelectAll" @click.native.stop="changeState"></check-btn>
        </div>
        <div class="check-all align-center">全选</div>
        <div class="total align-center">合计<span><slot name="total-price"></slot></span></div>
        <div class="payment align-center"><div class="account align-center">结算</div></div>
    </div>
</template>

<script>
import CheckBtn from "@/components/common/checkbtn/CheckBtn"
export default {
    components:{
        CheckBtn
    },
    computed:{
        isSelectAll(){
            return this.$store.state.goodscart.every(item=>{
                return item.currentState;
                })
        }
    },
    methods:{
        changeState(){            
            if(this.isSelectAll){
                this.$store.state.goodscart.forEach((item,index)=>{
                        this.$store.commit("toggleState",index)
                })
            }else{
                this.$store.state.goodscart.forEach((item,index)=>{
                    if(!item.currentState){
                        this.$store.commit("toggleState",index)
                    }
                })
            }
        }
    },
    mounted(){
        if(this.$store.state.goodscart.length>0){
            this.totalChecked=this.$store.state.goodscart.every(res=>{
            return res.currentState;
        })
        }
    }
}
</script>

<style scoped>
    .align-center{
        display: flex;
        align-items: center;
    }
    .settlement-bar{
        display: flex;
        position:fixed;
        bottom:49px;
        left:0;
        right:0;
        background-color:white;
        padding:0 8px;
        height:54px;
        color:#666;
    }
    .check-all{
        flex:.4;
    }
    .settle-btn{
        flex:.3;
        display:flex;
        justify-content: center;
        align-items:center;
    }
    .total{
        flex:1;
    }
    .payment{
        flex:1;
        display: flex;
        justify-content: center;
    }
    .account{
        width:80%;
        height:75%;
        display:flex;
        justify-content: center;
        background: linear-gradient(160deg,rgba(255, 149, 206, 0.81),rgb(255, 241, 248));
        border-radius:8px;
        color:white;
    }
</style>
