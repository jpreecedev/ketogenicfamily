import store from '../store';

const dataService = {
  install(Vue) {
    Vue.prototype.$dataService = Vue.dataService = this;
  },
  async getOverview() {
    let overview = store.getters.getOverview();
    if (!overview) {
      overview = await this.fetchDataFile('overview');
      store.commit('ADD_OVERVIEW', overview);
    }
    return overview;
  },
  async getRecipe(key) {
    let recipe = store.getters.getRecipe(key);
    if (!recipe) {
      recipe = await this.fetchDataFile(key);
      store.commit('ADD_RECIPE', recipe);
    }
    return recipe;
  },
  async fetchDataFile(fileName) {
    const result = await (await (fetch(`/static/data/${fileName}.json`).then(res => res.json())));
    return result;
  }
};

export default dataService;
