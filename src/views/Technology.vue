<template>
  <div class="content">
    <b-jumbotron>
      <template slot="header">Techonologie</template>

      <template slot="lead">
        Tworząc aplikacje i strony specjalnie dla ciebie kierujemy się tym, aby produkt, <br>
        który tworzymy dla ciebie był nie tylko funkcjonalny, ale też ładny i intuicyjny dla użytkownika.
      </template>

      <hr class="my-4">

      <p>
       Używamy sprawdzonych technologii w celu 
      </p>
    </b-jumbotron>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Technology extends Vue {}
</script>
