<template>
  <div class="content">
    <b-form>
      <h1>Wycena aplikacji</h1>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-email`">Rodzaj:</label>
        </b-col>
        <b-col sm="9">
          <b-form-group>
            <b-form-radio-group v-model="selectedProduct" :options="typeProduct"/>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="row" v-show="selectedProduct > 1">
        <b-col sm="3">
          <label :for="`type-email`">Platformy:</label>
        </b-col>
        <b-col sm="9">
          <b-form-group>
            <b-form-checkbox-group id="checkboxes2" name="flavour2" v-model="selectedPlatform">
              <b-form-checkbox
                v-for="platform in typePlatform"
                :key="platform.value"
                :value="platform"
              >{{platform.text}}</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-text`">Funkcjonalności:</label>
        </b-col>
        <b-col sm="9">
          <vue-tags-input
            v-model="tag"
            :tags="tags"
            @tags-changed="newTags => tags = newTags"
            placeholder="Dodaj funkcję"
          />
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-text`">Opis:</label>
        </b-col>
        <b-col sm="9">
          <b-textarea></b-textarea>
        </b-col>
      </b-row>

      <h3>Dane do kontaktu</h3>

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
          <label :for="`type-email`">Email:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="email"/>
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-tel`">Telefon:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="tel"/>
        </b-col>
      </b-row>

      <b-button class="button" variant="primary">Wyślij email</b-button>
    </b-form>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueTagsInput from "@johmun/vue-tags-input";

@Component({
  components: {
    VueTagsInput
  }
})
export default class Pricing extends Vue {
  typeProduct = [
    { text: "Strona", value: 1 },
    { text: "Aplikacja", value: 2 },
    { text: "Strona i aplikacja", value: 3 }
  ];
  typePlatform = [{ text: "Android", value: 1 }, { text: "IOS", value: 2 }];
  selectedProduct = "";
  selectedPlatform = [];
  tag = "";
  tags = [];//add list functionality
}
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
  margin-top: 10px;
}
h3 {
  padding: 5px;
}
//style vue tags
</style>
