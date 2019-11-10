<template>
  <div>
    <Navigation/>
    <Jumbotron/>
    <About/>
    <Technology/>
    <Pricing/>
    <Carousel/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import About from '@/components/About.vue';
import Technology from '@/components/Technology.vue';
import Pricing from '@/components/Pricing.vue';
import Carousel from '@//components/Carousel.vue'
import Contact from '@/components/Contact.vue';
@Component({
  components: {
    Footer,
    Navigation,
    Jumbotron,
    About,
    Contact,
    Technology,
    Pricing,
    Carousel,
  },
})
export default class Home extends Vue {}
</script>
