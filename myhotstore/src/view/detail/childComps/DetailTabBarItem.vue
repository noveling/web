<template>
    <div class="tab-bar-item">
        <div class="item-text">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .tab-bar-item{
        flex:1.6;
        text-align:center;
        height:49px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
