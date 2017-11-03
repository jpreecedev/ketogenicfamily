import { getConfig } from '../fileReader'

const nutrition = getConfig('nutrition/data.json')

export function hasNutrition (recipe) {
  return recipe.ingredients.some(ingredient => {
    if (ingredient.ingredients) {
      return ingredient.ingredients.some(groupIngredient => {
        return groupIngredient.key
      })
    }
    return ingredient.key
  }) && recipe.servings.showNutritionalLabel
}

export function addNutritionalInformation (recipe) {
  if (!hasNutrition(recipe) || !recipe.ingredients) {
    return
  }

  recipe.hasNutritionalData = true

  recipe.ingredients.forEach(ingredient => {
    let nutritionalData = nutrition.find(item => item.key === ingredient.key)
    if (nutritionalData) {
      ingredient.nutrition = {}

      const multiplier = ((100 / recipe.servings.total) * ingredient.quantity) / 100

      for (let key in nutritionalData) {
        if (nutritionalData.hasOwnProperty(key)) {
          let element = nutritionalData[key]
          if (!isNaN(element)) {
            ingredient.nutrition[key] = (nutritionalData.tablespoon * multiplier) * (nutritionalData[key] / 100)
          }
        }
      }
    }
  })
}
