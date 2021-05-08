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
    srcId: 453927759,
    plaingsong:{}
  },
  mutations: {
    changeSrc(state, src) {
      return state.src = src
    },
    setSong(state,uploade){
      console.log('state更新:',state,uploade);
      state.srcId = uploade
    }
  },
  actions: {},
  modules: {}
})