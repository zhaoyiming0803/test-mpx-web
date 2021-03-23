// import apiProxy from '@mpxjs/api-proxy'
// import mpx from '@mpxjs/core'

// mpx.use(apiProxy)

export const getStorageSync = () => {
  return wx.getStorageSync('abab')
}

let person = {
  name: 'zhaoyiming',
  age: 18
}

export const getPersonInfo = () => {
  console.log('person.name: ', person.name)
}
