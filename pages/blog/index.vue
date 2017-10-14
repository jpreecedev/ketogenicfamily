<template>
  <div>
    <app-jumbotron :slim="true"
                   title="Keto Blog"
                   lead="Follow our progress towards a permanent ketogenic lifestyle">
    </app-jumbotron>
    <section class="container">

      <div class="row">
        <div class="col-sm-8 blog-main">
          <app-blog-post v-for="(blogPost, index) in posts"
                         :key="index"
                         :blogPost="blogPost">
          </app-blog-post>
        </div><!-- /.blog-main -->

        <app-blog-sidebar>
        </app-blog-sidebar>

      </div><!-- /.row -->

    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import '~/plugins/components'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/posts')
    return {
      posts: data
    }
  },
  head () {
    return {
      title: 'KetogenicFamily.com - Follow our progress towards a permanent ketogenic lifestyle'
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar-module-inset {
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: .25rem;
    margin-bottom: 2rem;

    p {
      margin-bottom: 0;
    }
  }

  .about-img {
    width: 100%;
    height: auto;
  }

  .social {
    h4 {
      margin-bottom: 1rem;
      text-align: center;
    }
    a:first-of-type {
      img {
        margin-right: 12px;
      }
    }
    img {
      width: 25%;
    }
    .links {
      text-align: center;
    }
  }


</style>
