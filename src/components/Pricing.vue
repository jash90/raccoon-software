<template>
	<div class="pricing">
      <div class="container">
		<div class="title">
			<h1>Wycena</h1>
		</div>
		<b-row style="display:flex;flex:1;justify-content:center;">
			<div class="img-container">
				<b-img :src="require('../assets/pricing.png')"/>
			</div>
			<b-col style="width:100%">
				<b-form class="form">
					<b-form-group>
						<b-form-radio-group
							id="checkbox-group-1"
							v-model="selectedProduct"
							:options="typeProduct"
							name="flavour-1"
							class="radio"
						></b-form-radio-group>
					</b-form-group>
					<b-input placeholder="Funkcjonalności"/>
					<b-input placeholder="Opis"/>
					<h5 style="margin-top: 8px;">Kontakt</h5>
					<b-input placeholder="Imię i nazwisko"/>
					<b-input placeholder="Email"/>
					<div class="button-container">
						<b-button>Wyślij</b-button>
					</div>
				</b-form>
			</b-col>
		</b-row>
	</div>
	</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Pricing extends Vue {
        typeProduct = [
            {text: "Strona", value: 1},
            {text: "Aplikacja", value: 2},
            {text: "Strona i aplikacja", value: 3},
        ];
        typePlatform = [{text: "Android", value: 1}, {text: "IOS", value: 2}];
        selectedProduct = "";
        selectedPlatform = [];
        tag = "";
        tags = []; //add list functionality
        selectedFunctionality = [];
        functionality = [
            {name: "Konta użytkowników", id: 1},
            {name: "Intergracja z Facebookiem", id: 2},
        ];
    }
</script>

<style style="scss" scoped>
	.title {
		font-weight: bold;
		padding: 20px 0px;
	}

	.pricing {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		padding: 20px;
	}

    .container{
      display: flex;
      flex-direction: column;
      width: 1100px;
    }

	.button-container {
		display: flex;
		width: 100%;
		padding: 20px 0px;
		flex-direction: row;
		justify-content: flex-end;
	}

	.img-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.radio {
		display: flex;
		flex-direction: row;
		text-align: left;
	}

	@media (max-width: 675px) {
		.radio {
          display: flex;
          flex-direction: column;
          text-align: left;
		}
	}
    img{
      height: 300px;
      margin: 10px;
    }
  input{
    width: 100%;
  }
</style>
