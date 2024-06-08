import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LogView from '@/components/log/log.vue'
import AddView from '@/components/user/add.vue'
import SelectView from '@/components/user/select.vue'
import UpdateView from '@/components/user/update.vue'
import LoginView from '@/components/master/login.vue'
import HelloView from '@/components/master/hello.vue'
import Recharge from '@/components/master/recharge.vue'
import Register from '@/components/master/register.vue'
import MasterProfile from '@/components/master/master-profile.vue'

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
        }
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
    {
      path: '/log',
      component: HomeView,
      children: [
        {
          path: '/log/select',
          name: 'log',
          component: LogView
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: HomeView,
      children: [
        {
          path: '/user/add',
          component: AddView
        },
        {
          path: '/user/update/:id/:name',
          name: 'update',
          component: UpdateView,
          props: true
        },
        {
          path: '/user/select',
          component: SelectView
        }
      ]
    }
  ]
})

export default router
