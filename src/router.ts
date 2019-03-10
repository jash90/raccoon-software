import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";
import Pricing from "./views/Pricing.vue";
import Technology from "./views/Technology.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/pricing",
      name: "pricing",
      component: Pricing
    },
    {
      path: "/technology",
      name: "technology",
      component: Technology
    },
  ]
});
