import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'
// import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
//安装toast插件 
Vue.use(toast)

// Vue.use(VueLazyLoad)    

Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
