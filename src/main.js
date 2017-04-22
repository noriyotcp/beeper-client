// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './routes';
import VueResource from 'vue-resource';
import AuthPlugin from './plugins/Auth.js';

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(AuthPlugin);

// configure alertify defaults
alertify.defaults.notifier.position = 'top-right';

Vue.http.interceptors.push(function(request, next) {
  if (request.url[0] === '/') {
    request.url = process.env.API + request.url

    let token = Vue.auth.getToken();
    if (token) {
      request.headers.set('Authorization', 'Bearer ' + token);
    }
  }

  next(function(response) {
    if (response.status == 422) {
      response.body.errors.forEach(function(e) {
        alertify.error(e);
      })
    }
  })
})

// configure route guards
Router.beforeEach(function(to, from, next) {
  // prevent access to 'requiresGuest' routes
  if (to.matched.some(function(record) { return record.meta.requiresGuest })
      && Vue.auth.loggedIn())
  {
    next({
      path: '/newsfeed'
    });
  } else {
    next(); // make sure to always call next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App }
})
