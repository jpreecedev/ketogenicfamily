<template>
  <app-spinner v-if="!recipe"></app-spinner>
  <div v-else>
    <transition appear name="fade">
      <div>
        <div class="recipe-header">
            <h1 class="display-4 mt-4 mt-md-0">{{ recipe.title }}</h1>
            <p class="lead">{{ recipe.description }}</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8 order-12 order-md-1">
              <section class="mt-3" id="ingredients">
                <h2 class="display-2">Ingredients</h2>
                <ul class="bullets--hidden">
                  <li v-for="ingredient in recipe.ingredients"
                      :key="ingredient.quantity + ' ' + ingredient.units + ' ' + ingredient.description">
                    {{ ingredient.quantity }} {{ ingredient.units }} {{ ingredient.description }}
                  </li>
                </ul>
              </section>

              <section class="mt-5" id="instructions">
                <h2 class="display-2">Instructions</h2>
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
      document.title = `KetogenicFamily.com - ${this.recipe.title}`;
    }
  };

</script>

<style lang="scss" scoped>
  .recipe-header {
    background-color: #fafafa;
    padding: 30px 0 15px 0;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
</style>
