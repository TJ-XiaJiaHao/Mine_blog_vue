### **vue.js定义**
    1、vue.js是一套构建用户界面的渐进式框架。
    2、与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。
    3、Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。
    4、当与单文件组件和Vue生态系统支持的库结合使用时，Vue也完全能够为复杂的单页应用程序提供驱动。
### **渲染方式：声明式渲染**
html代码：注意message两边各有一个空格
响应式的：message和js数据绑定，如果在控制台修改js内容，前端不用刷新就改了
```
<div id="app">
  {{ message }}
</div>
```
js代码：el指定某一绑定元素，data定义可以访问的内容
```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
当然使用该语法前要调用vue库,安装方式如下
```
1、使用在线版：<script src="https://unpkg.com/vue/dist/vue.js"></script>
2、手动到官网下载js库：开发版包含错误警告等，而min版本则没有
3、NPM安装：像在node.js里就可以用npm安装
```
### **DOM属性的绑定**
Vue通过v-bind来绑定DOM属性，如<a v-bind:href="url"></a>
```
//鼠标悬停浮窗效果
<!DOCTYPE>
<html>
<head>
<meta charset="UTF-8" />
<script src="vue.js"></script>
</head>
<body>
    <div id="app-2">
    	<span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息</span>
    </div>
</body>
<script type="text/javascript">
    var app2 = new Vue({
    	el:"#app-2",
    	data:{
            message:"页面加载于" + new Date()
    	}
    })
</script>
</html>
```
### **控制元素是否可见**
Vue通过v-if来控制元素的可见性，true为可见，false为不可见
```
<!DOCTYPE>
<html>
<head>
<meta charset="UTF-8" />
<script src="vue.js"></script>
</head>
<body>
    <div id="app-3">
    	<span v-if="seen">现在你能看到我</span>
    </div>
</body>
<script type="text/javascript">
    var app3 = new Vue({
    	el:"#app-3",
    	data:{
            seen:true
    	}
    })
</script>
</html>
```
### **for循环**
Vue通过v-for来提供循环
```
<!DOCTYPE>
<html>
<head>
<meta charset="UTF-8" />
<script src="vue.js"></script>
</head>
<body>
    <div id="app-4">
    	<span v-for="todo in todos">
            {{ todo.text }}
    	</span>
    </div>
</body>
<script type="text/javascript">
    var app4 = new Vue({
    	el:"#app-4",
    	data:{
            todos:[
            	{text:"text1"},
            	{text:"text2"},
            	{text:"text3"}
            ]
    	}
    })
</script>
</html>
```
### **处理用户输入**
Vue通过v-on来绑定用户事件,methods里面放方法
```
<!DOCTYPE>
<html>
<head>
<meta charset="UTF-8" />
<script src="vue.js"></script>
</head>
<body>
    <div id="app-5">
    	<p>{{ message }}</p>
    	<button v-on:click="reverseMessage">逆转消息</button>
    </div>
</body>
<script type="text/javascript">
    var app5 = new Vue({
    	el:"#app-5",
    	data:{
            message:"Hello"
    	},
    	methods:{
            reverseMessage:function(){
            	this.message = this.message.split('').reverse().join('')
            }
    	}
    })
</script>
</html>
```
### **反向绑定**
Vue通过v-model将前端信息绑定到后端
```
<!DOCTYPE>
<html>
<head>
<meta charset="UTF-8" />
<script src="vue.js"></script>
</head>
<body>
    <div id="app-6">
    	<p>{{ message }}</p>
    	<input v-model="message"/>
    </div>
</body>
<script type="text/javascript">
    var app6 = new Vue({
    	el:"#app-6",
    	data:{
            message:"Hello"
    	}
    })
</script>
</html>
```
