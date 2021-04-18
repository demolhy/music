import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
// import ElementUI from 'element-ui'
import {Message,Carousel,CarouselItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from './api/request'

// Vue.use(ElementUI);

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$rq = request;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
