import Vue from 'vue'
import VueRouter from 'vue-router'
import Formatter from '../filters/formatters';

import routes from './routes'

Formatter(Vue);

Vue.use(VueRouter)

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    if (to.meta.authenticated && !localStorage.getItem('token')) {
      return next({ name: 'Login' });
    }

    return next();
  });

  return Router
}
