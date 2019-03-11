<template>
  <b-container fluid class="content">
    <b-row>
      <b-col sm="5" style="display:flex;align-items:center;justify-content:center;">
        <b-img :src="require('../assets/logo-only-icon.svg')" height="200" width="200"/>
      </b-col>
      <b-col sm="7" style="display:flex; justify-content:center;align-items:center;">
        <p id="title">Raccoon Software</p>
      </b-col>
      <b-col class="p-10">
        <p id="subtitle">Rozwiązujemy twoje problemy.</p>
        <b-button variant="primary" href="/princing">Wycena</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  padding: 50px 0px;
}

#title {
  padding: 0px;
  margin: 0px;
  font-size: 50px;
  font-weight: bold;
  text-align: center !important;
}

#subtitle {
  padding: 0px;
  margin: 0px;
  font-size: 30px;
  text-align: center !important;
  padding: 20px 10px;
}
</style>


