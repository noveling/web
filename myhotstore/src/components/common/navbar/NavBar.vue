<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div> 
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav-bar{
        display:flex;
        line-height:44px;
        height:44px;
        background-color:rgb(255, 149, 206);
        box-shadow:0 2px 10px rgba(100,100,100,.2);
        position:fixed;
        z-index:999;
        top:0;
        left:0;
        right:0;
    }
    .left,.right{
        width:60px;
    }
    .center{
        flex:1;
        text-align:center;
        color:white;
        font-weight:500;
    }
</style>
