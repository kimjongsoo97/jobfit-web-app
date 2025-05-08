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
      <div class="cursor-pointer bg-[#F4F4F6] rounded-xl p-3 w-[278px]" @click="handleExternalLink">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-right text-base font-semibold text-[#1B1C1F]">관련된 자세한 정보를 보고싶다면?</p>
            <p class="text-sm text-[#6F727C]">한국고용원 향후10년직업 pdf보러가기</p>
          </div>
          <i class="material-icons text-[#6F727C]">arrow_forward_ios</i>
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
            <i class="material-icons ml-2" v-if="job.trend !== '현상유지'"
              :class="job.trend.includes('상승') ? 'text-[#CC1F1F]' : 'text-[#0038A0]'">
              {{ job.trend.includes('상승') ? 'arrow_upward' : 'arrow_downward' }}
            </i>
            <i class="material-icons ml-2" v-else>remove</i>
          </div>
        </div>
      </div>
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
  title: string
  category: string
  trend: string
}

const jobs = ref<Job[]>([])

onMounted(async () => {
  try {
    const { data } = await trendAPI.all({ page: 1, size: 10 })
    console.log('응답 구조:', data)

    const allJobs = [
      ...(data.data.growth || []),
      ...(data.data.stable || []),
      ...(data.data.decline || []),
    ]

    jobs.value = allJobs.map((trend: any) => ({
      title: trend.name,
      category: `#${trend.industry}`,
      trend: trend.potential,
      trendColor: getTrendColor(trend.potential),
    }))
  } catch (error) {
    console.error('직업 데이터를 불러오는 중 오류 발생:', error)
  }
})



function getTrendColor(potential: string): string {
  if (potential.includes('상승')) return 'text-[#CC1F1F]'
  if (potential.includes('하락')) return 'text-[#0038A0]'
  return 'text-[#6F727C]'
}
const handleExternalLink = () => {
  window.location.href = 'https://www.keis.or.kr/keis/ko/proj/114/pblc/detail.do?pubIdx=9672&categoryIdx=125&pageIndex=2&pageItm=10&searchOrderSort=0&searchGbn=0';
}

</script>


<style scoped></style>
