<template>
  <div class="content">

  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>
<style lang="scss">
.content {
  .jumbotron {
    padding-bottom: 0px;
    margin-bottom: 0px;
    h1 {
      font-size: 4.5rem;
      font-weight: 300;
      line-height: 1.2;
    }
  }
}
</style>