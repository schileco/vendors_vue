import { createRouter, createWebHistory } from 'vue-router'


import Card from '@/pages/Card.vue'
import Vendors from '@/pages/Vendors.vue'
import userRegister from '@/pages/userRegister.vue'
import userLogin from '@/pages/userLogin.vue'

const routes = [
     {
        path: '/',
        component: Card,
        meta:{
          requiresAuth:true
        }
     },

     {
        path: '/vendors/:category',
        component: Vendors,
        meta:{
          requiresAuth: true
        }
     },

     {
      path: '/userRegister',
      component: userRegister
     },
     {
      path: '/userLogin',
      component: userLogin
     }
];

const router = new createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach((to, from, next) => {
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
   const token = $cookies.get('token')
  console.log(token)
   if (requiresAuth && !token) {
     next('/userLogin') // redirecionar para a página de login se não estiver autenticado
   } else {
     next() // continuar a navegação normalmente
   }
 })
 
export default router