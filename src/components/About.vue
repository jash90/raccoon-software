<template>
    <div id="about">
        <div style="max-width: 900px;">
            <div class="title">
                <h1>O mnie</h1>
            </div>
            <div class="content">
                <p>
                    Nazywam się Bartłomiej Zimny i od marca 2019 roku prowadzę
                    firmę „Raccoon Software”. Programowaniem zajmuję się od
                    ponad 5 lat. Moja firma bazuje na sprawdzonych
                    technologiach, które służą do tworzenia oprogramowania.
                    Dzięki temu tworzone strony są nowoczesne, wygodne w
                    obsłudze oraz łatwe w rozbudowie. Po więcej szczegółów
                    zapraszam do kontaktu telefonicznego lub poprzez formularz.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style style="scss" scoped>
.title {
    font-weight: bold;
}

.content {
    text-align: left;
    padding: 20px 0px;
}

img {
    max-width: 160px;
    max-height: 160px;
    width: 20%;
    height: auto;
    padding: 5px;
}

#about {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    justify-items: center;
    align-items: center;
}
</style>
