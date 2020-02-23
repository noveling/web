<template>
    <div class="calc">
        <div class="sub iconfont" @click="sub"><span class="icon-subtract"></span></div>
        <div class="val">{{num}}</div>
        <div class="add iconfont" @click="add"><span class="icon-add"></span></div>
    </div>    
</template>

<script>
export default {
    props:{
        num:{
            type:Number,
            default:0
        }
    },
    methods:{
        add(){
            this.$emit("add")
        },
        sub(){
            this.$emit("sub")
        }
    }
}
</script>

<style>
    .calc{
        display:flex;
        text-align:center;
    }
    .sub{
        flex:1;
    }
    .add{
        flex:1;
    }
    .val{
        flex:1.5;
    }
</style>
