<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="item" class="tab-control-item" :class="{active:index===ActiveIndex}" @click="ToActive(index)"><span>{{item}}</span></div>
    </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default:()=>{}
        }
    },
    data(){
        return {
            ActiveIndex:0
        }
    },
    methods:{
        ToActive(index){
            this.ActiveIndex = index;
            this.$emit("tabClick",index)
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display:flex;
        text-align:center;
        color:#858585;
        line-height:100%;
        padding:10px 0 8px;
    }
    .tab-control-item{
        flex:1;
    }
    .tab-control-item span{
        padding:4px 5px;
        font-size:16px;
        display: inline-block;
    }
    .active span{
        border-bottom:3px solid #ff95ce;
    }
</style>
