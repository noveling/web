<template>
    <div class="overcoat-list">
        <clothes-item v-for="(item,index) in overcoatInfo" :key="index">
            <img-wrapper slot="clothes-img">
                <span slot="imgWrapper"><img :src="item.image+'_540x540.v1cAC.40.webp'" alt="..."></span>
            </img-wrapper>
            <span slot="goods-rank" class="goods-rank">top{{index+1}}</span>
            <div slot="clothes-title">
                <div class="title">{{item.title}}</div>
                <div class="price">
                    <span class="preprice">原价￥{{item.price}}</span>
                    <div class="discount-price"><span class="txt">折扣价</span>￥{{item.discountPrice}}</div>
                </div>
            </div>
        </clothes-item>
    </div>
</template>

<script>
import ClothesItem from "./ClothesItem"
import ImgWrapper from "@/components/content/ImgWrapper"
export default {
    components:{
        ClothesItem,
        ImgWrapper
    },
    props:{
        clothesData:{
            type:Object,
            default:()=>{}
        }
    },
    data(){
        return {
            overcoatInfo:[],
        }
    },
    created(){
            console.log(this.clothesData)
            this.overcoatInfo = this.clothesData[143458].list

    }
}
</script>

<style scoped>
    .overcoat-list{
        background-color:white;
    }
    span{
        display: inline-block;
    }
    img{
        display:inline-block;
    }
    .overcoat-list :nth-last-child(1){
        margin-bottom:0;
    }
    .title{
        color: #666;
        font-size: 14px;
        padding: 5% 10%;
        text-indent: 16px;
    }
    .price{
        padding:10px 10%;
    }
    .preprice{
        text-decoration: line-through;
        color: #888;
        font-weight: bold;
        padding-bottom: 5px;
        font-size: 15px;

    }
    .goods-rank{
        position:absolute;
        color:white;
        font-size:10px;
        top:2%;
        left:9%;
    }
    .txt{
        color:deeppink;
        background-color: #FFF1EB;
    }
    .discount-price{
        padding-top:7%;
        color:deeppink;
    }
</style>
