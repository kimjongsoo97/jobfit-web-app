<template>

  <!-- 메인 컨텐츠 -->
  <main class="mx-auto px-4 py-14">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="font-h1 text-gry-900">유망 직업군</h1>
        <p class="font-h4 text-gry-700 mt-2 mb-4">향후 10년간의 직업 전망을 한눈에 확인해 보세요!</p>

        <!-- 검색바 -->
        <SearchInput placeholder="궁금하신 직업을 검색해 보세요" v-model="searchKey" @keyup.enter="handleSearchJobName">
          <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="handleSearchJobName" @key.enter="handleSearchJobName">
            <SearchIcon />
          </Icon>
        </SearchInput>
      </div>

      <!-- PDF 안내 박스 -->
         <div class="cursor-pointer bg-[#F4F4F6] rounded-xl p-3 w-[278px]" @click="handleExternalLink">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-right text-base font-semibold text-[#1B1C1F]">관련된 자세한 정보를 보고싶다면?</p>
            <p class="text-sm text-[#6F727C]">한국고용원 향후10년직업 pdf보러가기</p>
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
        <div v-for="job in upTrendJobs" :key="job.type" class="bg-gry-100 border border-gry-300 rounded-2xl p-4">
          <h3 class="font-h3 text-gry-900">{{ job.name }}</h3>
          <div class="flex items-center mt-2">
            <span class="font-h4 text-gry-800 pr-4">{{ job.industry }}</span>
            <span class="font-h4 text-red-600 pr-1">{{ job.potential }}</span>
            <Icon>
              <UpArrowIcon />
            </Icon>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="job in noChangeTrendJobs" :key="job.type" class="bg-gry-100 border border-gry-300 rounded-2xl p-4">
          <h3 class="font-h3 text-gry-900">{{ job.name }}</h3>
          <div class="flex items-center mt-2">
            <span class="font-h4 text-gry-800 pr-4">{{ job.industry }}</span>
            <span class="font-h4 text-gry-700 pr-1">{{ job.potential }}</span>
            <Icon>
              <RemoveIcon />
            </Icon>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="job in downTrendJobs" :key="job.name" class="bg-gry-100 border border-gry-300 rounded-2xl p-4">
          <h3 class="font-h3 text-gry-900">{{ job.name }}</h3>
          <div class="flex items-center mt-2">
            <span class="font-h4 text-gry-800 pr-4">{{ job.industry }}</span>
            <span class="font-h4 text-blue-700 pr-1">{{ job.potential }}</span>
            <Icon>
              <DownArrowIcon/>
            </Icon>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-4 mt-10">
  <!-- 이전 버튼 -->
  <button
    @click="changePage(currentPage - 1)"
    :disabled="currentPage === 1"
    class="px-4 py-2 rounded-lg transition
           text-sm font-medium
           bg-white border border-gry-300
           hover:bg-gry-100
           disabled:bg-gry-100 disabled:text-gry-400"
  >
    이전
  </button>

  <!-- 현재 페이지 표시 -->
  <span class="text-gry-800 font-semibold text-sm">
    <span class="text-primary-500 text-base">{{ currentPage }}</span> 페이지
  </span>

  <!-- 다음 버튼 -->
  <button
    @click="changePage(currentPage + 1)"
    :disabled="!hasMore"
    class="px-4 py-2 rounded-lg transition
           text-sm font-medium
           bg-white border border-gry-300
           hover:bg-gry-100
           disabled:bg-gry-100 disabled:text-gry-400"
  >
    다음
  </button>
</div>
  </main>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SearchInput from '@/common/components/input/SearchInput.vue'
import trendAPI from '@/api/trendAPI'
import Icon from '@/common/components/CustomIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon_24.svg'
import ArrowRigthIcon from '@/assets/icons/EvaRightArrow_24.svg'
import UpArrowIcon from '@/assets/icons/UpArrowIcon_24.svg'
import DownArrowIcon from '@/assets/icons/DownArrowIcon_24.svg'
import RemoveIcon from '@/assets/icons/RemoveIcon_24.svg'

interface Job {
  name: string
  industry: string
  potential: string
  type: string
}
const searchKey=ref('')
const currentPage = ref(1)
const pageSize = 4
const hasMore = ref(true)

const upTrendJobs = ref<Job[]>([])
const noChangeTrendJobs = ref<Job[]>([])
const downTrendJobs = ref<Job[]>([])

const fetchJobs = async () => {
  try {
    const { data } = await trendAPI.all({
      page: currentPage.value - 1,
      size: pageSize,
      searchKey: searchKey.value // 추가됨!
    })

    console.log('응답 구조:', data)

    upTrendJobs.value = data.data.growth || []
    noChangeTrendJobs.value = data.data.stable || []
    downTrendJobs.value = data.data.decline || []

    const growthLen = data.data.growth?.length ?? 0
    const stableLen = data.data.stable?.length ?? 0
    const declineLen = data.data.decline?.length ?? 0

    hasMore.value = growthLen + stableLen + declineLen > 0
  } catch (error) {
    console.error('직업 데이터를 불러오는 중 오류 발생:', error)
  }
}

onMounted(fetchJobs)

const changePage = (page: number) => {
  if (page < 1) return
  currentPage.value = page
  fetchJobs()
}

const handleExternalLink = () => {
  window.open( 'https://www.keis.or.kr/keis/ko/proj/114/pblc/detail.do?pubIdx=9672&categoryIdx=125&pageIndex=2&pageItm=10&searchOrderSort=0&searchGbn=0') 
}

const handleSearchJobName = () => {
  currentPage.value = 1
  fetchJobs()
}

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
