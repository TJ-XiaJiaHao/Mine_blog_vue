<template>
  <div class="mainPage">
    <!--basic info -->
    <div class="basic-info box" align="center">
      <div class="container ">
        <h3 class="tittle">基本信息</h3>
      </div>
      <div class="con">
        <div class="left">
          <div class="pic-box">
            <div class="pic-border"></div>
            <img class="pic" src="../assets/images/Home/summit.jpg" alt=" "/>
          </div>
        </div>

        <div class="right" id="info-table">
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
        <h3 class="tittle">学习经历</h3>
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
                  <li v-for="(it,i) in item.values"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span><a
                    href="#">{{ it }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-md-6 skills-content">

        <div class="clearfix"></div>
      </div>
    </div>

    <!-- 项目经历 -->
    <div class="employment box">
      <div class="container title">
        <h3 class="tittle ">项目经历</h3>
        <p class="abt-para ">以下主要罗列出我在几个比较完整的项目中的主要工作</p>
      </div>
      <div class="col-md-2 left-btn" v-on:click="employmentLeftClick($event)"><</div>
      <div class="col-md-4 employ-right">
        <h5 class="employment-title"><img class="" src='../assets/images/employment.png'/>{{ employments.names[employments.left] }}</h5>
        <p v-html="employments.values[employments.left]"></p>
      </div>
      <div class="col-md-4 employ-left2">
        <h5 class="employment-title">{{ employments.names[employments.right] }}<img class="" src='../assets/images/employment.png'/></h5>
        <p v-html="employments.values[employments.right]"></p>
      </div>
      <div class="col-md-2 right-btn" v-on:click="employmentRightClick($event)">></div>
    </div>

    <!-- more skills -->
    <div class="more box">
      <div class="container">
        <h3 class="tittle ">Skills</h3>
        <div class="col-md-2"></div>
        <div class="col-md-8 skills-bars ">
          <div v-for="(item,index) in skillsDetail" class="progress  progress-striped active">
            <div class="progress-bar" v-bind:class='item.type' style="width: 30%">{{ item.key }}
              <span class="sr-only">35% Complete (success)</span>
            </div>
            <div class="progress-bar" v-bind:class="item.type2" v-bind:style="{width: item.width}">
              <span class="sr-only"></span>
            </div>
            <p>{{ item.per }}</p>
            <div class="clearfix"></div>
          </div>

        </div>
        <div class="clearfix"></div>
      </div>
    </div>

    <!--clock-->
    <div class = 'footer box'>
        <canvas id="my-canvas"></canvas>
        <div id="clock">
        <div class="time-container hours">
          <div class="digit">
            <div class="fade">&nbsp;</div>
            <span class="num top" id="hour-tens-top">1</span>
            <span class="num bottom" id="hour-tens-bottom">
          <div class="bottom-container">1</div></span>
            <div class="swapper">
              <div id="top-hour-tens-anim" class="num-anim top-anim" style="display:none;">
                <div class="top-half-num">8</div>
              </div>
              <div id="bottom-hour-tens-anim" class="num-anim bottom-anim" style="display:none;">
                <div class="bottom-half-num">
                  <div class="dropper">9</div></div>
              </div>
            </div>
            <div class="ring ring-left"></div>
            <div class="ring ring-right"></div>
          </div>
          <div class="digit">
            <div class="fade">&nbsp;</div>
            <span class="num top" id="hour-ones-top">3</span>
            <span class="num bottom" id="hour-ones-bottom">
          <div class="bottom-container">3</div></span>
            <div class="swapper">
              <div id="top-hour-ones-anim" class="num-anim top-anim" style="display:none;">
                <div class="top-half-num">8</div>
              </div>
              <div id="bottom-hour-ones-anim" class="num-anim bottom-anim" style="display:none;">
                <div class="bottom-half-num">
                  <div class="dropper">9</div></div>
              </div>
            </div>
            <div class="ring ring-left"></div>
            <div class="ring ring-right"></div>
          </div>
        </div>
        <div class="time-container minutes">
          <div class="digit">
            <div class="fade">&nbsp;</div>
            <span class="num top" id="minute-tens-top">4</span>
            <span class="num bottom" id="minute-tens-bottom">
          <div class="bottom-container">4</div></span>
            <div class="swapper">
              <div id="top-minute-tens-anim" class="num-anim top-anim" style="display:none;">
                <div class="top-half-num">8</div>
              </div>
              <div id="bottom-minute-tens-anim" class="num-anim bottom-anim" style="display:none;">
                <div class="bottom-half-num">
                  <div class="dropper">9</div></div>
              </div>
            </div>
            <div class="ring ring-left"></div>
            <div class="ring ring-right"></div>
          </div>
          <div class="digit">
            <div class="fade">&nbsp;</div>
            <span class="num top" id="minute-ones-top">3</span>
            <span class="num bottom" id="minute-ones-bottom">
          <div class="bottom-container">3</div></span>
            <div class="swapper">
              <div id="top-minute-ones-anim" class="num-anim top-anim" style="display:none;">
                <div class="top-half-num">8</div>
              </div>
              <div id="bottom-minute-ones-anim" class="num-anim bottom-anim" style="display:none;">
                <div class="bottom-half-num">
                  <div class="dropper">9</div></div>
              </div>
            </div>
            <div class="ring ring-left"></div>
            <div class="ring ring-right"></div>
          </div>
        </div>
        <div class="time-container seconds">
          <div class="digit">
            <div class="fade">&nbsp;</div>
            <span class="num top" id="second-tens-top">5</span>
            <span class="num bottom" id="second-tens-bottom">
          <div class="bottom-container">5</div></span>
            <div class="swapper">
              <div id="top-second-tens-anim" class="num-anim top-anim" style="display:none;">
                <div class="top-half-num">8</div>
              </div>
              <div id="bottom-second-tens-anim" class="num-anim bottom-anim" style="display:none;">
                <div class="bottom-half-num">
                  <div class="dropper">9</div></div>
              </div>
            </div>
            <div class="ring ring-left"></div>
            <div class="ring ring-right"></div>
          </div>
          <div class="digit">
            <div class="fade">&nbsp;</div>
            <span class="num top" id="second-ones-top">3</span>
            <span class="num bottom" id="second-ones-bottom">
          <div class="bottom-container">2</div></span>
            <div class="swapper">
              <div id="top-second-ones-anim" class="num-anim top-anim" style="display:none;">
                <div class="top-half-num">2</div>
              </div>
              <div id="bottom-second-ones-anim" class="num-anim bottom-anim" style="display:none;">
                <div class="bottom-half-num">
                  <div class="dropper">3</div></div>
              </div>
            </div>
            <div class="ring ring-left"></div>
            <div class="ring ring-right"></div>
          </div>
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
        canScroll: true,        //是否可以滚动，当正在进行页面切换时是禁止滚动的
        lastScrollPage: 0,      //存放上一次页面，用于页面切换时获取被切换页数
        basicInfo: {            //个人信息，用于第一页展示个人信息
          keys: ["姓名", "性别", "学校", "邮箱", "手机号", "地址", "个人网站"],
          values: ["夏佳昊", "男", "同济大学14级本科生", "1452806@tongji.edu.cn", "150-6820-6281", "上海市嘉定区曹安公路4800号", "www.xjh197.cn"]
        },
        accordion: [            //获奖情况，用于第二页展示获奖情况
          {
            keys: '获奖情况-2017',
            values: ['程序设计大赛校三等奖']
          },
          {
            keys: '获奖情况-2016',
            values: ['挑战杯校二等奖', '国家励志奖学金', '学校奖学金三等奖']
          },
          {
            keys: '获奖情况-2015',
            values: ['学校奖学金二等奖']
          }
        ],
        skillsBasic: [{         //技能摘要，用于第二页展示基本技能
          per: 80,
          name: 'HTML & CSS'
        }, {
          per: 75,
          name: 'Java Script'
        }, {
          per: 50,
          name: 'Vue & Node'
        }],
        skillsDetail: [{         //详细技能，用于末页展示详细技能
          key: 'HTML & CSS',
          per: "90%",
          type: ' progress-bar-success',
          type2: 'progress-bar-warning',
          width: '60%'
        }, {
          key: 'HTML5 & CSS3',
          per: '60%',
          type: ' progress-bar-success1',
          type2: 'progress-bar-warning1',
          width: '30%'
        }, {
          key: 'JS & JQuery',
          per: '85%',
          type: ' progress-bar-success3',
          type2: 'progress-bar-warning3',
          width: '50%'
        }, {
          key: 'Ajax',
          per: '65%',
          type: ' progress-bar-success2',
          type2: 'progress-bar-warning2',
          width: '35%'
        }, {
          key: 'C & C++ & C#',
          per: '60%',
          type: ' progress-bar-success4',
          type2: 'progress-bar-warning4',
          width: '30%'
        }, {
          key: 'Java & Java EE',
          per: '45%',
          type: ' progress-bar-success5',
          type2: 'progress-bar-warning5',
          width: '15%'
        }],
        employments: {
          names:['期货分析预测系统','可定制的地理资源管理系统','超声波探伤系统','二手书交易平台'],
          values:['·利用html、css、Jquery进行网页的开发<br/>·利用ajax跨域请求新浪财经接口获取实时交易信息<br/>·利用echarts进行期货数据可视化<br/>·利用node.js进行前后端的通信',
                  '·利用html、css、jquery进行页面的开发<br/>·利用Vue框架进行单页面组件开发<br>·利用vue-resource请求springboot后端获取数据<br/>利用vue-router进行路由管理',
                  '·将c++版本的电机控制系统重构成c#版本的<br/>· 利用c#对超声波数据进行采集、处理和可视化呈现<br/>·利用多线程技术合并电机系统和超声波系统 ',
                  '·利用c#进行后端逻辑的实现<br/>·利用.net的cshtml整合前端开发人员的纯前端网站<br/>·利用razor语言进行前后端交互的整合'
          ],
          left:0,
          right:1
        }
      }
    },
    methods: {
      //初始化函数
      init: function () {
        //头像鼠标事件，鼠标移入图片缩小并降低透明度，鼠标移出恢复原始状态
        $(".basic-info .pic").mouseover(function () {
          $(this).css("transform", "scale(0.93)");
          $('.pic-border').animate({opacity: '0.7'}, 1000);
        });
        $(".basic-info .pic").mouseleave(function () {
          $(this).css("transform", "scale(1)");
          $('.pic-border').animate({opacity: '1'}, 1000);
        });

        toastr.options = {
          closeButton: true,
          progressBar: true,
          showMethod: 'slideDown',
          positionClass:'toast-bottom-right',
          timeOut: 4000
        };
        setTimeout(function(){ toastr.success("Welcom to my page,Sir!");},4000)


        //时钟走起来
        this.clock($(".time-big"),$(".time-small"));
      },
      clock:function(domBig,domSmall){
        var time = new Date();
        var month = time.getMonth().toString().length > 1 ? time.getMonth() : "0" + time.getMonth() ;
        var day   = time.getDay().toString().length > 1 ? time.getDay() : "0" + time.getDay();
        var hour  = time.getHours().toString().length > 1 ? time.getHours() : "0" + time.getHours();
        var min   = time.getMinutes().toString().length > 1 ? time.getMinutes() : "0" + time.getMinutes();
        var second = time.getSeconds().toString().length > 1 ? time.getSeconds() : "0" + time.getSeconds();
        if(second.toString().length < 2) second = "0" + second;
        domBig.html(hour + ":" + min);
        domSmall.html( ":" + second);
        setTimeout(this.clock,1000,domBig,domSmall);
      },

      //个人基本信息页动态切入切出函数
      basicInfoIn: function () {
        //标题切出
        $(".basic-info .tittle").animate({opacity: "1", marginTop: '0', marginBottom: '35px'}, 1000);
        //头像淡入
        setTimeout(function () {
          $(".pic-border").animate({opacity: '1'}, 1000);
          $(".pic").animate({opacity: '1'}, 1000);
          $(".pic").css({"transform": "scale(1)"})
        }, 0);
        //信息表格淡入
        setTimeout(function () {
          $(".list-left").animate({opacity: '1', marginTop: '-10px'}, 1000);
          $(".list-right").animate({opacity: '1', marginTop: '-10px'}, 1000);
        }, 0);
      },
      basicInfoOut: function () {
        //标题切出
        $(".basic-info .tittle").animate({opacity: "0", marginTop: '-15px', marginBottom: '50px'}, 1000);
        //头像淡出
        $(".pic-border").animate({opacity: '0'}, 300);
        $(".pic").animate({opacity: '0'}, 800);
        $(".pic").css({"transform": "scale(0.93)"});
        //信息表格淡出
        $(".list-left").animate({opacity: '0', marginTop: '0px'}, 1000);
        $(".list-right").animate({opacity: '0', marginTop: '0px'}, 1000);
      },

      //教育经历页动态切入切出函数
      drawPie: function (dom) {
        //绘制圆环，在第二页右边的三个技能百分比圆环
        dom.pieChart({
          barColor: '#10A7AF',
          trackColor: '#fff',
          lineCap: 'round',
          lineWidth: 8,
          onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
          }
        });
      },
      educationIn: function () {
        //标题切入
        $(".education .title").animate({opacity: "1", paddingTop: '50px', paddingBottom: '0'}, 1000);
        //获奖情况切入
        $(".abt-left h2").css('mariginTop', '0').css('marginBottom', '10px');
        $(".abt-left h2").animate({opacity: '1', marginLeft: '40px'}, 1000);
        $(".accordion").css('mariginTop', '0');
        $(".accordion").animate({opacity: '1', marginLeft: '20px'}, 1000);
        //添加四个技能圆圈
        $(".skills-content").css("opacity", '1').css("marginTop", '0px');
        for (var i = 0; i < this.skillsBasic.length; i++) {
          var html = $(".skills-content").html();
          $(".skills-content").html(html + '<div class="col-sm-4 abt-gd-left text-center"><div class="pie-title-center" data-percent="' + this.skillsBasic[i].per + '"><span class="pie-value"></span></div><h4>' + this.skillsBasic[i].name + '</h4></div>');
        }
        var pies = $(".pie-title-center");
        for (var i = 0; i < pies.length; i++) {
          this.drawPie(pies.eq(i));
        }
      },
      educationOut: function () {
        //标题切出
        $(".education .title").animate({opacity: "0", paddingTop: '35px', paddingBottom: '15px'}, 1000);
        //获奖情况切出
        $(".abt-left h2").animate({opacity: '0', marginTop: '-15px', marginBottom: '25px'}, 1000, function () {
          $(".abt-left h2").css('marginLeft', '0');
        });
        $(".accordion").animate({opacity: '0', marginTop: '-10px'}, 1000, function () {
          $(".accordion").css('marginLeft', '0');
        });
        //清空技能圆圈
        $(".skills-content").animate({opacity: '0', marginTop: '15px'}, 1000, function () {
          $(".skills-content").html("");
        });
      },

      //项目经历切入切出
      employmentIn: function () {
        //标题切入
        $(".employment .title").animate({opacity: "1", paddingTop: '50px', paddingBottom: '30px'}, 1000);
        //项目经历切入
        $(".employ-right").animate({marginTop:'0px',opacity:'1'},1000);
        $(".employ-left2").animate({marginTop:'0px',opacity:'1'},1000);
      },
      emplolymentOut: function () {
        //标题切出
        $(".employment .title").animate({opacity: "0", paddingTop: '30px', paddingBottom: '50px'}, 1000);
        //项目经历切出
        $(".employ-right").animate({marginTop:'30px',opacity:'0'},1000);
        $(".employ-left2").animate({marginTop:'30px',opacity:'0'},1000);
      },
      employmentLeftClick:function(){
        $(".employ-right").css('paddingLeft','30px').css('opacity','0');
        $(".employ-left2").css('paddingRight','30px').css('opacity','0');
        this.employments.left  = (this.employments.left - 2) < 0 ? Math.floor((this.employments.names.length - 1) / 2) * 2 : (this.employments.left - 2);
        this.employments.right = this.employments.left + 1;
        $(".employ-right").animate({paddingLeft:'0px',opacity:'1'},1000);
        $(".employ-left2").animate({paddingRight:'0px',opacity:'1'},1000);

      },
      employmentRightClick:function(){
        $(".employ-right").css('paddingLeft','30px').css('opacity','0');
        $(".employ-left2").css('paddingRight','30px').css('opacity','0');
        this.employments.left  = (this.employments.left + 2) >= this.employments.names.length ? 0 : (this.employments.left + 2);
        this.employments.right = this.employments.left + 1;
        $(".employ-right").animate({paddingLeft:'0px',opacity:'1'},1000);
        $(".employ-left2").animate({paddingRight:'0px',opacity:'1'},1000);
      },

      //技能条页切入
      skillsIn: function () {
        //标题切入
        $(".more .tittle").animate({opacity: "1", marginTop: '60px', marginBottom: '60px'}, 1000);
        //技能条切入
        var bars = $(".skills-bars .progress");
        for (var i = 0; i < bars.length; i++) {
          (function (i) {
            setTimeout(function () {
              bars.eq(i).animate({opacity: '1', marginTop: '0'}, 800);
            }, i * 200);
          })(i);
        }
      },
      skillsOut: function () {
        //标题切出
        setTimeout(function(){
          $(".more .tittle").animate({opacity: "0", marginTop: '45px', marginBottom: '65px'}, 400);
        },600)
        //技能条切出
        $(".skills-bars .progress").animate({opacity: '0', marginTop: '10px'}, 1000);
      },

      //时钟切入切出
      clockOut:function(){
        $(".footer").animate({opacity:'0'},1000);
      },
      clockIn:function(){
        $(".footer").animate({opacity:'1'},1000);
      },

      //页面切换事件，根据不同的方向调用不同的切入切出动画
      pageOut: function (page) {
        var fun = [this.basicInfoOut,this.educationOut,this.emplolymentOut,this.skillsOut,this.clockOut];
        if(fun.length <= page)return;
        fun[page]();
      },
      pageIn: function (page) {
        var fun  = [this.basicInfoIn,this.educationIn,this.employmentIn,this.skillsIn,this.clockIn];
        if(fun.length <= page)return;
        setTimeout(function () {fun[page]();}, 1000);
      },
      pageChange: function (from, to) {
        var self = this;
        var curScrollTop = $(".mainPage").scrollTop();                        //当前滚动条的距离
        var clientHeight = $(window).height() ;                              //显示屏高度
        this.pageOut(from);   //被替换页切出
        this.pageIn(to);      //替换页切入
        //滚动条滚回原始页面，实现无缝页面切换
        $(".mainPage").scrollTop(self.lastScrollPage * clientHeight);
        //1秒后滚到目标页面
        setTimeout(function () {
          self.lastScrollPage += to > from ? 1 : -1;
          $(".mainPage").scrollTop(self.lastScrollPage * clientHeight);
          self.canScroll = true;
        }, 1000);

      },

      //滚动条事件
      pageScroll: function () {
        var self = this;
        $(".mainPage").scroll(function () {
          var curScrollTop = $(".mainPage").scrollTop();                        //当前滚动条的距离
          var clientHeight = $(window).height();                                //显示屏高度
          var currentPage = Math.floor(curScrollTop / clientHeight);            //当前理论页编号
          //如果正在动画切换，则屏蔽滚动条移动事件
          if (!self.canScroll) {
            $(".mainPage").scrollTop(self.lastScrollPage * clientHeight);
            return;
          }
          //向上翻页
          if (currentPage < self.lastScrollPage) {
            self.canScroll = false;
            self.pageChange(self.lastScrollPage, self.lastScrollPage - 1);
          }
          //向下翻页
          else if (curScrollTop - (self.lastScrollPage * clientHeight) > 1) {
            self.canScroll = false;
            self.pageChange(self.lastScrollPage, self.lastScrollPage + 1);
          }
        });
      },
    },
    mounted()
    {
      this.init();          //初始化
      setTimeout(this.basicInfoIn,3600);   //加载个人基本页
      this.pageScroll();    //添加滚动条事件
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainPage {
      position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    width:  calc(100% + 17px);
    height: calc(100% - 0px);
    background-attachment: fixed;
    background-image: url(../assets/images/Home/bg.jpg);
  }
  .box {
     color: white;
     width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
  }

  /*个人信息栏*/
  .basic-info {
    width: 100%;
    height: 100%;
    padding-top: 100px;
  }
  .basic-info .con {
    height: 500px;
    width: 1000px;
  }

  /*标题*/
  .basic-info .tittle{
    margin:-15px 0 50px 0;
    opacity:0;
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
    position: relative;
  }
  .pic-border {
    position: absolute;
    width: 388px;
    height: 388px;
    left: 56px;
    top: 26px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border-top: 14px solid rgba(255, 255, 255, 1);
    border-left: 14px solid rgba(255, 255, 255, 1);
    border-bottom: 14px solid rgba(255, 255, 255, 1);
    border-right: 14px solid rgba(255, 255, 255, 0.7);
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    -webkit-animation: load8 2s infinite linear;
    animation: load8 2s infinite linear;
    opacity: 0;
  }
  .basic-info .pic {
    width: 360px;
    height: 360px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    opacity: 0;
    -webkit-transition: transform 1s;
    -moz-transition: transform 1s;
    -ms-transition: transform 1s;
    -o-transition: transform 1s;
    transition: transform 1s;
    transform: scale(0.9);
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  /*右边*/
  .basic-info .right {
    width: 50%;
    height: 100%;
    float: left;
    padding-top: 50px;
    padding-left: 70px;
  }
  .basic-info .list-left, .basic-info .list-right {
    opacity: 0;
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
  .education {
    padding: 50px 40px 0 40px;
  }
  .title {
    padding-top: 35px;
    padding-bottom: 15px;
    opacity: 0;
  }
  .title p {
    color: white;
    margin-bottom: 30px;
  }
  .abt-left {
    padding: 20px 40px 0px 40px;
    height: 68%;
    min-height: 440%;
    min-height: 200px;
    background: none;
  }
  .abt-left h2 {
    margin-bottom: 25px;
    margin-top: -15px;
    text-align: left;
    opacity: 0;
  }
  .accordion {
    text-align: left;
    margin-top: -10px;
    opacity: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .accordion-section-content h6 {
    margin-top: 6px;
    margin-bottom: 4px;
    color: black;
  }

  /*项目经历*/
  .employment{
    padding: 100px 0 0 0;
  }
  .employment .title {
    padding-top: 30px;
    padding-bottom: 50px;
  }
  .employ-right,.employ-left2 {
    border: none;
    text-align: left;
    opacity: 0;
    margin-top:30px;
  }
  .employ-right p,.employ-left2 p{
   color:white;
  }
  .employment-title img {
    width: 32px;
    height: 32px;
    margin-left:0.8em;
    margin-right: 0.7em;
  }
  .employment-title h5 {
    line-height: 32px;
  }
  .left-btn,.right-btn{
    font-size:60px;
    padding-top:100px;
    cursor: pointer;
    opacity:0.3;
    text-align: center;
  }
  .left-btn:hover,.right-btn:hover{
    opacity:0.8;
  }

  /*技能条页*/
  .more {
    padding: 60px 0 0 0;
  }
  .more .tittle {
    margin-top: 45px;
    margin-bottom: 75px;
    opacity: 0;
  }
  .skills-bars .progress {
    opacity: 0;
    margin-top: 10px;
  }

  /*页尾*/
  .footer{
    position: relative;
  }
</style>
