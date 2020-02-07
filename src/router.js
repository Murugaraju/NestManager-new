
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//project components imports below
import Login from './components/Login/Login'
import LandingTemplate from './components/Dashboard/Dashboard'













export const router =  new VueRouter({
  mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
      // adding the main route object for the router-view outlet deciding
      //commenting it for now, will look into this feature later url:-https://router.vuejs.org/guide/essentials/named-views.html
      // {
      //   path:'/',
      //   components:{
      //     default:LandingTemplate,
      //   
      //     footer:Footer
      //   },
      // },
      {
        path: '/',
        redirect: 'dashboard',
        name: 'dashboard',
        component: LandingTemplate,
        children: [
          {
            path: 'dashboard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "demo" */ './components/Dashboard/Dashboard'),
            meta: { title: 'Dashboard' }
          },
        ]
      },
      {
        path: '/login',
        component: Login,
        children: [
          {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "demo" */ './components/Login/Login'),
            meta: { title: 'Login' }
          },
        //   {
        //     path: '/register',
        //     name: 'register',
        //     component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        //   }
        ]
      },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
  })

//   router.beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('NestManager');

//     if (authRequired && !loggedIn) {
//       return next('/login');
//     }

//     next();
//   })
