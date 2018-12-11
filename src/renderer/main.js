import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import VueLodash from 'vue-lodash'
Vue.use(VueLodash)

import Vuetify from 'vuetify'
//Vue.use(Vuetify)
Vue.use(Vuetify, {
  theme: {
    magnaranja:   '#f19741',
    maglima:      '#c6c74f',
    magazul:      '#1db5cc',
    magmorado:    '#785395',
    magcafe:      '#772705',
    magrojo:      '#e0541e',
    magverde:     '#8bceaf',
    maggris:      '#A4A4A4',
    magfondogris: '#f2f2f2'

  }
})
Vue.use(Vuetify, {
 iconfont: 'fa',
})
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
