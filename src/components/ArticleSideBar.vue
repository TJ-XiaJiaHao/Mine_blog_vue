<template>
    <div id="side">
      <div class="sidebar">
        <div class="list">
          <ul class="second-list" v-for="(item,index) in list">
            <li class="title">{{ item.title }}</li>
            <li class="items" v-for="(item,index) in item.items" v-on:click="itemClick(item,$event)">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import bus from "../assets/eventBus"
    export default {
        name: 'ArticlaSideBar',
        data () {
            return {
              list:[{
                title:'Vue基础',
                items:['Vue的花式绑定','Vue的组件概念','创建Vue实例','模板语法','计算属性','Class与style绑定','条件渲染','列表渲染','事件处理器']
              },{
                title:'Vue实战',
                items:['Vue项目实战（一）','Vue项目实战（二）','Vue项目实战（三）']
              }]
            }
        },
      methods:{
        itemClick:function(fileName,event){
          bus.$emit("openFile",fileName);
        }
      },
      mounted(){
        //动态切入
        setTimeout(function(){
          $(".sidebar").animate({left:'0px',opacity:'1'},600);
        },300);
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*侧边栏*/
  #side{
    width:180px;
    height:100%;
    min-height:400px;
    float:left;
  }
  .sidebar {
    background: #F5F5F5;
    position: fixed;
    width: 180px;
    height: 100%;
    left: -50px;
    opacity:0;
    top: 50px;
  }

  /*目录*/
  .list{
    width:100%;
    height:100%;
    margin-top:30px;
  }
  .list li{
    height:40px;
    line-height:40px;
    width:100%;
    list-style:none;
    cursor: pointer;
  }
  .title{
    font-weight:700;
    font-size:1.6em;
    margin:10px 0 10px 20px;
  }
  .items{
    padding-left: 30px;
  }
  .items:hover{
    color: white;
    background: rgb(45, 137, 259);
    border-right:4px solid rgba(0,0,0,0.4);
  }

</style>
