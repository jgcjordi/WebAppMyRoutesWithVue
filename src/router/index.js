import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Routes from '../views/Routes'
import RouteDetails from '../views/RouteDetails'
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
            path: '/routeDetails/:id',
            component: RouteDetails
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})