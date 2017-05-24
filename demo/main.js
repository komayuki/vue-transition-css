var Vue = require('vue');
var App = require('./app.vue');

var app = new Vue({
  el: '#app',
  render (h) {
    return h(App) 
  }
})
