import Vue from 'vue'
import Router from 'vue-router'
import index1 from '@/pages/index1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index1',
      component: index1
    }
  ]
})
