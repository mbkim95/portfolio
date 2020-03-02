import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
