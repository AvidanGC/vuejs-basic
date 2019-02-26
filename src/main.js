import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Test from './components/test';
import User from './components/User';

//routers
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: User
    },
    {
      path: '/test',
      component: Test
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
