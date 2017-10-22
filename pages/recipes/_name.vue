<template>
  <transition appear name="fade">
    <div>
      <div class="recipe-header">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="img-container">
                <div class="img-underlay"
                    :style="{ 'background-image': 'url(' + recipe.imgSrc + ')' }">
                </div>
                <img :src="recipe.imgSrc"
                    :alt="recipe.title"
                    class="img-fluid img-thumbnail">
              </div>
            </div>
            <div class="col-xs-12 col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h1 class="display-4 mt-4 mt-md-3">{{ recipe.title }}</h1>
                <p class="lead">{{ recipe.description }}</p>
                <p class="mt-3 small">
                  <span v-if="recipe.prepTimeDisplay" :class="{'mr-3': recipe.cookTimeDisplay}">Prep time: {{ recipe.prepTimeDisplay }}</span>
                  <span v-if="recipe.cookTimeDisplay">Cook time: {{ recipe.cookTimeDisplay }}</span>
                </p>
                <star-rating id="star-rating"
                             v-model="recipe.rating"
                             text-class="rating"
                             :increment="0.5"
                             :read-only="true"
                             :star-size="20">
                </star-rating>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container body">
        <div class="row">
          <div class="col-12 col-md-4">
            <section class="mt-3" id="ingredients">
              <h2 class="display-2">Ingredients</h2>
              <app-ingredients :ingredients="recipe.ingredients"
                               :servings="recipe.servings">
              </app-ingredients>
            </section>
          </div>
          <div class="col-12 col-md-8">
            <section class="mt-5 mt-md-3" id="instructions">
              <h2 class="display-2">Instructions</h2>
              <ul class="bullets--numbered">
                <li v-for="(instruction, index) in recipe.instructions"
                    :key="index">
                  {{ instruction }}
                </li>
              </ul>
            </section>
          </div>
        </div>
        <section class="mt-5"
                 id="related"
                 v-if="recipe.related">
          <h2 class="display-2">Related Recipes</h2>
          <app-lead :data="recipe.related"></app-lead>
        </section>
        <section class="mt-5" id="comments">
          <h2 class="display-2">Discussion</h2>
          <vue-disqus shortname="ketogenicfamily"
                      :identifier="this.recipe.key"
                      :url="'https://ketogenicfamily.com/recipes/' + this.recipe.key">
          </vue-disqus>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from '~/plugins/axios'
import VueDisqus from 'vue-disqus/VueDisqus.vue'
import StarRating from 'vue-star-rating'
import '~/plugins/components'

export default {
  name: 'id',
  components: {
    VueDisqus, StarRating
  },
  async asyncData ({ params, error }) {
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
      title: `${this.recipe.title} ${this.recipe.description} - KetogenicFamily.com`,
      __dangerouslyDisableSanitizers: ['script'],
      meta: [
        { hid: 'description', name: 'description', content: `${this.recipe.title} ${this.recipe.description} - KetogenicFamily.com` }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', content: `https://ketogenicfamily.com/recipes/${this.recipe.key}` }
      ],
      script: [
        {
          hid: 'recipe-structured-data',
          type: 'application/ld+json',
          innerHTML: this.getRecipeStructuredData()
        }
      ]
    }
  },
  methods: {
    getRecipeStructuredData () {
      return `{
        "@context": "http://schema.org/",
        "@type": "Recipe",
        "name": "${this.recipe.title}",
        "image": ["https://ketogenicfamily.com${this.recipe.imgSrc}"],
        "author": {
          "@type": "Person",
          "name": "${this.recipe.author}"
        },
        "datePublished": "${this.recipe.published}",
        "description": "${this.recipe.description}",
        "recipeIngredient": [${this.getRecipeIngredients()}],
        "recipeInstructions": "${this.getRecipeInstructions()}",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "${this.recipe.rating}",
          "ratingCount": "1"
        },
        "cookTime": "${this.recipe.cookTime ? this.recipe.cookTime : ''}",
        "prepTime": "${this.recipe.prepTime}"
      }`
    },
    getRecipeIngredients () {
      return this.recipe.ingredients.map(ingredient => {
        let result = `"${ingredient.quantity} ${ingredient.units} ${ingredient.description}"`
        if (ingredient.groupTitle) {
          result = ingredient.ingredients.map(groupedIngredient => {
            return `"${groupedIngredient.quantity} ${groupedIngredient.units} ${groupedIngredient.description}"`
          })
          result.toString().trim().replace(/(^,)|(,$)/g, '')
        }
        return result
      })
    },
    getRecipeInstructions () {
      let result = []
      this.recipe.instructions.map((instruction, index) => {
        result.push(`${index + 1}. ${instruction}`)
      })
      return result.join('\n')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  .container {
    max-width: 1024px;
  }

  .container.body {
    max-width: 900px;
  }

  .recipe-header {
    background-color: #fafafa;
    padding: 15px 0;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    text-align: center;

    @include tablet {
      padding-top: 30px;
    }
  }

  #comments {
    margin: 3rem auto 1rem auto;
  }

  .img-container {
    height: 200px;
    position: relative;
  }

  .img-thumbnail {
    height: auto;
    width: auto;
    max-height: 200px;
    position: absolute;
    transform: translateX(-50%);
  }

  .img-underlay {
    width: 100%;
    position: absolute;
    height: 200px;
    transform: scale(1.03, 1.03);
    background-position: center center;
    background-size: cover;
    filter: blur(10px);
  }

</style>
