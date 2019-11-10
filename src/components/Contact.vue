<template>
	<div class="contact">
		<div class="contener">
		<h5 class="title">SKONTAKTUJ SIĘ Z NAMI</h5>

			<div class="display: flex;flex-direction:column;flex:1"
			>
				<div
				style="display: flex;flex-direction:row;flex:1">
					<b-input placeholder="Imię i Nazwisko"/>
					<b-input placeholder="Email"/>
					<b-input placeholder="Telefon"/>

				<div
					style="display: flex;flex-direction:row;flex:1"
				>
					<b-form-textarea placeholder="Wiadomość" max-rows="2"
					/>
				</div>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		width: 100%;
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

	.contener {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 900px;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	textarea.form-control{
	height: 76px;
	}
</style>
