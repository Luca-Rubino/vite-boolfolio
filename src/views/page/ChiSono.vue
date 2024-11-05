<script setup>
import { RouterView } from 'vue-router';
import Nav from '../../components/Nav.vue'
import Footer from '../../components/Footer.vue'
</script>

<template>
  <Nav></Nav>
  <h1>
    Chi Sono
  </h1>
  <Footer></Footer>
  <router-view></router-view>
</template>
