import moment from 'moment'
import Vue from 'vue'

export function formatDate (value) {
  if (value) {
    return moment(value).format('MMMM Do YYYY')
  }
}

Vue.filter('formatDate', formatDate)

Vue.filter('formatNumber', function (value, units, fixed = 2) {
  const format = (value, symbol) => {
    return Math.floor(value) > 0 ? Math.floor(value) + symbol : symbol
  }

  const formatForUnits = [
    'cup', 'cups', 'tablespoon', 'tablespoons', 'teaspoon', 'teaspoons', 'pinch', 'jar', 'tin', 'clove', 'cloves', 'large'
  ]

  const formattedValue = Number(Number.parseFloat(value).toFixed(fixed))

  if (formatForUnits.some(unit => unit === units)) {
    switch (Number((formattedValue % 1).toPrecision(2))) {
      case 0.25:
        return format(formattedValue, '¼')
      case 0.33:
        return format(formattedValue, '⅓')
      case 0.5:
        return format(formattedValue, '½')
      case 0.66:
        return format(formattedValue, '⅔')
      case 0.75:
        return format(formattedValue, '¾')
      default:
        return formattedValue
    }
  }

  return formattedValue
})
