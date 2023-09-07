<template>
  <header>
    <Signature width="500" />
    <nav class="nav-media">
      <ul>
        <li><a href=""><img src="@/assets/networks/github_black.svg" style="height:1.5em"> Github</a></li>
        <li><a href=""><img src="@/assets/networks/facebook_black.svg" style="height:1.5em">Facebook</a></li>
        <li><a href=""><img src="@/assets/networks/instagram_black.svg" style="height:1.5em">Instagram</a></li>
        <li><a href=""><img src="@/assets/networks/youtube_black.svg" style="height:1.5em">Youtube</a></li>
      </ul>
    </nav>
  </header>
  <NavPrincipal/>
  <RouterView />
  <footer>
    <p>© 2023 Else-Angels &mdash; Le club de prog. de TIM CStJ</p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Signature from '@/components/Signature.vue';
import NavPrincipal from '@/components/Nav.vue';
</script>

