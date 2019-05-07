<template>
  <div class="home">
    <Navigation/>
    <Jumbotron/>
    <About/>
    <Technology/>
    <Pricing/>
    <Carousel/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import About from '@/components/About.vue';
import Technology from '@/components/Technology.vue';
import Pricing from '@/components/Pricing.vue';
import Carousel from '@//components/Carousel.vue'
@Component({
  components: {
    Navigation,
    Jumbotron,
    About,
    Technology,
    Pricing,
    Carousel,
  },
})
export default class Home extends Vue {}
</script>
