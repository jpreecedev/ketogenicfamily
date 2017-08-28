import Vue from 'vue';
import Router from 'vue-router';

import HomeRouteConfig from '@/home/route-config';
import RecipesRouteConfig from '@/recipes/route-config';

Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    ...HomeRouteConfig,
    ...RecipesRouteConfig
  ]
});

export default router;
