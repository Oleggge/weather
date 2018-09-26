import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import List from './components/List.vue'





const router = new VueRouter({
  mode: 'history',
  routes: [
    {name: 'home' , path: '/' , component: Home },
    {name: 'blog', path: '/blog', component: Blog },
    {name: 'list' , path: '/list', component: List }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

