import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Spinner from './Spinner';
import Jumbotron from './Jumbotron';

export default function install(Vue) {
  Vue.component('app-header', AppHeader);
  Vue.component('app-footer', AppFooter);
  Vue.component('app-spinner', Spinner);
  Vue.component('app-jumbotron', Jumbotron);
}
