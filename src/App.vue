<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <main class="container">
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
