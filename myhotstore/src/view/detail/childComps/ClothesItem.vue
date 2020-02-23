<template>
    <div class="clothes-item">
        <div class="clothes-img">
            <img class="imghat" src="@/assets/img/imghat.png" alt="...">
            <slot name="goods-rank"></slot>
            <slot name="clothes-img"></slot>
        </div>
        <div class="clothes-info">
            <div class="clothes-title"><slot name="clothes-title"></slot></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .clothes-item{
        display:flex;
        background-color:#fff;
        padding:15px;
        margin-bottom:10px
    }
    .clothes-img{
        flex:1;
        position:relative;
    }
    .clothes-info{
        flex:1.5;
    }
    .imghat{
        display:inline-block;
        position:absolute;
        width: 50%;
        left:-4%;
        top:-3%;
    }
</style>
