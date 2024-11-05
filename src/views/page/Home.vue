<script setup>
import { RouterView } from 'vue-router';
import Nav from '../../components/Nav.vue'
import TextBase from '../../components/TextBase.vue'
import Footer from '../../components/Footer.vue'
</script>

<template>
  <Nav></Nav>
  <h1>
    Home
  </h1>
  <TextBase/>
  <Footer></Footer>
  <router-view></router-view>
</template>
