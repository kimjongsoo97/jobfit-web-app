<template>
  <div class="w-[260px] py-5 pl-5 bg-gry-200 rounded-[10px] max-h-[224px]">
    <div class="flex flex-col gap-6 w-full">
      <div v-for="item in navList" :key="item.path" class="flex flex-row items-center justify-between gap-2 h-7">
        <router-link :to="item.path"
          class="block font-h3 text-gry-700 hover:text-point-500 font-semibold transition-colors duration-200"
          :class="{ 'text-point-600': $route.path.includes(item.path) }">
          {{ item.name }}
        </router-link>
        <div v-if="$route.path.includes(item.path)" class="w-[3px] h-7 bg-point-600"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const navList = [
  {
    name: '회원정보',
    path: '/mypage/info',
  },
  {
    name: '나의 스펙',
    path: '/mypage/spec',
  },
  {
    name: '챌린지',
    path: '/mypage/challenge',
  },
  {
    name: '즐겨찾기',
    path: '/mypage/favorite',
  },
]
</script>

<style scoped></style>
