import store from './store'
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'

//   例：/a/b  访问时：/api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    // 返回0表示成功
    if (res.status == 0) {
        return res.data;
        // 未登录
    } else if (res.status == 10) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
})

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')