<template>
  <ul class="bullets--hidden">
    <li v-for="(ingredient, index) in ingredients"
        :key="index">
        <template v-if="ingredient.groupTitle">
          <h3 class="display-2" :class="{'mt-4': index > 0}">{{ ingredient.groupTitle }}</h3>
          <ul class="bullets--hidden mt-1">
            <li v-for="(groupIngredient, index) in ingredient.ingredients">
              {{ groupIngredient.quantity }} {{ groupIngredient.units }} {{ groupIngredient.description }}
            </li>
          </ul>
        </template>
        <template v-else>
          {{ ingredient.quantity }} {{ ingredient.units }} {{ ingredient.description }}
        </template>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'app-ingredients',
    props: {
      'ingredients': {
        type: Array,
        default: () => []
      }
    }
  }
</script>
