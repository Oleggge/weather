import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)


import Blog from './components/Blog.vue'





const router = new VueRouter({
  mode: 'history',
  routes: [
    {name: 'blog', path: '/blog', component: Blog }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

