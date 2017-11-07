<template>
  <div ref="sidenav" class="sidenav">
    <a class="closebtn"
       @click="closeNav()">
      &times;
    </a>
    <span @click="closeNav()"><nuxt-link to="/">Recipes</nuxt-link></span>
    <span @click="closeNav()"><nuxt-link to="/blog">Blog</nuxt-link></span>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$bus.$on('OpenSidebar', () => {
        this.openNav()
      })
    },
    methods: {
      openNav () {
        this.$refs.sidenav.style.width = '250px'
      },
      closeNav () {
        this.$refs.sidenav.style.width = '0'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  box-shadow: $shadow;
  a {
    padding: 8px 8px 8px 16px;
    text-decoration: none;
    font-size: 1.5rem;
    color: #818181;
    display: block;
    transition: 0.3s;
    &:hover {
      color: #f1f1f1;
    }
  }
}

.offcanvas a:focus {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 40px;
  right: 4px;
  font-size: 2rem;
  margin-left: 50px;
}
</style>
