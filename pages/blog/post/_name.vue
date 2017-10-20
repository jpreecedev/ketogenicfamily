<template>
  <div>
    <app-jumbotron :slim="true"
                   title="Keto Blog"
                   lead="Follow our progress towards a permanent ketogenic lifestyle">
    </app-jumbotron>
    <section class="container">

      <div class="row">
        <div class="col-xs-12 col-md-8 blog-main">
          <app-blog-post :blogPost="blogPost">
          </app-blog-post>
        </div><!-- /.blog-main -->

        <app-blog-sidebar>
        </app-blog-sidebar>

      </div><!-- /.row -->

    </section>

    <section class="container mt-5" id="comments">
      <h2 class="display-2">Discussion</h2>
      <vue-disqus shortname="ketogenicfamily"
                  :identifier="blogPost.key"
                  :url="'https://ketogenicfamily.com/blog/' + blogPost.key">
      </vue-disqus>
    </section>

  </div>
</template>

<script>
import axios from '~/plugins/axios'
import '~/plugins/components'
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  components: {
    VueDisqus
  },
  async asyncData ({ params, error }) {
    let { data } = await axios.get(`/api/posts/${params.name}`)
    return {
      blogPost: data
    }
  },
  head () {
    return {
      title: `${this.blogPost.title} - KetogenicFamily.com`,
      __dangerouslyDisableSanitizers: ['script'],
      meta: [
        { hid: 'description', name: 'description', content: `${this.blogPost.title} - KetogenicFamily.com` }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', content: `${this.blogPost.canonical}` }
      ],
      script: [
        {
          hid: 'artucke-structured-data',
          type: 'application/ld+json',
          innerHTML: this.getArticleStructuredData()
        }
      ]
    }
  },
  methods: {
    getArticleStructuredData () {
      return `{
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "${this.blogPost.title}",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${this.blogPost.canonical}"
        },
        "image": [
          "http://ketogenicfamily.com/img/posts/${this.blogPost.key.toLowerCase().split(' ').join('-')}/1x1/photo.png",
          "http://ketogenicfamily.com/img/posts/${this.blogPost.key.toLowerCase().split(' ').join('-')}/4x3/photo.png",
          "http://ketogenicfamily.com/img/posts/${this.blogPost.key.toLowerCase().split(' ').join('-')}/16x9/photo.png"
        ],
        "datePublished": "${this.blogPost.date}",
        "dateModified": "${this.blogPost.modified}",
        "author": {
          "@type": "Person",
          "name": "${this.blogPost.publisher}"
        },
        "publisher": {
          "@type": "Organization",
          "name": "KetogenicFamily.com",
          "logo": {
            "@type": "ImageObject",
            "url": "http://ketogenicfamily.com/img/ketogenicfamily.png"
          }
        },
        "description": "${this.blogPost.description}"
      }`
    }
  }
}
</script>
