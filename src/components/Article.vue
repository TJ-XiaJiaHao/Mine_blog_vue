<template>
    <div class="article">
      <div v-html="HtmlArticle" class = "html-page"></div>
    </div>
</template>

<script>
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
          $(".html-page").animate({opacity:'1',marginLeft:'0'},1000);
        }
      },
      mounted(){
        this.readMark('Vue项目实战（一）——从0到1的蜕变.md');
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
