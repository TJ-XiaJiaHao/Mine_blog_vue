<template>
    <div id="my-webs">
      <!--demo-->
      <div id="project-box" class="box">
        <ul class="box-ul">
          <!--期货系统-->
          <li v-for="(item,index) in myWebs" v-if="(currentWebIndex == 0 || currentWebIndex == item.belong)">
            <div class="pic">
              <img v-bind:src="item.picURL"/>
              <div class="men">
                <a v-bind:href="item.link" target="_blank">{{ item.shortName }}</a>
              </div>
            </div>
            <div class="description">
              <table>
                <tr>
                  <td class="tb-key">名称：</td>
                  <td calss="td-value project-name">{{ item.projectName }}</td>
                </tr>
                <tr>
                  <td class="tb-key">来源：</td>
                  <td calss="td-value">{{ item.from }}</td>
                </tr>
                <tr>
                  <td class="tb-key">主要技术：</td>
                  <td calss="td-value">{{ item.mainTec }}</td>
                </tr>
                <tr>
                  <td class="tb-key">难度：</td>
                  <td>
                    <div class="stars">
                      <img v-for='(itm,i) in item.stars'src="../assets/images/Html/star-yellow.png"/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="">源码下载</a></td>
                  <td><a v-bind:href="item.link" target="_blank">查看效果</a></td>
                </tr>
              </table>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  import bus from "../assets/eventBus"
    export default {
        name: 'hello',
        data () {
            return {
              currentWebIndex:0,
              myWebs:[
                {
                  picURL:require("../assets/images/Html/html-futures.png"),
                  shortName:"期货系统",
                  projectName:"期指分析预测系统交易界面",
                  from:"挑战杯参赛项目",
                  mainTec:"div + css + ajax + nodejs + jQuery",
                  stars:[true,true,true,true],
                  link:'http://www.xjh197.cn/html/futures',
                  belong:1
                },
                {
                  picURL:require("../assets/images/Html/html-threedme.png"),
                  shortName:"3D导航栏",
                  projectName:"	3d滚动导航栏",
                  from:"腾讯课堂20160312",
                  mainTec:"JS + transform + transition",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/threedme',
                  belong:2
                },
                {
                  picURL:require("../assets/images/Html/html-nav.png"),
                  shortName:"动态导航",
                  projectName:"	动态导航",
                  from:"腾讯课堂20160310",
                  mainTec:"div + css + JQuery",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/nav',
                  belong:2
                },
                {
                  picURL:require("../assets/images/Html/html-arpha.png"),
                  shortName:"圆形菜单栏",
                  projectName:"	圆形菜单栏",
                  from:"中山大学web课程课后练习",
                  mainTec:"transform + transition",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/arpha',
                  belong:2
                },
                {
                  picURL:require("../assets/images/Html/html-youhuo.png"),
                  shortName:"有货",
                  projectName:"	有货轮播图",
                  from:"腾讯课堂20160324",
                  mainTec:"jQuery + animate",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/youhuo',
                  belong:3
                },
                {
                  picURL:require("../assets/images/Html/html-car.png"),
                  shortName:"3d小车",
                  projectName:"	旋转的3d小车",
                  from:"百度前端学院",
                  mainTec:"THREEJS",
                  stars:[true,true,true],
                  link:'http://www.xjh197.cn/html/car',
                  belong:4
                },
                {
                  picURL:require("../assets/images/Html/html-showProduct3D.png"),
                  shortName:"3D展柜",
                  projectName:"	3D作品展示柜（Chrome 打开）",
                  from:"动脑学院",
                  mainTec:"transform + JQuery",
                  stars:[true,true,true],
                  link:'http://www.xjh197.cn/html/showProduct3D',
                  belong:4
                },
                {
                  picURL:require("../assets/images/Html/html-clock.png"),
                  shortName:"时钟",
                  projectName:"	行走的时钟",
                  from:"大众点评2015校招编程题",
                  mainTec:"transform + transition",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/clock',
                  belong:4
                },
                {
                  picURL:require("../assets/images/Html/html-blog.png"),
                  shortName:"个人博客",
                  projectName:"	响应式个人博客",
                  from:"web技术课程练习",
                  mainTec:"flex + @media",
                  stars:[true],
                  link:'http://www.xjh197.cn/html/blog',
                  belong:5
                },
                {
                  picURL:require("../assets/images/Html/html-lift.png"),
                  shortName:"电梯",
                  projectName:"	电梯调度策略",
                  from:"操作系统调度模块练习",
                  mainTec:"div + css + JQuery",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/lift',
                  belong:5
                },
                {
                  picURL:require("../assets/images/Html/html-tianmao.png"),
                  shortName:"天猫购物",
                  projectName:"	天猫购物平台",
                  from:"腾讯课堂20160320",
                  mainTec:"div + css + JQuery",
                  stars:[true,true,true],
                  link:'http://www.xjh197.cn/html/tianmao',
                  belong:6
                },
                {
                  picURL:require("../assets/images/Html/html-youji.png"),
                  shortName:"游记",
                  projectName:"papas游记",
                  from:"Java EE课程第一次讨论项目（废）",
                  mainTec:"div + css + animate",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/youji',
                  belong:6
                },
                {
                  picURL:require("../assets/images/Html/html-projectCom.png"),
                  shortName:"项目交流",
                  projectName:"大学生项目交流平台",
                  from:"上创第一次讨论项目（废）",
                  mainTec:"div + css",
                  stars:[true,true],
                  link:'http://www.xjh197.cn/html/projectcommunication',
                  belong:6
                },
                {
                  picURL:require("../assets/images/Html/html-renzheshengui.png"),
                  shortName:"忍者神龟",
                  projectName:"忍者神龟",
                  from:"中山大学web课程某次练习",
                  mainTec:"div + css",
                  stars:[true],
                  link:'http://www.xjh197.cn/html/renzheshengui',
                  belong:6
                }
              ]
            }
        },
      methods:{
        appear:function(dom){
          dom.css("display","block");
          dom.animate({
            marginLeft: '0',
            opacity:'1'
          }, {
            easing: 'swing',
            duration: 1000,
            complete: function () {
            }
          });
        },
        disappear:function(dom){
          dom.css("display","none");
          dom.animate({
            marginLeft: '30px',
            opacity:'0'
          }, {
            easing: 'swing',
            duration: 0,
            complete: function () {
            }
          });
        },
        fadeIn:function(){
          //动态切入
          var self = this;
          setTimeout(function(){
            self.appear($(".box-ul li"));
          },300)
        }
      },
      mounted(){
        this.fadeIn();

        //监听通信
        var self = this;
        bus.$on("test",function(msg){
          self.currentWebIndex = msg;
        });
      },
      watch:{
        currentWebIndex:function(newIndex){
          this.disappear($(".box-ul li"));
          this.fadeIn();
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #my-webs{
    width:calc(100% - 180px);
    height:100%;
    float: left;
  }

  /*分类展示块*/
  .box{
    width:90%;
    min-width:800px;
    margin:20px auto 0;
  }
  .box-ul{
    width:100%;
  }


  /*单个页面展示区*/
  .box-ul li{
    margin-left:50px;
    opacity:0;
    list-style: none;
    width:100%;
    height:300px;
    border-bottom:1px solid rgba(0,0,0,0.1);

    overflow:hidden;
  }


  /*照片展示块*/
  .pic{
    width:45%;
    height:80%;
    margin-top:30px;
    position: relative;
    cursor:pointer;
    float:left;
  }
  .pic:hover .men{
    visibility: visible;
  }
  .pic img{
    width:100%;
    height:100%;
  }
  .men{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.3);
    visibility: hidden;
    text-align: center;
  }
  .men a{
    display:inline-block;
    width:180px;
    height:50px;
    line-height:50px;
    border:4px solid white;
    margin-top:90px;
    color:white;
    font-size:30px;
    font-weight:bold;
    cursor:pointer;
  }
  .men a:hover{
    text-decoration: underline;
  }


  /*文字介绍块*/
  .description{
    float:left;
    margin-left:100px;
    margin-top:33px;
  }
  .description table tr td{
    height:45px;
    font-size:16px;
  }
  .tb-key{
    width:100px;
    font-weight:bold;
  }
  .stars{
    width:120px;
    height:26px;
    overflow: hidden;
  }
  .stars img{
    float:left;
    width:26px;
    height:26px;
  }


</style>
