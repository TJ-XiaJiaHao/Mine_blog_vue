<template>
  <div class="header">
    <header>
      <nav class="navbar navbar-fixed-top navbar-default">
        <div class="container">
          <div>
            <div class="list"><img src="../assets/images/headerBar/列表.png"></div>
            <ul class="nav navbar-nav">
              <li><a href="/" v-on:click ="noheight()">个人主页</a></li>
              <li><a href="/#/html" v-on:click="height()">网页专区</a></li>
              <li><a href="/#/course" v-on:click="height()">教程专区</a></li>
            </ul>
            <!--<form class="navbar-form navbar-right">-->
              <!--<div class="has-feedback">-->
                <!--<input type="text" class="form-control" name="s" id="navbar-search" value="" placeholder="搜索"/>-->
              <!--</div>-->
            <!--</form>-->
          </div>
        </div>
      </nav>
    </header>

  </div>
</template>

<script>
  import bus from "../assets/eventBus"
  export default {
    name: 'headerBar2',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      height:function(){
        $(".navbar-default").css("background","#4a86cf").css("borderColor"," #3968a1");
        $(".header").css("height","50px");
      },
      noheight:function(){
        $(".navbar-default").css("background","rgba(255,255,255,0)");
        $(".header").css("height","0");
      }
    },
    mounted(){
      //导航栏动态切入
      $(".navbar-fixed-top").animate({top: '0', opacity: '1'}, 1000);

      //list按钮
      $(".list").click(function(){
        var width = $(".navbar-nav").css("width");
        if(width == "0px"){
          $(".navbar-nav").animate({width:'300px'},1000)
        }
        else{
          $(".navbar-nav").animate({width:'0'},1000)
        }
      });

      var self = this;
      bus.$on("nav",function(msg){
        if(msg == "toheight")self.height();
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*导航栏整体样式*/
  .header{
    border:0;
    padding:0;
  }
  .navbar-default {
    background: rgba(255,255,255,0);
    opacity:0.2;
    overflow: hidden;
    max-height:50px;
    -webkit-transition: background 0.5s ;
    -moz-transition: background 0.5s ;
    -ms-transition: background 0.5s ;
    -o-transition: background 0.5s ;
    transition: background 0.5s ;
  }
  .navbar-default:hover{
    background-color: #4a86cf !important;
    border-color: #3968a1 !important;
  }

  .navbar {
    margin: 0 !important;
    border-bottom:none !important;
  }

  .navbar-fixed-top {
    top: -50px;
    opacity: 0;
  }

  /*导航栏ul列表位置*/
  .navbar-nav{
    float:right;
  }

  /*导航元素样式*/
  .navbar-default .navbar-nav > li:hover {
    background: rgb(110, 158, 217);
    color:white;
  }

  .navbar-default .navbar-nav > li > a {
    width:100px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
  }
  .navbar-default .navbar-nav > li > a:hover{
    color:white;
  }

  /*列表*/
  .list{
    width:50px;
    height:50px;
    padding:15px;
    float:right;
  }
  .list img{
    cursor: pointer;
    height:100%;
    width:100%;
  }

</style>
