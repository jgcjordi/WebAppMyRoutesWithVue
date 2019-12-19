import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // el tema

Vue.use(VueMaterial) // importamos el plugin

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')