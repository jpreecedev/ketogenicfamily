<template>
  <div v-if="recipe">
    <section class="container">
      <h1 class="display-4">Recipe editor</h1>
      <hr>
      <recipe-editor :recipe="recipe"></recipe-editor>
    </section>
  </div>
  <div v-else>
    No recipe found
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import recipeEditor from '../components/recipe-editor'

export default {
  layout: 'admin',
  components: {
    recipeEditor
  },
  asyncData ({ params, error }) {
    return axios.get('/api/recipes/' + params.name)
      .then((res) => {
        return { recipe: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Recipe not found' })
      })
  },
  head () {
    return {
      title: 'KetogenicFamily.com - Administration - Recipe'
    }
  },
  data () {
    return {
      recipe: null
    }
  }
}
</script>
