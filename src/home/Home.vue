<template>
  <div>
    <app-jumbotron></app-jumbotron>
    <section class="container">
      <h2 class="display-2">Recipes</h2>
      <div v-if="overview" class="card-columns">
        <div v-for="card in overview"
              :key="card.key"
              @click="selectCard(card)"
              class="card"
              role="button">
          <img :src="card.imgSrc"
                :alt="card.imgAlt"
                class="card-img-top img-fluid">
          <div class="card-body">
            <h4 class="card-title">{{ card.title }}</h4>
            <p class="card-text">{{ card.text }}</p>
            <p class="card-text"><small class="text-muted">{{ card.lastUpdated }}</small></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        overview: null
      };
    },
    async created() {
      this.overview = await this.$dataService.getOverview();
    },
    methods: {
      selectCard(card) {
        if (!card) {
          return;
        }

        this.$router.push(card.url);
      }
    }
  };

</script>

<style lang="scss" scoped>

  @import 'src/assets/styles/variables';

  .card {
    cursor: pointer;

    &:hover {
      box-shadow: $shadow;
    }
  }

</style>
