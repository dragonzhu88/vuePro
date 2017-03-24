// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

//import the components
import VueRouter from 'vue-router'
import Component1 from './components/rountsComponents/component1.vue'
import Component2 from './components/rountsComponents/component2.vue'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter) //register the component
/* eslint-disable no-new */

//define the router path
const routes = [
    {path: '/', redirect: '/component1' }, //change the default router
    {path:'/component1',component:Component1},
    {path:'/component2',component:Component2},
]

//instant the VueRouter object
const router = new VueRouter({
  routes
})

const app = new Vue({
  router, //set the router obj in Vue app.
    render:h=>h(App)
}).$mount('#app')

router.go(1)

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
