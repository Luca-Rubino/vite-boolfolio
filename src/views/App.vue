<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
</script>

<script>
export default {
  name: 'App',
};
</script>

<template>
  <Nav class="navbar bg-primary" data-bs-theme="dark"/>
  <router-view></router-view>
  <Footer/>
</template>

<style lang="scss" scoped>

</style>
