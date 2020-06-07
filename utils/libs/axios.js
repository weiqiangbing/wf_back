import Vue from 'vue'
import axios from 'axios'
// import { Toast } from 'vant';

// console.log(process.env.NODE_ENV)

const Axios = axios.create({
    baseURL: 'http://localhost:3000',
    responseType:'json',
    // baseURL: '/api',
    timeout: 6000, 
    crossDomain: true,
    withCredentials: false,
    headers:{
      "Content-Type": "application/json",
    }
})


Axios.interceptors.request.use(
    config => {
		//添加请求头
		// config.headers = {
		//   // "Device-Uuid": "6f03a8dff7d9f54a7d05f0a420fe8bbfe8f19448"
		//   // "ids":'dfdf'
	// }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

Axios.interceptors.response.use(
    response => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    error => {
      console.log('error', error);
      // 判断请求超时
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        Toast('请求超时')
      }
      if (!error.response) {
        Toast('接口异常')
        // new Vue().$loading.hide()
      }else if (error.response.status) {
        if(error.response.data.code == 5002){
          Toast('登陆超时')
          if(process.env.NODE_ENV=='development'){
            router.push('/login')
          }else{
            window.InteractorProxy.login()
          }
        }else{
          Toast(error.response.data.desc)
        }
      }
      return Promise.reject(error)
    }
  );

export default Axios
