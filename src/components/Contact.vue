<template>
	<div class="contact">
		<h5 class="title">SKONTAKTUJ SIĘ Z NAMI</h5>
		<div class="container">
			<div class="input-container"
			>
				<div style="display: flex;flex:1;flex-direction: column;margin: 10px;justify-content: flex-start;">
					<b-input placeholder="Imię i Nazwisko"/>
					<b-input placeholder="Email"/>
				</div>
				<div style="display: flex;flex:1;flex-direction: column;margin: 10px;">
					<b-input placeholder="Telefon"/>
					<b-input placeholder="Adres"/>
				</div>
				<div
					style="display: flex;flex-direction:column;flex:1;height:100%;justify-content: flex-start;margin:10px;"
				>
					<b-form-textarea placeholder="Wiadomość" max-rows="2"
					/>
				</div>
			</div>
			<div class="button-container">
				<b-button>Wyślij</b-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Contact extends Vue {}
</script>
<style lang="scss" scoped>
	.contact {
		padding: 40px;
	}

	.title {
		padding: 20px;
	}

	.button-container {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		padding-right: 10px;
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	.input-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	textarea.form-control{
	height: 76px;
	}

	@media (max-width: 675px) {
		.input-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
</style>
