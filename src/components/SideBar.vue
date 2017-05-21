<template>
  <div id="side">
    <div class="sidebar">
      <ul class="items">
        <li v-for="(item,index) in items" v-on:mouseover="itemMouseOver(index,$event)" v-on:mouseleave="itemMouseLeave(index,$event)" v-on:click="itemClick(index,$event)">
          <div class="icon" v-bind:style="{backgroundImage: item.isOver ? 'url(' + item.urlActive + ')' : 'url(' + item.urlOrign + ')'}"></div>
          {{ item.name }}
        </li>
      </ul>
      <div class="toggle" v-on:click="toggle($event)"></div>
    </div>
  </div>
</template>

<script>
  import bus from "../assets/eventBus"
  export default {
    name: 'sideBar',
    data (){
      return {
        istoggle:true,
        items: [
          {
            name: '全部',
            urlOrign: require('../assets/images/sideBar/all.png'),
            urlActive: require('../assets/images/sideBar/all-white.png'),
            isOver: false
          },
          {
            name: '完整前端项目',
            urlOrign: require('../assets/images/sideBar/project.png'),
            urlActive: require('../assets/images/sideBar/project-white.png'),
            isOver: false
          },
          {
            name: '导航栏专区',
              urlOrign: require('../assets/images/sideBar/nav.png'),
            urlActive: require('../assets/images/sideBar/nav-white.png'),
            isOver: false
          },
          {
            name: '轮播图专区',
            urlOrign: require('../assets/images/sideBar/banner.png'),
            urlActive: require('../assets/images/sideBar/banner-white.png'),
            isOver: false
          },
          {
            name: '动态特效专区',
            urlOrign: require('../assets/images/sideBar/dynamic.png'),
            urlActive: require('../assets/images/sideBar/dynamic-white.png'),
            isOver: false
          },
          {
            name: '课程作业专区',
            urlOrign: require('../assets/images/sideBar/course.png'),
            urlActive: require('../assets/images/sideBar/course-white.png'),
            isOver: false
          },
          {
            name: 'DIV + CSS布局',
            urlOrign: require('../assets/images/sideBar/div.png'),
            urlActive: require('../assets/images/sideBar/div-white.png'),
            isOver: false
          }
        ]
      }
    },
    methods: {
      itemMouseOver: function (index, event) {
        this.items[index].isOver = true;
      },
      itemMouseLeave: function (index, event) {
        this.items[index].isOver = false;
      },
      itemClick:function(index,event){
        bus.$emit("test",index);
      },
      toggle:function(event){
        if(this.istoggle){
          $("#side").animate({width:'40px'},500);
          $(".sidebar").animate({width:'40px'},500);
          this.istoggle = false;
        }
        else {
          $("#side").animate({width:'180px'},500);
          $(".sidebar").animate({width:'180px'},500);
          this.istoggle = true;
        }
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
    float:left;
  }
  .sidebar {
    background: #EBEBEB;
    position: fixed;
    width: 180px;
    height: 100%;
    left: -50px;
    opacity:0;
    top: 50px;
  }

  /*无序列表*/
  .items {
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }

  .items li {
    cursor: pointer;
    padding-left: 10px;
    text-align: left;
    font-size: 16px;
    height: 30px;
    width: 100%;
    line-height: 30px;
    list-style: none;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .items li:hover {
    color: white;
    background: rgb(45, 137, 259);
  }

  /*小图标*/
  .icon {
    width: 18px;
    height: 18px;
    margin: 5px 5px 0 0;
    -webkit-background-size: 18px 18px;
    background-size: 18px 18px;
    background-repeat:no-repeat;
    float: left;
  }

  /*折叠条*/
  .toggle{
    position: absolute;
    height:100%;
    width:6px;
    background: rgba(0,0,0,0);
    right:0;
    top:0;
    z-index:1000;
    cursor:pointer;
    color:white;
    text-align: center;
  }
  .toggle:hover{
    background: rgba(0,0,0,0.1);
  }
</style>
