import store from '../store'
var primaryRequest = {}
primaryRequest.request = (key, params) => {
  if (primaryRequest.hasOwnProperty(key)) {
    return primaryRequest[key](params)
  } else {
    return Promise.finally(() => {
      console.log('请求无效')
    })
  }
}
primaryRequest.page = (key, params) => {
  store.commit('openLoading')
  return primaryRequest.request(key, params).finally(() => {
    store.commit('closeLoading')
  })
}
export default primaryRequest
