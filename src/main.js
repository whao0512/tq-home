import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n'
import '@/assets/common.scss'
import $ from 'jquery'

require('./mock');
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue;


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')