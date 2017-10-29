<template>
  <div>
    <template v-if="servings && servings.adjustable">
      <h3 class="display-2">Servings</h3>
      <form class="form-inline">
        <label class="sr-only" for="servingUnits">{{ servings.units }}</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          <input type="number"
                  class="form-control"
                  id="servingUnits"
                  min="1"
                  max="30"
                  v-model.number="currentNumberOfServings">
          <div class="input-group-addon">{{ servings.units }}</div>
        </div>
      </form>
    </template>
    <ul class="bullets--hidden">
      <li v-for="(ingredient, index) in ingredients"
          :key="index">
          <template v-if="ingredient.groupTitle">
            <h3 class="display-2" :class="{'mt-4': index > 0}">{{ ingredient.groupTitle }}</h3>
            <ul class="bullets--hidden mt-1">
              <li v-for="(groupIngredient, index) in ingredient.ingredients"
                  :key="index">
                  {{ (groupIngredient.quantity / startingNumberOfServings) * currentNumberOfServings | formatNumber }}{{ groupIngredient.units === "g" ? "g" : " " + groupIngredient.units }} {{ groupIngredient.description }}
              </li>
            </ul>
          </template>
          <template v-else>
            {{ (ingredient.quantity / startingNumberOfServings) * currentNumberOfServings | formatNumber }}{{ ingredient.units === "g" ? "g" : " " + ingredient.units }} {{ ingredient.description }}
          </template>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app-ingredients',
    props: {
      'ingredients': {
        type: Array,
        default: () => [],
        required: true
      },
      'servings': {
        type: Object,
        default: null,
        required: false
      }
    },
    data () {
      return {
        currentNumberOfServings: this.servings ? this.servings.total : 1,
        startingNumberOfServings: this.servings ? this.servings.total : 1
      }
    }
  }
</script>

<style lang="scss" scoped>

  input {
    max-width: 75px;
  }

</style>
