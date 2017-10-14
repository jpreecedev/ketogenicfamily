<template>
  <div class="col-sm-3 offset-sm-1 blog-sidebar">
    <aside class="sidebar-module sidebar-module-inset">
      <img class="about-img mb-3" src="~/assets/img/ketogenicfamily.png" alt="Ketogenic Family" />
      <h4>About</h4>
      <p>Follow along as Jon, Sian &amp; Oliver embark upon a journey together towards living a healthier, diet free life over the long term by applying the principals that form the ketogenic diet.</p>
    </aside>
    <aside class="sidebar-module social">
      <h4>Follow on social media</h4>
      <div class="links">
        <a href="https://www.facebook.com/theketogenicfamily" target="_blank">
            <img src="~/assets/img/icons/facebook.svg" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/ketogenic_family/" target="_blank">
          <img src="~/assets/img/icons/instagram.svg" alt="Instagram">
        </a>
      </div>
    </aside>
  </div><!-- /.blog-sidebar -->
</template>

<script>
  export default {
    name: 'blog-sidebar'
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

