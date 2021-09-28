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
          url: '/user/login',
          params
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
