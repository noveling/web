<template>
    <div>
        <main-tab-bar>
            <tab-bar-item ToPath="/home">
                <div slot="item-icon" class="iconfont">
                    <span class="icon-home"></span>
                </div>
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item ToPath="/list">
                <div slot="item-icon" class="iconfont">
                    <span class="icon-list"></span>
                </div>
                <div slot="item-text">订单</div>
            </tab-bar-item>
            <tab-bar-item ToPath="/cart">
                <div slot="item-icon" class="iconfont">
                    <span class="icon-buycar"></span>
                </div>
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item ToPath="/profile">
                <div slot="item-icon" class="iconfont">
                    <span class="icon-profilehover"></span>
                </div>
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </main-tab-bar>
    </div>
</template>

<script>
import MainTabBar from "@/components/common/tabbar/MainTabBar"
import TabBarItem from "@/components/common/tabbar/TabBarItem"
export default {
    name:'tabbar',
    components:{
        MainTabBar,
        TabBarItem
    }
}
</script>

<style scoped>
</style>
