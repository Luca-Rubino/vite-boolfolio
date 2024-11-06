<script setup>
import Nav from '../components/Nav.vue';
import { RouterView } from 'vue-router';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Nav></Nav>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
@use '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
