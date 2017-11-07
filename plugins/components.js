import Vue from 'vue'
import AppFooter from '../components/Footer'
import AppHeader from '../components/Header'
import AppNav from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Masonry from '../components/Masonry'
import Lead from '../components/Lead'
import Ingredients from '../components/Ingredients'
import Nutrition from '../components/Nutrition'
import Card from '../components/Card'

import BlogPost from '../pages/blog/components/Post'
import Sidebar from '../pages/blog/components/Sidebar'

Vue.component('app-footer', AppFooter)
Vue.component('app-header', AppHeader)
Vue.component('app-nav', AppNav)
Vue.component('app-jumbotron', Jumbotron)
Vue.component('app-masonry', Masonry)
Vue.component('app-lead', Lead)
Vue.component('app-ingredients', Ingredients)
Vue.component('app-nutrition', Nutrition)
Vue.component('app-card', Card)

Vue.component('app-blog-post', BlogPost)
Vue.component('app-blog-sidebar', Sidebar)
