
<template>

  <div class="screen">  
    <NavBar></NavBar>
    <RouterView />
  </div>

  
</template>
<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<style>
.screen{
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  padding: 0;
  margin: 0%;
  background-color: var(--color1);
  
}



</style>