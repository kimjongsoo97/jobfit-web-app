<!-- 카드 컴포넌트 화 및 수정 필요 -->

<template>
  <div class="flex-1">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-h2 text-gry-900 flex items-center">
        <Icon fill="point" class="inline-block mr-2 cursor-pointer" @click="goBack">
          <EvaArrowIcon />
        </Icon>
        {{ data.companyName }}
      </h2>
      <!-- 삭제 버튼 -->
      <Button size="sm" width="w-[82px]" variant="gray" @click="handleDelete">
        <template #text>삭제</template>
      </Button>
    </div>

    <div class="border-t border-gray-300 py-4">
      <div class="font-h3 text-gry-900">{{ data.title }}</div>
    </div>

    <div class="flex items-center gap-4 justify-center mb-7">
      <div class="h-full flex items-center justify-center gap-2 min-w-20">
        <span class="font-h6 text-gry-800">충족도</span>
        <span class="font-h4 text-point-600">{{ data.progress }}%</span>
      </div>

      <div class="relative w-full h-4 bg-gray-100 rounded-lg">
        <div class="absolute left-0 top-0 h-full bg-gradient-to-r from-point-600 to-point-400 rounded-lg"
          :style="{ width: `${data.progress}%` }">
        </div>
      </div>
    </div>

    <!-- 충족/미흡 섹션 -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col justify-center items-center rounded-lg overflow-hidden">
        <div class="flex justify-center items-center bg-red-100 w-full h-[52px]">
          <Icon class="inline-block mr-2">
            <GoodIcon />
          </Icon>
          <span class="font-h4 text-red-600">충족점</span>
        </div>
        <div class="flex justify-center items-center bg-red-100/30 w-full h-[60px]">
          <span class="font-h4 text-gry-900">{{ data.result.good.join(', ') }}</span>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center rounded-lg overflow-hidden">
        <div class="flex justify-center items-center bg-blue-100 w-full h-[52px]">
          <Icon class="inline-block mr-2">
            <BadIcon />
          </Icon>
          <span class="font-h4 text-blue-700">미흡점</span>
        </div>
        <div class="flex justify-center items-center bg-blue-100/30 w-full h-[60px]">
          <span class="font-h4 text-gry-900">{{ data.result.bad.join(', ') }}</span>
        </div>
      </div>
    </div>

    <!-- 공고 내용 -->
    <div class="mt-8">
      <h3 class="font-h3 text-gry-900 mb-4">공고내용</h3>
      <div class="text-gry-800 font-p1 space-y-2">
        <p v-for="(item, index) in data.content" :key="index">* {{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 필요한 경우 여기에 스크립트 로직을 추가하세요
import EvaArrowIcon from '@/assets/icons/EvaArrow_24.svg'
import Icon from '@/common/components/CustomIcon.vue'
import { useRouter } from 'vue-router'
import Button from '@/common/components/button/MainButton.vue'
import GoodIcon from '@/assets/icons/GoodIcon_24.svg'
import BadIcon from '@/assets/icons/BadIcon_24.svg'

const router = useRouter()

const goBack = () => {
  router.back()
}

const handleDelete = () => {
  console.log('삭제')
}

interface ChallengeDetail {
  id: string
  title: string
  companyName: string
  progress: number
  result: {
    good: string[]
    bad: string[]
  }
  content: string[]
}

const data: ChallengeDetail = {
  id: '1',
  title: '물리치료사,작업치료사',
  companyName: '예담요양원',
  progress: 45,
  result: {
    good: ['물리치료사, 학력'],
    bad: ['작업치료사, 운전면허, 경력'],
  },
  content: ['물리,작업치료사 구인', '어르신들 건강체크 및 치료사 업무', '자차 이용자 환영']
}
</script>

<style></style>
