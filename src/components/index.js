import AppNav from './AppNav';
import AppHeader from './AppHeader';

export default function install(Vue) {
  Vue.component('app-nav', AppNav);
  Vue.component('app-header', AppHeader);
}
