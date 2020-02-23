<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"MainTabBar"
}
</script>

<style scoped>
    .tab-bar{
        display:flex;
        position:fixed;
        right:0;
        left:0;
        bottom:0;
        background-color:#f6f6f6;
        box-shadow:-2px 0 10px rgba(100,100,100,.2);
        z-index: 1;
    }
</style>
