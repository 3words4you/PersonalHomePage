import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/projects.vue')
    }
  ]
})
