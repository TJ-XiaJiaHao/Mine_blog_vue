### **组件概念**  
组件定义：  
    组件是Vue中重要的概念，因为它是一种抽象，允许我们使用小型、自包含和通常可复用的组件构建大型应用。  
组件注册：
```
// 定义名为 todo-item 的新组件
//template为实际内容
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
```
组件使用：
```
<ol>
  <!-- 创建一个 todo-item 组件的实例 -->
  <todo-item></todo-item>
</ol>
```
组件进阶：自定义属性
```
Vue.component('todo-item', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义属性
    // 这个属性名为 todo。
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
```
结合数据绑定调用组件：
```
<div id="app-7">
    <ol>
    <!-- 现在我们为每个todo-item提供待办项对象    -->
    <!-- 待办项对象是变量，即其内容可以是动态的 -->
    <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
    </ol>
</div>
```
完整代码：
```
<!DOCTYPE>
<html>
<head>
<meta charset="UTF-8" />
<script src="vue.js"></script>
</head>
<body>
    <div id="app-5">
    	<ol>
            <todo-item v-for="item in list" v-bind:todo="item"></todo-item>
    	</ol>
    </div>
</body>
<script type="text/javascript">
    Vue.component('todo-item',{
        props:['todo'],
        template:'<li>{{ todo.text }}</li>'
    })
    var app5 = new Vue({
    	el:"#app-5",
    	data:{
            list:[
            	{text:'item1'},
            	{text:'item2'},
            	{text:'item3'}
            ]
    	}
    })
</script>
</html>
```