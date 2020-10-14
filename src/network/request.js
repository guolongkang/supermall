import axios from 'axios'

export function request(config) {
  // 创建 AXIOS实例
  const instance = axios.create({
    baseURL: 'http://223.111.195.86:443',
    timeout: 5000
  })
  
  // 创建连接器
  // 请求拦截
  instance.interceptors.request.use(config => config,err => err)

  // 响应拦截
  instance.interceptors.response.use(res => res.data, err => err)

  // 发送网络请求
  return instance(config)

}