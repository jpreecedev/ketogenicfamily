<template>
  <div class="card"
       role="button">
    <nuxt-link :to="recipe.url">
      <img v-if="lazy"
           v-lazy="recipe.imgSrc"
           :alt="recipe.imgAlt"
           class="card-img-top img-fluid">
      <img v-else
           :src="recipe.imgSrc"
           :alt="recipe.imgAlt"
           class="card-img-top img-fluid">
      <div class="card-body">
        <h4 class="card-title">{{ recipe.title }}</h4>
        <p class="card-text">{{ recipe.text }}</p>
        <star-rating v-model="recipe.rating"
                     text-class="rating"
                     :id="'star-rating-' + recipe.key"
                     :increment="0.5"
                     :read-only="true"
                     :star-size="20">
        </star-rating>
        <p class="card-text"><small class="text-muted">{{ recipe.lastUpdated }}</small></p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  import StarRating from 'vue-star-rating'
  import lazy from '~/plugins/lazyImages'

  export default {
    name: 'card',
    components: {
      StarRating, lazy
    },
    props: {
      'recipe': {
        type: Object,
        default: null,
        required: true
      },
      'lazy': {
        type: Boolean,
        default: true,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/styles/variables';

  .card {
    cursor: pointer;

    &:hover {
      box-shadow: $shadow;
    }

    .card-text {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  a {
    text-decoration: none;
    color: #212529;
    display: block;
    width: 100%;
  }
</style>
