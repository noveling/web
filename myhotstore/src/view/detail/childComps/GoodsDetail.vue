<template>
    <div class="goods-detail">
        <div class="current-price">
            <slot name="price"></slot>
        </div>
        <div class="goods-title">
            <slot name="title"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .goods-detail{
        position:relative;
        right:0;
        left:0;
        border-bottom:50px solid rgb(248, 248, 248);
        padding:30px 5px 0;
    }
    .current-price{
        width:100%;
        box-sizing:border-box;
    }
    .goods-title{
        color:#666;
        font-size:14px;
        padding:28px 14px;
        text-indent:16px;
    }
</style>
