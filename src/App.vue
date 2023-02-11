<template>
  <Navbar />

  <div class="container is-max-desktop px-2 py-4 pt-5 mt-6">
    <RouterView />
  </div>
</template>

<script setup>
/*
  IMPORTS
*/
import Navbar from "./components/Layout/Navbar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
