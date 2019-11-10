<template>
  <div class="about">
    <div style="max-width: 900px;">
<!--      <b-col class="img-container">-->
<!--        <b-img :src="require('../assets/logo-transparent.svg')" width="330" height="330" class="d-none d-xl-block"/>-->
<!--      </b-col>-->
        <div class="title">
          <h1>O mnie</h1>
        </div>


        <div class="content">
          <p>
            Nazywam się Bartłomiej Zimny i od marca 2019 r. prowadzę działalność gospodarczą.
         Firma jest dla mnie następnym, etapy pracy jako programista.
           Programuje od około 5 lat, od 1,5 roku robię to komercyjnie.
            który tworzymy był nie tylko funkcjonalny, ale też przejrzysty i intuicyjny dla użytkownika.
            Używamy sprawdzonych technologii webowych do tworzenia oprogramowania, dzięki czemu nasze strony
           są nowoczesne, wygodne w obsłudze oraz łatwe w rozbudowie.
          </p>

          <hr class="my-4" />

          <p>
            Tworzymy aplikacje mobile na platformy Android i IOS, które charakteryzują się przyjaznym i funkcjonalnych interfejsem,
            pięknym wyglądem oraz szybkim działaniem. Zastosowanie technologii hybrydowych pozwala na szybsze tworzenie aplikacji
            oraz wprowadzanie późniejszych zmian w wyglądzie i działaniu.
          </p>
        </div>
      </div>
      </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
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
  .about {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    padding: 20px;
    justify-items: center;
    align-items: center;

  }
</style>
