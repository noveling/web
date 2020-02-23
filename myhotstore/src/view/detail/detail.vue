<template>
    <div class="detail">
        <nav-bar>
            <span slot="left" style="padding:6px;display:inline-block;height:100%;box-sizing:border-box" @click="goBack">
                <img class="back-icon" src="~@/assets/img/back.png" alt="...">
            </span>
            <div slot="center">详情页</div>
        </nav-bar>
        <my-scroll class="content">
            <img-wrapper class="my-wrapper">
                <div class="img-nail" slot="imgWrapper">
                    <img :src="goodsInfo.item_pic" alt="...">
                </div>
            </img-wrapper>
            <goods-detail>
                <div slot="price" class="price">
                    <div class="pre-price">
                        <div class="pre-goods-item">
                            <div class="pre-goods">
                                <span class="txt">价格</span>
                                <span>￥<span class="num">{{goodsInfo.item_price}}</span></span>
                            </div>
                            <div class="goods-trade">
                                销量{{goodsInfo.item_trade_num}}
                            </div>
                        </div>
                    </div>
                    <div class="price-item">
                        <div class="item">
                            <span class="txt">惊喜价</span>
                            <span>￥<span class="num">{{goodsInfo.item_current_price}}</span></span>
                        </div>
                    </div>
                <div>
                    </div>
                    
                </div>
                <div slot="title">{{goodsInfo.item_title}}</div>
            </goods-detail>
            <recommend><div slot="recommend-title">毛呢大衣热销</div></recommend>
            <overcoat-list :clothesData="clothesData"></overcoat-list>
        </my-scroll>

        <detail-tab-bar @addToCart="addToCart"></detail-tab-bar>
        <my-toast :show="showToast" :toastMsg="toastMsg"></my-toast>

    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import ImgWrapper from "@/components/content/ImgWrapper"
import {goodsdata1,goodsdata2,goodsdata3,clothesdata} from "@/common/const2" 
import GoodsDetail from "./childComps/GoodsDetail"
import OvercoatList from "./childComps/OvercoatList"
import Recommend from "./childComps/Recommend"
import DetailTabBar from "./childComps/DetailTabBar"
import MyScroll from "@/components/common/myscroll/MyScroll"
import MyToast from "@/components/common/toast/MyToast"

export default {
    name:"detail",
    components:{
        NavBar,
        ImgWrapper,
        GoodsDetail,
        OvercoatList,
        Recommend,
        DetailTabBar,
        MyScroll,
        MyToast
    },
    methods:{
        goBack(){
            this.$router.back()
        },
        createGoods(goodsId,goodsTitle,goodsPrice,goodsImg){
            let obj = new Object();
            obj.goodsId=goodsId;
            obj.goodsTitle=goodsTitle;
            obj.goodsPrice=parseFloat(goodsPrice);
            obj.img=goodsImg;
            return obj;
        },
        addToCart(){
            this.showToast=true;
            clearTimeout(this.timer)
            this.$store.dispatch({
                type:"addCart",
                goodsObj:this.goodsObj,
                name:"noveling"
            }).then((res)=>{
                if(res==="success"){
                    this.toastMsg="添加到购物车中了~"
                }else{
                    this.toastMsg="已经添加到了购物车~"
                }
                this.timer=setTimeout(()=>{
                    this.showToast=false;
                },1500)
            })
        },
    },
    data(){
        return {
            goodsInfo:()=>{},
            clothesData:()=>{},
            goodsObj:()=>{},
            showToast:false,
            toastMsg:"- -",
            timer:()=>{},
        }
    },
    created(){
        this.clothesData = clothesdata.data
        console.log(clothesdata.data)
    },
    mounted(){
        switch (this.$route.query.type){
            case "pop":
            this.goodsInfo=goodsdata1.result[627073].result[this.$route.query.currentIndex];
            break;
            case "news":
            this.goodsInfo=goodsdata2.result[626957].result[this.$route.query.currentIndex];
            break;
            case "sell":
            this.goodsInfo=goodsdata3.result[626966].result[this.$route.query.currentIndex];
            
        };
        this.goodsObj = this.createGoods(this.goodsInfo.goods_id,this.goodsInfo.item_title,this.goodsInfo.item_current_price,this.goodsInfo.item_pic)
        
    }
}
</script>

<style scoped>
    .content{
        position: fixed;;
        right:0;
        left:0;
        top:44px;
        bottom:49px;
    }
    .detail{
        position:relative;
        z-index:9;
        background-color:white;
    }
    .back-icon{
        width:auto;
        height:auto;
        max-height:100%;
        max-width:100%;
    }
    .my-wrapper{
        padding:0 4px 4px;
    }
    span{
        display:inline-block;
    }
    .price{
        width:100%;
        display: flex;
    }
    .price-item{
        flex:1;   
    }
    .price-item .item{
        font-size:23px;
        color:deeppink;
    }
    .pre-price{
        flex:1; 
        position:relative;
    }
    .pre-price .pre-goods-item{
        padding-left:18%;
        text-align:left;
        color:#999;
        font-size:10px;
        position:absolute;
        bottom:0;
    }
    .pre-price .pre-goods{
        color:#888;
        font-weight:bold;
        padding-bottom:5px;
        font-size:17px;
    }
    .pre-price .num {
        text-decoration: line-through;
    }
    .price-item .txt{
        background-color:#FFF1EB;
        font-size:15px;
    }
    .price-item .num{
        font-size:45px;
    }
</style>
