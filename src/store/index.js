
import { createStore } from '@mpxjs/core'

// import * as getters from './getters'
// import state from './state'
import loginModule from './login'

const moduleA = {
  state: {
    token: wx.getStorageSync('token')
  }
}

const store = createStore({
  modules: {
    moduleA,
    loginModule
  }
})
export default store
