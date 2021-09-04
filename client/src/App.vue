<template>
  <div id="app" class="d-flex flex-column h-100">
    <Nav />
    <div class="container flex-grow-1">
      <error />
      <div class="mt-5">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav'
import Error from './components/Error'
import Footer from './components/Footer.vue'
export default {
  components: {
    Nav,
    Error,
    Footer
  },
}
</script>
