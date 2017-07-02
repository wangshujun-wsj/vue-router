import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import hello from '@/components/Hello.vue'
import helloId from '@/components/helloId.vue'
import nav from '@/components/nav.vue'
import nav1 from '@/components/nav1.vue'

Vue.use(Router)

export default new Router({
	// 在使用<router-link>标签 的页面写个class为active的样式,
	// 表示当前点击的<router-link>所要显示样式
	linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: home,
      redirect: {path:'/hello'},// 重定向
      children:[{
      	path:'/hello',
      	component:hello,
      	children:[{
	      	path:'/hello/:id',
	      	component:helloId,
	      }]
      },{
      	path:'/nav',
      	component:nav
      },{
	      path:'/nav/nav1',
	      component:nav1,
	    }] 
    }
  ]
})
