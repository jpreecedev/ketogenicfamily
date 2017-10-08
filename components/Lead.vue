<template>
  <div class="row">
    <div class="col-xs-12 col-md-4"
         v-for="card in data"
         :key="card.key">
      <app-card :recipe="card"
                :lazy="lazy">
      </app-card>
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
  @import '~assets/styles/mixins';

  .col-xs-12 {
    margin-bottom: .75rem;

    @include tablet {
      margin-bottom: 2rem;
    }
  }
</style>
