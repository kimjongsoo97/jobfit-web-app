<template>
  <BaseLayout>
    <div class="min-h-screen bg-white">
      <main class="mx-auto px-4 pt-32">
        <h1 class="font-h1 text-gry-900 mb-8">마이페이지</h1>
        <div class="flex gap-10">
          <MyPageSideBar />
          <!-- 메인 컨텐츠 -->
          <router-view />
        </div>
      </main>
    </div>
  </BaseLayout>
</template>

<script setup lang='ts'>
import BaseLayout from '@/layouts/BaseLayout.vue'
import MyPageSideBar from '@/components/nav/MyPageSideBar.vue'
</script>

<style></style>