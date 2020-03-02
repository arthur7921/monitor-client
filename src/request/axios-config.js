import axios from 'axios'
import store from '../store'

global.axios = axios
axios.defaults.headers.common['Authorization'] = 'JWT ' + store.getters.getToken
axios.interceptors.response.use((response) => {
    if (response.data['refreshToken']) {
      store.dispatch('refreshToken')
    }
    return response
  }
)
