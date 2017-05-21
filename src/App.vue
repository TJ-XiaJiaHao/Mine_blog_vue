<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div id="demo-pie-1" class="pie-title-center" data-percent="75"><span class="pie-value"></span></div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
      $("body").css("background", "black");
      $('#demo-pie-1').pieChart({
        barColor: '#10A7AF',
        trackColor: '#fff',
        lineCap: 'round',
        lineWidth: 8,
        onStep: function (from, to, percent) {
          $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
      });
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
