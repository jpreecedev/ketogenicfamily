import Vue from 'vue'
import AppFooter from '../components/Footer'
import AppHeader from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Masonry from '../components/Masonry'
import Lead from '../components/Lead'
import Ingredients from '../components/Ingredients'
import Card from '../components/Card'

import BlogPost from '../pages/blog/components/Post'

Vue.component('app-footer', AppFooter)
Vue.component('app-header', AppHeader)
Vue.component('app-jumbotron', Jumbotron)
Vue.component('app-masonry', Masonry)
Vue.component('app-lead', Lead)
Vue.component('app-ingredients', Ingredients)
Vue.component('app-card', Card)
Vue.component('app-blog-post', BlogPost)
