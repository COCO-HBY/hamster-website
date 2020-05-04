import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
require('es6-promise').polyfill();
require('es6-promise/auto');
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
