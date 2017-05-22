<template>
  <div class="mainPage">
    <!--basic info -->
    <div class="basic-info box" align="center">
      <div class="con">
        <div class="left">
          <div class="pic-box">
            <img class="pic" src="../assets/images/Home/pic1.jpg" alt=" "/>
          </div>
        </div>

        <div class="right">
          <ul class="list-left">
            <li v-for="(item,index) in basicInfo.keys">{{ item }}</li>
          </ul>
          <ul class="list-right">
            <li v-for="(item,index) in basicInfo.values">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>


    <!--education info -->
    <div class="education box">
      <div class="container title">
        <h3 class="tittle">个人介绍</h3>
        <p class="abt-para">任何节约归根到底是时间的节约，掌握了时间，你就掌握了世界。</p>
      </div>
      <div class="col-md-6 abt-left ">
        <h2>教育经历</h2>
        <div class="accordion">
          <div class="accordion-section">
            <h5><a class="accordion-section-title" href="#accordion-1">
              <span>2014 - 至今</span> 中国-同济大学
              <div class="clearfix"></div>
            </a></h5>
            <div id="accordion-1" class="accordion-section-content">
              <div v-for="(item,indx) in accordion">
                <h6>{{ item.keys }}</h6>
                <ul>
                  <li v-for="(it,i) in item.values"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span><a href="#">{{ it }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-6 ">
        <div v-for='(item,index) in skillsBasic' class="col-sm-4 abt-gd-left text-center">
          <div id="demo-pie-1" class="pie-title-center" data-percent="75"><span class="pie-value"></span></div>
          <h4>{{ item }}</h4>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <!--basic info -->
    <div class="basic-info box" align="center">
      <div class="con">
        <div class="left">
          <div class="pic-box">
            <img class="pic" src="../assets/images/Home/pic1.jpg" alt=" "/>
          </div>
        </div>

        <div class="right">
          <ul class="list-left">
            <li>姓名:</li>
            <li>年龄:</li>
            <li>学校:</li>
            <li>邮箱:</li>
            <li>手机号:</li>
            <li>地址:</li>
            <li>个人网站:</li>
          </ul>
          <ul class="list-right">
            <li><h2>夏佳昊03</h2></li>
            <li>男</li>
            <li>同济大学14级本科生</li>
            <li>1452806@tongji.edu.cn</li>
            <li>150-6820-6281</li>
            <li>上海市嘉定区曹安公路4800号</li>
            <li>www.xjh197.cn</li>
          </ul>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        canScroll: true,
        lastScrollTop: 0,
        basicInfo: {
          keys: ["姓名", "年龄", "学校", "邮箱", "手机号", "地址", "个人网站"],
          values: ["夏佳昊", "男", "同济大学14级本科生", "1452806@tongji.edu.cn", "150-6820-6281", "上海市嘉定区曹安公路4800号", "www.xjh197.cn"]
        },
        accordion:[
          {
            keys: '获奖情况-2017',
            values:['程序设计大赛校三等奖']
          },
          {
            keys: '获奖情况-2016',
            values:['挑战杯校二等奖','国家励志奖学金','学校奖学金三等奖']
          },
          {
            keys: '获奖情况-2015',
            values:['学校奖学金二等奖']
          }
        ],
        skillsBasic:['HTML & CSS','Java Script','UI Designer']
      }
    },
    methods:{
      drawPie:function(){
        //绘制四个圈
        $('#demo-pie-1').pieChart({
          barColor: '#10A7AF',
          trackColor: '#fff',
          lineCap: 'round',
          lineWidth: 8,
          onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
          }
        });
      },
      pageScroll:function(){
        /*监听滚动条事件*/
        var self = this;
        $(".mainPage").scroll(function () {
          //如果正在动画切换，则屏蔽滚动条移动事件
          if (!self.canScroll) {
            $(".mainPage").scrollTop(self.lastScrollTop);
            return;
          }

          //计算偏差并进行翻页
          var curScrollTop = $(".mainPage").scrollTop();                        //当前滚动条的距离
          var clientHeight = $(window).height() - 50;                                //显示屏高度
          var currentPage = Math.floor(curScrollTop / clientHeight);     //当前理论页编号
          var lastPage = Math.floor(self.lastScrollTop / clientHeight);  //上一页编号
          //向上翻页
          if (currentPage < lastPage) {
            self.canScroll = false;
            $(".mainPage").scrollTop((lastPage - 1) * clientHeight);
            self.lastScrollTop = (lastPage - 1) * clientHeight;
            setTimeout(function () {
              self.canScroll = true;
            }, 500);
          }
          //向下翻页
          else if (curScrollTop - self.lastScrollTop > 40) {
            self.canScroll = false;
            $(".mainPage").scrollTop((lastPage + 1) * clientHeight);
            self.lastScrollTop = (lastPage + 1) * clientHeight;

            setTimeout(function () {
              self.canScroll = true;
            }, 500);
          }
        });
      }
    },
    mounted(){
      this.pageScroll();
      this.drawPie();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainPage {
    width: calc(100% + 17px);
    height: calc(100% - 50px);
    background-image: url(../assets/images/Home/bg.jpg);
    background-attachment: fixed;
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .box {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    color: white;
  }

  /*个人信息栏*/
  .basic-info {
    width: 100%;
    height: 100%;
    padding-top: 80px;
  }

  .basic-info .con {
    height: 500px;
    width: 1000px;
  }

  /*左边*/
  .basic-info .left {
    width: 50%;
    height: 100%;
    float: left;
  }

  .basic-info .left .pic-box {
    width: 100%;
    height: 100%;
    padding: 40px 70px 40px 70px;
  }

  .basic-info .pic {
    width: 100%;
    height: 90%;
    border: 8px solid white;
  }

  /*右边*/
  .basic-info .right {
    width: 50%;
    height: 100%;
    float: left;
    padding-top: 50px;
    padding-left: 20px;
  }

  .basic-info .list-left li, .basic-info .list-right li {
    list-style: none;
    text-align: left;
    color: white;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 700;
  }

  .basic-info .list-right li {
    font-weight: 500;
  }

  .basic-info .list-right li:nth-of-type(1) {
    font-size: 28px;
  }

  /*教育经历*/
  .education{
    padding:0 40px 0 40px;
  }
  .title {
    margin-top: 50px;
  }
  .title p {
    color: white;
    margin-bottom:30px;
  }
  .abt-left{
    padding: 20px 40px 0px 40px;
    height:68%;
    min-height:440%;
    min-height:200px;
    background: none;
  }
  .abt-left h2{
    margin-bottom:10px;
  }
  .accordion-section-content h6{
    color:black;
  }
</style>
