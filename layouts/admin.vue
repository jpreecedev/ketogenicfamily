<template>
  <div>
    <main>
      <transition name="fade">
        <nuxt></nuxt>
      </transition>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import '~assets/styles/mixins';

  main {
    margin-top: 24px;
  }

</style>
