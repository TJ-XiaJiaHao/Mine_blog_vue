#### **class动态绑定之对象语法**
### 传给v-bind:class一个对象，以动态切换class  
下面的例子只有当isActive或者hasError为true的时候才会把active和text-danger类赋给这个div
```
<div v-bind:class='{active:isActive,'text-danger':hasError}'></div>

data:{
    isActive:true,
    hasError:false
}
```
### 当然也可以直接绑定一个对象
```
<div v-bind:class='classObject'></div>

data:{
    classObject:{
        active:true,
        'text-danger':false
    }
}
```
### 当然也可以使用计算属性
```
<div v-bind:class='classObject'></div>

data:{
    isActive:true,
    hasError:false
},
computed:{
    classObject:function(){
        return {
            active:this.isActive && !this.hasError,
            'text-danger':this.hasError
        }
    }
}

```
#### **class动态绑定之数组语法**
下列语法的类渲染是errorClass和active（如果isActive为true）
```
<div v-bind:class="[ isActive ? active : '',errorClass"></div>
<div v-bind:class="[{ active:isActive },errorClass"></div>
```
#### **用在组件上**
当给组件赋上class时，不会覆盖组件构造内的class，会共存
```
Vue.component('my-component',{
    template:'<p class="foo bar">Hi</p>'    
})

<my-component class='baz boo'></my-component>
```
#### **绑定内联样式之对象语法**
跟普通的内联样式差不多
```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data: {
  activeColor: 'red',
  fontSize: 30
}
```
当然也可以直接绑定一个对象
```
<div v-bind:style="styleObject"></div>

data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```
### 数组语法和class的数组语法差不多，就不多说了好吧！
### **特别的，绑定背景图片**
```
<div v-bind:style="{backgroundImage:'url(' + url + ')'}"></div>
<img v-bind:src="url"/>

data(){
    return{
        url:require('../assets/images/all.png')
    }
}

```