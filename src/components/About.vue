<template>
	<div id="about">
		<div style="max-width: 900px;">
			<div class="title">
				<h1>O mnie</h1>
			</div>
			<div class="content">
				<p>
					Nazywam się Bartłomiej Zimny i od marca 2019r.
					Prowadzę działalność gospodarczą.
					Firma jest dla mnie kolejnym etapem rozwoju w branży programownia.
					Programuję od około 5 lat, póltora roku temu zdecydowałem się moją pasję zamienić w wykonywany zawód
					i zając się tym komercyjnie.
					Bazujemy na sprawdzonych technologiach webowych do tworzenia oprogramowania, dzięki temu nasze
					strony są nowoczesne, wygodne w obsłudze oraz łatwe w rozbudowie.
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class About extends Vue {}
</script>

<style style="scss" scoped>
	.title {
		font-weight: bold;
	}

	.content {
		text-align: left;
		padding: 20px 0px;
	}

	img {
		max-width: 160px;
		max-height: 160px;
		width: 20%;
		height: auto;
		padding: 5px;
	}

	#about {
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 20px;
		justify-items: center;
		align-items: center;
	}
</style>
