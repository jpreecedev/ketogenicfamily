<template>
  <section class="performance-facts mt-3" id="nutrition">
    <header class="performance-facts__header">
      <h1 class="performance-facts__title">Nutrition Facts</h1>
      <p>{{ title }}</p>
    </header>
    <table class="performance-facts__table">
      <thead>
        <tr>
          <th colspan="3" class="small-info">
            Amount per 1 {{ units }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="2">
            <b>Calories</b>
            {{ totalCalories | formatNumber("", 0) }}
          </th>
          <td>
            Calories from Fat
            {{ caloriesFromFat | formatNumber("", 0) }}
          </td>
        </tr>
        <tr class="thick-row">
          <td colspan="3" class="small-info">
            <b>% Daily Value*</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Total Fat</b>
            {{ totalFat | formatNumber("", 0) }}g
          </th>
          <td>
            <b>{{ (100 / 166) * totalFat | formatNumber("", 0) }}%</b>
          </td>
        </tr>
        <tr>
          <td class="blank-cell">
          </td>
          <th>
            Saturated Fat
            {{ totalSaturatedFat | formatNumber("", 0) }}g
          </th>
          <td>
            <b>{{ (100 / 166) * totalSaturatedFat | formatNumber("", 0) }}%</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Total Carbohydrate</b>
            {{ totalCarbohydrate | formatNumber("", 0) }}g
          </th>
          <td>
            <b>{{ (100 / 25) * totalCarbohydrate | formatNumber("", 0) }}%</b>
          </td>
        </tr>
        <tr>
          <td class="blank-cell">
          </td>
          <th>
            Dietary Fiber
            {{ totalFibre | formatNumber("", 0) }}g
          </th>
          <td>
          </td>
        </tr>
        <tr>
          <td class="blank-cell">
          </td>
          <th>
            Sugars
            {{ totalSugar | formatNumber("", 0) }}g
          </th>
          <td>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Protein</b>
            {{ totalProtein | formatNumber("", 0) }}g
          </th>
          <td>
            <b>{{ 1 * totalProtein | formatNumber("", 0) }}%</b>
          </td>
        </tr>
        <tr>
          <th colspan="2">
            <b>Salt</b>
            {{ totalSalt | formatNumber }}g
          </th>
          <td>
            <b>{{ (100 / 8.1) * totalSalt | formatNumber("", 0) }}%</b>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="small-info">* Percent Daily Values are based on a 2,000 calorie intake, and has been <strong>adjusted for the ketogenic diet</strong>.</p>
    <p class="small-info">Ketogenic diet macronutrient split is: 75% fat, 20% protein, 5% carbohydrates.</p>
    <p class="small-info">Your daily values may be higher or lower depending on your calorie needs:</p>

    <table class="performance-facts__table--small small-info">
      <thead>
        <tr>
          <td colspan="2"></td>
          <th>2,000</th>
          <th>2,500</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="2">Total Fat</th>
          <td>166g</td>
          <td>208g</td>
        </tr>
        <tr>
          <th colspan="2">Total Protein</th>
          <td>100g</td>
          <td>125g</td>
        </tr>
        <tr>
          <th colspan="2">Total Carbohydrate</th>
          <td>25g</td>
          <td>31g</td>
        </tr>
        <tr>
          <th colspan="2">Total Salt</th>
          <td>8.1g</td>
          <td>8.1g</td>
        </tr>
      </tbody>
    </table>

    <p class="small-info">
      Calories per gram:
    </p>
    <p class="small-info text-center">
      Fat 9
      &bull;
      Carbohydrate 4
      &bull;
      Protein 4
    </p>

  </section>
</template>

<script>
  export default {
    name: 'nutrition',
    props: {
      'title': {
        type: String,
        default: null,
        required: true
      },
      'units': {
        type: String,
        default: null,
        required: true
      },
      'nutritionalData': {
        type: Array,
        default: () => [],
        required: true
      }
    },
    methods: {
      getTotal (prop) {
        let result = 0
        this.nutritionalData.forEach(item => {
          result += item[prop] || 0
        })
        return result
      }
    },
    computed: {
      totalCalories () {
        return this.getTotal('kcal')
      },
      caloriesFromFat () {
        return this.getTotal('fat') * 9
      },
      totalFat () {
        return this.getTotal('fat')
      },
      totalSaturatedFat () {
        return this.getTotal('saturates')
      },
      totalCarbohydrate () {
        return this.getTotal('carbohydrate')
      },
      totalSugar () {
        return this.getTotal('sugars')
      },
      totalFibre () {
        return this.getTotal('fibre')
      },
      totalProtein () {
        return this.getTotal('protein')
      },
      totalSalt () {
        return this.getTotal('salt')
      }
    }
  }
</script>

<style lang="scss" scoped>

  section {
    font-size: small;
    line-height: 1.4;
  }

  p {
    margin: 0;
  }

  .performance-facts {
    border: 1px solid black;
    float: left;
    width: 100%;
    padding: 0.5rem;
    table {
      border-collapse: collapse;
    }
  }
  .performance-facts__title {
    font-weight: bold;
    font-size: 2rem;
    margin: 0 0 0.25rem 0;
  }
  .performance-facts__header {
    border-bottom: 10px solid black;
    padding: 0 0 0.25rem 0;
    margin: 0 0 0.5rem 0;
    p {
      margin: 0;
    }
  }
  .performance-facts__table {
    width: 100%;
    thead tr {
      th, td {
        border: 0;
      }
    }
    th, td {
      font-weight: normal;
      text-align: left;
      padding: 0.25rem 0;
      border-top: 1px solid black;
      white-space: nowrap;
    }
    td {
      &:last-child {
        text-align: right;
      }
    }
    .blank-cell {
      width: 1rem;
      border-top: 0;
    }
    .thick-row {
      th, td {
        border-top-width: 5px;
      }
    }
  }
  .small-info {
    margin-top: 0.5rem;
    font-size: 0.7rem;
  }

  .performance-facts__table--small {
    @extend .performance-facts__table;
    border-bottom: 1px solid #999;
    margin: 0 0 0.5rem 0;
    thead {
      tr {
        border-bottom: 1px solid black;
      }
    }
    td {
      &:last-child {
        text-align: left;
      }
    }
    th, td {
      border: 0;
      padding: 0;
    }
  }

  .performance-facts__table--grid {
    @extend .performance-facts__table;
    margin: 0 0 0.5rem 0;
    td {
      &:last-child {
        text-align: left;
        &::before {
          content: "•";
          font-weight: bold;
          margin: 0 0.25rem 0 0;
        }
      }
    }
  }

  .text-center {
    text-align: center;
  }
  .thick-end {
    border-bottom: 10px solid black;
  }
  .thin-end {
    border-bottom: 1px solid black;
  }
</style>
