import Vue from 'vue'
import Router from 'vue-router'
import home from '../home'
import home2 from '../home2.vue'
import foo from '../foo.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home2',
      name: 'home222',
      component: home2
    },

    {
      path: '/foo',
      name: 'foo',
      component: foo
    }
  ]
})
