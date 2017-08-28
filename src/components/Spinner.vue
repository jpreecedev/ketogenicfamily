<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
  export default {
    name: 'spinner'
  };
</script>

<style lang="scss" scoped>

  @import 'src/assets/styles/variables';

  .spinner-container {
    margin: 5rem 0;
    text-align: center;

    .spinner {
      display: inline-block;
      border: 16px solid $spinner-border;
      border-top: 16px solid $spinner-color;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
