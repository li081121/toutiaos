/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
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
    path: '/post/create',
    name: 'create',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/post/Create.vue')
  },
  {
    path: '/post/update',
    name: 'topicedit',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/post/Edit.vue')
  },
  {
    path: '/post/detail',
    name: 'postdetail',
    component: () => import(/* webpackChunkName: 'invoiceManagement' */ '../views/post/Detail.vue')
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('tokens');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
})

export default router
