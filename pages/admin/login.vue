<template>
  <div>
    <section class="container">
      <login-form></login-form>
    </section>
  </div>
</template>

<script>
// import axios from '~/plugins/axios'
import loginForm from './components/login-form'

export default {
  layout: 'admin',
  components: {
    loginForm
  },
  head () {
    return {
      title: 'KetogenicFamily.com - Log In'
    }
  },
  data () {
    return {
    }
  }
}
</script>
