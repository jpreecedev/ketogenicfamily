<template>
  <div>
    <app-jumbotron title="Ketogenic Family"
                   lead="Free recipes suitable for the modern ketogenic family">
    </app-jumbotron>
    <section class="container">

      <h2 class="display-2">Latest recipes</h2>
      <app-lead :data="latest"
                :lazy="false">
      </app-lead>

      <h2 class="display-2">...and more of our favourites</h2>
      <app-masonry :data="more"
                   :lazy="true">
      </app-masonry>

    </section>
    <div id="fb-root"></div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import '~/plugins/components'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/overview')
    return {
      latest: data.slice(0, 3),
      more: data.slice(3)
    }
  },
  head () {
    return {
      title: 'KetogenicFamily.com - Ketogenic recipes for the whole family',
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          hid: 'social-profile-links',
          type: 'application/ld+json',
          innerHTML: this.getSocialProfileLinks()
        }
      ]
    }
  },
  data () {
    return {
      overview: null
    }
  },
  methods: {
    getSocialProfileLinks () {
      return `{
        "@context": "http://schema.org/",
        "@type": "Person",
        "name": "Ketogenic Family",
        "url": "https://ketogenicfamily.com",
        "sameAs": [
            "https://www.facebook.com/theketogenicfamily",
            "https://www.instagram.com/ketogenic_family/"
          ]
      }`
    }
  }
}
</script>
