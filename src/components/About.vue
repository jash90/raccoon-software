<template>
  <div class="about">
    <b-row>
      <b-col class="img-container">
        <b-img :src="require('../assets/logo-transparent.svg')" width="330" height="330" class="d-none d-xl-block"/>
      </b-col>
      <b-col lg="12" xl="6" class="text-container">
        <h1 class="title">O mnie</h1>

        <div class="content">
          <p>
            Nazywam się Bartłomiej Zimny i od marca 2019 r. prowadzę działalność gospodarczą.
            <br />Firma jest dla mnie następnym, etapy pracy jako programista.
            <br />Programuje od około 5 lat, od 1,5 roku robię to komercyjnie.
            <br />który tworzymy był nie tylko funkcjonalny, ale też przejrzysty i intuicyjny dla użytkownika.
            <br />Używamy sprawdzonych technologii webowych do tworzenia oprogramowania, dzięki czemu nasze strony
            <br />są nowoczesne, wygodne w obsłudze oraz łatwe w rozbudowie.
          </p>

          <hr class="my-4" />

          <p>
            Tworzymy aplikacje mobile na platformy Android i IOS, które charakteryzują się przyjaznym i funkcjonalnych interfejsem,
            <br />pięknym wyglądem oraz szybkim działaniem. Zastosowanie technologii hybrydowych pozwala na szybsze tworzenie aplikacji
            <br />oraz wprowadzanie późniejszych zmian w wyglądzie i działaniu.
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style style="scss" scoped>
.title {
}
.content {
  text-align: justify;
}
.about {
}
.text-container {
  margin: 20px;
}
img {
  max-width: 90%;
  padding: 30px;
  background-color: #00adee;
}
.img-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
