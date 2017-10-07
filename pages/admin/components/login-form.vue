<template>
  <div class="login-page">
    <div class="form">
      <h2 class="display-2">Log In</h2>
      <form class="login-form">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>login</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login-form'
  }
</script>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  .login-page {
    width: 280px;
    padding: 8% 0 0;
    margin: auto;

    @include tablet {
      width: 360px;
    }
  }

  .form {
    border-radius: 8px;
    position: relative;
    max-width: 280px;
    margin: 0 auto 100px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

    @include tablet {
      max-width: 360px;
      padding: 45px;
    }

    input {
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
    }
    button {
      text-transform: uppercase;
      outline: 0;
      background: #4CAF50;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #FFFFFF;
      transition: all 0.3 ease;
      cursor: pointer;
    }
  }

  .container {
    position: relative;
    margin: 0 auto;
    &:before, &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
</style>
