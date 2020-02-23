<template>
    <div class="list-item">
        <div class="check-btn">
            <slot name="check-btn"></slot>
        </div>
        <div class="item-img">
            <slot name="item-img"></slot>
        </div>
        <div class="item-info">
            <div class="item-title">
                <slot name="item-title"></slot>
            </div>
            <div class="item-val">
                <div class="item-price">
                    <slot name="item-price"></slot>
                </div>
                <div class="item-count">
                    <span slot="item-count"><span style="font-size:14px;">购买数量</span>
                        <calc-btn @sub="sub" @add="add" :num="count"></calc-btn>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalcBtn from "@/components/common/calc/CalcBtn"
export default {
    components:{
        CalcBtn,
    },
    data(){
        return {
            count:1,
        }
    },
    methods:{
        add(){
            this.count++;
            this.$emit("itemAdd")
        },
        sub(){
            if(this.count){
                this.count--;
                this.$emit("itemSub")
            }
        }
    }
}
</script>

<style scoped>
    .check-btn{
        display:flex;
        align-items: center;
        justify-content: center;
        flex:0.2;
        padding-right:2%;
    }
    .list-item{
        display:flex;
        max-height:140px;
        overflow:hidden;
        padding:2px;
        margin-bottom:3%;
    }
    .item-img{
        flex:1;
        font-size:0;
        overflow: hidden;
    }
    .item-info{
        flex:2;
        padding:8px;
        display:flex;
        flex-direction: column;
        box-sizing:border-box;
    }
    .item-title{
        overflow: hidden;
        /* white-space: nowrap; */
        display:-webkit-box;
        text-overflow:ellipsis;
        -webkit-line-clamp:2;   
        -webkit-box-orient:vertical;
        white-space:normal;
        text-indent: 16px;
        flex:1;
        font-size:13px;
    }
    .item-price{
        font-size:16px;
        display:flex;
        align-items: center;
        color:#666666;
    }
    .item-val{
        display:flex;
        justify-content: space-around;
        flex:1;
        align-items: center;
    }
</style>
