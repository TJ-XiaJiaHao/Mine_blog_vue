<template>
  <div id="app">
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
    margin-top: 50px;
    height:100%;
    width:100%;
  }
  #body{
    width:100%;
    height:calc(100% - 50px);
    min-height:200px;
  }
</style>
