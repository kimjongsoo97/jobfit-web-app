<template>

  <!-- 메인 컨텐츠 -->
  <main class="mx-auto px-4 py-14">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="font-h1 text-gry-900">유망 직업군</h1>
        <p class="font-h4 text-gry-700 mt-2 mb-4">향후 10년간의 직업 전망을 한눈에 확인해 보세요!</p>

        <!-- 검색바 -->
        <SearchInput placeholder="궁금하신 직업을 검색해 보세요" @update:modelValue="searchJobName">
          <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="handleSearchJobName">
            <SearchIcon />
          </Icon>
        </SearchInput>
      </div>

      <!-- PDF 안내 박스 -->
      <div class="bg-gry-200 rounded-xl py-3 px-4 w-[278px] cursor-pointer" @click="handleViewPdf">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-right font-h4 text-gry-900">관련된 자세한 정보를 보고싶다면?</p>
            <p class="font-caption text-gry-700">한국고용원 향후10년직업 pdf보러가기</p>
          </div>
          <Icon class="cursor-pointer">
            <ArrowRigthIcon />
          </Icon>
        </div>
      </div>
    </div>

    <!-- 직업 전망 카테고리 -->
    <div class="grid grid-cols-3 gap-5 mt-8">
      <div class="bg-red-100 rounded-lg h-[52px] flex items-center justify-center space-x-2">
        <i class="material-icons text-red-600">thumb_up</i>
        <span class="font-h4 text-red-600">성장 전망</span>
      </div>
      <div class="bg-gry-300 rounded-lg h-[52px] flex items-center justify-center space-x-2">
        <i class="material-icons text-gry-800">arrow_forward</i>
        <span class="font-h4 text-gry-800">큰 변화 없음</span>
      </div>
      <div class="bg-blue-100 rounded-lg h-[52px] flex items-center justify-center space-x-2">
        <i class="material-icons text-blue-700">thumb_down</i>
        <span class="font-h4 text-blue-700">감소 전망</span>
      </div>
    </div>

    <!-- 직업 카드 그리드 -->
    <div class="grid grid-cols-3 gap-5 mt-4">
      <!-- 직업 카드 반복 -->
      <div class="flex flex-col gap-4">
        <div v-for="job in upTrendJobs" :key="job.title" class="bg-gry-100 border border-gry-300 rounded-2xl p-4">
          <h3 class="font-h3 text-gry-900">{{ job.title }}</h3>
          <div class="flex items-center mt-2">
            <span class="font-h4 text-gry-800 pr-4">{{ job.category }}</span>
            <span class="font-h4 text-red-600 pr-1">{{ job.trend }}</span>
            <Icon>
              <UpArrowIcon />
            </Icon>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="job in noChangeTrendJobs" :key="job.title" class="bg-gry-100 border border-gry-300 rounded-2xl p-4">
          <h3 class="font-h3 text-gry-900">{{ job.title }}</h3>
          <div class="flex items-center mt-2">
            <span class="font-h4 text-gry-800 pr-4">{{ job.category }}</span>
            <span class="font-h4 text-gry-700 pr-1">{{ job.trend }}</span>
            <Icon>
              <RemoveIcon />
            </Icon>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="job in downTrendJobs" :key="job.title" class="bg-gry-100 border border-gry-300 rounded-2xl p-4">
          <h3 class="font-h3 text-gry-900">{{ job.title }}</h3>
          <div class="flex items-center mt-2">
            <span class="font-h4 text-gry-800 pr-4">{{ job.category }}</span>
            <span class="font-h4 text-blue-700 pr-1">{{ job.trend }}</span>
            <Icon>
              <DownArrowIcon />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/common/components/input/SearchInput.vue'
import Icon from '@/common/components/CustomIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon_24.svg'
import ArrowRigthIcon from '@/assets/icons/EvaRightArrow_24.svg'
import UpArrowIcon from '@/assets/icons/UpArrowIcon_24.svg'
import DownArrowIcon from '@/assets/icons/DownArrowIcon_24.svg'
import RemoveIcon from '@/assets/icons/RemoveIcon_24.svg'

const handleSearchJobName = () => {
  console.log('searchJobName')
}

const handleViewPdf = () => {
  console.log('viewPdf')
}

const searchJobName = ref('')

const upTrendJobs = ref([
  {
    title: '컴퓨터웨어기술자',
    category: '#IT/공학',
    trend: '2%이상 상승',
  },
  {
    title: '반도체기술자',
    category: '#제조',
    trend: '1~2%이상 상승',
  },
  {
    title: '수학자',
    category: '#수학/연구원',
    trend: '2%이상 상승',
  },
  {
    title: '컴퓨터웨어기술자',
    category: '#IT/공학',
    trend: '2%이상 상승',
  },
  {
    title: '반도체기술자',
    category: '#제조',
    trend: '1~2%이상 상승',
  },
  {
    title: '수학자',
    category: '#수학/연구원',
    trend: '2%이상 상승',
  },
])

const downTrendJobs = ref([
  {
    title: '부동산 중개인',
    category: '#서비스업',
    trend: '1~2% 하락',
  },
  {
    title: '방문판매업',
    category: '#서비스업',
    trend: '2% 하락',
  },
  {
    title: '철근공',
    category: '#건설',
    trend: '1~2% 하락',
  },
  {
    title: '부동산 중개인',
    category: '#서비스업',
    trend: '1~2% 하락',
  },
  {
    title: '방문판매업',
    category: '#서비스업',
    trend: '2% 하락',
  },
  {
    title: '철근공',
    category: '#건설',
    trend: '1~2% 하락',
  },
])

const noChangeTrendJobs = ref([
  {
    title: '의사',
    category: '#의료',
    trend: '현상유지',
  },
  {
    title: '회계사',
    category: '#회계/법인',
    trend: '현상유지',
  },
  {
    title: '도선사',
    category: '#선박',
    trend: '현상유지',
  },
  {
    title: '의사',
    category: '#의료',
    trend: '현상유지',
  },
  {
    title: '회계사',
    category: '#회계/법인',
    trend: '현상유지',
  },
  {
    title: '도선사',
    category: '#선박',
    trend: '현상유지',
  },
])

</script>

<style scoped>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
</style>
