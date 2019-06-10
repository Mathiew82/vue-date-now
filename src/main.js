import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DateNow from '../plugins/vue-date-now.js'

Vue.use(DateNow)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
