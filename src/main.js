import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vant 组件
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
// elementUI 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
