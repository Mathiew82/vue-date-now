import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import logger from '../plugins/vue-logger.js'

Vue.use(logger)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
