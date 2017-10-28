import { getConfig } from '../fileReader'

const nutrition = getConfig('nutrition/data.json')

export function hasNutrition (recipe) {
  return recipe.ingredients.some((ingredient) => {
    return ingredient.nutritionKey
  })
}

export function convertTablespoonsToGrams (quantity) {
  return quantity * 15
}

export function addNutritionalInformation (recipe) {
  if (!hasNutrition(recipe) || !recipe.ingredients) {
    return
  }

  recipe.hasNutritionalData = true
  recipe.ingredients.forEach(ingredient => {
    ingredient.nutrition = {}

    const nutritionData = nutrition.find(item => {
      return item.key === ingredient.nutritionKey
    })

    let multiplier = 1
    if (ingredient.units === 'tablespoons' || ingredient.units === 'tablespoon') {
      multiplier = convertTablespoonsToGrams(ingredient.quantity) / 100
    }

    for (let item in nutritionData) {
      if (nutritionData.hasOwnProperty(item)) {
        let element = nutritionData[item]
        if (!isNaN(element)) {
          ingredient.nutrition[item] = element * multiplier
        }
      }
    }
  })
}
