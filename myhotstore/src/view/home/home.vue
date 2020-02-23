<template>
    <div id="home" ref="home">
        <nav-bar>
            <div slot="center">女装爱好者</div>
        </nav-bar>
        <!-- 测试 -->
        <!-- <button @click="getCurrentPopGoods">按钮</button> -->
        <tab-control  class="home-tab-control" ref="homeTabControl" :titles="titles" v-show="showTabControl" @tabClick="tabClick"></tab-control>
        <my-scroll class="content" ref="myScroll" :PullUpLoad=true @pullingUp="pullingUp" @backToTop="back">
            <swiper v-if="ShowCarousel" :BannerImgs="banners" @imgLoad="swiperLoad"></swiper>
            <recommend :RecommendData="recommends"/>
            <tab-control ref="myTabControl" :titles="titles" @tabClick="tabClick"></tab-control>
            <goods-list :goods="goods[currentType].list" :currentType = "currentType"></goods-list>
        </my-scroll>
        <back-to-top v-show="showBackToTop" @click.native="returnTop"/>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import {getHomeMultidata,getHomeGoods} from "@/network/home"
import Swiper from "@/components/common/swiper/Swiper"
import Recommend from "./childComps/RecommendView"
import TabControl from "@/components/content/TabControl"
import {goodsdata1,goodsdata2,goodsdata3,homeDefaultData} from "@/common/const2"
import GoodsList from "@/components/content/goods/GoodsList"
import BackToTop from "@/components/common/backtop/BackToTop"
import MyScroll from "@/components/common/myscroll/MyScroll"


export default {
    components:{
        NavBar,
        Swiper,
        Recommend,
        TabControl,
        GoodsList,
        BackToTop,
        MyScroll
        },
    data(){
        return {
            banners:[],
            recommends:[],
            test:["hello vue"],
            titles:['流行','新款','精选'],
            goods:{
                pop:{list:[]},
                news:{list:[]},
                sell:{list:[]}
            },
            currentType:"pop",
            showBackToTop:false,
            // 记录吸顶位置
            tabOffset:0,
            showTabControl:false,
        }
    },
    computed:{
        ShowCarousel(){
            return !this.banners.length == 0
        }
    },
    methods:{
        // 每次加载10个数据,每次拿到的数据加入goods列表中,直到所有内容全部加载完毕
        getCurrentPopGoods(){
            this.goods.pop.list.push(...goodsdata1.result[627073].result.slice(this.goods.pop.list.length,this.goods.pop.list.length+10))
            console.log(this.goods.pop.list)
        },
        getCurrentNewsGoods(){
            this.goods.news.list.push(...goodsdata2.result[626957].result.slice(this.goods.news.list.length,this.goods.news.list.length+10))
            console.log(this.goods.news.list)
        },
        getCurrentSellGoods(){
            this.goods.sell.list.push(...goodsdata3.result[626966].result.slice(this.goods.sell.list.length,this.goods.sell.list.length+10))
            console.log(this.goods.sell.list)
        },
        debounce(func,delay){
            let timer = null
            // 在释放timer前timer没有被销毁
            return function(...args){
                if(timer != null){
                    clearTimeout(timer)
                }
                timer = setTimeout(()=>{
                        func.apply(this,args)
                    },delay)
            }
        },
        /*
        ***事件监听
        */

    //    对滚动条进行监听
       back(pos){
           if(pos.y<-1800){
               this.showBackToTop=true;
           }else{
               this.showBackToTop=false;
           }
           if(this.tabOffset !== 0){
            if(pos.y<-this.tabOffset){
                this.showTabControl = true;
            }else{
                this.showTabControl = false;
            }
           }
       },
       swiperLoad(){
           this.tabOffset = this.$refs.myTabControl.$el.offsetTop
       },
       returnTop(){
           this.$refs.myScroll.scroll.scrollTo(0,0,500)
       },
       tabClick(index){
           switch(index){
               case 0:
               this.currentType = "pop";
               break;
               case 1:
               this.currentType = "news";
               break;
               case 2:
               this.currentType = "sell";
           }
            this.$refs.myTabControl.ActiveIndex = index;
            this.$refs.homeTabControl.ActiveIndex = index;

            // 跳转后滚动条回到上面
            this.$refs.myScroll.myRefresh()
            this.$refs.myScroll.scroll.scrollTo(0,0,500)
       },
       pullingUp(){
           switch(this.currentType){
                    case "pop":
                    this.getCurrentPopGoods();
                    break;
                    case "news":
                    this.getCurrentNewsGoods();
                    break;
                    case "sell":
                    this.getCurrentSellGoods();
                }
           this.$refs.myScroll.scroll.finishPullUp()
        //    this.$refs.myScroll.scroll.refresh()
       }
    },
    created(){
        // 请求多个数据
        getHomeMultidata().then(res=>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        }).catch(e=>{
            console.log(e)
            console.log("使用本地信息")
            this.banners = homeDefaultData.banner.list;
            this.recommends = homeDefaultData.recommend.list;
        })

        // 直接拿本地的数据
        this.getCurrentPopGoods()
        this.getCurrentNewsGoods()
        this.getCurrentSellGoods()
    },
    mounted(){
        const refresh = this.debounce(this.$refs.myScroll.myRefresh,5)
        // 监听图片加载
        this.$bus.$on("imgLoad",()=>{
            refresh()
        })
    },
    activated(){
        this.$refs.myScroll.myRefresh()
    },
    beforeDestroy(){
        this.$bus.$off("imgLoad")
    }
}
</script>

<style scoped>
    #home{
        height:100vh;
        position:relative;
    }
    .content{
        position: fixed;;
        right:0;
        left:0;
        top:44px;
        bottom:49px;
    }
    .home-tab-control{
        position:fixed;
        top:44px;
        left:0;
        right:0;
        background-color:#ffffff;
        z-index:999;
        box-shadow:2px 1px 10px rgba(100,100,100,.2);
    }
</style>
