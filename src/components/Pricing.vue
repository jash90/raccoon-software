<template>
    <div id="pricing">
        <div class="content">
            <div class="title">
                <h1>Wycena</h1>
            </div>
            <p>
                Jeśli zainteresowała Cię nasza oferta, zapraszamy do przesłania
                zapytania o wycenę strony, aplikacji lub obu. Możesz do tego
                użyć poniższego formularza lub pozostawić do siebie kontakt. Na
                pewno oddzwonimy.
            </p>
            <div style="display: flex; flex-direction: row;">
                <div class="img-container">
                    <b-img :src="require('../assets/pricing.png')" />
                </div>
                <div class="form">
                    <h5 style="margin-top:10px;">Kontakt</h5>
                    <b-input placeholder="Imię i nazwisko" />
                    <b-input placeholder="Telefon" />
                    <b-input placeholder="Email" />
                    <h5>Wycena</h5>
                    <b-form-radio-group
                        id="checkbox-group-1"
                        v-model="selectedProduct"
                        :options="typeProduct"
                        name="flavour-1"
                        class="radio"
                    ></b-form-radio-group>
                    <b-textarea placeholder="Opis" />
                    <div class="button-container">
                        <b-button>Wyślij</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Pricing extends Vue {
    typeProduct = [
        { text: "Strona", value: 1 },
        { text: "Aplikacja", value: 2 },
        { text: "Strona i aplikacja", value: 3 }
    ];
    typePlatform = [
        { text: "Android", value: 1 },
        { text: "IOS", value: 2 }
    ];
    selectedProduct = "";
    selectedPlatform = [];
    tag = "";
    tags = []; //add list functionality
    selectedFunctionality = [];
    functionality = [
        { name: "Konta użytkowników", id: 1 },
        { name: "Intergracja z Facebookiem", id: 2 }
    ];
}
</script>

<style style="scss" scoped>
.title {
    font-weight: bold;
    padding: 20px 0px;
}

#pricing {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    justify-items: center;
    align-items: center;
}

.content {
    max-width: 900px;
    width: 100%;
}

.button-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding: 20px 0px;
}

.img-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}

.radio {
    display: flex;
    flex-direction: row;
    text-align: left;
}

@media (max-width: 675px) {
    .radio {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    img {
        display: none;
    }
}

img {
    align-self: flex-start;
    height: 335px;
    margin: 10px;
}

input {
    margin: 10px 0px;
}
textarea {
    margin: 10px 0px;
}
</style>
