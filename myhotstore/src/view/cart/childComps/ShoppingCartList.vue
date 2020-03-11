<template>
    <div class="shopping-list">
        <list-item  v-for="(item,index) in $store.state.goodscart" :key="item.goodsId" @itemAdd="add(index)" @itemSub="sub(index)"> 
            <span slot="check-btn">            
                <check-btn @click.native="toggleClick(index)" :btnState="item.currentState"></check-btn>
            </span>
            <span slot="item-img">
                <img-wrapper>
                <span slot="imgWrapper"><img :src="item.img|urlFormat" alt="..." @load="cartLoad"></span>
                </img-wrapper>
            </span>
            <span slot="item-title" class="item-title">
                {{item.goodsTitle}}
            </span>
            <span slot="item-price">
                价格￥{{item.goodsPrice}}
            </span>
        </list-item>
    </div>
</template>

<script>
import ListItem from "./ListItem"
import ImgWrapper from "@/components/content/ImgWrapper"
import CheckBtn from "@/components/common/checkbtn/CheckBtn"
export default {
    components:{
        ListItem,
        ImgWrapper,
        CheckBtn
    },
    methods:{
        sub(index){
            this.$store.commit("subCount",index);
        },
        add(index){
            this.$store.commit("addCount",index);
        },
        toggleClick(index){
            this.$store.commit("toggleState",index);
        },
        cartLoad(){
            this.$bus.$emit("cartLoad")
        }
    },
    filters:{
        urlFormat(imgUrl){
            if(imgUrl.startsWith("http")){
                return imgUrl
            }
            return "https:"+imgUrl
        }
    }
}
</script>

<style scoped>
    .shopping-list{
        color:#858585;
        background-color:#ffffff;
        border-radius:20px;
        padding:2%;
        box-shadow: 2px 3px 10px rgba(100,100,100,.2);
    }
    .shopping-list :nth-last-child(1){
        margin-bottom:0;
    }
</style>
