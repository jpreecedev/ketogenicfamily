<template>
  <section class="jumbotron" :class="{'slim': slim}">
    <div class="container">
      <h1>{{ title }}</h1>
      <p v-if="lead">{{ lead }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'app-jumbotron',
    props: {
      'title': {
        type: String,
        required: true
      },
      'lead': {
        type: String,
        required: false
      },
      'slim': {
        type: Boolean,
        default: false,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  .jumbotron {
    background: linear-gradient(rgba(0, 0, 0, 0.6),  rgba(0, 0, 0, 0.6)), url('~/assets/img/banner.jpg') center top fixed;
    background-size: cover;
    color: #fff;
    text-align: center;
    border-radius: 0;

    @include tablet {
      padding: 10rem 2rem;
      background-size: contain;
    }

    &.slim {
      @include tablet {
        padding: 2rem;
      }
    }

    h1 {
      text-shadow: 0 5px 10px #000;
      font-size: 2rem;

      @include tablet {
        font-size: 3rem;
        line-height: 1.1;
      }
    }

    p {
      text-shadow: 0px 5px 10px #000;
      margin-bottom: 0;

      @include tablet {
        font-size: 1.5rem;
        line-height: 32px;
      }
    }
  }
</style>
