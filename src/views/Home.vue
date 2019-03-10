<template>
  <div class="content">
    <b-jumbotron>
      <div style="display:flex;">
       <b-img :src="require('../assets/logo-transparent.svg')" width="200" height="200" style="flex:1,align-self:center;"/>
      <h1>Raccoon Software</h1>
      </div>
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">Wycena</b-button>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

