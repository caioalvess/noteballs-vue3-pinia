<template>
  <Navbar />

  <div class="div container is-max-desktop px-2 py-4">
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
