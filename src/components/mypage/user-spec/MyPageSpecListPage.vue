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
        <TechBadge v-for="spec in specs" :key="spec.key">
          {{ `${spec.key} : ${spec.value}` }}
        </TechBadge>
      </div>
    </div>

    <!-- 경력사항 섹션 -->
    <div>
      <h3 class="font-h3 text-gry-900 mb-4">경력사항</h3>
      <div class="flex flex-wrap gap-3">
        <TechBadge v-if="career">{{ career }}</TechBadge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import Button from '@/common/components/button/MainButton.vue'
import TechBadge from '@/common/components/badge/TechBadge.vue'
import { useRouter } from 'vue-router'
import skillAPI from '@/api/skillAPI'

const router = useRouter()

const skills = ref<string[]>([])
const specs = ref<{ key: string; value: string }[]>([])
const career = ref('')

const handleUpdate = () => {
  router.push('/mypage/spec/update')
}

onMounted(async () => {
  try {
    const { data } = await skillAPI.get()
    const info = data.data

    skills.value = info.certificates || []
    specs.value = (info.specs || []).map((item: Record<string, string>) => {
      const key = Object.keys(item)[0]
      return {
        key,
        value: item[key],
      }
    })
    career.value = info.career || ''
  } catch (error) {
    console.error('스펙 데이터를 불러오는 중 오류 발생:', error)
  }
})
</script>

<style></style>
