
"use strict"
import axios from "axios";
const baseUrl = 'http://localhost:3000'

//类>>>特殊的函数>>>类声明不会
class HttpRequest {
    // 一个类只能拥有一个名为 “constructor”的特殊方法
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    // 私有属性以及方法>>>不能实例化(实力化访问不了)
    static name = ' HttpRequestClass'
    static oldname(name) {
        console.log(name);
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            timeout: 3000,
            withCredentials: true,
            header: {}
        }
        return config
    }
    interceptors(instance) {
        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            console.log('响应数据');
            /**
              1、集中处理响应数据（如错误码处理）
            */
            if (response.status === 200 && response.data.code === 200) {
                return response.data;
            }

        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    request(options) {
        options = { ...(this.getInsideConfig()), ...options }
        const instance = axios.create({

        })
        this.interceptors(instance)
        return instance(options)
    }
}


export default new HttpRequest(baseUrl)
