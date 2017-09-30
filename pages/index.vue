<template>
  <div>
    <app-jumbotron></app-jumbotron>
    <section class="container">
      <h2 class="display-2">Recipes</h2>
      <div v-if="overview" class="card-columns">
          <div v-for="card in overview"
               :key="card.key"
               class="card"
               role="button">
            <nuxt-link :to="card.url">
              <img v-lazy="card.imgSrc"
                   lazy-progressive
                   :alt="card.imgAlt"
                   class="card-img-top img-fluid">
              <div class="card-body">
                <h4 class="card-title">{{ card.title }}</h4>
                <p class="card-text">{{ card.text }}</p>
                <p class="card-text"><small class="text-muted">{{ card.lastUpdated }}</small></p>
              </div>
            </nuxt-link>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import lazy from '~/plugins/lazyImages'
import AppJumbotron from '~/components/jumbotron'

export default {
  components: {
    AppJumbotron, lazy
  },
  async asyncData () {
    let { data } = await axios.get('/api/overview')
    return { overview: data }
  },
  head () {
    return {
      title: 'KetogenicFamily.com - Ketogenic recipes for the whole family'
    }
  },
  data () {
    return {
      overview: null
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
  }

  a {
    text-decoration: none;
    color: #212529;
    display: block;
    width: 100%;
  }

</style>
