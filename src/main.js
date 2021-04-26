import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// import ElementUI from 'element-ui'
import {
  Message,
  Carousel,
  CarouselItem,
  Loading
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// Vue.use(ElementUI);

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')