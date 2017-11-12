<template>
  <article class="blog-post pb-3" :class="{ 'pt-5': index > 0, 'bordered': index > 0 }">
      <header>
        <app-social v-if="fullPost"></app-social>
        <img v-if="!fullPost"
             class="lead-img"
             :src="'/img/posts/' + blogPost.key + '/16x9/photo.png'"
             :alt="blogPost.title">
        <nuxt-link :to="getPostUrl(blogPost.slug)">
          <h1 class="display-4">{{ blogPost.title }}</h1>
        </nuxt-link>
        <p class="meta">Published on <time>{{ blogPost.date | formatDate }}</time>, by {{ blogPost.publisher }}.</p>
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
      },
      'index': {
        type: Number,
        default: 0,
        required: true
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
  @import '~assets/styles/mixins';

  .blog-post {
    &.bordered {
      border-top: 1px solid rgba(0,0,0,.1);
    }
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

  .lead-img {
    border-radius: 4px;
    margin: 0 0 1rem 0;
    width: 100%;
    height: auto;

    @include tablet {
      width: auto;
    }
  }

</style>
