import moment from 'moment'
import Vue from 'vue'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(value).format('MMMM Do YYYY')
  }
})

Vue.filter('formatNumber', function (value, fixed = 2) {
  const format = (value, symbol) => {
    return Math.floor(value) > 0 ? Math.floor(value) + symbol : symbol
  }

  switch (value % 1) {
    case 0.25:
      return format(value, '¼')
    case 0.33:
      return format(value, '⅓')
    case 0.5:
      return format(value, '½')
    case 0.66:
      return format(value, '⅔')
    case 0.75:
      return format(value, '¾')
    default:
      return Number(Number.parseFloat(value).toFixed(fixed))
  }
})
