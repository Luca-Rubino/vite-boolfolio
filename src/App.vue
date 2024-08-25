<script setup>
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
</script>

<script>
export default {
  name: "vite boolfolio",
  components: {
    Nav,
    Main,
    Footer
  }
}
</script>

<template>
  <Nav props="nav"/>
  <Main props="main"/>
  <Footer props="footer"/> 
</template>

<style lang="scss">

</style>
