<template>
    <div id="home">
        <b-row class="jcontainer">
            <div class="jimg">
                <b-img :src="require('../assets/logo-transparent.svg')" />
            </div>
            <div class="jtext">
                <h2>RACCOON SOFTWARE</h2>
                <h4>Rozwiązujemy Wasze problemy</h4>
                <b-button variant="light">KONTAKT</b-button>
            </div>
        </b-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Jumbotron extends Vue {}
</script>

<style lang="scss" scoped>
#home {
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 0px;
    margin: 0px;
    background: #00adee;
    padding: 20px;

    .jtext {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        color: white;
    }

    .jcontainer {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .jimg {
        display: flex;
        justify-content: center;
    }

    .jdescription {
        width: 100%;
        justify-content: flex-start;
        text-align: left;
    }
}

.btn {
    border-radius: 0px;
    color: #00adee;
    margin-top: 10px;
}

img {
    width: 460px;
    height: 460px;
}

@media (max-width: 800px) {
    img {
        max-width: 100%;
    }
    h1 {
        font-size: 32px;
    }
}
</style>
