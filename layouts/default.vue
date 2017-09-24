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

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  main {
    margin-top: 72px;

    @include tablet {
      margin-top: 113px;
    }
  }
</style>
