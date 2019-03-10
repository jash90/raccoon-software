<template>
    <div class="content">
      <b-jumbotron header="Raccoon Software" lead="Bootstrap 4 Components for Vue.js 2">
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">Wycena</b-button>
        <b-img :src="require('../assets/logo-transparent.svg')" width="200" height="200"/>
      </b-jumbotron>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Pricing extends Vue {}
</script>
