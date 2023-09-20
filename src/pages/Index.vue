<template>
	<main class="index">
		<h1 style="text-align: center;">Else-Angels : <i>Des projets pour les intrépides</i></h1>
		<div class="cards">
			<article class="card">
				<iframe src="https://else-angels.github.io/glissade" frameborder="0" width="512" height="512"></iframe>
			</article>
			<article class="card">
				<figure>
					<img src="@/assets/img/projet_fictif1.webp" alt="">
				</figure>
			</article>
			<article class="card">
				<figure>
					<img src="@/assets/img/projet_fictif2.webp" alt="">
				</figure>
			</article>
			<article class="card">
				<figure>
					<img src="@/assets/img/projet_fictif3.webp" alt="">
				</figure>
			</article>
		</div>
	</main>
</template>
<script setup>
</script>

<style lang="scss">
main.index {
	h1 {
		text-align: center;
		margin: 1em;
		font-size: 3em;
		i {
			font-weight: normal;
		}
	}
}
.cards {
	margin: 0 auto;
	display: grid;
	gap: 3em;
	// align-content: center;
	// justify-items: center;

	article.card {
		position: relative;
		display: grid;
		grid-template-columns: auto;
		justify-content: center;
		// border: solid red;
		&:nth-child(even)::before {
			content: '';
			display: block;
			// padding-top: 100%;
			background-color: #ff01;
			transform: skew(0, -7deg);
			position: absolute;
			width: 100vw;
			height: 100%;
			left: 0;
			// border: solid;
			z-index: 0;
		}
		figure {
			position: relative;
			z-index: 1;
			margin: 0 auto;

			img {
				display: block;
				object-fit: cover;
				border: solid white 2px
			}
		}
	}
}
</style>
