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
    }
  },
  modules: {
  }
})
export default store
