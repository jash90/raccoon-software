<template>
	<div class="footer">
		<div class="footer-container">

			<div class="img-container">
				<b-img :src="require('../assets/logo-transparent.svg')"/>
			</div>

			<div class="text-container">
				<div class="center">
					<p class="title">Dane do kontaktu:</p>
					<p>Firma Raccoon Software</p>
					<p>Bartłomiej Zimny</p>
					<p>ul. Zawale 21B</p>
					<p>38-100 Strzyżów</p>
					<p>NIP: 819654690</p>
					<p>729 143 396</p>
				</div>
			</div>

			<div class="text-container">
				<div class="center">
					<p class="title">NAWIGACJA</p>
					<p>STRONA GŁÓWNA</p>
					<p>O NAS</p>
					<p>TECHNOLOGIE</p>
					<p>WYCENA</p>
					<p>KONTAKT</p>
				</div>
			</div>
		</div>
		<div class="copyright">
			<p>Copyright 2019 © Raccoon Software, Bartłomiej Zimny</p>
			<p>Page design by Bartosz Hnat</p>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
	.footer {
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;


		img {
			width: 200px;
			height: 200px;
			opacity: 0.5;
			filter: alpha(opacity=50);
		}

		p {
			text-align: left;
		}

		.copyright {
			display: flex;
			flex-direction: column;
			border-top: 2px solid #e4e4e4;
			padding: 16px 20px 16px 20px;
			align-items: center;
			justify-content: center;
		}

		.text-container {
			display: flex;
			flex-direction: column;
			flex: 1;
			padding: 20px;
			align-items: center;
			justify-content: flex-start;
		}

		.img-container {
			display: flex;
			flex-direction: column;
			flex: 1;
			align-items: center;
			justify-content: center;
		}

		.footer-container {
			display: flex;
			flex-direction: row;
			padding: 20px 40px;
		}

		.title {
			font-weight: bold;
		}

		.center {
			display: flex;
			flex-direction: column;
			width: 170px;
		}

      @media (max-width: 800px) {
        .footer-container {
          display: flex;
          flex-direction: column;
          padding: 20px 40px;
        }
        .center {
          display: flex;
          flex-direction: column;
          width: 90%;
        }
      }
	}
</style>
