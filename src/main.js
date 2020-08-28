import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import api from './components/http/api'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ElementUI);
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
