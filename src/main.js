import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/app.scss';

import App from './App';
import router from './router';
import store from './store';

import components from './components';

Vue.use(BootstrapVue);
Vue.use(store);
Vue.use(components);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
