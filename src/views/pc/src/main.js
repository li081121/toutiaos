/*eslint-disable*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import UI from './plugins/ui'
import '../../../assets/styles/pc.less'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '../../../assets/styles/app.css'
// import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'
import format from 'date-fns/format'
import './permission'
import relativeTime from 'dayjs/plugin/relativeTime';
UI(Vue)
Vue.use(Buefy)
// 国际化
import 'dayjs/locale/zh-cn'
const dayjs = require('dayjs');

// 相对时间插件
dayjs.extend(relativeTime)

dayjs.locale('zh-cn') // use locale globally
dayjs().locale('zh-cn').format() // use locale in a specific instance

Vue.prototype.dayjs = dayjs;//可以全局使用dayjs

Vue.filter('date', (date) => {
  return format(new Date(date), 'yyyy-MM-dd')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
