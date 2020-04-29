import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import about from '@/components/about'
// import home from '@/components/home'
const about = () => import('@/components/about')
const home = () => import('@/components/home')
const isNew = () => import('@/components/isNew')
const isMessage = () => import('@/components/isMessage')
const shopList = () => import('@/components/shopList')

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about/:aboutId',
      component: about,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      },
      beforeEach: (to, form, next) => {}, // 路由独享守卫
      children: [
        // {
        //   path: '/',
        //   component: isMessage
        // },
        {
          path: 'isMessage',
          component: isMessage
        },
        {
          path: 'isNew',
          component: isNew
        }
      ]
    },
    {
      path: '/shopList',
      component: shopList,
      meta: {
        title: '商品'
      },
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, form, next) => {
  window.document.title = to.matched[0].meta.title
  next()
})
router.afterEach((to, form) => {
  console.log(to) 
})

export default router



