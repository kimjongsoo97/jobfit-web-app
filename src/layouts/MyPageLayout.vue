<template>
  <BaseLayout>
    <div class="min-h-screen bg-white">
      <!-- 메인 컨텐츠 -->
      <main class="container mx-auto px-4 pt-32">
        <h1 class="text-4xl font-semibold text-[#1B1C1F] mb-8">마이페이지</h1>

        <div class="flex gap-10">
          <!-- 사이드 메뉴 -->
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