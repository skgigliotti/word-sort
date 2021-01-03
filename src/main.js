import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { store } from './store/store'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

Vue.config.productionTip = false

new Vue({
  vuetify,
  el: '#app',
  store: store,
  render: h => h(App)
})
