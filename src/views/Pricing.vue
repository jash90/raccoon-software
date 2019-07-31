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
            <b-form-radio-group v-model="selectedProduct">
                   <div style="display:flex;flex-direction:row;justify-content:center;">
               <b-form-radio style="width:150px;" :value="1">Strona</b-form-radio>
               <b-form-radio style="width:150px;" :value="2">Aplikacja</b-form-radio>
               <b-form-radio style="width:150px;" :value="3">Strona i aplikacja</b-form-radio>
                   </div>
            </b-form-radio-group>
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
              <div style="display:flex;flex-direction:row;justify-content:center;">
                <div
                  style="display:flex;flex-direction:row;width:150px;justify-content:center;align-items:center;"
                >
                  <b-form-checkbox value="1">Android</b-form-checkbox>
                  <android/>
                </div>
                <div
                  style="display:flex;flex-direction:row;width:150px;justify-content:center;align-items:center;"
                >
                  <b-form-checkbox value="2">IOS</b-form-checkbox>
                  <IOS/>
                </div>
              </div>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-text`">Funkcjonalności:</label>
        </b-col>
        <b-col sm="9">
          <multiselect
            v-model="selectedFunctionality"
            :options="functionality"
            sera
            label="name"
            track-by="id"
            placeholder="Wybierz funkcję"
            select-label="Wciśnij enter, żeby zaznaczyć"
            selectedLabel="wybrany"
            deselectLabel="Wciśnij enter, żeby odznaczyć"
            noResult="Nie znaleziono funkcji."
            :showNoResult="false"
            :multiple="true"
            :searchable="true"
          >
            <span slot="noResult">Nie znaleziono funkcji, dodaj w funkcjach poniżej.</span>
          </multiselect>
        </b-col>
      </b-row>

      <b-row class="row">
        <b-col sm="3">
          <label :for="`type-text`">Dodatkowe funkcjonalności:</label>
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
import Multiselect from "vue-multiselect";
import Android from "vue-material-design-icons/Android.vue";
import IOS from "vue-material-design-icons/Apple.vue";

@Component({
  components: {
    VueTagsInput,
    Multiselect,
    Android,
    IOS
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
  tags = []; //add list functionality
  selectedFunctionality = [];
  functionality = [
    { name: "Konta użytkowników", id: 1 },
    { name: "Intergracja z Facebookiem", id: 2 }
  ];
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect__tag {
  background-color: #17a2b8;
}
.multiselect__option--highlight {
  background: #17a2b8;
}
.multiselect__option--highlight:after {
  background-color: #17a2b8;
}
</style>
<style lang="scss" scoped>
h1 {
  padding: 30px;
}
.content {
  padding: 10px 30px;
}
.row {
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.button {
  margin-top: 10px;
}
h3 {
  padding: 5px;
}
.vue-tags-input {
  max-width: 100%;
}
//style vue tags
.multiselect__tag {
  background-color: #17a2b8 !important;
}
.platform {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.custom-control-inline {
  margin-right: 10px !important;
}
label {
  display: flex;
  flex: 1;
  text-align: left;
}
</style>
<style lang="css">
.vue-tags-input .ti-tag {
  background: #17a2b8;
}
</style>
