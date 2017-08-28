import Container from './Container';
import Recipes from './Recipes';

const RouteConfig = [{
  path: '/recipes',
  component: Container,
  children: [{
    path: ':recipeKey',
    name: 'recipe',
    component: Recipes
  }]
}];

export default RouteConfig;
