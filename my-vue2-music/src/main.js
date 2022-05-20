import Vue from 'vue'
import App from './App.vue'

// 引入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './registerServiceWorker'
import router from './router'
// 引入vuex，简写形式
import store from './store'

import {request} from './network/request'
Vue.prototype.$request = request

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  // es6简写形式：如果属性名和属性值相等，直接写，如store
  router,
  store,
  render: h => h(App)
}).$mount('#app')
