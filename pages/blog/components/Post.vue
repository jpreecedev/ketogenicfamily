<script>
  import facebook from './Facebook'
  import twitter from './Twitter'
  import { formatDate } from '../../../plugins/filters'
  import classNames from 'classnames'

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
    },
    render (h) {
      const articleClasses = classNames(
        'blog-post pb-3',
        { 'pt-5': this.index > 0 },
        { 'bordered': this.index > 0 }
      )

      return <no-ssr>
        <article class={ articleClasses }>
          <header>
            {
              this.fullPost && <app-social></app-social>
            }
            {
              !this.fullPost && <img class="lead-img" src={ '/img/posts/' + this.blogPost.key + '/16x9/photo.png' } alt={ this.blogPost.title } />
            }

            <nuxt-link to={ this.getPostUrl(this.blogPost.slug) }>
              <h1 class="display-4">{ this.blogPost.title }</h1>
            </nuxt-link>
            <p class="meta">Published on <time>{ formatDate(this.blogPost.date) }</time>, by { this.blogPost.publisher }.</p>
          </header>
          <section class="blog-post-content" domPropsInnerHTML={ this.blogPost.content }></section>
        </article>
      </no-ssr>
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
