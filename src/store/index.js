import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let date = new Date()
let day = date.getDate()
let time
let week = date.getDay()
switch (week) {
  case 0:
    time = "星期日";
    break;
  case 1:
    time = "星期一";
    break;
  case 2:
    time = "星期二";
    break;
  case 3:
    time = "星期三";
    break;
  case 4:
    time = "星期四";
    break;
  case 5:
    time = "星期五";
    break;
  default:
    time = "星期六";
}
export default new Vuex.Store({
  state: {
    day: day,
    time: time,
    src: 'https://sn-sycdn.kuwo.cn/377fdad8bd79b38645e1762c79f9b142/60896390/resource/n1/92/58/3114495604.mp3'
  },
  mutations: {
    changeSrc(state, src) {
      return state.src = src
    }
  },
  actions: {},
  modules: {}
})