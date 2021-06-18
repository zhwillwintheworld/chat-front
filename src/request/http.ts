import axios, {AxiosResponse} from 'axios'

const http = axios.create({
    baseURL:"http://localhost:8888/",
    timeout:5000,
})

// 添加响应拦截器
axios.interceptors.response.use(function (response:AxiosResponse<Result>) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default http;