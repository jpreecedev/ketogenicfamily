<template>
  <div class="row">
    <div class="col-xs-12 col-md-4"
         v-for="card in data"
         :key="card.key">
      <div class="card"
           role="button">
        <nuxt-link :to="card.url">
          <img v-if="lazy"
                v-lazy="card.imgSrc"
                :alt="card.imgAlt"
                class="card-img-top img-fluid">
          <img v-else
                :src="card.imgSrc"
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
  </div>
  </div>
</template>

<script>
  export default {
    name: 'app-lead',
    props: {
      'data': {
        type: Array,
        default: () => [],
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~assets/styles/mixins';
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

  .col-xs-12 {
    margin-bottom: .75rem;

    @include tablet {
      margin-bottom: 2rem;
    }
  }

</style>
