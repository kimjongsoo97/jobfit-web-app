<template>
  <!-- 메인 컨텐츠 -->
  <main class="container mx-auto px-4 pt-14">
    <h1 class="font-h1 text-gry-900 mb-2">챌린지</h1>
    <div class="flex justify-between items-center mb-8">
      <!-- 챌린지 제목과 설명 -->
      <p class="font-h4 text-gry-700 leading-[30px]">
        채용공고와 00님의 적합도를 분석했어요.<br />
        스펙을 추가하여 회사 합격률을 올려보세요.
      </p>

      <!-- 검색 바 -->
      <!-- <SearchInput placeholder="회사 이름을 검색해보세요" v-model="searchCompanyName" inputWidth="w-full"
        class="w-full max-w-[480px]">
        <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="handleSearchCompanyName">
          <SearchIcon />
        </Icon>
      </SearchInput> -->
    </div>

    <!-- 진행중/완료 탭 -->
    <div class="border-b border-gry-400 mb-9">
      <div class="flex gap-3">
        <button class="w-[90px] flex items-center justify-center font-h3 text-gry-800 relative pb-2"
          :class="{ 'text-point-600': activeTab === 'progress' }" @click="handleActiveTab('progress')">
          <div>
            진행중 {{ progressCount }}
          </div>
          <div class="absolute -bottom-0.5 left-0 w-[90px] h-[3px] transition-all duration-300"
            :class="activeTab === 'progress' ? 'bg-point-600' : 'bg-transparent'"></div>
        </button>
        <button class="w-[90px] flex items-center justify-center font-h3 text-gry-800 relative pb-2"
          :class="{ 'text-point-600': activeTab === 'completed' }" @click="handleActiveTab('completed')">
          <div>
            완료 {{ completedCount }}
          </div>
          <div class="absolute -bottom-0.5 left-0 w-[90px] h-[3px] transition-all duration-300"
            :class="activeTab === 'completed' ? 'bg-point-600' : 'bg-transparent'"></div>
        </button>
      </div>
    </div>

    <!-- 챌린지 카드 그리드 -->
    <div class="grid grid-cols-3 gap-5">
      <ChallengeCard v-for="challengeCardInfo in challengeCardInfos" :key="challengeCardInfo.challengeId"
        :data="challengeCardInfo" />
    </div>

    <!-- 플로팅 버튼 -->
    <button
      class="fixed right-40 bottom-10 w-[60px] h-[60px] bg-white border border-[#efeff3] rounded-full flex items-center justify-center">
      <span class="material-icons">add</span>
    </button>
  </main>
</template>

<script setup lang="ts">
// import SearchInput from '@/common/components/input/SearchInput.vue'
// import SearchIcon from '@/assets/icons/SearchIcon_24.svg'
import ChallengeCard from '@/common/components/card/ChallengeCard.vue'
import { ref, onMounted } from 'vue'
import challengeAPI from '@/api/challengeAPI'
import type { ChallengeListInfo } from '@/models/challengeModel'

const activeTab = ref<'progress' | 'completed'>('progress')
const progressCount = ref(0)
const completedCount = ref(0)
// const searchCompanyName = ref('')
const challengeCardProgressInfos = ref<ChallengeListInfo[]>([])
const challengeCardCompletedInfos = ref<ChallengeListInfo[]>([])
const challengeCardInfos = ref<ChallengeListInfo[]>([])

// 검색 기능 추가 시 사용
// const handleSearchCompanyName = () => {
//   console.log(searchCompanyName.value)
// }


const handleActiveTab = (tab: 'progress' | 'completed') => {
  activeTab.value = tab
  if (tab === 'progress') {
    challengeCardInfos.value = challengeCardProgressInfos.value
  } else {
    challengeCardInfos.value = challengeCardCompletedInfos.value
  }
}

onMounted(() => {
  // 챌린지 목록 조회
  challengeAPI.getChallenges()
    .then((res) => {
      res.data.forEach((challenge: ChallengeListInfo) => {
        if (challenge.progress < 100) {
          challengeCardProgressInfos.value.push({
            challengeId: challenge.challengeId,
            userId: challenge.userId,
            recruitId: challenge.recruitId,
            title: challenge.title,
            companyName: challenge.companyName,
            progress: challenge.progress,
            registrationDate: challenge.registrationDate,
          })
        } else {
          challengeCardCompletedInfos.value.push({
            challengeId: challenge.challengeId,
            userId: challenge.userId,
            recruitId: challenge.recruitId,
            title: challenge.title,
            companyName: challenge.companyName,
            progress: challenge.progress,
            registrationDate: challenge.registrationDate,
          })
        }
      })
      challengeCardInfos.value = challengeCardProgressInfos.value
      progressCount.value = challengeCardProgressInfos.value.length
      completedCount.value = challengeCardCompletedInfos.value.length
    })
    .catch((err) => {
      console.log(`챌린지 목록 조회 실패 | 메시지 : ${err.message} | 상태코드 : ${err.status} | 에러내역 : ${err.response?.data}`)
    })
})

// const challengeCardProgressInfos = ref<ChallengeCardInfo[]>([])
//   {
//     id: '1',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '2',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '3',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 90,
//     deadline: 'D-day'
//   },
//   {
//     id: '4',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '5',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 60,
//     deadline: 'D-day'
//   },
//   {
//     id: '6',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '7',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '8',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '9',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
// ])

// const challengeCardCompletedInfos = ref<ChallengeCardInfo[]>([])
//   {
//     id: '1',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '2',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
//   {
//     id: '3',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 90,
//     deadline: 'D-day'
//   },
//   {
//     id: '4',
//     title: 'Recruiting Manager',
//     companyName: '(주)노타',
//     progress: 45,
//     deadline: 'D-day'
//   },
// ])

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
</style>