<template>
  <nav
    class="navbar is-success is-fixed-top"
    role="navigation"
    aria-label="main navigation"
    v-auto-animate
  >
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          :class="{ 'is-active': showMobileNav }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-end">
          <div class="navbar-start">
            <RouterLink
              @click="showMobileNav = false"
              to="/"
              class="navbar-item"
              active-class="is-active"
              >Notes</RouterLink
            >
            <RouterLink
              @click="showMobileNav = false"
              to="/stats"
              class="navbar-item"
              >Stats</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
IMPORTS
*/
import { ref } from "vue";
import { vAutoAnimate } from "@formkit/auto-animate";

/*
  MOBILE NAV
*/
const showMobileNav = ref(false);
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
