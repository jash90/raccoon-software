<template>
    <div id="footer">
        <div class="footer-container">
            <div class="img-container">
                <b-img :src="require('../assets/logo-transparent.svg')" />
            </div>

            <div class="text-container">
                <div class="center">
                    <p class="title">Dane do kontaktu:</p>
                    <p>Firma Raccoon Software</p>
                    <p>Bartłomiej Zimny</p>
                    <p>ul. Zawale 21B</p>
                    <p>38-100 Strzyżów</p>
                    <p>NIP: 819654690</p>
                    <p>729 143 396</p>
                </div>
            </div>

            <div class="text-container">
                <div class="center">
                    <p class="title">NAWIGACJA</p>
                    <a href="#home"><p>STRONA GŁÓWNA</p></a>
                    <a href="#about"><p>O NAS</p></a>
                    <a href="#technology"><p>TECHNOLOGIE</p></a>
                    <a href="#pricing"><p>WYCENA</p></a>
                    <a href="#contact"><p>KONTAKT</p></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright 2019 © Raccoon Software, Bartłomiej Zimny</p>
            <p>Page design by Bartosz Hnat</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
#footer {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;

    img {
        width: 200px;
        height: 200px;
        opacity: 0.5;
        filter: alpha(opacity=50);
    }

    p {
        text-align: left;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        border-top: 2px solid #e4e4e4;
        padding: 16px 20px 16px 20px;
        align-items: center;
        justify-content: center;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 20px;
        align-items: center;
        justify-content: flex-start;
    }

    .img-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .footer-container {
        display: flex;
        flex-direction: row;
        padding: 20px 40px;
        flex-wrap: wrap;
    }

    .title {
        font-weight: bold;
    }

    .center {
        display: flex;
        flex-direction: column;
        width: 170px;
    }

    @media (max-width: 800px) {
        .center {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
    @media (max-width: 700px) {
        .img-container {
            display: none;
        }
    }

    a:hover {
        text-decoration: none;
    }
}
</style>
