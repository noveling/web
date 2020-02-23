<template>
    <div class="empty">
        <div class="content">
            <img src="@/assets/img/nothingincart.png" alt="...">
            购物车是空的哦~
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .empty{
        position:fixed;
        top:44px;
        bottom:49px;
        left:0;
        right:0;
        background-color:#ffffff;
        display:flex;
        align-items:center;
        justify-content: center;
        z-index:9;
    }
    img{
        width:30%;
    }
    .content{
        display:flex;
        align-items:center;
        color:#858585;
    }
</style>
