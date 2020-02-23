<template>
    <div class="tab-bar-item" @click="goto" :class="{active:IsActive}">
        <div class="item-icon">
            <slot name="item-icon"></slot>
        </div>
        <div class="item-text">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        ToPath:String,
        IsPath:{
            type:Boolean,
            default:true
        }
    },
    computed:{
        IsActive(){
            // console.log("Topath:"+this.ToPath)
            // console.log("活跃的path"+this.$route.path)
            return this.$route.path == this.ToPath?true:false
        }
    },
    methods:{
        goto(){
            if(this.IsPath&&!this.IsActive){
                this.$router.replace(this.ToPath)
            }
        }
    }

}
</script>

<style scoped>
    .tab-bar-item{
        flex:1;
        text-align:center;
        height:49px;
    }
    .active{
        color:deeppink;
    }
    .item-icon{
        height:28px;
        line-height:28px;
        font-size:22px;
    }
    .item-text{
        font-size:13px;
    }
</style>
