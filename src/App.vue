<template>
  <header>
    <Signature width="500" />
    <nav id="nav-media">
      <ul>
        <li><a target="_blank" href="https://github.com/else-angels"><img src="@/assets/networks/github_black.svg">Github</a></li>
        <li><a target="_blank" href="" class="off"><img src="@/assets/networks/facebook_black.svg">Facebook</a></li>
        <li><a target="_blank" href="" class="off"><img src="@/assets/networks/instagram_black.svg">Instagram</a></li>
        <li><a target="_blank" href="" class="off"><img src="@/assets/networks/youtube_black.svg">Youtube</a></li>
      </ul>
    </nav>
  </header>
  <NavPrincipal/>
  <RouterView />
  <footer>
    <p>© Else-Angels &mdash; Le club de prog. de TIM CStJ</p>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Signature from '@/components/Signature.vue';
import NavPrincipal from '@/components/Nav.vue';
</script>

