import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import second from '@/components/second'
import one from '@/components/one'
import two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
        path: '/one',
        name: 'one',
        component: one
      }, {
        path: '/two',
        name: 'one',
        component: two
      }]
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/second',
      name: 'first',
      component: second
    }
  ]
})
