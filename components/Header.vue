<template>
  <header class="fixed-top">
    <app-nav></app-nav>
  </header>
</template>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  header {
    padding: 0;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  }

  header {
    height: 72px;

    @include tablet {
      height: 113px;
    }
  }

</style>
