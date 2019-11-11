<template>
  <div>
    <Navigation/>
    <Jumbotron/>
    <About/>
    <Technology/>
    <Pricing/>
    <!--    <Carousel/>-->
    <Contact/>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Carousel from "@//components/Carousel.vue";
  import About from "@/components/About.vue";
  import Contact from "@/components/Contact.vue";
  import Footer from "@/components/Footer.vue";
  import Jumbotron from "@/components/Jumbotron.vue";
  import Navigation from "@/components/Navigation.vue";
  import Pricing from "@/components/Pricing.vue";
  import Technology from "@/components/Technology.vue";
  import {Component, Vue} from "vue-property-decorator";

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
