import axios from 'axios'
// export function request (config) {
//   const request_a = axios.create({
//     baseUrl: 'http://123.207.32.32:8000',
//     timeout: 4000
//   })
//   return request_a(config)
// }

export function request (config) {
  const request_a = axios.create({
    baseUrl: 'http://123.207.32.32:8000',
    timeout: 4000
  })
  // 拦截器
  // axios.interceptors // 全局拦截
  // 请求拦截
  request_a.interceptors.request.use(config => { // 成功拦截
    console.log(config)  
    return config // 返回数据继续
  }, err => { // 失败拦截
    console.log(err)
  })
  // 响应拦截
  request_a.interceptors.response.use(res => { // 成功拦截
    console.log(res)
    return res.data // 返回数据继续
  }, err => { // 失败拦截
    console.log(err)    
  })
  return request_a(config)
}

// export function request (config, success, failure) {
//     const request_a = axios.create({
//       baseUrl: 'http://123.207.32.32:8000',
//       timeout: 4000
//     })
//     request_a(config)
//       .then(res => {
//         success(res)
//       }).catch(err => {
//         failure(err)
//       })
//   }