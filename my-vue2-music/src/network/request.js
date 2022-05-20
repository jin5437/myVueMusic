// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

// export function 在里面可以导出多个，如果用export default 只能导出一个
export function request(url,params){
  // 使用回调函数的形式
  // 1.创建axios实例
  const instance = axios.create({
    baseURL:'/api',
    timeout:3000, //请求超过30秒则判定为超时
    withCredentials:true  //在CORS请求中，如果想要传递Cookie,设为true
  })
  // 2.发送axios请求
  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  },err =>{
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(config => {
    return config
  },err =>{
    console.log(err)
  })

  //允许跨域携带cookie信息
  instance.defaults.withCredentials = true

  // 发送真正的请求
  if(params){
    params = {
      params:params
    }
    return instance.get(url, params)
  }else{
    return instance.get(url)
  }
}

