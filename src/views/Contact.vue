<template>
  <div class="content">
    <b-form>
      <h1>Formularz kontaktowy</h1>
      <b-form-group
        id="exampleInputGroup1"
        label="Email:"
        label-for="exampleInput1"
      >
        <b-form-input
          id="exampleInput1"
          type="email"
          required
          placeholder="Podaj email"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Imię i nazwisko:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          required
          placeholder="Imię i nazwisko"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup3" label="Treść:" label-for="exampleInput3">
        <b-textarea></b-textarea>
      </b-form-group>

      <b-button variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}
</script>
<style lang="scss" scoped>
h1{
  padding: 30px;
}
.content{
  padding: 10px 30px;
}
</style>
