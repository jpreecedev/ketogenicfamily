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

        <div class="col-sm-3 offset-sm-1 blog-sidebar">
          <aside class="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </aside>
          <aside class="sidebar-module social">
            <h4>Share on social media</h4>
            <div>
              <a href="#">
                  <img src="~/assets/img/icons/facebook.svg">
              </a>
              <a href="#">
                <img src="~/assets/img/icons/instagram.svg">
              </a>
            </div>
          </aside>
        </div><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import '~/plugins/components'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/posts/2017_10_20-my-first-5-day-fast')
    return {
      posts: [data]
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
      width: 47%;
    }
  }


</style>
