<script>
  export default {
    name: 'facebook',
    props: {
      'href': {
        type: String,
        default: null
      }
    },
    render (h) {
      return <div class="fb-share-button" data-href={this.href} data-layout="button" data-size="large"></div>
    }
  }
</script>
