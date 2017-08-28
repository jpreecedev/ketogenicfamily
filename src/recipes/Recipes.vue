<template>
  <app-spinner v-if="!recipe"></app-spinner>
  <div v-else>
    <transition appear name="fade">
      <div class="row">
        <div class="col-12 col-md-8 order-12 order-md-1">
          <h1 class="display-4 mt-4 mt-md-0">{{ recipe.title }}</h1>
          <p class="lead">{{ recipe.description }}</p>
          <section class="mt-3" id="ingredients">
            <h2>Ingredients</h2>
            <ul class="bullets--hidden">
              <li v-for="ingredient in recipe.ingredients"
                  :key="ingredient.quantity + ' ' + ingredient.units + ' ' + ingredient.description">
                {{ ingredient.quantity }} {{ ingredient.units }} {{ ingredient.description }}
              </li>
            </ul>
          </section>

          <section class="mt-5" id="instructions">
            <h2>Instructions</h2>
            <ul class="bullets--numbered">
              <li v-for="(instruction, index) in recipe.instructions"
                  :key="index">
                {{ instruction }}
              </li>
            </ul>
          </section>
        </div>
        <div class="col-12 col-md-4 order-1 order-md-12">
          <img :src="recipe.imgSrc"
              :alt="recipe.title"
              class="img-fluid img-thumbnail">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recipe: null
      };
    },
    async created() {
      this.recipe = await this.$dataService.getRecipe(this.$route.params.recipeKey);
    }
  };

</script>
