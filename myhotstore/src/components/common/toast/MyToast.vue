<template>
    <div class="my-toast">
        <transition name="fade">
            <div class="toast" v-show="show"><span>{{toastMsg}}</span></div>
        </transition>
    </div>    
</template>

<script>
export default {
    props:{
        toastMsg:{
            type:String,
            default:"(⊙﹏⊙)b"
        },
        show:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>
    .toast{
        position:fixed;
        z-index:999;
        background-color:rgba(9, 9, 9, 0.6);
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        padding:5px 20px;
        border-radius:6px;
        color:#ffffff;
        font-size:17px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .6s linear;

    }
    .fade-leave-to{
        background: rgba(9, 9, 9, 0.1);
        color:rgba(9, 9, 9, 0);
    }
</style>
