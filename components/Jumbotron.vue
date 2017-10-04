<template>
  <section class="jumbotron">
    <div class="container">
      <h1>Ketogenic Family.com</h1>
      <p class="lead">Free recipes suitable for the modern ketogenic family</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'app-jumbotron'
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

      @include tablet {
        font-size: 1.5rem;
        line-height: 32px;
        margin-bottom: 0;
      }
    }
  }
</style>
