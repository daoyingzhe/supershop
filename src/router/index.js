import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '~components/HelloWorld'
// import tabbar from '~components/tabbar/tabbar.vue'
import home from '../views/home/home.vue'
import categroy from '../views/category/category.vue'
import cart from '../views/cart/cart.vue'
import profile from '../views/profile/profile.vue'
// import maintabbar from '../components/maintabbar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/categroy',
      component: categroy
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/profile',
      component: profile
    },
    // {
    //   path: '/maintabbar',
    //   component: maintabbar
    // }
  ],
  mode:'history'
})
