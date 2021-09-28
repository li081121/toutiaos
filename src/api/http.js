/*eslint-disable*/
import axios from 'axios';
const options = {
  baseURL: "http://localhost:9000",
  timeout: 30000,
  headers: {}
}
const instance = axios.create(options);

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params || (config.params = {})
  // 请求头里添加sessionId
  if(sessionStorage.sessionId){
    config.headers || (config.headers = {})
    config.headers.sessionid = sessionStorage.sessionId
  }
  // if(!config.params.timestamp){ // 请求参数里没有时间戳的需要遮罩层
  //   loadingInstance.show()
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return error;
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // if(!response.config.params.timestamp){ // 说明没有时间戳
  //   loadingInstance.hide()
  // }
  // 对响应数据做点什么
  if(response.status === 200) {
    if(response.data.errorCode === 0 || response.data.result === 'success' || response.data.status === 'success'){ // 接口正常
      
    } else {
      
    }
    return response.data;
  }
  return response;
}, function (error) {
  if(!error.config.params.timestamp){ // 说明没有时间戳
    // loadingInstance.hide()
  }
  // 对响应错误做点什么
  return error
});

export default instance