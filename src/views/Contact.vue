<template>
  <div class="content">
    <b-form>
      <h1>Formularz kontaktowy</h1>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-email`">Email:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="email"/>
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-email`">Imię i nazwisko:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="text"/>
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-text`">Temat:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="text"/>
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-text`">Treść:</label>
        </b-col>
        <b-col sm="9">
          <b-textarea></b-textarea>
        </b-col>
      </b-row>

      <b-button class="button" variant="primary">Wyślij email</b-button>
    </b-form>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}
</script>
<style lang="scss" scoped>
h1 {
  padding: 30px;
}
.content {
  padding: 10px 30px;
}
.row {
  padding: 10px 0px;
}
.button {
  margin-top:30px;
}
</style>
