import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import feather from 'vue-icon'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)

Vue.use(feather, 'v-icon')
Vue.use(BootstrapVue)
new Vue(App).$mount('#app')

