### **1、说明**
引入JQuery库的方式有多种，我曾经试过用npm直接把jquery安装配置入项目，但是在后续开发中，尤其是用到基于jquery的第三方插件的时候，遇到了很多的问题，所以这里还是介绍一种非常简单非常容易上手且没有后顾之忧的方式。

### **2、引入JQuery**
1、在staic文件夹中创建JS文件夹，并把最新的jquery.js放到JS文件夹中
2、在index.html中通过script标签添加jquery的引用
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>csdn-vue</title>
	</head>
	<body>
		<div id="app"></div>
		<!-- built files will be auto injected -->

		<!--jquery-->
		<script src="static/JS/jquery.js"></script>
	</body>
</html>
```
3、在src/App.vue的script标签内添加jquery语法
```
<script>
export default {
  name: 'app',
  mounted(){
    $("body").css("background","black");   //jquery语法
  }
}
</script>
```
运行结果如下：发现报$未定义的错误
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/useJqueryError.png?raw=true)
4、运行所报的错误其实是可以忽略的，修改.eslintignore文件，添加一行\*.*
```
build/*.js
config/*.js
*.*
```
再运行一遍，结果如下：
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/useJquerySuccessful.png?raw=true)
### **3、引入pie-chart**
	pie-chart是基于jquery的一款画图插件，下面来看看如何引入该插件

1、同样的将pie-chart.js放入static/JS中，并在index.html中引入
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>csdn-vue</title>
</head>
<body>
<div id="app"></div>
<!-- built files will be auto injected -->

<!--jquery-->
<script src="static/JS/jquery.js"></script>

<!--pieChart-->
<script src="static/JS/pie-chart.js"></script>
</body>
</html>
```
2、同样的在src/App.vue中使用pieChart语法
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <!--添加一个div来最为容器-->
    <div id="demo-pie-1" class="pie-title-center" data-percent="75"><span class="pie-value"></span></div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
      $("body").css("background", "black");
      //使用pieChart语法
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
```
运行结果如下：我们看到下面多了个圆圈，就是pieChart画出来的
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/usePieChartSuccessful.png?raw=true)
