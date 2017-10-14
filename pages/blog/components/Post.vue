<template>
  <article class="blog-post">
      <header>
        <nuxt-link :to="getPostUrl(blogPost.slug)">
          <h1 class="display-4">{{ blogPost.title }}</h1>
        </nuxt-link>
        <p class="meta">Published on <time>{{ blogPost.date | formatDate }}</time>, by {{ blogPost.publisher }}.</p>
      </header>
      <section v-html="blogPost.content">
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
      }
    },
    methods: {
      getPostUrl (slug) {
        if (slug.indexOf('posts/') > -1) {
          return slug.slice(6)
        }
        return `/blog/post/${slug}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-post {
    margin-bottom: 4rem;

    header a {
      color: inherit;
    }
  }

  .meta {
    color: #999;
    margin-bottom: 1.25rem;
  }
</style>
