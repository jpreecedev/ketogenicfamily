<template>
  <div>
    <app-jumbotron :slim="true"
                   title="Keto Blog"
                   lead="Follow our progress towards a permanent ketogenic lifestyle">
    </app-jumbotron>
    <section class="container">

      <div class="row">
        <div class="col-sm-8 blog-main">
          <app-blog-post :blogPost="blogPost">
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
  async asyncData ({ params, error }) {
    let { data } = await axios.get(`/api/posts/${params.name}`)
    return {
      blogPost: data
    }
  },
  head () {
    return {
      title: `KetogenicFamily.com - ${this.blogPost.title}`
    }
  }
}
</script>
