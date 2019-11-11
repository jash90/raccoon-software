<template>
	<div class="carousel">
		<div class="content">
			<div class="img-contener">
				<b-img :src="require('../assets/logo-text-right.svg')"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Carousel extends Vue {
    }
</script>

<style style="scss" scoped>
	.carousel {
		display: flex;
		flex-direction: column;
		padding: 20px;
		justify-items: center;
		align-items: center;
		background-color: #00adee;
		height: 300px;
	}

	.content {
		width: 100%;
		height: 100%;
		max-width: 900px;
	}

	img {
		z-index: 1;
		width: 100%;
		opacity: 0.1;
	}

	.img-contener {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		align-items: center;
		justify-items: center;
		padding: 40px 20px;
	}

</style>
