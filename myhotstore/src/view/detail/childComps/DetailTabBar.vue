<template>
    <div class="detail-tab-bar">
        <main-tab-bar>
            <tab-bar-item :IsPath="false" class="iconfont">
                <div slot="item-icon">
                    <span class="icon-kefu"></span>
                </div>
                <div slot="item-text" class="item-text">客服</div>
            </tab-bar-item>
            <tab-bar-item :IsPath="false" class="iconfont">
                <div slot="item-icon">
                    <span class="icon-collect"></span>
                </div>
                <div slot="item-text" class="item-text">收藏</div>
            </tab-bar-item>
            <detail-tab-bar-item class="shop-car" @click.native="addToCart">
                <div class="txt" slot="item-text">加入购物车</div>
            </detail-tab-bar-item>
            <detail-tab-bar-item class="buy-now">
                <div class="txt" slot="item-text">立即购买</div>
            </detail-tab-bar-item>
        </main-tab-bar>
    </div>
</template>

<script>
import MainTabBar from "@/components/common/tabbar/MainTabBar"
import TabBarItem from "@/components/common/tabbar/TabBarItem"
import DetailTabBarItem from "./DetailTabBarItem"
export default {
    components:{
        MainTabBar,
        TabBarItem,
        DetailTabBarItem
    },
    methods:{
        addToCart(){
            this.$emit("addToCart")
        }
    }
}
</script>

<style scoped>
    .shop-car{
        color: #ff5777;
        background-color: #ffe6e8;
    }
    .buy-now{
        background: linear-gradient(90deg,#ff5777,#ff468f);
        color:white;
    }
    .iconfont{
        box-sizing:border-box;
        border-right: 1px solid #eae5e5b8;
        color:#666;
    }
    .item-text{
        line-height:21px;
    }
</style>
