import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Html from '@/components/Html'
import Side from "@/components/SideBar"
import Loading from "@/components/Loading"
import Home from "@/components/Home"
import Article from "@/components/Article"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        loading:Loading,
        mainPage:Home
      }
    },
    {
      path: '/Hello',
      name: 'Hello',
      components: {
        mainPage:Hello
      }
    },
    {
      path: '/html',
      name: 'Html',
      components: {
        sideBar:Side,
        mainPage:Html
      }
    },
    {
      path: '/course',
      name: 'Course',
      components: {
        sideBar:Side,
        mainPage:Article
      }
    }
  ]
})
