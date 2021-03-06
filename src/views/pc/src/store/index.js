/*eslint-disable*/
import vue from 'vue'
import Vuex from 'vuex'
import http from '../../../../api/http'
vue.use(Vuex)
const store = new Vuex.Store({
  state: {
  },
  mutations: {
    
  },
  actions: {
    LoginInfo ({}, params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/user/getImage',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    LoginList ({}, params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: '/user/login',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    TelPut ({}, params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: '/user/sms',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    GetShow ({}, params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/billoard/show',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    GetType ({}, params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/tip/types',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    GetPromotion ({}, params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/promotion/prolist',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    Register ({},data) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: '/regiter/forms',
          data
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    Logins ({},data) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: '/regiter/login',
          data
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    GetList ({},params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/post/list',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    GoDetail ({},params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/post/ids',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    Follow ({},params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/relationship/subscribe',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    UnFollow ({},params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/relationship/unsubscribe',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    IsFollow ({},params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/relationship/validate',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    getRecommend ({},params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/post/recommend',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    getCommentList ({},params) {
      return new Promise((resolve, reject) => {
        http({
          method: 'get',
          url: '/comment/list',
          params
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    CreateCommentList ({},data) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: '/comment/create',
          data
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    UpdatePost ({},data) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: '/post/update',
          data
        }).then(rs => {
          resolve(rs)
        })
      })
    },
    CreateList ({},data) {
      return new Promise((resolve, reject) => {
        http({
          method: 'post',
          url: '/post/create',
          data
        }).then(rs => {
          resolve(rs)
        })
      })
    }
  },
  modules: {
  }
})
export default store
