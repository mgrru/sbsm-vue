import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/components/master/login.vue'
import HelloView from '@/components/master/hello.vue'
import Recharge from '@/components/master/master-recharge.vue'
import Register from '@/components/master/register.vue'
import MasterProfile from '@/components/master/master-profile.vue'
import Servants from '@/components/master/master-servants.vue'
import Shop from '@/components/master/master-shop.vue'
import ServantSell from '@/components/master/servant-sell.vue'
import ServantSummoning from '@/components/master/servant-summoning.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/login',
          component: LoginView
        },
        {
          path: '/hello',
          component: HelloView
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/recharge',
          component: Recharge
        },
      ]
    },
    {
      path: '/master',
      component: HomeView,
      children: [
        {
          path: '/master/profile',
          component: MasterProfile
        },
        {
          path: '/master/servants',
          component: Servants
        },
        {
          path: '/master/shop',
          component: Shop
        },
        {
          path: '/master/sell',
          component: ServantSell
        },
        {
          path: '/master/recharge',
          component: Recharge
        },
        {
          path: '/master/summoning',
          component: ServantSummoning
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView,
      children: [
        {
          path: '/about',
          component: AboutView
        }
      ]
    },
  ]
})

export default router
