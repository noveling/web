import axios from "axios"

export function request(config){
// 创建axios实例
    const instance = axios.create({
        baseURL:"http://123.207.32.32:8000",
        timeout:1000,
        retry:3,
        retryDelay:1000
    })

    // axios拦截器
    instance.interceptors.request.use(config=>{
        // 对config中一些内容进行筛选
        return config
    },err =>{
        console.log(err)
    })

    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        let config = err.config
        // 判断是否有设置重新请求
        instance.defaults.retry?console.log("重新请求"):Promise.reject(err)
        // 设置变量去追踪请求次数
        config.__retryCount = config.__retryCount || 0;
        console.log(config.__retryCount)
        if(config.__retryCount >= instance.defaults.retry){
            return Promise.reject(err);
        }
        config.__retryCount += 1;

        var backoff = new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, config.retryDelay || instance.defaults.retryDelay || 1);
        });
        
        // Return the promise in which recalls axios to retry the request
        return backoff.then(function() {
            return instance(config);
        });
    })

    return instance(config)
}