<template>
	<div class="mainPage">
		<!--basic info -->
		<div class="basic-info box" align="center">
			<div class="con">
				<div class="left">
					<div class="pic-box">
						<div class="pic-border"></div>
						<img class="pic" src="../assets/images/Home/pic1.jpg" alt=" "/>
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


	</div>
</template>

<script>
	export default {
		name: 'hello',
		data () {
			return {
				canScroll: true,
				lastScrollPage: 0,
				basicInfo: {
					keys: ["姓名", "年龄", "学校", "邮箱", "手机号", "地址", "个人网站"],
					values: ["夏佳昊", "男", "同济大学14级本科生", "1452806@tongji.edu.cn", "150-6820-6281", "上海市嘉定区曹安公路4800号", "www.xjh197.cn"]
				},
				accordion: [
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
				skillsBasic: [{
					per: 80,
					name: 'HTML & CSS'
				}, {
					per: 75,
					name: 'Java Script'
				}, {
					per: 60,
					name: 'UI Designer'
				}],
        skillsDetail:[{
          key:'HTML & CSS',
          per:"90%",
          type:' progress-bar-success',
          type2:'progress-bar-warning',
          width:'60%'
        },{
          key:'HTML5 & CSS3',
          per:'60%',
          type:' progress-bar-success1',
          type2:'progress-bar-warning1',
          width:'30%'
        },{
          key:'JS & JQuery',
          per:'85%',
          type:' progress-bar-success3',
          type2:'progress-bar-warning3',
          width:'50%'
        },{
          key:'Ajax',
          per:'65%',
          type:' progress-bar-success2',
          type2:'progress-bar-warning2',
          width:'35%'
        },{
          key:'C & C++ & C#',
          per:'60%',
          type:' progress-bar-success4',
          type2:'progress-bar-warning4',
          width:'30%'
        },{
        key:'Java & Java EE',
          per:'45%',
          type:' progress-bar-success5',
          type2:'progress-bar-warning5',
          width:'15%'
      }]
			}
		},
		methods: {
		  //初始化
      init:function(){
        //头像鼠标事件
        $(".basic-info .pic").mouseover(function(){
          $(this).css("transform","scale(0.93)");
          $('.pic-border').animate({opacity:'0.7'},1000);
        });
        $(".basic-info .pic").mouseleave(function(){
          $(this).css("transform","scale(1)");
          $('.pic-border').animate({opacity:'1'},1000);
        });
      },

			//个人基本信息页动态切入切出
			basicInfoIn: function () {

				//头像浮现
				setTimeout(function () {
					$(".pic-border").animate({opacity: '1'}, 1000);
					$(".pic").animate({opacity: '1'}, 1000);
					$(".pic").css({"transform": "scale(1)"})
				}, 800);

				//信息表格浮现
				setTimeout(function () {
					$(".list-left").animate({opacity: '1', marginTop: '-10px'}, 1000);
					$(".list-right").animate({opacity: '1', marginTop: '-10px'}, 1000);
				}, 0);

			},
			basicInfoOut: function () {

				//头像淡出
				$(".pic-border").animate({opacity: '0'}, 300);
				$(".pic").animate({opacity: '0'}, 800);
				$(".pic").css({"transform": "scale(0.93)"});

				//信息表格淡出
				$(".list-left").animate({opacity: '0', marginTop: '0px'}, 1000);
				$(".list-right").animate({opacity: '0', marginTop: '0px'}, 1000);
			},

			//教育经历页动态切入切出
			drawPie: function (dom) {
				//绘制圆环
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
        $(".education .title").animate({opacity:"1",marginTop:'50px',marginBottom:'0'},1000);

        //获奖情况切入
        $(".abt-left h2").css('mariginTop','0').css('marginBottom','10px');
        $(".abt-left h2").animate({opacity:'1',marginLeft:'40px'},1000);
        $(".accordion").css('mariginTop','0');
        $(".accordion").animate({opacity:'1',marginLeft:'20px'},1000);


				//添加四个技能圆圈
        $(".skills-content").css("opacity",'1').css("marginTop",'0px');
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
        $(".education .title").animate({opacity:"0",marginTop:'35px',marginBottom:'15px'},1000);

        //获奖情况切出
        $(".abt-left h2").animate({opacity:'0',marginTop:'-15px',marginBottom:'25px'},1000,function(){
          $(".abt-left h2").css('marginLeft','0');
        });
        $(".accordion").animate({opacity:'0',marginTop:'-10px'},1000,function(){
          $(".accordion").css('marginLeft','0');
        });

        //清空技能圆圈
        $(".skills-content").animate({opacity:'0',marginTop:'-15px'},1000,function(){
          $(".skills-content").html("");
        });

			},

      //技能条页切入
      skillsIn:function(){

        //标题切入
        $(".more .tittle").animate({opacity:"1",marginTop:'30px',marginBottom:'50px'},1000);

        //技能条切入
        var bars = $(".skills-bars .progress");
        for(var i = 0;i < bars.length; i++){
          (function(i){
            setTimeout(function(){
            bars.eq(i).animate({opacity:'1',marginTop:'0'},800);
            order.splice(0,1);
          },i * 200);
          })(i);
        }

      },
      skillsOut:function(){

        //标题切出
        $(".more .tittle").animate({opacity:"0",marginTop:'15px',marginBottom:'65px'},1000);

        //技能条切出
        $(".skills-bars .progress").animate({opacity:'0',marginTop:'10px'},1000);

      },


			//页面切换效果
			pageOut: function (page) {
				var self = this;
				switch (page) {
					case 0:
						self.basicInfoOut();
						break;
					case 1:
						self.educationOut();
            break;
          case 2:
            self.skillsOut();
            break;
				}
			},
			pageIn: function (page) {
				var self = this;
				var fun;
				switch (page) {
					case 0:
						fun = self.basicInfoIn;
						break;
					case 1:
						fun = self.educationIn;
            break;
          case 2:
            fun = self.skillsIn;
            break;
				}
				setTimeout(function () {
					fun();
				}, 1000);
			},
			pageChange: function (from, to) {
        var self = this;
				this.pageOut(from);
				this.pageIn(to);

				var curScrollTop = $(".mainPage").scrollTop();                        //当前滚动条的距离
				var clientHeight = $(window).height() - 50;                           //显示屏高度

				//滚动条滚回原始页面
				$(".mainPage").scrollTop(self.lastScrollPage * clientHeight);

				//2秒后滚到目标页面
				setTimeout(function () {
					self.lastScrollPage += to > from ? 1 : -1;
					$(".mainPage").scrollTop(self.lastScrollPage * clientHeight);
					self.canScroll = true;
				}, 1000);

			},

			//滚动条事件
			pageScroll: function () {
				/*监听滚动条事件*/
				var self = this;
				$(".mainPage").scroll(function () {

					var curScrollTop = $(".mainPage").scrollTop();                        //当前滚动条的距离
					var clientHeight = $(window).height() - 50;                           //显示屏高度

					//如果正在动画切换，则屏蔽滚动条移动事件
					if (!self.canScroll) {
						$(".mainPage").scrollTop(self.lastScrollPage * clientHeight);
						return;
					}

					//计算偏差并进行翻页
					var currentPage = Math.floor(curScrollTop / clientHeight);     //当前理论页编号
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
			this.basicInfoIn();   //加载个人基本页
			this.pageScroll();    //添加滚动条事件
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
		padding-left: 20px;
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
		padding: 0 40px 0 40px;
	}

	.title {
		margin-top: 35px;
    margin-bottom:15px;
    opacity:0;
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
    margin-top:-15px;
    text-align: left;
    opacity:0;
	}
  .accordion{
    text-align: left;
    margin-top:-10px;
    opacity:0;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
  }

	.accordion-section-content h6 {
    margin-top:6px;
    margin-bottom:4px;
		color: black;
	}

  /*技能条页*/
  .more{
    padding:0px;
  }
  .more .tittle{
    margin-top: 15px;
    margin-bottom:65px;
    opacity:0;
  }
  .skills-bars .progress{
    opacity:0;
    margin-top:10px;
  }
</style>
