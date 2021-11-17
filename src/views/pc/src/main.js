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
UI(Vue)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
