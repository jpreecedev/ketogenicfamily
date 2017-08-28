<template>
  <div>
    <h1>Recipe!</h1>
    {{ recipe }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recipe: null
      };
    },
    async created() {
      this.recipe = await this.$dataService.getRecipe(this.$route.params.recipeKey);
    }
  };

</script>
