<template>
  <div>
    <app-header></app-header>
    <main>
      <transition name="fade">
        <nuxt></nuxt>
      </transition>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  main {
    margin-top: 72px;

    @include tablet {
      margin-top: 113px;
    }
  }
</style>
