import Vue from 'vue'
import App from './App'
import axios from './utils/libs/axios.js'

import wechat from './utils/wechat/welib.js'

Vue.prototype.$vx = wechat
Vue.prototype.$axios = axios

// console.log(wechat.isWechat())

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
