import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/app.scss';

import App from './App';
import router from './router';
import store from './store';

import components from './components';

import dataService from './services/data.service';

Vue.use(store);
Vue.use(components);

Vue.use(dataService);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});