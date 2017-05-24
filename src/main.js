import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages/app.vue'
import Pattern from './pages/pattern.vue'
import List from './pages/list.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Pattern },
  { path: '/list', component: List },
]

const router = new VueRouter({routes})

var app = new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})
