import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:3001/",
  // baseURL: process.env.NODE_ENV == "development" ? "/api" : "", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 500000 // request timeout
})
// let pass = false //通行证

// request interceptor
// service.interceptors.request.use(
//   config => {
//     // do something before request is sent
//     pass = !!config.pass
//     if (store.getters.token) {
//       // let each request carry token
//       // ['X-Token'] is a custom headers key
//       // please modify it according to the actual situation
//       config.headers['Authorization'] = 'Bearer ' + getToken()
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )
// if (!pass) {
//   // response interceptor
// }
// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//    */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   response => {
//     const res = response.data
//     if (!pass) { //没有通行证
//       // if the custom code is not 20000, it is judged as an error.
//       if (res.code !== 1) {
//         // if (res.code == -991 || res.code == 502) {
//         //   store.dispatch('user/resetToken').then(() => {
//         //      location.reload()
//         //   })
//         //   return Promise.reject(res)
//         // }
//         // else if(res.code === -14){  //无权限查看
//         //   Message.error(res.msg)
//         //   // setTimeout(()=>{
//         //     router.go(-1)
//         //   // },500)
//         //   return Promise.reject(res)
//         // }
//         // else {
//         //   Message.error(res.msg)
//         //   return Promise.reject(res)
//         // }
//       }
//       else {
//         return res
//       }
//     } else {
//       return res
//     }

//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service
