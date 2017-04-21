import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello.vue';
import Hello2 from './components/Hello2.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/one",
      component: Hello
    },
    {
      path: "/two",
      component: Hello2
    }
  ]
});

export default router;
