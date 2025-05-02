<!-- 카드 컴포넌트 화 및 수정 필요 -->

<template>
  <div class="flex-1">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-semibold text-[#1b1c1f]">챌린지 {{ challenges.length }}</h2>
    </div>

    <!-- 챌린지 카드 그리드 -->
    <div class="grid grid-cols-2 gap-4">
      <ChallengeCard v-for="challenge in challenges" :key="challenge.id" :data="challenge"
        @click="handleChallengeClick(challenge.id)">
        <ToggleButton variant="point" @click="handleChallengeClick(challenge.id)">
          <template #icon>
            <Icon fill="point">
              <FillPlusIcon />
            </Icon>
          </template>
          <template #text>
            챌린지 삭제
          </template>
        </ToggleButton>
      </ChallengeCard>
    </div>

    <div v-if="challenges.length === 0" class="bg-gry-100 border border-gry-300 rounded-xl py-[100px]">
      <div class="flex flex-col items-center justify-center gap-3">
        <Icon width="36" height="36">
          <ListAltIcon />
        </Icon>
        <p class="text-center font-h4 text-gry-700 whitespace-pre-line" style="line-height: 30px;">
          챌린지가 없어요<br />
          챌린지를 새로 등록해 보세요
        </p>
        <Button size="sm" @click="handleGoToChallengeList">
          <template #text>
            챌린지 보러가기
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChallengeCard from '@/common/components/card/ChallengeCard.vue'
import ToggleButton from '@/common/components/button/ToggleButton.vue'
import Icon from '@/common/components/CustomIcon.vue'
import FillPlusIcon from '@/assets/icons/FillPlusIcon_24.svg'
import { useRouter } from 'vue-router'
import type { ChallengeCardInfo } from '@/common/types/challenge'
import ListAltIcon from '@/assets/icons/ListAltIcon_36.svg'
import Button from '@/common/components/button/MainButton.vue'

const router = useRouter()

const handleChallengeClick = (challengeId: string) => {
  router.push(`/mypage/challenge/${challengeId}`)
}

const handleGoToChallengeList = () => {
  router.push('/challenge')
}

const challenges = ref<ChallengeCardInfo[]>([
  {
    id: '1',
    title: 'Recruiting Manager',
    companyName: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  // 더미 데이터를 반복해서 7개의 항목 생성
  {
    id: '2',
    title: 'Recruiting Manager',
    companyName: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: '3',
    title: 'Recruiting Manager',
    companyName: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: '4',
    title: 'Recruiting Manager',
    companyName: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: '5',
    title: 'Recruiting Manager',
    companyName: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: '6',
    title: 'Recruiting Manager',
    companyName: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: '7',
    title: 'Recruiting Manager',
    companyName: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  }
])
</script>

<style>
/* Pretendard 폰트 적용 */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
/* Material Icons 적용 */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  font-family: 'Pretendard', sans-serif;
}
</style>
