<template>
  <article class="blog-post">
      <header>
        <nuxt-link :to="getPostUrl(blogPost.slug)">
          <h1 class="display-4">{{ blogPost.title }}</h1>
        </nuxt-link>
        <p class="meta">Published on <time>{{ blogPost.date | formatDate }}</time>, by {{ blogPost.publisher }}.</p>
        <div v-if="fullPost"
             class="social-links d-flex flex-row">
          <twitter :title="blogPost.title"
                   :href="blogPost.canonical"></twitter>
          <facebook :href="blogPost.canonical"></facebook>
        </div>
      </header>
      <section class="blog-post-content" v-html="this.blogPost.content">
      </section>
    </div>
  </article><!-- /.blog-post -->
</template>

<script>
  import facebook from './Facebook'
  import twitter from './Twitter'

  export default {
    name: 'post',
    components: {
      facebook, twitter
    },
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

</style>
