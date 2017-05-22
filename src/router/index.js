import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Html from '@/components/Html'
import Side from "@/components/SideBar"
import Loading from "@/components/Loading"
import Home from "@/components/Home"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        loading:Loading,
        mainPage:Home
      }
    },
    {
      path: '/html',
      name: 'Html',
      components: {
        sideBar:Side,
        mainPage:Html
      }
    }
  ]
})
