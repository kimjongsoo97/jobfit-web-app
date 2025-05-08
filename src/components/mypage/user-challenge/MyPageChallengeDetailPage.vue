<!-- 카드 컴포넌트 화 및 수정 필요 -->

<template>
  <div class="flex-1">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-h2 text-gry-900 flex items-center">
        <Icon fill="point" class="inline-block mr-2 cursor-pointer" @click="goBack">
          <EvaArrowIcon />
        </Icon>
        {{ challengeDetail.companyName }}
      </h2>
      <!-- 삭제 버튼 -->
      <Button size="sm" width="w-[82px]" variant="gray" @click="handleDelete">
        <template #text>삭제</template>
      </Button>
    </div>

    <div class="border-t border-gray-300 py-4">
      <div class="font-h3 text-gry-900">{{ challengeDetail.title }}</div>
    </div>

    <div class="flex items-center gap-4 justify-center mb-7">
      <div class="h-full flex items-center justify-center gap-2 min-w-20">
        <span class="font-h6 text-gry-800">충족도</span>
        <span class="font-h4 text-point-600">{{ challengeDetail.progress }}%</span>
      </div>

      <div class="relative w-full h-4 bg-gray-100 rounded-lg">
        <div class="absolute left-0 top-0 h-full bg-gradient-to-r from-point-600 to-point-400 rounded-lg"
          :style="{ width: `${challengeDetail.progress}%` }">
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
          <span class="font-h4 text-gry-900">{{ challengeDetail.strengths }}</span>
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
          <span class="font-h4 text-gry-900">{{ challengeDetail.weaknesses }}</span>
        </div>
      </div>
    </div>

    <!-- 공고 내용 -->
    <div class="mt-8">
      <h3 class="font-h3 text-gry-900 mb-4">공고내용</h3>
      <div class="text-gry-800 font-p1 space-y-2">
        <p v-for="(item, index) in challengeDetail.content" :key="index">* {{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import EvaArrowIcon from '@/assets/icons/EvaArrow_24.svg'
import Icon from '@/common/components/CustomIcon.vue'
import { useRouter } from 'vue-router'
import Button from '@/common/components/button/MainButton.vue'
import GoodIcon from '@/assets/icons/GoodIcon_24.svg'
import BadIcon from '@/assets/icons/BadIcon_24.svg'
import challengeAPI from '@/api/challengeAPI'
import type { ChallengeDetailInfo } from '@/models/challengeModel'

const router = useRouter()

const goBack = () => {
  router.back()
}

const handleDelete = () => {
  console.log('삭제')
}

const challengeId = ref<string>('')

onMounted(() => {
  challengeId.value = router.currentRoute.value.params.id as string
  challengeAPI.getChallenge(challengeId.value)
    .then((res) => {
      challengeDetail.value = res.data
    })
    .catch((err) => {
      console.log(`챌린지 상세 조회 실패 | 메시지 : ${err.message} | 상태코드 : ${err.status} | 에러내역 : ${err.response?.data}`)
    })
})

const challengeDetail = ref<ChallengeDetailInfo>({
  challengeId: 0,
  userId: 0,
  recruitId: 0,
  title: '',
  companyName: '',
  registrationDate: '',
  progress: 0,
  careerType: '',
  strengths: '',
  weaknesses: '',
  content: '',
})

</script>

<style></style>
