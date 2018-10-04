import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueGeolocation from 'vue-browser-geolocation'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueGeolocation)

import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import List from './components/List.vue'
import Entrance from './components/Entrance.vue'






const router = new VueRouter({
  mode: 'history',
  routes: [
    {name: 'home' , path: '/' , component: Home },
    {name: 'blog', path: '/blog', component: Blog },
		{name: 'list' , path: '/list', component: List },
		{name: 'entrance' , path: '/entrance', component: Entrance }
  ]
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

