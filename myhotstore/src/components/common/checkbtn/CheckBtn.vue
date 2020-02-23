<template>
    <div class="check-btn iconfont"  :class="{active:btnState}">
        <span class="icon-duihao"></span>
    </div>
</template>

<script>
export default {
    props:{
        btnState:{
            type:Boolean,
            default:true,
        }
    }
}
</script>

<style scoped>
    .active.check-btn{
        background-color:#ffd7ec;
        color:white;
        border-color:white;
    }
    .check-btn{
        border-radius:50%;
        border:1px solid #ccc;
        color:#ccc;
        font-size:18px;
        height:18px;
        width:18px;
    }
</style>
