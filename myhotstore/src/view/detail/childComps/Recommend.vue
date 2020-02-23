<template>
    <div class="overcoat-recommend">
        <img class="hot" src="@/assets/img/hot.png" alt="...">
        <slot name="recommend-title"></slot>
    </div>
</template>

<script>
export default {
    name:"recommend"
}
</script>

<style scoped>
    .overcoat-recommend{
        text-align:center;
        color:white;
        background-color:rgb(255, 149, 206);
        font-size:22px;
        line-height:2;
        position:relative;
    }
    .hot{
        display:inline-block;
        position:absolute;
        width:auto;
        left:2%;
        max-height:100%;
    }
</style>
