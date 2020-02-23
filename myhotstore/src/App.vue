<template>
  <div id="app">
    <tab-bar></tab-bar>
    <keep-alive exclude="detail"><router-view/></keep-alive>
  </div>
</template>

<script>
import TabBar from "components/content/tabbar.vue"
export default {
  name: 'App',
  components:{
    TabBar,
  }
}
</script>

<style>

</style>
