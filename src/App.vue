<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <header class="w-full flex justify-center items-center">
    <div class="mb-4">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test/typo">Typo</RouterLink>
        <RouterLink to="/test/button">Button</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
