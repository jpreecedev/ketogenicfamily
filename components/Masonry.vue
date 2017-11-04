<template>
  <div class="card-columns">
    <app-card v-for="card in data"
              :key="card.key"
              :recipe="card"
              :lazy="lazy">
    </app-card>
  </div>
</template>

<script>
  export default {
    name: 'masonry',
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
