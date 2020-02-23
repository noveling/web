<template>
    <div class="recommend-view">
        <ul class="recommend-list">
            <li v-for="item in RecommendData" :key="item.sort" class="recommend-item">
                <img :src="item.image" alt="..."><div class="recommend-title">{{item.title}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        RecommendData:{
            type:Array,
            default:()=>{}
        }
    },
    data(){
        return {
            isActive:false
        }
    }
}
</script>

<style scoped>
    .recommend-list{
        list-style:none;
        display:flex;
        padding:10px 0;
        border-bottom:12px solid #f6f6f6;
        margin:0;
    }
    .recommend-item{
        flex:1;
        padding:2px 8px;
    }
    .recommend-item img{
        width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;
    }
    .recommend-title{
        text-align:center;
        color:#858585;
        font-size:14px;
        padding:6px 0;
    }
</style>
