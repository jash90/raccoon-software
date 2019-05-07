<template>
  <div class="jumbotron">
    <b-row class="jcontainer">
      <div class="jimg">
        <b-img :src="require('../assets/logo-transparent.svg')" width="460" height="460"/>
      </div>
      <div class="jtext">
        <h1>RACCOON SOFTWARE</h1>
        <h4>Rozwiązujemy wasze problemy</h4>
        <b-button variant="light">KONTAKT</b-button>
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Jumbotron extends Vue {}
</script>

<style lang="scss" scoped>
.jumbotron {
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 0px;
  margin: 0px;
  background: #00adee;
  .jtext {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    color: white;
  }
  .jcontainer {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .jimg {
    display: flex;
    justify-content: center;
  }
  .jdescription {
    width: 100%;
    justify-content: flex-start;
    text-align: left;
  }
}
.btn {
  border-radius: 0px;
  padding: 6px 50px;
  color: #00adee;
  margin-top: 30px;
}
</style>
