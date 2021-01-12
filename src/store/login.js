wx.setStorageSync('userInfo', 'world hello')
const state = {
    token:'123',
    // userInfo: '',
    // token:wx.getStorageSync('token')? wx.getStorageSync('token'): '',
    userInfo: wx.getStorageSync('userInfo') ? wx.getStorageSync('userInfo') : ''

}

const getters = {
    token: state => state.token,
    _userInfo: state => state.userInfo
}

const mutations = {

    setToken (state, data) {
        wx.setStorageSync('token', data)
        state.token = data
    },
    setUserInfo (state, data) {
        wx.setStorageSync('userInfo', data)
        state.userInfo = data
    }
}

const actions = {}

export default {
    state,
    getters,
    actions,
    mutations
}
