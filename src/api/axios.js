import axios from 'axios';
import { getItem } from '../utils/util'
import { baseApi } from '../utils/const'
/**
 * @params 运行环境——development开发环境、product生产/正式环境
 */
const env = process.env.NODE_ENV;
// console.log(env)
const instance = axios.create({
    //利用target替换关键字，解决跨域问题(webpack-server特性)
    // baseURL: baseApi.Prod,
    // baseURL: `${env==="development" ? "/api" : baseApi.Prod}`,
    // baseURL:'',
    // headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 10000 // 设置超时的时间，超过设置时间自动断开连接
});
// 设置请求拦截器：给所有的 axios 请求设置统一的请求头（添加 token）
instance.interceptors.request.use(
    config => {
        // 如果请求拦截成功
        // 1. 获取本地存储中的 token
        // const token = localStorage.token;
        // 2. 将 token 添加到请求头中
        // config.headers.Authorization = 'Bearer ' + token;
        return config;
    },
    err => {
        // 如果请求拦截失败
        return err;
    }
);
//设置响应拦截器
instance.interceptors.response.use(
    // 响应成功
    res => {
        // 0="成功。
        // -1="报文格式错误。
        // -2="系统异常或网络异常。
        // -3="存储过程逻辑判断
        return res.data; // { data: {}}
        
        
    },
    // 响应失败
    err => {
        // try {
        //     if (err.response.status === 401) {
        //         return {
        //             msg: '身份认证失败',
        //             success: false
        //         }
        //     }
        // } catch (error) {
        //     return {
        //         msg: '身份认证失败',
        //         success: false
        //     }
        // }
        return err;
    }
);
export function Axios(url, data = {}, option = {}) {
    // 获取默认信息
    let { method = "POST" } = option;
    // 返回promise设置
    // return new Promise((resolve, reject) => {
    // const museumNo = getItem('museumNo')
    // if (museumNo && !data.museumsInfoNo) {
    //     data.museumsInfoNo = museumNo
    // }
    return instance({
        url:"/api/" + url,
        data,
        method
    })
}