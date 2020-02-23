<template>
    <div class="goods-list">
        <goods-list-item v-for="(item,index) in goods"  :goodsItem="item" :goodsType = "currentType" :currentIndex = "index" :key="index"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"
export default {
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default:()=>{}
        },
        currentType:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>
    .goods-list{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        padding:0px 3px 10px;
    }
</style>
