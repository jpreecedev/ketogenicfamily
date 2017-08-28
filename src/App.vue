<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <main class="container">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

