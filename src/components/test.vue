<template>
    <div>
      <!--第三步：使用组件-->
      <SideBar></SideBar>
      <Article></Article>
    </div>
</template>

<script>
  /*第一步：导入组件文件*/
  import SideBar from "@/components/SideBar"
  import Home from "@/components/Home"
  import Article from "@/components/Article"
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
      /*第二步：注册组件*/
      components:{
        SideBar:SideBar,
        Home:Home,
        Article:Article
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
