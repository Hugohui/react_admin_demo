import axios from 'axios'

// 实例化axios
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/'
})

// 请求拦截器
axios.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error);
    Promise.reject(error)
})


// 响应拦截器
axios.interceptors.response.use(res => {
    return res
}, error => {
    console.log(error);
    Promise.reject(error)
})


export default instance