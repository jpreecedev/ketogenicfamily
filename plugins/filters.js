import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(value).format('MMMM Do YYYY')
  }
})

Vue.filter('formatNumber', function (value) {
  if (value) {
    return Number(Number.parseFloat(value).toFixed(2))
  }
})
