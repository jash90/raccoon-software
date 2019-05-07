<template>
  <div class="technology">
    <div class="title">
      <h1>Technologie</h1>
    </div>

    <div class="content">
      <p class="text-justify">
        Tworząc specjalnie dla ciebie kierujemy się tym, aby produkt,
        <br>który tworzymy był nie tylko funkcjonalny, ale też przejrzysty i intuicyjny dla użytkownika.
        <br>Używamy sprawdzonych technologii webowych do tworzenia oprogramowania, dzięki czemu nasze strony
        <br>są nowoczesne, wygodne w obsłudze oraz łatwe w rozbudowie.
      </p>

      <hr class="my-4">

      <p class="text-justify">
        Tworzymy aplikacje mobile na platformy Android i IOS, które charakteryzują się przyjaznym i funkcjonalnych interfejsem,
        <br>pięknym wyglądem oraz szybkim działaniem. Zastosowanie technologii hybrydowych pozwala na szybsze tworzenie aplikacji
        <br>oraz wprowadzanie późniejszych zmian w wyglądzie i działaniu.
      </p>
    </div>
    <div class="img-container">
      <b-img :src="require('../assets/IOS.svg')"/>
      <b-img :src="require('../assets/Android.svg')"/>
      <b-img :src="require('../assets/Web.svg')"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Technology extends Vue {}
</script>

<style style="scss" scoped>
.title {
  font-weight: bold;
  padding: 30px 0px;
}
.content {
  text-align: justify;
  padding: 0px 20px;
}
img {
  max-width: 160px;
  max-height: 160px;
  width: 20%;
  height: auto;
  padding: 0px 10px;
}
.technology {
  background-color: #f5f5f5;
  padding: 20px;
}
</style>
