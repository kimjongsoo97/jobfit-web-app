<template>
  <div class="min-h-screen min-w-[1280px] max-w-[1440px] mx-auto bg-white">
    <NavBar />
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import NavBar from '@/components/nav/NavBar.vue'

</script>

<style></style>
