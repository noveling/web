<template>
    <div class="img-wrapper">
        <slot name="imgWrapper">
            <!-- 放图片 -->
        </slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .img-wrapper{
        border:1px solid rgba(255, 149, 206, 0.2);
        box-shadow:2px 2px 10px rgba(100,100,100,0.2);
        font-size:0px;
    }

    .img-wrapper img{
        width:auto;
        height:auto;
        max-height:100%;
        max-width:100%;
        border-radius:3px;
    }


</style>
