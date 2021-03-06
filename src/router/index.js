import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Routes from '../views/Routes'
import Maps from '../views/Maps'

Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/routes',
            component: Routes
        },
        {
            path: '/map',
            component: Maps
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})