<template>
  <div>
    <div class="title">
      <h1>Technologie</h1>
    </div>

    <div class="content">
      <p>Tworząc specjalnie dla ciebie kierujemy się tym, aby produkt,
        <br>który tworzymy był nie tylko funkcjonalny, ale też przejrzysty i intuicyjny dla użytkownika.
        <br>Używamy sprawdzonych technologii webowych do tworzenia oprogramowania, dzięki czemu nasze strony
        <br>są nowoczesne, wygodne w obsłudze oraz łatwe w rozbudowie.
      </p>

      <hr class="my-4">

      <p>Tworzymy aplikacje mobile na platformy Android i IOS, które charakteryzują się przyjaznym i funkcjonalnych interfejsem,
        <br>pięknym wyglądem oraz szybkim działaniem. Zastosowanie technologii hybrydowych pozwala na szybsze tworzenie aplikacji
        <br>oraz wprowadzanie późniejszych zmian w wyglądzie i działaniu.
      </p>
    </div>

    <b-img :src="require('../assets/IOS.svg')"/>
    <b-img :src="require('../assets/Android.svg')"/>
    <b-img :src="require('../assets/Web.svg')"/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Technology extends Vue {}
</script>
<style lang="scss">
.title {
  font-weight: bold;
  padding: 30px 0px;
}
.content {
  padding: 0px 20px;
}
img {
  width: 200px;
  height: 200px;
  padding: 0px 10px;
}
</style>
