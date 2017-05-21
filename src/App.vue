<template>
  <div id="app">
    <headerBar></headerBar>
    <img src="./assets/logo.png">
    <router-view></router-view>
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
    margin-top: 60px;
  }
</style>
