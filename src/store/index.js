
import { createStore } from '@mpxjs/core'

// import * as getters from './getters'
// import state from './state'
import loginModule from './login'

const icon = require('src/static/icon.png')

const moduleA = {
  state: {
    token: wx.getStorageSync('token'),
    iconPath: icon
  }
}

// const store = createStore({
//   modules: {
//     moduleA,
//     loginModule
//   },
//   popup: {

//   }
// })

const state = {
  token: '123'
}

const getters = {
  token: state => state.token
}

const mutations = {
  setToken (state, data) {
    state.token = data
  }
}

const actions = {}

export default createStore({
  state,
  getters,
  actions,
  mutations
})
