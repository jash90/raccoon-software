<template>
  <div id="technology">
    <div style="max-width: 900px;">
      <div class="title">
        <h1>Technologie</h1>
      </div>

      <div class="content">
        <p>
          Tworząc oprogramowanie kierujemy się tym, aby produkt, przez nas oferowany był nie tylko funkcjonalny i
          przejrzysty , ale również intuicyjny i dopasowany do potrzeb użytkownika.
          Używamy sprawdzonych technologii webowych do tworzenia oprogramowania, dzięki czemu nasze strony są
          nowoczesne, wygodne w obsłudze oraz łatwe w rozbudowie.
        </p>

        <hr class="my-4">

        <p>
          Tworzymy aplikacje mobile na platformy Android i IOS, które charakteryzują się przyjaznym i
          funkcjonalnych interfejsem,
          pięknym wyglądem oraz szybkim działaniem. Zastosowanie technologii hybrydowych pozwala na szybsze
          tworzenie aplikacji
          oraz wprowadzanie późniejszych zmian w wyglądzie i działaniu.
        </p>
      </div>
      <div class="img-container">
        <b-img :src="require('../assets/IOS.svg')"/>
        <b-img :src="require('../assets/Android.svg')"/>
        <b-img :src="require('../assets/Web.svg')"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Technology extends Vue {}
</script>

<style style="scss" scoped>
  .title {
    font-weight: bold;
  }

  .content {
    text-align: left;
  }

  img {
    max-width: 160px;
    max-height: 160px;
    width: 20%;
    height: auto;
    padding: 5px;
  }

  #technology {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    padding: 20px;
    justify-items: center;
    align-items: center;
  }

  .img-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>
