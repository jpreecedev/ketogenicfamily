import AppNav from './AppNav';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default function install(Vue) {
  Vue.component('app-nav', AppNav);
  Vue.component('app-header', AppHeader);
  Vue.component('app-footer', AppFooter);
}
