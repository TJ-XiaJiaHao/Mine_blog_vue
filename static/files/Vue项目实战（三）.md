### **1、添加公用组件**
	如果一个组件每个页面都要用到，比如导航栏和页尾，那么可以通过这个方法来注册和使用组件，步骤如下：
1、在src/components里面新建一个headerBar.vue文件，作为导航栏组件，这里假设你对vue的语法已经很了解了，demo如下：
```
<!--因为用到了bootstrap，请参考上一篇教程引入bootstrap文件-->
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
            <form class="navbar-form navbar-right" >
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
      }
    },
    mounted(){
      //导航栏动态切入
      $(".navbar-fixed-top").animate({top:'0',opacity:'1'},600);
    }
  }
</script>

<style scoped>
  /*导航栏整体样式*/
  .navbar-default {
    background-color: #4a86cf !important;
    border-color: #3968a1 !important;
  }
  .navbar{
    margin:0 !important;
  }
  .navbar-fixed-top{
    top:-50px;
    opacity:0;
  }
  /*导航元素样式*/
  .navbar-default .navbar-nav > li:hover{
    background: rgb(110,158,217);
  }
  .navbar-default .navbar-nav > li > a {
    color: #ffffff;
    text-decoration: none;
  }

  /*导航栏位置占领*/
  .bg{
    min-height:50px;
  }
</style>
```
2、在src/App.vue文件中注册并使用导航栏组件
```
<template>
  <div id="app">
	<!--使用组件-->
    <headerBar></headerBar>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  //引入组件
  import Header from "@/components/headerBar"
  export default {
    name: 'app',
    components:{    //注册组件
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
```
3、运行效果如下：导航栏组件成功添加到页面中
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/addHeaderBar.png?raw=true)
### **2、添加路由动态组件**
	不可能每一个组件都是百分百使用的，大多数情况下不同的页面都会用到不同的组件，下面就来讲讲如何通过路由来动态加载组件
1、在src/components里面添加sideBar和Html两个vue文件，表示侧边栏和主体展示块部分，代码就不贴了，本质就是两个组件
2、修改src/router/index.js文件，根据不同的路由返回不同的组件集合
	
	其中比较重要的就是routes里面的内容
	path表示路由，如'/html'表示访问url/html时候执行的操作
	name表示名字，这个不重要
	components表示返回的所有组件，冒号前面是组件名，后面是组件内容
```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Html from '@/components/Html'	//引用主体部分组件
import Side from "@/components/SideBar"	//引用侧边栏组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components:{
        default:Hello
      },
    },
    {
      path: '/html',
      name: 'Html',
      components: {
        mainPage:Html,
        sideBar:Side
      }
    }
  ]
})
```
3、在App.vue中调用

	通过<router-view>标签就能自动加载对应组件，访问路由时不是返回了一系列带有名字的组件集合么
	那么就可以通过name属性来获取组件集合中的某一个特定组件
	如<router-view name="sideBar"></router-view>就对应了路由中的“sideBar:Side”组件
```
<template>
  <div id="app">
    <headerBar></headerBar>
    <div id="body">
      <router-view name="sideBar"></router-view>    //使用侧边栏组件
      <router-view  name="mainPage"></router-view>  //使用主体组件
    </div>
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
    margin-top: 50px;
    height:100%;
    width:100%;
  }
  #body{
    width:100%;
    height:calc(100% - 50px);
    min-height:200px;
  }
</style>
```
4、上述共包含三个组件：顶部导航栏 + 侧边栏 + 主体部分，访问localhost:8080/#/html运行结果如下：
![这里写图片描述](https://github.com/justPlay197/markdown/blob/master/CSND-VUE/addSideBarAndHtml.png?raw=true)
