<template>
  <article class="blog-post">
      <header>
        <nuxt-link :to="getPostUrl(blogPost.slug)">
          <h1 class="display-4">{{ blogPost.title }}</h1>
        </nuxt-link>
        <p class="meta">Published on <time>{{ blogPost.date | formatDate }}</time>, by {{ blogPost.publisher }}.</p>
        <div v-if="fullPost"
             class="social-links">
          <div class="fb-share-button" :data-href="blogPost.canonical" data-layout="button"></div>
        </div>
      </header>
      <section class="blog-post-content" v-html="this.blogPost.content">
      </section>
    </div>
  </article><!-- /.blog-post -->
</template>

<script>
  export default {
    name: 'post',
    props: {
      'blogPost': {
        type: Object,
        default: null,
        required: true
      },
      'fullPost': {
        type: Boolean,
        default: true,
        required: false
      }
    },
    methods: {
      getPostUrl (slug) {
        if (slug.indexOf('post/') > -1) {
          return slug.slice(5)
        }
        return `/blog/post/${slug}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-post {
    header a {
      color: inherit;
    }
  }

  .meta {
    color: #999;
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 1.25rem;
    }
  }

  .social-links {
    margin: .5rem 0;
  }

</style>
