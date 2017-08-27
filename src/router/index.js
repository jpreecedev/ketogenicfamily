import Vue from 'vue';
import Router from 'vue-router';

import HomeRouteConfig from '@/home/route-config';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    ...HomeRouteConfig
  ]
});
