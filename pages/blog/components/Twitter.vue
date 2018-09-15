<template>
  <a class="twitter-share-button"
     href="https://twitter.com/share"
     data-size="large"
     :data-text="title"
     :data-url="href"
     data-hashtags="ketogenic,lowcarblife">Tweet</a>
</template>

<script>
  export default {
    name: 'twitter',
    props: {
      'title': {
        type: String,
        default: null
      },
      'href': {
        type: String,
        default: null
      }
    }
  }
</script>
