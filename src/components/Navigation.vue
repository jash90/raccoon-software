<template>
    <div class="navigation">
        <div>
            <b-img
                class="title-icon"
                :src="require('../assets/logo-text-right.svg')"
                width="160"
                height="40"
            />
        </div>
        <div class="nav-buttons">
            <b-navbar toggleable="md">
                <b-navbar-toggle target="nav_collapse" />
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item href="#home">Strona główna</b-nav-item>
                        <b-nav-item href="#about">O mnie</b-nav-item>
                        <b-nav-item href="#technology">Technologie</b-nav-item>
                        <b-nav-item href="#pricing">Kontakt</b-nav-item>
                        <!-- <b-nav-item href="#contact">Kontakt</b-nav-item> -->
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>

<style style="scss" scoped>
.navigation {
    display: flex;
    flex: 1;
}

img {
    margin: 10px;
    position: absolute;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    width: 100%;
}

.nav-buttons {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
}

.navbar-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
}
</style>
