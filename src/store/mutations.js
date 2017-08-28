/* eslint import/prefer-default-export: "off" */

export const ADD_OVERVIEW = (state, overview) => {
  state.overview = Object.assign([], overview);
};

export const ADD_RECIPE = (state, recipe) => {
  state.recipes.push(recipe);
};
