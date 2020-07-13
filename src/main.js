// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 基本请求
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata', // 如需跨域则http://123.207.32.32:8000/home/multidata?callback=123
//   method: 'get'
// }).then(data => {
//   console.log(data)
// })
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(data => {
//   console.log(data)
// })

axios.defaults.baseURL = 'http://123.207.32.32:8000'  // 默认设置根路径
axios.defaults.timeout = 6000  // 默认设置超时时间

// 并发请求
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params:{
//       type: 'pop',
//       page: 1
//     }
//   })
// ]).then(axios.spread((data1,data2) => {
//   console.log(data1) 
//   console.log(data2) 
// }))

// 创建axios实例
// const ios_a = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 3000
// })

// ios_a({
//   url: '/home/multidata'
// }).then(data => {
//   console.log(data)
// })
import {request} from './network/request'

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res) 
// }, err => {
//   console.log(err)  
// })
request('/home/multidata').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})