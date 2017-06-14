<template>
    <div class="article">
      <div v-html="HtmlArticle" class = "html-page"></div>
    </div>
</template>

<script>
  import bus from "../assets/eventBus"
    export default {
        name: 'hello',
        data () {
            return {
              MarkdowmArticle:"### 你好",
              HtmlArticle:"不好",
            }
        },
      methods:{
        //读取markdown文件
        readMark:function(fileName){
          var self = this;
          $.get('/static/files/' + fileName).success(function(content) {
            self.MarkdowmArticle = content;
          });
        },

      },
      watch:{
        MarkdowmArticle:function(newMarkdowmArticle){
          var converter = new showdown.Converter();
          this.HtmlArticle = converter.makeHtml(this.MarkdowmArticle);
        },
        HtmlArticle:function(newHtmlArticle){
          $(".html-page").css("opacity","0").css("marginLeft","40px");
          $(".article").scrollTop(0);
          $(".html-page").animate({opacity:'1',marginLeft:'0'},1000);
        }
      },
      mounted(){
        var self = this;
        this.readMark('Vue项目实战（一）.md');    //打开第一篇文章

        //修改导航栏样式，变为占领一部分高度
        bus.$emit("nav","toheight");

        //监听文件切换事件
        bus.$on("openFile",function(msg){
          self.readMark(msg + '.md');
        });

        //修改滚动条样式
        $(".article").niceScroll({styler:"fb",cursorcolor:"#CCCCCC", cursorwidth: '6', cursorborderradius: '10px', background: 'rgb(245,245,245)', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .article{
    width:calc(100% - 180px);
    height:100%;
    float:left;
    text-align: left;
    padding: 40px 100px 50px 100px;
    overflow-x: hidden;
  }
  .article img{
    width:100% !important;
  }
</style>
