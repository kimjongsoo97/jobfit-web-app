<template>
  <div class="bg-gry-100 hover:bg-gry-200 border border-gry-300 rounded-2xl p-4" @click="emit('click')">
    <div class="mb-4">
      <h3 class="font-h3 text-gry-900 mb-1">{{ props.data.title }}</h3>
      <p class="font-p1 text-gry-700">{{ props.data.companyName }}</p>
    </div>
    <div class="space-y-2">
      <!-- 프로그레스 바 -->
      <div class="relative h-4 bg-gry-300 rounded-lg overflow-hidden">
        <div class="absolute left-0 top-0 h-full rounded-lg bg-gradient-to-r from-point-600 to-point-400"
          :style="{ width: `${props.data.progress}%` }"></div>
      </div>
      <!-- 충족도 -->
      <div class="flex justify-between items-center">
        <span class="font-h6 text-gry-800">충족도</span>
        <span class="font-h4 text-point-600">{{ props.data.progress }}%</span>
      </div>
      <!-- 마감일 -->
      <div class="flex space-x-2 font-h5 text-gry-800">
        <span>마감일</span>
        <span>{{ props.data.registrationDate }}</span>
      </div>
      <!-- 버튼 슬롯 -->
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { ChallengeListInfo } from '@/models/challengeModel'

const props = defineProps<{
  data: ChallengeListInfo
}>()

const emit = defineEmits(['click'])
</script>

<style></style>