import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Login from './components/Login'
import AllContent from './components/AllContent'
import Register from './components/Register'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/' , component: AllContent},
  {path: '/login' , component: Login},
  {path: '/register' , component: Register}
  
];
const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
