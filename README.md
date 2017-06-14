# csdn-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
 
### 项目概述
- 项目名称：XJH的个人网站
- 主体框架：VUEJS  
- 用到的第三方库:
``` bash
JQuery          ：JS框架
showdown.js     ：用来把markdown语法转成html语法，用于文章模块
nice-scroll.js  ：用来设置滚动条样式，用于整个网站
toastr.js       ：用来做消息提示，用于个人网页
bootstrap       ：主要用了他的网格系统
pie-chart.js    ：用来绘制圆环，用于个人网站
```

### VueJS概述
    Vue定义：单页面组件化开发的前端框架，避免渲染重复组件，页面性能更高
    Vue模式：MVVM模式，Model + View + ViewModel，数据自动同步更新
    Vue特征：
        1.轻量级的框架
 	    2.双向数据绑定
        3.指令
        4.插件化
        
### 欢迎动画展示
    主要通过JQuery实现简单的动画效果
    
![Alt text](https://github.com/justPlay197/CSDN-VUE-MYWEB/blob/master/%E5%9B%BE%E7%89%87/%E6%AC%A2%E8%BF%8E%E5%8A%A8%E7%94%BB.png?raw=true) 

### 个人主页展示
    1、通过JQuery实现简单的页面过度过度效果
    2、通过CSS的keyframes实现旋转动画
    3、通过piechart实现圆环的绘制动画
    4、通过监听滚动条事件来实现页面整体切换
    
![Alt text](https://github.com/justPlay197/CSDN-VUE-MYWEB/blob/master/%E5%9B%BE%E7%89%87/%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B501.png?raw=true)


![Alt text](https://github.com/justPlay197/CSDN-VUE-MYWEB/blob/master/%E5%9B%BE%E7%89%87/%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B502.png?raw=true)


![Alt text](https://github.com/justPlay197/CSDN-VUE-MYWEB/blob/master/%E5%9B%BE%E7%89%87/%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B503.png?raw=true)


![Alt text](https://github.com/justPlay197/CSDN-VUE-MYWEB/blob/master/%E5%9B%BE%E7%89%87/%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B504.png?raw=true)
 
### 个人作品展示

    1、通过JQuery实现过度效果
    2、通过Vue数据绑定实现动态切换作品
    3、通过nicescroll美化滚动条样式
    
![Alt text](https://github.com/justPlay197/CSDN-VUE-MYWEB/blob/master/%E5%9B%BE%E7%89%87/%E7%BD%91%E7%AB%99%E4%BD%9C%E5%93%81.png?raw=true)
 
### 个人博客展示
  1、通过showmark实现markdown语法的转换
  
![Alt text](https://github.com/justPlay197/CSDN-VUE-MYWEB/blob/master/%E5%9B%BE%E7%89%87/%E6%96%87%E7%AB%A0%E5%8D%9A%E5%AE%A2.png?raw=true)
