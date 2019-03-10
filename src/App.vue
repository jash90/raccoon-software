<template>
  <div id="app">
    <div class="top">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-img :src="require('./assets/logo-only-icon.svg')" width="40" height="40"/>
        <b-navbar-brand href="/">Raccoon Software</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="/about">Firma</b-nav-item>
            <b-nav-item href="/technology">Technologie</b-nav-item>
            <b-nav-item href="/princing">Wycena</b-nav-item>
            <b-nav-item href="/contact">Kontakt</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
    <b-row>
      <div style="padding-left:15px; display:flex; flex-direction:row;">
          <b-img :src="require('./assets/logo-only-icon.svg')" width="40" height="40"/>
          <p>Copyright 2019 © Raccoon Software</p>
      </div>
      <!-- <b-col md="8">
        <b-row style="display:flex; flex-direction:row; justify-content:center">
          <b-col sm="6">
            <p>tel: 729143396</p>
          </b-col>
          <b-col sm="6">
            <p>email: bartlomiejzimny@outlook.com</p>
          </b-col>
        </b-row>
      </b-col> -->
    </b-row>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0px;
  padding-left: 0px;
  .copyright {
    display: flex;
    flex-direction: row;
    .row{

    }
  }
  .contact {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  p {
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
}
</style>
