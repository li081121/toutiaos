/*eslint-disable*/
import axios from 'axios';
import {Message,MessageBox} from 'element-ui'
const options = {
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 30000,
  headers: {}
}
const instance = axios.create(options);

instance.defaults.withCredentials = false

// 添加请求拦截器
instance.interceptors.response.use(function (config) {
  // if (!sessionStorage.getItem(tokens)) {
  //   this.$message({
  //     message: '会话失效，将跳转至登录页',
  //     type: 'info',
  //     duration: 2000
  //   })
  //   setTimeout(() => {
  //     this.loading = false
  //     this.$router.push({ name: 'login' })
  //   }, 0.1 * 1000)
  // }
  if (config.data.code !== 200) {
    if (config.data.code === 401 || config.data.code === 50012 || config.data.code === 50014) {
      //重新登录
      MessageBox.confirm('会话失效，您可以留在当前页面，或重新登录','权限不足',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        window.location.href = '#/login'
      })
    } else {
      Message({
        showClose: true,
        message: '⚠' + config.data.message || 'Error',
        type: 'error',
        duration:3 * 1000
      })
    }
    return Promise.reject(new Error(config.data.message || 'Error'))
  }
  return config.data;
}, function (error) {
  // 对请求错误做些什么
  return error;
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // if(!error.config.params.timestamp){ // 说明没有时间戳
  //   // loadingInstance.hide()
  // }
  // 对响应错误做点什么
  return error
});

export default instance