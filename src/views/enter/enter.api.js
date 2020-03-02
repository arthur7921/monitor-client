let SERVER = process.env.VUE_APP_SERVER
export const login = params => {
  return axios.post(`${SERVER}/user/login/`, params)
}
export const refreshToken = token => {
  return axios.post(`${SERVER}/refresh-token/`, token)
}
let SERVER = process.env.VUE_APP_SERVER
export const logup = params => {
  return axios.post(`${SERVER}/user/logup/`, params, {
    'Content-Type': 'multipart/form-data'
  })
}
