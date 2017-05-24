### **Vue实例会代理其data对象里的属性**
```
var data = { a: 1 }
var vm = new Vue({
  data: data
})

vm.a === data.a // -> true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2
// ... 反之亦然
data.a = 3
vm.a // -> 3
```
### **如何访问Vue的属性**
为了和代理的data属性区分，访问时要加上$
```
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})
```
### **Vue实例的生命周期**
实例分为很多个生命周期，也有很多可以调用的函数

```
var vm = new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
})
// -> "a is: 1"
```