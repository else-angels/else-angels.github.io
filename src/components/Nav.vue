<template>
	<nav id="nav-principal">
		<ul>
			<li>
				<router-link :to="{name: 'index'}">Accueil</router-link>
			</li>
			<li>
				<router-link :to="{name: 'projets'}">Projets</router-link>
			</li>
			<li>
				<router-link :to="{name: 'equipe'}">Équipe</router-link>
			</li>
			<li>
				<router-link :to="{name: 'tech'}">Technologies</router-link>
			</li>
			<li>
				<router-link :to="{name: 'archives'}">Archives</router-link>
			</li>
			<li>
				<router-link :to="{name: 'joindre'}">Nous joindre</router-link>
			</li>
		</ul>
	</nav>
</template>

<script setup>
// import '@/assets/scss/_nav.scss';
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'
</script>