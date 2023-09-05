<template>
  <header>
    <Signature width="500" />
    <nav class="nav-media">
      <ul>
        <li><a href="">Github</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Instagram</a></li>
        <li><a href="">Youtube</a></li>
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

