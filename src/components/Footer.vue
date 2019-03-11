<template>
  <div class="footer">
    <b-img :src="require('../assets/logo-only-icon.svg')"/>
    <p>Copyright 2019 © Raccoon Software</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0px;
  padding-left: 0px;
  align-items: center;
  p {
    margin-bottom: 0px;
  }
  img {
    width: 100px;
    height: 75px;
  }
}
</style>
