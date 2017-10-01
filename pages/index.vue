<template>
  <div>
    <app-jumbotron></app-jumbotron>
    <section class="container">

      <h2 class="display-2">Latest recipes</h2>
      <app-lead :data="latest">
      </app-lead>

      <h2 class="display-2">...and more of our favourites</h2>
      <app-masonry :data="more"
                   :lazy="true">
      </app-masonry>

    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import lazy from '~/plugins/lazyImages'
import '~/plugins/components'

export default {
  components: {
    lazy
  },
  async asyncData () {
    let { data } = await axios.get('/api/overview')
    return {
      latest: data.slice(0, 3),
      more: data.slice(3)
    }
  },
  head () {
    return {
      title: 'KetogenicFamily.com - Ketogenic recipes for the whole family'
    }
  },
  data () {
    return {
      overview: null
    }
  }
}
</script>
