import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DataService from './Shared/DataService'

Vue.config.productionTip = false

Vue.prototype.$http = DataService

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
