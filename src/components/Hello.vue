<template>
  <div class="hello">
      <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      showDismissibleAlert: true
    };
  }
};
</script>

<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
