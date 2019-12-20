import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login'
import adminHome from './components/adminHome'
import userHome from './components/userHome'
import userManage from './components/adminpage/userManage'
import departmentManage from './components/adminpage/departmentManage'
import positionManage from './components/adminpage/positionManage'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      redirect:'/login'
    },
    {   
      path:'/login',
      component:login
    },
    {
      path: '/adminHome',
      redirect:'/adminHome/userManage',
      component:adminHome,
      children:[
        {
          path:'userManage',
          component:userManage
        },
        {
          path:'departmentManage',
          component:departmentManage
        },
        {
          path:'positionManage',
          component:positionManage
        }
      ]
    },
    {
      path: '/userHome',
      component:userHome
    }
  ]
})
