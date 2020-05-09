import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from "./store"
import './assets/css/global.css'
import Pop from './components/pop/pop.js'

require('es6-promise').polyfill();
require('es6-promise/auto');
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$popup = Pop.install;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
