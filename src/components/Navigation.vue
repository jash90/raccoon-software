<template>
  <div class="navigation">
    <div>
      <b-img
        class="title-icon"
        :src="require('../assets/logo-text-right.svg')"
        width="160"
        height="40"
      />
    </div>
    <div class="nav-buttons">
      <b-navbar toggleable="md">
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="/about">Strona główna</b-nav-item>
            <b-nav-item href="/about">Firma</b-nav-item>
            <b-nav-item href="/technology">Technologie</b-nav-item>
            <b-nav-item href="/pricing">Wycena</b-nav-item>
            <b-nav-item href="/contact">Kontakt</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>

<style style="scss" scoped>
.navigation {
  display: flex;
  flex: 1;
}
img {
  margin: 10px;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
}
.nav-buttons {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
