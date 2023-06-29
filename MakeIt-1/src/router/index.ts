import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SignUp',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignUp.vue')
    },{
      path:'/Login',
      name:'login',
      component: ()=> import('../views/LogIn.vue')
    },{
      path: '/main',
      name: 'main',
      component: ()=> import('../views/mainPage.vue')
    },{
      path: '/create',
      name: 'create',
      component: () => import('../views/createView.vue')
      
    },

    {
      path: '/sets/:setTitle',
      name: 'sets',
      component: () => import('../views/setPageView.vue')

    }
    

    
    
  ]
})

export default router
