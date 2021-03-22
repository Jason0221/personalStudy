import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 设置初始state
const state = {
  count: 3
}

const mutations = {
  add (state, val) {
    state.count += val
  },
  minus () {
    state.count--
  }
}

const getters = {
  count: () => {
    return (state.count += 100)
  }
}

const actions = {
  addAction (context) {
    context.commit('add', 5)
    setTimeout(() => {
      context.commit('minus', 3)
    }, 3000)
  },
  minusAction ({commit}) {
    commit('minus')
  }
}
export default new Vuex.Store({
  state, mutations, getters, actions
})
