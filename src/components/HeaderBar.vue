<template>
  <div>
    <header>
      <nav class="navbar navbar-fixed-top navbar-default">
        <div class="container">
          <div>
            <ul class="nav navbar-nav">
              <li><a href="/">个人主页</a></li>
              <li><a href="/#/html">网页专区</a></li>
              <li><a href="/">教程专区</a></li>
            </ul>
            <form class="navbar-form navbar-right">
              <div class="has-feedback">
                <input type="text" class="form-control" name="s" id="navbar-search" value="" placeholder="搜索"/>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <div class="bg"></div>
  </div>
</template>

<script>
  export default {
    name: 'headerBar2',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      //导航栏动态切入
      $(".navbar-fixed-top").animate({top: '0', opacity: '1'}, 600);

      //导航栏动态切出
      /*$(".navbar-default .navbar-nav li a").click(function(){
       $(".navbar-fixed-top").animate({opacity:'0'},100,function(){
       $(".navbar-fixed-top").css("top","-50px");
       });
       $(".navbar-fixed-top").animate({top:'0',opacity:'1'},600);
       })*/
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*导航栏整体样式*/
  .navbar-default {
    background-color: #4a86cf !important;
    border-color: #3968a1 !important;
  }

  .navbar {
    margin: 0 !important;
  }

  .navbar-fixed-top {
    top: -50px;
    opacity: 0;
  }

  /*导航元素样式*/
  .navbar-default .navbar-nav > li:hover {
    background: rgb(110, 158, 217);
  }

  .navbar-default .navbar-nav > li > a {
    color: #ffffff;
    text-decoration: none;
  }

  /*导航栏位置占领*/
  .bg {
    min-height: 50px;
  }
</style>
