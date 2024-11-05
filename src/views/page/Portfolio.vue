<script setup>
import { RouterView } from 'vue-router';
import Nav from '../../components/Nav.vue'
import Footer from '../../components/Footer.vue'
</script>

<template>
  <router-view></router-view>
  <Nav></Nav>
  <h1>
    Portfolio
  </h1>
  <Footer></Footer>
</template>
