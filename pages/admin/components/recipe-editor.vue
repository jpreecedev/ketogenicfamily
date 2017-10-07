<template>
  <form @submit.prevent="updateRecipe">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <h2 class="display-2">
          Overview
        </h2>
        <div class="form-group">
          <label for="title">Title</label>
          <input v-model="recipe.title"
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Recipe title">
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input v-model="recipe.description"
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="Description">
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input v-model="recipe.author"
                  type="text"
                  class="form-control"
                  id="author"
                  placeholder="Author">
        </div>
        <div class="form-group">
          <label for="published">Published</label>
          <input v-model="recipe.published"
                type="date"
                class="form-control"
                id="published"
                placeholder="Published">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="prepTimeDisplay">Preparation Time</label>
            <input v-model="recipe.prepTimeDisplay"
                  type="text"
                  class="form-control"
                  id="prepTimeDisplay"
                  placeholder="Preparation Time">
          </div>
          <div class="form-group col-md-6">
            <label for="prepTime">Preparation Time (Value)</label>
            <input v-model="recipe.prepTime"
                  type="text"
                  class="form-control"
                  id="prepTime"
                  placeholder="Preparation Time (Value)">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="cookTimeDisplay">Cook Time</label>
            <input v-model="recipe.cookTimeDisplay"
                  type="text"
                  class="form-control"
                  id="cookTimeDisplay"
                  placeholder="Cook Time">
          </div>
          <div class="form-group col-md-6">
            <label for="cookTime">Cook Time (Value)</label>
            <input v-model="recipe.cookTime"
                  type="text"
                  class="form-control"
                  id="cookTime"
                  placeholder="Cook Time (Value)">
          </div>
        </div>
        <div class="form-group">
          <label for="starRating">Star Rating</label>
          <input v-model="recipe.rating"
                type="number"
                class="form-control"
                id="starRating"
                placeholder="Star Rating">
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </div>
      <div class="col-xs-12 col-md-6">
        <h2 class="display-2">
          Ingredients
        </h2>
        <div>
          <div v-for="(ingredient, index) in recipe.ingredients"
              :key="index">
              <template v-if="ingredient.groupTitle">
                <h3 class="display-2"
                    :class="{'mt-5': index > 0}">
                  {{ ingredient.groupTitle }}
                </h3>
                <hr>
                <div class="form-row align-items-end"
                    v-for="(groupIngredient, groupIngredientIndex) in ingredient.ingredients"
                    :key="groupIngredientIndex">
                  <div class="form-group col-md-3">
                    <label for="quantity">Quantity</label>
                    <input v-model="groupIngredient.quantity"
                          type="text"
                          class="form-control"
                          id="quantity"
                          placeholder="Quantity">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="units">Units</label>
                    <input v-model="groupIngredient.units"
                          type="text"
                          class="form-control"
                          id="units"
                          placeholder="Units">
                  </div>
                  <div class="form-group col-md-5">
                    <label for="description">Description</label>
                    <input v-model="groupIngredient.description"
                          type="text"
                          class="form-control"
                          id="description"
                          placeholder="Description">
                  </div>
                  <div class="col-md-1">
                    <button type="button" class="btn btn-danger"
                            @click="removeIngredient(groupIngredient, groupIngredientIndex)">X</button>
                  </div>
                </div>
                <div class="form-row">
                    <button type="button" class="btn btn-secondary"
                            @click="addIngredient(ingredient.ingredients)">
                      Add
                    </button>
                </div>
              </template>
              <template v-else>
                <div class="form-row align-items-end">
                  <div class="form-group col-md-3">
                    <label for="quantity">Quantity</label>
                    <input v-model="ingredient.quantity"
                          type="text"
                          class="form-control"
                          id="quantity"
                          placeholder="Quantity">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="units">Units</label>
                    <input v-model="ingredient.units"
                          type="text"
                          class="form-control"
                          id="units"
                          placeholder="Units">
                  </div>
                  <div class="form-group col-md-5">
                    <label for="description">Description</label>
                    <input v-model="ingredient.description"
                          type="text"
                          class="form-control"
                          id="description"
                          placeholder="Description">
                  </div>
                  <div class="col-md-1">
                    <button type="button" class="btn btn-danger"
                            @click="removeIngredient(recipe.ingredients, index)">
                      X
                    </button>
                  </div>
                </div>
              </template>
          </div>

          <template v-if="recipe.ingredients && !recipe.ingredients[0].groupTitle">
            <div>
                <button type="button" class="btn btn-secondary"
                        @click="addIngredient(recipe.ingredients)">
                  Add
                </button>
            </div>
          </template>

        </div>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'name',
    props: {
      'recipe': {
        type: Object,
        default: null,
        required: true
      }
    },
    methods: {
      updateRecipe () {

      },
      addIngredient (ingredientGroup) {
        ingredientGroup.push({})
      },
      removeIngredient (ingredientGroup, index) {
        ingredientGroup.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  form {
    margin-bottom: 5rem;
  }

  .btn.btn-danger {
    margin-bottom: 1rem;
  }
</style>
