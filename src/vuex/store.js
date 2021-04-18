import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const date = new Date()
const day = date.getDate()
console.log(day);
const state = {
    conut : day
}

export default new Vuex.Store({
    state
})