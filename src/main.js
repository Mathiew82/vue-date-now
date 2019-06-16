import Vue from 'vue'
import App from './App.vue'
import DateNow from './'

Vue.use(DateNow)

Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
