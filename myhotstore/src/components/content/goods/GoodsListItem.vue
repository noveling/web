<template>
    <div class="goods-list-item" @click="getDetail">
        <!-- {{goodsItem.item_pic}} -->
        <!-- <div class="item-set">
            <img  :src="goodsItem.item_pic" alt="...">
        </div> -->
        <img  v-lazy="goodsItem.item_pic" alt="..." @load="imgLoad">
        <p class="title">{{goodsItem.item_title}}</p>
        <span class="price">￥{{goodsItem.item_price}}</span>
        <span class="current-price">￥{{goodsItem.item_current_price}}</span>
    </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsItem:{
            type:Object,
            default:()=>{}
        },
        goodsType:{
            type:String,
            default:""
        },
        currentIndex:{
            type:Number,
            default:0
        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit("imgLoad")
        },
        getDetail(){
            this.$router.push({
                path:"/detail",
                query:{
                    type:this.goodsType,
                    goods_id:this.goodsItem.goods_id,
                    currentIndex:this.currentIndex
                }
            })
        }
    }
}
</script>

<style scoped>
    .goods-list-item{
        width:45%;
        padding-bottom:12px;
        color:#858585;
        border:1px solid #eeeeee;
        border-radius:4px;
        margin-bottom:10px;
        background-color:#faebd729;
    }
    .title{
        overflow: hidden;
        /* white-space: nowrap; */
        font-size:11px;
        display:-webkit-box;
        text-overflow:ellipsis;
        -webkit-line-clamp:2;   
        -webkit-box-orient:vertical;
        white-space:normal;
        margin:3px;
    }
    .price{
        font-size:15px;
        text-decoration: black line-through;
    }
    .current-price{
        font-size:20px;
        color:deeppink;
    }
    img{
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
        border-radius:2px;
    }
</style>
