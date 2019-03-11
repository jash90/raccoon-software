<template>
  <div class="top">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-img class="title-icon" :src="require('../assets/logo-only-icon.svg')"/>
      <b-navbar-brand href="/">Raccoon Software</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/about">Firma</b-nav-item>
          <b-nav-item href="/technology">Technologie</b-nav-item>
          <b-nav-item href="/princing">Wycena</b-nav-item>
          <b-nav-item href="/contact">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>
<style lang="scss" scoped>
.top {
  .title-icon {
    width: 40px;
    height: 40px;
    padding: 0px;
  }
}
</style>
