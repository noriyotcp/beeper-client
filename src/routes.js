import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/auth",
      component: Auth,
      redirect: 'auth/login',
      children: [
        {
          path: "login",
          component: Login
        },
        {
          path: "register",
          component: Register
        }
      ]
    }
  ]
});

export default router;
