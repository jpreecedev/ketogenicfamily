<template>
  <header class="fixed-top">
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
    </nav>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  header {
    padding: 0;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  }

  nav {
    padding: 0.5rem 0;
  }

  header,
  nav {
    height: 72px;

    @include tablet {
      height: 113px;
    }
  }

  .navbar-brand {
    @include tablet {
      margin-right: 0;
      padding-left: 15px;
      padding-right: 15px;
    }

    h1 {
      font-size: 1.5rem;
      line-height: 32px;
      margin-bottom: 0;
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
      border-radius: 50px;
      width: 50px;

      @include tablet {
        width: 100%;
      }
    }
  }
</style>