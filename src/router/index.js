import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Html from '@/components/Html'
import Side from "@/components/SideBar"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components:{
        default:Hello,
        mainPage:Html,
        sideBar:Side
      },
    },
    {
      path: '/html',
      name: 'Html',
      components: {
        mainPage:Html,
        sideBar:Side
      }
    }
  ]
})
