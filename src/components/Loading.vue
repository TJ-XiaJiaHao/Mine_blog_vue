<template>
  <div v-if="isShow" id="loading">
    <div id="msg">
      <div class="left">
        <span class = "msg msg-1">{{ greeting }}</span>
      </div>
      <div class="right">
        <span class = "msg msg-2" >Sir</span>
      </div>
    </div>
    <div id="bars">
      <div class="box"><div class="bar bar-1"></div></div>
      <div class="box"><div class="bar bar-2"></div></div>
      <div class="box"><div class="bar bar-3"></div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {
        greeting:'',
        isShow:true
      }
    },
    mounted () {

      //获取时间并动态修改问候语
      var curTime = new Date();
      var curHour = curTime.getHours();
      if(curHour < 12)this.greeting = 'Morning   ,';
      else if(curHour < 17) this.greeting = 'Afternoon,';
      else if(curHour < 24) this.greeting = "Evening  ,";

      //欢迎动画
      var animateTime = 400;
      //文字切入
      setTimeout(function(){
        $(".msg-2").animate({left:'5px',opacity:'1'},animateTime * 3,'swing');
        $(".msg-1").animate({top:'0px',opacity:'1'},animateTime * 3,'swing');
      },500);
      //条形框切入
      setTimeout(function(){
        $(".bar-1").animate({top:'0px',opacity:'1'},animateTime,'swing');
      },800);
      setTimeout(function(){
        $(".bar-2").animate({top:'0px',opacity:'1'},animateTime,'swing');
      },1100);
      setTimeout(function(){
        $(".bar-3").animate({top:'0px',opacity:'1'},animateTime,'swing');
      },1400);
      //淡出
      setTimeout(function(){
        //文字切出
        $(".msg-2").animate({top:'-30px',opacity:'0'},animateTime * 2,'swing');
        $(".msg-1").animate({top:'-30px',opacity:'0'},animateTime * 2,'swing');
        //条形框切出
        $(".bar-3").animate({top:'-30px',opacity:'0'},animateTime * 3,'swing');
        $(".bar-2").animate({top:'-30px',opacity:'0'},animateTime * 3,'swing');
        $(".bar-1").animate({top:'-30px',opacity:'0'},animateTime * 3,'swing');

        $("#loading").animate({opacity:'0'},1000,'swing',function(){
          this.isShow = false;
          $("#loading").css("display","none");
        });
      },2500);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #loading {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    min-height: 800px;
    position: fixed;
    top: 0;
    left:0;
    background: #000;
    z-index: 100000;
  }


  /*问候语*/
  #msg{
    margin-top:200px;
    width:100%;
    height:100px;
    text-align: center;
  }
  #msg .left,#msg .right{
    width:57%;
    height:100%;
    float: left;
    position: relative;
  }
  #msg .right{
    width:43%;
  }
  .msg{
    font-size:70px;
    color:white;
    position: absolute;
  }
  .msg-1{
    right:0;
    top:-30px;
    opacity:0;
  }
  .msg-2{
    left:30px;
    opacity:0;
  }

  /*条形框*/
  #bars{
    margin-top:100px;
    width:100%;
    height:50px;
  }
  #bars .box{
    width:33.33%;
    height:100%;
    float: left;
    position: relative;
  }
  .bar{
    width:300px;
    height:10px;
    position: absolute;
    opacity:0;
 }
  .bar-1{
    right:0;
    top:5px;
    background: #e9fd43;
    box-shadow: 0 3px 80px #e9fd43
  }
  .bar-2{
    margin:auto;
    background: #ff5451;
    box-shadow: 0 3px 80px #ff5451;
    left:0;
    right:0;
    top:10px;
  }
  .bar-3{
    background: #00c3e7;
    box-shadow: 0 3px 80px #00c3e7;
    left:0;
    top:15px;
  }
</style>
