<template>
  <article class="blog-post">
      <header>
        <h2>{{ blogPost.title }}</h2>
      </header>
      <p class="meta">Published on {{ blogPost.date | formatDate }} by {{ blogPost.publisher }}</p>
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
    }
  }
</script>

<style lang="scss" scoped>
  .blog-post {
    margin-bottom: 4rem;
  }

  .meta {
    color: #999;
    margin-bottom: 1.25rem;
  }
</style>
