import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import Alipay from './pages/alipay.vue'
import Login from './pages/login.vue'

Vue.use(Router)

// Home根目录
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            // 重定向 默认跳转index
            redirect: '/index',
            // home下的子路由
            children: [{
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        // 购物车的头部不一样所以单独的一个组件
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        // 根组件
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: Alipay,
                }
            ]
        },
    ]
})