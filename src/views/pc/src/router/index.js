import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/Login.vue')
  },
  {
    path: '/ww',
    name: 'ww',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/ww.vue')
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
