<template>
  <div>
    <section class="container">
      <h1 class="display-4">Recipes</h1>
      <recipeTable :recipes="recipes">
      </recipeTable>
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import recipeTable from './components/recipe-table'

export default {
  layout: 'admin',
  components: {
    recipeTable
  },
  async asyncData () {
    let { data } = await axios.get('/api/overview')
    return {
      recipes: data
    }
  },
  head () {
    return {
      title: 'KetogenicFamily.com - Administration'
    }
  },
  data () {
    return {
      recipes: []
    }
  }
}
</script>
