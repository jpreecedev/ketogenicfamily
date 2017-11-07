<template>
  <nav class="container navbar navbar-expand-lg navbar-light">
    <router-link to="/" class="navbar-brand">
      <div class="navbar-logo">
        <img src="~/assets/img/ketogenicfamily.jpg" alt="Ketogenic Family">
      </div>
      <div class="navbar-title">
        <h1>Ketogenic Family</h1>
        <p class="lead">Our ketogenic lifestyle learnings</p>
      </div>
    </router-link>
    <button @click="openNavbar()"
            class="navbar-toggler mr-1"
            type="button"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</template>

<script>
  export default {
    methods: {
      openNavbar () {
        this.$bus.$emit('OpenSidebar')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  nav {
    height: 50px;
    padding: 0.5rem 0;

    @include tablet {
      height: 113px;
    }
  }

  .lead {
    display: none;

    @include tablet {
      display: block;
    }
  }

  .navbar-brand {
    @include tablet {
      margin-right: 0;
      padding-left: 15px;
      padding-right: 15px;
    }

    h1 {
      font-size: 1rem;
      line-height: 32px;
      margin-bottom: 0;

      @include tablet {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 0;
    }

    .navbar-logo,
    .navbar-title {
      display: inline-block;
      margin-left: 8px;

      @include tablet {
        margin-left: 0;
      }
    }

    .navbar-title {
      vertical-align: middle;

      @include tablet {
        margin-left: 8px;
      }
    }

    img {
      height: auto;
      border-radius: 20px;
      width: 35px;

      @include tablet {
        border-radius: 50px;
        width: 100%;
      }
    }
  }
</style>
