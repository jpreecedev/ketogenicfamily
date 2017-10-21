<template>
  <div class="fb-share-button" :data-href="href" data-layout="button" data-size="large"></div>
</template>

<script>
  export default {
    name: 'facebook',
    props: {
      'href': {
        type: String,
        default: null
      }
    }
  }
</script>
