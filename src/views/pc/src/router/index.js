/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/auth/Login.vue')
  },
  {
    path: '/mains',
    name: 'toubaomain',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/auth/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/error/404'),
    meta: {
      title: '404-Notfound'
    }
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => { // 拦截器
//   if (!sessionStorage.getItem('sessionId')) { // 无sessionId则跳登录页
//     // 跳转到登录页
//     router.replace('/login')
//     // window.location.href = 'http://localhost:8080/pc.html#/login'
//   } else {
//     next()
//   }
// })

export default router
