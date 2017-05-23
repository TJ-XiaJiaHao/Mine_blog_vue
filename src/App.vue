<template>
  <div id="app">
    <router-view name="loading"></router-view>
    <headerBar></headerBar>
    <div id="body">
      <router-view name="sideBar"></router-view>
      <router-view  name="mainPage"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/headerBar"
  export default {
    name: 'app',
    components:{
      headerBar:Header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 50px;
    height:100%;
    width:100%;
  }
  #body{
    width:100%;
    height:calc(100%);
    min-height:200px;
  }
</style>
