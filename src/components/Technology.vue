<template>
    <div id="technology">
        <div style="max-width: 900px;">
            <div class="title">
                <h1>Technologie</h1>
            </div>

            <div class="content">
                <p>
                    Co nam przyświeca? 
                    <br/>
                    Kiedy tworzymy oprogramowanie, kierujemy
                    się kilkoma zasadami Po pierwsze chcemy, aby produkt, przez
                    nas oferowany był funkcjonalny i przejrzysty. Jednocześnie
                    tworzymy strony intuicyjne, które będą łatwe w obsłudze.
                    Najważniejsze natomiast jest dla nas zadowolenie klienta,
                    dlatego strony dopasowujemy do potrzeb i wymagań
                    użytkownika. U nas możesz mieć wpływ na każdy etap
                    powstawania Twojej strony. Co więcej, projekty są na tyle
                    plastyczne, że możemy rozbudować Twoją stronę, kiedy tylko
                    będziesz chciał.
                </p>

                <hr class="my-4" />

                <p>
                    Tworzymy także aplikacje mobile na platformy Android i IOS,
                    które charakteryzują się przyjaznym i funkcjonalnych
                    interfejsem, pięknym wyglądem oraz szybkim działaniem.
                    Zastosowanie technologii hybrydowych pozwala na szybsze
                    tworzenie aplikacji oraz wprowadzanie późniejszych zmian w
                    wyglądzie i działaniu. Dlatego Twoja wymarzona aplikacji
                    może być pożyteczna i estetyczna oraz zmieniać się wraz z
                    możliwościami technologicznymi i trendami.
                </p>
            </div>
            <div class="img-container">
                <b-img :src="require('../assets/IOS.svg')" />
                <b-img :src="require('../assets/Android.svg')" />
                <b-img :src="require('../assets/Web.svg')" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
