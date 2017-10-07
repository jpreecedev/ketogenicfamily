<template>
  <table class="table table-striped table-hover table-responsive mt-4">
    <thead class="thead-inverse">
      <tr>
        <th>Recipe Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="recipe in recipes"
          :key="recipe.key">
        <td>
          <nuxt-link :to="'/admin/recipes/' + recipe.key">
            {{ recipe.title }}
          </nuxt-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'name',
    props: {
      'recipes': {
        type: Array,
        default: () => []
      }
    }
  }
</script>
