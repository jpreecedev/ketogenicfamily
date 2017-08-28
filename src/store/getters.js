/* eslint import/prefer-default-export: "off" */

export function getOverview(state) {
  return () => state.overview;
}

export function getRecipe(state) {
  return key => state.recipes.find(recipe => recipe.key === key);
}

