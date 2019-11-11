<template>
	<div id="contact">
		<div class="contener">
			<h5 class="title">SKONTAKTUJ SIĘ Z NAMI</h5>

			<div style="content">
				<div
					class="input-container"
				>
					<div style="display: flex;flex:1;padding: 5px;">
						<b-input placeholder="Imię i Nazwisko"/>
					</div>
					<div style="display: flex;flex:1;padding: 5px;">
						<b-input placeholder="Telefon"/>

					</div>
					<div style="display: flex;flex:1;padding: 5px;">
						<b-input placeholder="Email"/>

					</div>
				</div>

				<div
					style="display: flex;flex:1;padding: 5px;"
				>
					<b-form-textarea placeholder="Wiadomość" max-rows="2"
					/>
				</div>
				<div class="button-container">
					<b-button>Wyślij</b-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Contact extends Vue {}
</script>
<style lang="scss" scoped>
	#contact {
		display: flex;
		flex-direction: column;
		padding: 20px;
		justify-items: center;
		align-items: center;
	}

	.title {
		padding: 20px;
	}

	.button-container {
		display: flex;
		width: 100%;
		padding: 5px;
		justify-content: flex-end;
	}

	.content {
		max-width: 900px;
		width: 100%;
	}

	.contener {
		max-width: 900px;
		width: 100%;
	}

	.input-container {
		display: flex;
		flex-direction: row;
	}

	@media (max-width: 700px) {
		.input-container {
			display: flex;
			flex-direction: column;
		}
	}

	input {
		display: flex;
		flex: 1;
	}
</style>
