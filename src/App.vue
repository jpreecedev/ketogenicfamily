<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/mixins';

  main {
    margin-top: 72px;

    @include tablet {
      margin-top: 113px;
    }
  }
</style>

