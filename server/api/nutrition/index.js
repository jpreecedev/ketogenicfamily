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
  recipe.nutrition = {}

  recipe.ingredients.forEach(ingredient => {
    let nutritionalData = nutrition.find(item => item.key === ingredient.key)
    if (nutritionalData) {
      ingredient.nutrition = {}

      for (const key in nutritionalData) {
        if (nutritionalData.hasOwnProperty(key)) {
          const element = nutritionalData[key]
          if (!isNaN(element)) {
            if (element === 0) {
              ingredient.nutrition[key] = 0
            } else {
              ingredient.nutrition[key] = element / recipe.servings.total
            }
          }
        }
      }
    }
  })
}
