<template>
  <!-- 메인 콘텐츠 영역 -->
  <div class="flex-1">
    <div class="flex items-center mb-4 relative">
      <h2 class="font-h2 text-gry-900">나의 스펙</h2>
      <Button size="sm" class="absolute right-0" width="w-[82px]" variant="gray" @click="handleUpdate">
        <template #text>수정</template>
      </Button>
    </div>

    <hr class="border-[#dedee4] mb-6" />

    <!-- 나의 기술 섹션 -->
    <div class="mb-8">
      <h3 class="font-h3 text-gry-900 mb-4">나의 기술</h3>
      <div class="flex flex-wrap gap-3">
        <TechBadge v-for="skill in skills" :key="skill">{{ skill }}</TechBadge>
      </div>
    </div>

    <!-- 기타 스펙 섹션 -->
    <div class="mb-8">
      <h3 class="font-h3 text-gry-900 mb-4">기타 스펙</h3>
      <div class="flex flex-wrap gap-3">
        <TechBadge v-for="spec in specs" :key="spec">{{ spec }}</TechBadge>
      </div>
    </div>

    <!-- 경력사항 섹션 -->
    <div>
      <h3 class="font-h3 text-gry-900 mb-4">경력사항</h3>
      <div class="flex flex-wrap gap-3">
        <TechBadge v-for="career in myCareer" :key="career">{{ career }}</TechBadge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/common/components/button/MainButton.vue'
import TechBadge from '@/common/components/badge/TechBadge.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const skills: string[] = ['JavaScript', 'Git', 'MySQL', 'React', 'Oracle', 'Java']
const specs: string[] = ['Toeic : 930', 'Jlpt : 2급', 'opic : IH']
const myCareer: string[] = ['3년']
const handleUpdate = () => {
  router.push('/mypage/spec/update')
}
</script>

<style></style>
