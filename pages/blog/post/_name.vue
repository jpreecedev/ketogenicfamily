<template>
  <div>
    <app-jumbotron :slim="true"
                   title="Keto Blog"
                   :lead="blogPost.title">
    </app-jumbotron>
    <section class="container">

      <div class="row">
        <div class="col blog-main">
          <app-blog-post :blogPost="blogPost"
                         :fullPost="true"
                         :index="0">
          </app-blog-post>
        </div><!-- /.blog-main -->

      </div><!-- /.row -->

    </section>

    <section class="container" id="comments">
      <div class="row">
        <div class="col blog-main">
          <h2 class="display-2">Discussion</h2>
          <vue-disqus shortname="ketogenicfamily"
                      :identifier="blogPost.key"
                      :url="'https://ketogenicfamily.com/blog/' + blogPost.key">
          </vue-disqus>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
/* eslint-disable */
import axios from '~/plugins/axios'
import '~/plugins/components'

export default {
  components: {},
  async asyncData({ params, error }) {
    const { data } = await axios.get(`/api/posts/${params.name}`)
    return {
      blogPost: data
    }
  },
  head() {
    return {
      title: `${this.blogPost.title} - KetogenicFamily.com`,
      __dangerouslyDisableSanitizers: ['script'],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPost.description
        },
        {
          hid: 'fb-og-url',
          property: 'og:url',
          content: `${this.blogPost.canonical}`
        },
        { hid: 'fb-og-type', property: 'og:type', content: 'article' },
        {
          hid: 'fb-og-title',
          property: 'og:title',
          content: `${this.blogPost.title}`
        },
        {
          hid: 'fb-og-description',
          property: 'og:description',
          content: this.blogPost.description
        },
        {
          hid: 'fb-og-image',
          property: 'og:image',
          content: `https://ketogenicfamily.com/img/posts/${this.blogPost.key
            .split(' ')
            .join('-')}/200x200.png`
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          content: `${this.blogPost.canonical}`
        }
      ],
      script: [
        {
          hid: 'article-structured-data',
          type: 'application/ld+json',
          innerHTML: this.getArticleStructuredData()
        }
      ]
    }
  },
  methods: {
    getArticleStructuredData() {
      return `{
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "${this.blogPost.title}",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${this.blogPost.canonical}"
        },
        "image": [
          "https://ketogenicfamily.com/img/posts/${this.blogPost.key
            .toLowerCase()
            .split(' ')
            .join('-')}/1x1/photo.png",
          "https://ketogenicfamily.com/img/posts/${this.blogPost.key
            .toLowerCase()
            .split(' ')
            .join('-')}/4x3/photo.png",
          "https://ketogenicfamily.com/img/posts/${this.blogPost.key
            .toLowerCase()
            .split(' ')
            .join('-')}/16x9/photo.png"
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
            "url": "https://ketogenicfamily.com/img/ketogenicfamily.png"
          }
        },
        "description": "${this.blogPost.description}"
      }`
    }
  }
}
</script>
